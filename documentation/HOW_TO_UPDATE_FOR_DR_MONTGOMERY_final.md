# How to Update the Website

This guide is for simple website updates.

It is written for someone who does not want to work with a lot of code.

The good news is:

**Most updates only need two things**
1. copy an old example
2. change the information

In most cases, you do **not** need to change the page layout.

---

## Easiest Option

The easiest option is still to send the new content to the person maintaining the website.

For example, send:

- the text you want added
- the image file
- where it should go on the site

Examples:

- add a new undergraduate researcher
- add a new publication
- add a new project

---

## Important Note

Please try **not** to update the Resources page or the Highlights page by yourself right now.

Reason:
- those pages still have very little content
- their structure may change later
- it is better to leave them as they are for now

Also, the older content that is already on the site usually does **not** need to be changed.

So the main pages to update are:

- People
- Publications
- Projects

---

## If You Want To Update It Yourself

Most updates work like this:

1. open the correct data file
2. copy one old example
3. paste it
4. change the information
5. upload the image if needed
6. save and commit

---

# 1. Updating the People Page

File to update:

- `assets/data/people.json`

This file stores people information.

What you can change there:

- name
- role
- short bio
- full bio
- photo path
- email
- links

If there is a new photo:

- upload the photo into `assets/img/`
- make sure the file name matches the photo path written in `people.json`

## Best method

The easiest way is:

- copy one existing person entry
- paste it
- replace the old information with the new information

## Example person entry

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

## What to change

For a new person, change:

- `id`
- `name`
- `role`
- `photo`
- `email`
- `short_bio`
- `bio`

## Example new person template

```json
{
  "id": "new-student-name",
  "name": "New Student Name",
  "role": "Undergraduate Researcher",
  "photo": "assets/img/new-student.jpg",
  "email": "",
  "links": {},
  "short_bio": "Joined the group in Fall 2026.",
  "bio": "New Student Name joined the group in Fall 2026."
}
```

---

# 2. Updating the Publications Page

File to update:

- `assets/data/publications.json`

This file stores publication information.

What you can change there:

- title
- authors
- venue
- year
- abstract
- image
- links

Useful links may include:

- DOI
- Semantic Scholar
- PubMed
- PMC / PubMedCentral

If there is a new image:

- upload the image into `assets/img/`
- make sure the file name matches the image path written in `publications.json`

## Best method

The easiest way is:

- copy one old publication entry
- paste it
- change the information

## Example publication entry

```json
{
  "slug": "the-scientific-method-as-a-scaffold-2022",
  "title": "The scientific method as a scaffold to enhance communication skills in chemistry",
  "type": "Journal article",
  "authors": "T. D. Montgomery, J. R. Buchbinder, E. S. Gawalt, R. J. Iuliucci, A. S. Koch, et al.",
  "venue": "Journal of Chemical Education 99 (6), 2338-2350",
  "year": 2022,
  "image": "assets/img/the-scientific-method-as-a-scaffold-2022.gif",
  "abstract": "Scientific success in the field of chemistry depends upon the mastery of a wide range of soft skills, most notably scientific writing and speaking. However, training for scientific communication is typically limited at the undergraduate level, where students struggle to express themselves in a clear and logical manner.",
  "links": {
    "semantic_scholar": "https://www.semanticscholar.org/paper/The-Scientific-Method-as-a-Scaffold-to-Enhance-in-Montgomery-Buchbinder/b09f0316da0f9ff6292c37c727f4c3d52d37a921",
    "pubmed": "https://pubmed.ncbi.nlm.nih.gov/35722631/",
    "pmc": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9202561/",
    "pubmedcentral": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9202561/"
  }
}
```

## What to change

For a new publication, change:

- `slug`
- `title`
- `authors`
- `venue`
- `year`
- `image`
- `abstract`
- the links inside `links`

## Very important

When adding a new publication:

**You can usually copy an old publication entry, paste it, and then change the information.**

That is the easiest way.

## Example new publication template

```json
{
  "slug": "new-publication-2026",
  "title": "New Publication Title",
  "type": "Journal article",
  "authors": "Author 1, Author 2, Author 3",
  "venue": "Journal Name, 2026",
  "year": 2026,
  "image": "assets/img/new-publication-2026.png",
  "abstract": "Write the abstract here.",
  "links": {
    "semantic_scholar": "",
    "doi": "",
    "pubmed": "",
    "pmc": "",
    "pubmedcentral": ""
  }
}
```

---

# 3. Updating the Projects Page

File to update:

- `assets/data/projects.json`

This file stores project information.

What you can change there:

- title
- summary
- description
- image
- optional links

If there is a new image:

- upload the image into `assets/img/`
- make sure the file name matches the image path written in `projects.json`

## Best method

The easiest way is:

- copy one old project entry
- paste it
- change the information

## Example project entry

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

## What to change

For a new project, change:

- `id`
- `title`
- `summary`
- `description`
- `image`
- `external_url`

## Example new project template

```json
{
  "id": "new-project-name",
  "title": "New Project Title",
  "summary": "Short summary goes here.",
  "description": "Full project description goes here.",
  "image": "assets/img/new-project.jpg",
  "external_url": ""
}
```

---

# 4. Updating the Resources Page

Please try **not** to update the Resources page by yourself right now.

Reason:
- there is still very little content there
- the structure may change later

If a new resource must be added, it is better to send:

- resource title
- link
- short note if needed

## Example resource format

```text
Resource title: NMR Solvent Peaks
Link: https://pubs.acs.org/doi/10.1021/om100106e
Short note: Useful NMR reference.
```

---

# 5. Updating the Highlights Page

Please try **not** to update the Highlights page by yourself right now.

Reason:
- there is still very little content there
- the structure may change later
- it is better to wait until the page has more stable content

If Highlights are expanded later, they should probably use a data file like the other pages.

Recommended future file:

- `assets/data/highlights.json`

## Example future highlight entry

```json
{
  "id": "paper-accepted-2026",
  "title": "New Paper Accepted",
  "date": "2026-04-20",
  "summary": "A new paper was accepted.",
  "description": "Full text here.",
  "image": "assets/img/highlight-paper-accepted-2026.jpg",
  "link": "publication.html?slug=new-publication-2026"
}
```

---

# 6. Image Rules

Please keep image file names simple.

Use:

- lowercase letters when possible
- hyphens instead of spaces
- clear names

Examples:

- `liz.jpg`
- `new-paper-2026.png`
- `project1.jpg`

If the file name in the folder and the file name in the data file do not match, the image will not appear.

---

# 7. After Making Changes

After updating files:

1. save the changes
2. commit the changes in GitHub
3. wait a minute for the site to update
4. refresh the page

If the page still looks old, do a hard refresh:

- Windows: `Ctrl + Shift + R`

---

# 8. Best Rule

Before changing HTML or CSS, first ask:

**Can this be updated by changing a data file instead?**

Most normal content updates should be done in the data files.

---

# 9. Simple Reminder

For most updates, you do not need to build something new.

Usually the easiest method is:

- find one old example
- copy it
- paste it
- change the information
- save
