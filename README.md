# Code With Ayush — Portfolio Website

A responsive, bilingual (English/Hindi) personal portfolio built with plain HTML, CSS and JavaScript.

## 1. Folder structure

```text
Code-With-Ayush/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    └── Ayush-Resume.pdf
```

## 2. Run the website

1. Extract the ZIP file.
2. Open the `Code-With-Ayush` folder.
3. Double-click `index.html` to open it in a browser.
4. For easier editing, open the folder in VS Code.

No build tool or framework is required.

## 3. Personalise before publishing

### Profile photo
- Add your photo inside `assets`.
- Name it exactly `profile.jpg`.
- A square photo works best; the design crops it into a circle.

### Resume
- Add your PDF inside `assets`.
- Name it exactly `Ayush-Resume.pdf`.
- The Download Resume button points to this file.

### Email
Open `script.js` and find:

```js
email: "YOUR_EMAIL@example.com"
```

Replace it with your real email address.

### Social profiles
In `index.html`, search for `href="#"`.
Replace each `#` with your real GitHub, Instagram or WhatsApp URL.
Do not leave placeholder links on the published website.

### Project repositories
Each project has a GitHub link with `href="#"`.
Replace it with the matching repository URL. If a project is not public yet, remove its GitHub link or label it as private/in progress.

### Text and language
Open `script.js` and edit the `translations` object.
- `en` contains English text.
- `hi` contains Hindi text.
Keep the same translation keys in both languages.

### Typing roles
In `script.js`, edit the `roleList` object to change the rotating job titles.

### Colours and fonts
Open `style.css` and edit the CSS variables under `:root`.
The main gold colour is `--gold`; the page background is `--bg`.

## 4. Contact form note

The contact form uses a `mailto:` link to open the visitor's email application. It does not send messages directly to a server.
For a production website, connect a form backend or service (for example, Formspree) and update the form handling code.

## 5. Before publishing checklist

- [ ] Replace profile photo.
- [ ] Add your real resume PDF.
- [ ] Set your real email in `script.js`.
- [ ] Replace all social links.
- [ ] Replace project GitHub links with real repositories.
- [ ] Check all Hindi and English text.
- [ ] Test on desktop and mobile.
- [ ] Test the contact form and resume download.
- [ ] Do not claim certifications or experience you do not have.

## 6. Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload all files and the `assets` folder.
3. Open repository Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish your site.

## Add project links and PDF files

Open `script.js` and find the `PROJECTS` array near the bottom. Add a public project URL and a public PDF URL for each project:

```js
const PROJECTS = [
  { url: "https://your-project-link.example", pdf: "https://your-public-pdf-link.example" },
  { url: "https://your-second-project.example", pdf: "https://your-second-pdf-link.example" },
  { url: "https://your-portfolio-project.example", pdf: "https://your-portfolio-pdf-link.example" }
];
```

Upload PDFs to a public location such as Google Drive (set access to anyone with the link) or your website's `assets` folder, then paste the public URL. The project cards show Project, PDF and Share actions when links are provided. The Share action uses the device share sheet when available, otherwise it copies the details.

Replace the YouTube URL in `index.html` with your own channel URL before publishing.
