// assets/js/publication-page.js
(async function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const titleEl = document.getElementById("pub-title");
  const typeEl = document.getElementById("pub-type");
  const authorsEl = document.getElementById("pub-authors");
  const venueEl = document.getElementById("pub-venue");
  const buttonsEl = document.getElementById("pub-buttons");
  const abstractEl = document.getElementById("pub-abstract");
  const imageWrapEl = document.getElementById("pub-image-wrap");
  const imageEl = document.getElementById("pub-image");

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  if (!slug) {
    titleEl.textContent = "Publication not found";
    abstractEl.innerHTML = "<p>Missing slug in URL.</p>";
    return;
  }

  try{
    const res = await fetch("assets/data/publications.json", { cache: "no-store" });
    if(!res.ok) throw new Error("publications.json read failed: " + res.status);

    const publications = await res.json();
    const pub = Array.isArray(publications)
      ? publications.find(p => p.slug === slug)
      : null;

    if (!pub) {
      titleEl.textContent = "Publication not found";
      abstractEl.innerHTML = `<p>No publication matches slug: <code>${escapeHtml(slug)}</code></p>`;
      return;
    }

    document.title = (pub.title || "Publication") + " | Montgomery Group";

    titleEl.textContent = pub.title || "";
    typeEl.textContent = pub.type || "";
    authorsEl.textContent = pub.authors || "";
    venueEl.textContent = pub.venue || "";

    const pubmedcentral = pub.links?.pubmedcentral || pub.links?.pmc;

    const linkMap = [
      ["Semantic Scholar", pub.links?.semantic_scholar],
      ["DOI", pub.links?.doi],
      ["PubMedCentral", pubmedcentral],
      ["PubMed", pub.links?.pubmed],
      ["Cite", pub.links?.cite]
    ];

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

    if (pub.image) {
      imageEl.src = pub.image;
      imageEl.alt = pub.title || "Publication figure";
      imageWrapEl.style.display = "block";
    } else {
      imageWrapEl.style.display = "none";
    }

    abstractEl.innerHTML = pub.abstract
      ? `<p>${escapeHtml(pub.abstract).replace(/\n/g, "<br/>")}</p>`
      : "<p class='muted'>No abstract available.</p>";

  }catch(e){
    titleEl.textContent = "Publication not found";
    abstractEl.innerHTML = "<p>Failed to load publication: " + escapeHtml(e.message) + "</p>";
  }
})();
