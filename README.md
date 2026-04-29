# Montgomery Group Research Website

This project is a redesigned research group website for the Montgomery Group at Duquesne University.

The goal of this website is to present the group in a clear and simple way. It also makes future updates easier by storing most content in data files instead of hard-coding everything into HTML.

## Website Pages

The website currently includes these pages:

- Home
- Publications
- Publication detail page
- People
- Person detail page
- Projects
- Project detail page
- Resources
- Highlights

## Main Files

### HTML pages
- `index.html`
- `publications.html`
- `publication.html`
- `people.html`
- `person.html`
- `projects.html`
- `project.html`
- `resources.html`
- `highlights.html`

### Data files
- `assets/data/people.json`
- `assets/data/projects.json`
- `assets/data/publications.json`

### JavaScript files
- `assets/js/publication-page.js`
- `assets/js/project-page.js`

### Main style file
- `assets/css/style.css`

### Images
Most images are stored in:

- `assets/img/`

## How Content Is Updated

This website is mostly data-driven.

That means the content is usually updated by editing data files, not by rewriting page layout.

### People
Edit:

- `assets/data/people.json`

### Projects
Edit:

- `assets/data/projects.json`

### Publications
Edit:

- `assets/data/publications.json`

### Images
Upload images into:

- `assets/img/`

Make sure the image file name matches the path written in the data file.

## Design Notes

The site uses:

- a dark academic background
- light content panels
- consistent page layout
- clickable publication and project images
- responsive layout for smaller screens

## Deployment

This site can be published with GitHub Pages.

Basic update process:

1. Edit the needed file
2. Upload new images if needed
3. Commit changes to GitHub
4. Wait for GitHub Pages to update

If the new version does not appear right away, refresh the browser with:

- `Ctrl + Shift + R`

## Future Improvements

Possible future work:

- add more publication images
- improve Highlights
- improve Resources
- add more documentation for non-technical users
- keep more pages data-driven

## Author

Website redesign and implementation by Longyu Tang.

## Acknowledgment

This project was created for the Montgomery Group at Duquesne University.
