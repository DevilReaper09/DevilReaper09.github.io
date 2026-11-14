# Anant Rastogi

Personal website: research, engineering, photography, running, and HYROX.

## Updating the site

- Edit `content.js` for portfolio text, projects, experience, and media paths.
- Each section has its own HTML page.
- Add photos and videos under `media/`; use relative paths in `content.js`.
- `styles.css` contains the three visual themes; `app.js` renders shared content.
- Push reviewed changes to `main` to update GitHub Pages automatically.

## Local preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

Before publishing, check links and content, run `node --check app.js` and `node --check content.js`, and avoid committing credentials or private source documents.
