# Developer Notes

This file is for future developers or student maintainers.

It explains how the site is organized and how to continue working on it.

The website is meant to be easy to maintain.

The main idea is simple:

- keep layout in HTML and CSS
- keep content in JSON files
- use JavaScript to load the content
- avoid hard-coding repeated content into page layout

---

## 1. Current Project Structure

### Main HTML pages
- `index.html`
- `publications.html`
- `publication.html`
- `people.html`
- `person.html`
- `projects.html`
- `project.html`
- `resources.html`
- `highlights.html`

### Main data files
- `assets/data/people.json`
- `assets/data/projects.json`
- `assets/data/publications.json`

### JavaScript files
- `assets/js/publication-page.js`
- `assets/js/project-page.js`

### Main CSS
- `assets/css/style.css`

### Images
- `assets/img/`

---

## 2. Current Data-Driven Pages

### People
- `people.html` reads from `people.json`
- `person.html` uses the person `id`

### Projects
- `projects.html` reads from `projects.json`
- `project.html` uses the project `id`

### Publications
- `publications.html` reads from `publications.json`
- `publication.html` uses the publication `slug`

This pattern should be kept whenever possible.

---

## 3. Why the Site Uses This Structure

This site is not a full CMS.

That is intentional.

A full Owlstown-like system would need:

- login system
- editing interface
- upload handling
- storage logic
- validation
- more maintenance

That is much more work.

For this project, the better solution is:

- clean page templates
- content stored in data files
- clear documentation
- easy copying of old examples

This is simpler and easier to maintain.

---

## 4. Best Rule for Future Work

If content will grow over time, do **not** hard-code repeated items into HTML.

Instead, use this pattern:

1. create one page template
2. create one JSON file
3. store repeated content in JSON
4. load it with JavaScript

This makes future updates easier.

---

## 5. Recommended Pattern for New Pages

If future pages are expanded, follow the same model.

### Example: Highlights
Recommended files:

- `highlights.html`
- `assets/data/highlights.json`

### Example: Resources
Recommended files:

- `resources.html`
- `assets/data/resources.json`

### Example: News
Recommended files:

- `news.html`
- `assets/data/news.json`

### Example: Opportunities
Recommended files:

- `opportunities.html`
- `assets/data/opportunities.json`

---

## 6. Example JSON Structures

### Example `highlights.json`

```json
[
  {
    "id": "paper-accepted-2026",
    "title": "New Paper Accepted",
    "date": "2026-04-20",
    "summary": "A new paper was accepted.",
    "description": "Full description here.",
    "image": "assets/img/highlight-paper-accepted-2026.jpg",
    "link": "publication.html?slug=new-publication-2026"
  }
]
```

### Example `resources.json`

```json
[
  {
    "id": "nmr-solvent-peaks",
    "title": "NMR Solvent Peaks",
    "url": "https://pubs.acs.org/doi/10.1021/om100106e",
    "description": "Useful reference link."
  }
]
```

---

## 7. Updating Existing Content

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
Upload to:

- `assets/img/`

Make sure file names match exactly.

---

## 8. Best Method for Normal Updates

For most normal updates:

1. find one old example
2. copy it
3. paste it
4. change the information
5. save

This is the safest way for non-technical and semi-technical users.

---

## 9. Example Entry Types

### Example person entry

```json
{
  "id": "megan-glista",
  "name": "Megan Glista",
  "role": "Undergraduate Researcher",
  "photo": "assets/img/Glista.jpg",
  "email": "",
  "links": {},
  "short_bio": "Joined the group in Spring 2024.",
  "bio": "Megan Glista joined the group in Spring 2024."
}
```

### Example project entry

```json
{
  "id": "computational-mechanisms",
  "title": "Using Computational Methods to Probe Chemical Mechanisms",
  "summary": "How reactions occur can offer significant insight into the capabilities and limitations of a given chemical method.",
  "description": "How reactions occur can offer significant insight into the capabilities and limitations of a given chemical method.\n\nWe make use of a combination of experimental observations and density functional theory computations to elucidate chemical mechanisms.",
  "image": "assets/img/project2.jpg",
  "external_url": ""
}
```

### Example publication entry

```json
{
  "slug": "the-scientific-method-as-a-scaffold-2022",
  "title": "The scientific method as a scaffold to enhance communication skills in chemistry",
  "type": "Journal article",
  "authors": "T. D. Montgomery, J. R. Buchbinder, E. S. Gawalt, R. J. Iuliucci, A. S. Koch, et al.",
  "venue": "Journal of Chemical Education 99 (6), 2338-2350",
  "year": 2022,
  "image": "assets/img/the-scientific-method-as-a-scaffold-2022.gif",
  "abstract": "Scientific success in the field of chemistry depends upon the mastery of a wide range of soft skills, most notably scientific writing and speaking.",
  "links": {
    "semantic_scholar": "https://www.semanticscholar.org/paper/The-Scientific-Method-as-a-Scaffold-to-Enhance-in-Montgomery-Buchbinder/b09f0316da0f9ff6292c37c727f4c3d52d37a921",
    "pubmed": "https://pubmed.ncbi.nlm.nih.gov/35722631/",
    "pmc": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9202561/",
    "pubmedcentral": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9202561/"
  }
}
```

---

## 10. Important Notes for Future Developers

### Keep file names simple
Good:
- `new-paper-2026.png`

Bad:
- `Final Version New Paper!!.png`

### Keep image paths correct
If an image path does not match the real file name, the image will not appear.

### Keep JSON valid
Always check:
- commas
- brackets
- quotes

### Keep content separate from layout
If a page becomes large, move repeated content into JSON instead of repeating HTML blocks.

---

## 11. If the Site Expands Later

If future developers continue this project, the best next steps are:

1. keep using JSON for repeated content
2. move Resources into JSON if it grows
3. move Highlights into JSON if it grows
4. use one page template plus one data file
5. only build a full CMS if there is a real long-term need

---

## 12. Final Advice

Before changing layout, ask:

**Is this really a layout change, or is it just a content change?**

If it is only a content change, update the data file first.

That will keep the website cleaner and easier to maintain.
