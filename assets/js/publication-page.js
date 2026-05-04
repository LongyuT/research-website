// assets/js/publication-page.js
// This script loads one publication detail page using the slug in the URL.
(async function () {
  // Read the publication slug from the URL query string.
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  // Store references to the HTML elements that will be updated by this script.
  const titleEl = document.getElementById("pub-title");
  const typeEl = document.getElementById("pub-type");
  const authorsEl = document.getElementById("pub-authors");
  const venueEl = document.getElementById("pub-venue");
  const buttonsEl = document.getElementById("pub-buttons");
  const abstractEl = document.getElementById("pub-abstract");
  const imageWrapEl = document.getElementById("pub-image-wrap");
  const imageEl = document.getElementById("pub-image");

  // Escape special characters before inserting text as HTML.
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Stop early if the page URL does not include a publication slug.
  if (!slug) {
    titleEl.textContent = "Publication not found";
    abstractEl.innerHTML = "<p>Missing slug in URL.</p>";
    return;
  }

  try{
    // Load publication data from the JSON file without using cached data.
    const res = await fetch("assets/data/publications.json", { cache: "no-store" });
    if(!res.ok) throw new Error("publications.json read failed: " + res.status);

    const publications = await res.json();
    // Find the publication whose slug matches the URL slug.
    const pub = Array.isArray(publications)
      ? publications.find(p => p.slug === slug)
      : null;

    if (!pub) {
      titleEl.textContent = "Publication not found";
      abstractEl.innerHTML = `<p>No publication matches slug: <code>${escapeHtml(slug)}</code></p>`;
      return;
    }

    // Update the browser title and the visible publication information.
    document.title = (pub.title || "Publication") + " | Montgomery Group";

    titleEl.textContent = pub.title || "";
    typeEl.textContent = pub.type || "";
    authorsEl.textContent = pub.authors || "";
    venueEl.textContent = pub.venue || "";

    // Support either pubmedcentral or pmc as the JSON field name.
    const pubmedcentral = pub.links?.pubmedcentral || pub.links?.pmc;

    const linkMap = [
      ["Semantic Scholar", pub.links?.semantic_scholar],
      ["DOI", pub.links?.doi],
      ["PubMedCentral", pubmedcentral],
      ["PubMed", pub.links?.pubmed],
      ["Cite", pub.links?.cite]
    ];

    // Build external link buttons for available publication resources.
    buttonsEl.innerHTML = "";
    linkMap.forEach(([label, url]) => {
      if (!url) return;
      const a = document.createElement("a");
      a.className = "btn btn-sm";
      a.textContent = label;
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      buttonsEl.appendChild(a);
    });

    // Show the publication figure only when an image path exists.
    if (pub.image) {
      imageEl.src = pub.image;
      imageEl.alt = pub.title || "Publication figure";
      imageWrapEl.style.display = "block";
    } else {
      imageWrapEl.style.display = "none";
    }

    // Display the abstract, or show a fallback message when it is missing.
    abstractEl.innerHTML = pub.abstract
      ? `<p>${escapeHtml(pub.abstract).replace(/\n/g, "<br/>")}</p>`
      : "<p class='muted'>No abstract available.</p>";

  }catch(e){
    titleEl.textContent = "Publication not found";
    abstractEl.innerHTML = "<p>Failed to load publication: " + escapeHtml(e.message) + "</p>";
  }
})();

