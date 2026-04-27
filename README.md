# Montgomery Group Research Website

This project is a redesigned research group website for the Montgomery Group at Duquesne University. The website presents the group’s people, publications, projects, resources, and highlights in a clean and organized academic format.

## Project Overview

The goal of this project is to create a more modern and editable website for the research group. The site is designed to make it easier to update group members, research projects, publications, and other lab resources without needing major code changes.

The website includes:

- Home page
- Publications page
- Individual publication detail pages
- People page
- Individual person profile pages
- Projects page
- Individual project detail pages
- Resources page
- Highlights page

## Website Structure

### Main Pages

- `index.html` — home page
- `publications.html` — publications list
- `publication.html` — single publication detail page
- `people.html` — people page
- `person.html` — single person profile page
- `projects.html` — projects list
- `project.html` — single project detail page
- `resources.html` — resources page
- `highlights.html` — highlights page

### Data Files

The website uses separate data files so content can be updated more easily.

- `assets/data/people.json` — people information
- `assets/data/projects.json` — project information
- `assets/js/publications-data.js` — publication information

### JavaScript Files

- `assets/js/publication-page.js` — loads a single publication page
- `assets/js/project-page.js` — loads a single project page

### Image Files

Most images are stored in:

- `assets/img/`

This includes:

- group avatar
- banner image
- publication images
- project images
- people photos

## How the Website Works

### People

The People page reads from `assets/data/people.json`.  
Each person has fields such as:

- `id`
- `name`
- `role`
- `photo`
- `email`
- `links`
- `short_bio`
- `bio`

This allows the People page and each individual person profile page to update automatically when the JSON file is changed.

### Projects

The Projects page reads from `assets/data/projects.json`.

Each project includes:

- `id`
- `title`
- `summary`
- `description`
- `image`
- optional links such as external website or GitHub

The list page shows project thumbnails and summaries, and the detail page loads the full project description.

### Publications

The Publications page reads from `assets/js/publications-data.js`.

Each publication entry may include:

- `slug`
- `title`
- `type`
- `authors`
- `venue`
- `year`
- `image`
- `abstract`
- `links`

The publication detail page uses the `slug` in the URL to load the correct publication entry and display the title, authors, links, abstract, and image.

## Updating the Website

One of the main goals of this project is to make updates simple.

### To update People

Edit:

- `assets/data/people.json`

Add or edit a person’s information, then upload the related photo to:

- `assets/img/`

### To update Projects

Edit:

- `assets/data/projects.json`

Add or edit a project’s title, summary, description, and image path.

### To update Publications

Edit:

- `assets/js/publications-data.js`

Add or edit publication entries, including abstract, links, and image path.

### To update Images

Upload images into:

- `assets/img/`

Make sure the file names match the paths written in the data files.

## Design Notes

The site uses a unified academic style with:

- dark background
- light content panels
- rounded cards
- consistent typography
- image previews for publications and projects
- responsive layout for smaller screens

The design is intended to look cleaner and more modern than the original version while still being easy to maintain.

## Deployment

This website can be deployed through GitHub Pages.

Basic workflow:

1. Make edits to HTML, CSS, JSON, or JS files
2. Commit changes to GitHub
3. Push updates to the repository
4. GitHub Pages publishes the new version

If changes do not appear right away, refresh the browser cache.

## Future Improvements

Possible future improvements include:

- adding more publication images
- expanding the highlights page
- adding more external resource links
- improving documentation for non-technical users
- making content updates even easier through a simpler admin-friendly structure

## Author

Website redesign and implementation by Longyu Tang.

## Acknowledgment

This project was created for the Montgomery Group at Duquesne University as part of a research website redesign effort.
