# adibashaira.github.io

Personal academic website of Adiba Shaira, Ph.D. candidate in Computer Science at Stony Brook University. Served by GitHub Pages from the `main` branch at https://adibashaira.github.io.

The site is plain HTML, CSS and a little JavaScript. There is no build step.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole site: intro, news, research, publications, experience, education, projects, honors, skills, contact |
| `assets/css/site.css` | Styles, including light and dark themes |
| `assets/js/site.js` | Theme toggle, phone menu, and section highlighting in the nav |
| `assets/fonts/` | Self-hosted Newsreader and IBM Plex Sans (SIL Open Font License) |
| `assets/img/` | Portrait, social preview image (`og-image.jpg`), and icons |
| `CV.pdf` | Current CV, linked from the site |
| `cv/Adiba_Shaira_CV.tex` | LaTeX source of the CV (compile with pdfLaTeX, e.g. on Overleaf) |
| `files/` | B.Sc. thesis, and a copy of the CV at the old `files/CV.pdf` address |
| `404.html` | Page shown for missing addresses |

## Common updates

- **Add a news item:** copy an `<li class="row">` inside the `#news` list in `index.html` and put the newest item first.
- **Add a publication:** copy an `<li class="row pub">` inside the `#publications` list. Status pills are `status--review` (under submission) and `status--published`.
- **Update the CV:** edit `cv/Adiba_Shaira_CV.tex`, compile it, and replace `CV.pdf` (and `files/CV.pdf`) with the new PDF.
- **Change the portrait:** replace `assets/img/adiba-shaira.jpg` and `assets/img/adiba-shaira.webp` (4:5 ratio, about 720 by 900 pixels).

Analytics: Google Analytics tag `G-D6CZ4WPCNH` is in the `<head>` of `index.html`.
