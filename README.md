# Montgomery Group Research Website

This project is a redesigned research group website for the Montgomery Group at Duquesne University.

The goal of this website is to make the group’s website cleaner, easier to read, and easier to update.

Most content updates do not require changing page layout.  
Instead, most updates are done by changing data files and uploading images.

---

## Website Pages

The website currently includes:

- Home
- Publications
- Publication detail page
- People
- Person detail page
- Projects
- Project detail page
- Resources
- Highlights

---

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

---

## How the Website Works

This website is mostly data-driven.

That means:

- page layout is written once
- content is stored in data files
- JavaScript loads the content into the page

This makes future updates much easier.

---

## How to Update Content

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

---

## Simple Update Method

For most updates, the easiest method is:

1. find one old example
2. copy it
3. paste it
4. change the information
5. save
6. commit changes

---

## Design Notes

The site uses:

- dark background
- light content panels
- rounded cards
- consistent typography
- data-driven content structure
- image previews for publications and projects
- responsive layout for smaller screens

---

## Deployment

This site can be published with GitHub Pages.

Basic update process:

1. edit the file
2. upload any new image
3. commit changes to GitHub
4. wait a short time for the site to update

If changes do not appear right away, refresh the page with:

- `Ctrl + Shift + R`

---

## Future Improvements

Possible future improvements:

- expand the Highlights page
- improve the Resources page
- move more pages to JSON-based content
- add more documentation for non-technical users
- keep all repeated content data-driven

---

## Author

Website redesign and implementation by Longyu Tang.

---

## Acknowledgment

This project was created for the Montgomery Group at Duquesne University.
