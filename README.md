# Editkaro – Web Development Internship Demo

A responsive front-end portfolio website reconstructed as a practice/demo project based on the Editkaro.in project mentioned in the internship context.

## Important note
This is a newly created demonstration implementation, not a recovered copy of the original internship source code. Do not describe features as work you personally completed unless you understand them and can explain or demonstrate them. Replace sample content with your own approved work before presenting it.

## Files
- `index.html` – page structure and content
- `style.css` – responsive design and styling
- `script.js` – mobile navigation, portfolio filters and contact form behavior
- `google-apps-script/Code.gs` – optional Google Sheets contact-form backend

## Run locally
1. Download and extract the ZIP.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Test the navigation, category filters and contact form.

## Optional contact form setup
1. Create a Google Sheet and add a tab named `Enquiries`.
2. Open Extensions → Apps Script.
3. Paste the contents of `google-apps-script/Code.gs`.
4. Replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` with your Sheet ID.
5. Deploy → New deployment → Web app. Set execution as yourself and access according to your intended testing needs.
6. Copy the Web App URL and paste it into `SCRIPT_URL` in `script.js`.
7. Test with a non-sensitive sample enquiry.

The browser uses `no-cors` for this simple Apps Script example, so it cannot read the server response. For a production contact form, add stronger validation, spam protection and a backend with proper response handling.

## GitHub
Create a new empty repository on GitHub, then run these commands in the project folder:

```bash
git init
git add .
git commit -m "Add Editkaro portfolio website demo"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL.
