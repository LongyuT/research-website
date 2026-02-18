(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const titleEl = document.getElementById("pub-title");
  const typeEl = document.getElementById("pub-type");
  const authorsEl = document.getElementById("pub-authors");
  const venueEl = document.getElementById("pub-venue");
  const buttonsEl = document.getElementById("pub-buttons");
  const abstractEl = document.getElementById("pub-abstract");

  if (!slug) {
    titleEl.textContent = "Publication not found";
    abstractEl.innerHTML = "<p>Missing slug in URL.</p>";
    return;
  }

  const pub = (window.PUBLICATIONS || []).find(p => p.slug === slug);

  if (!pub) {
    titleEl.textContent = "Publication not found";
    abstractEl.innerHTML = `<p>No publication matches slug: <code>${slug}</code></p>`;
    return;
  }

  document.title = pub.title + " | Montgomery Group";

  titleEl.textContent = pub.title;
  typeEl.textContent = pub.type || "";
  authorsEl.textContent = pub.authors || "";
  venueEl.textContent = pub.venue || "";

  // buttons
  buttonsEl.innerHTML = "";
  const linkMap = [
    ["Semantic Scholar", pub.links?.semantic_scholar],
    ["DOI", pub.links?.doi],
    ["PubMedCentral", pub.links?.pubmedcentral],
    ["PubMed", pub.links?.pubmed],
    ["Cite", pub.links?.cite],
  ];

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

  abstractEl.innerHTML = pub.abstract
    ? `<p>${escapeHtml(pub.abstract).replace(/\n/g, "<br/>")}</p>`
    : "<p class='muted'>No abstract available.</p>";

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
