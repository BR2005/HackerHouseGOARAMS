# HH Goa 2026 Builder ID Generator

Format B implementation for the Hacker House Goa 2026 shortlisting task.

- JPG / PNG / HEIC / HEIF upload
- Automatic cover crop for any aspect ratio
- Drag + zoom photo positioning
- Name, role, stack and generated builder class
- 1200x1500 downloadable JPEG
- Mobile native share sheet with the generated image when supported
- Desktop X intent fallback
- No login or backend

Run:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Deploy the project to Vercel or another static host.

Note: X's public intent URL cannot programmatically attach a local image. On supported phones, Web Share hands the actual JPEG to the native share sheet so the user can choose X. Desktop opens a pre-filled X post and the user attaches the downloaded image.
