// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Filter portfolio cards by category
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const matches = selectedCategory === "all" ||
                      card.dataset.category === selectedCategory;
      card.classList.toggle("hidden", !matches);
    });
  });
});

// Contact form: demo mode unless a Google Apps Script URL is configured.
const SCRIPT_URL = ""; // Paste your deployed Apps Script web-app URL here.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(contactForm).entries());

  if (!SCRIPT_URL) {
    formStatus.textContent = "Demo mode: form validated. Add your Apps Script URL to receive enquiries.";
    contactForm.reset();
    return;
  }

  formStatus.textContent = "Sending...";
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData)
    });
    formStatus.textContent = "Thanks! Your enquiry has been submitted.";
    contactForm.reset();
  } catch (error) {
    formStatus.textContent = "Unable to send right now. Please try again.";
  }
});
