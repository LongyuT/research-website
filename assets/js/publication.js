(function () {
  function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function esc(str) {
    return String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function makeBtn(label, url) {
    if (!url) return "";
    return `<a class="pub-chip" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>`;
  }

  async function main() {
    const id = getParam("id");
    if (!id) {
      document.getElementById("pub-title").textContent = "Publication not found (missing id).";
      return;
    }

    const res = await fetch("assets/data/publications.json", { cache: "no-store" });
    const list = await res.json();

    const pub = list.find(x => x.id === id);
    if (!pub) {
      document.getElementById("pub-title").textContent = "Publication not found.";
      return;
    }

    document.title = `${pub.title} - Montgomery Group`;

    document.getElementById("pub-title").textContent = pub.title || "";
    document.getElementById("pub-type").textContent = pub.type || "";
    document.getElementById("pub-authors").textContent = pub.authors || "";
    document.getElementById("pub-venue").textContent = [pub.venue, pub.year].filter(Boolean).join(", ");

    // Buttons
    const links = pub.links || {};
    const btns =
      makeBtn("Semantic Scholar", links.semantic_scholar) +
      makeBtn("DOI", links.doi) +
      makeBtn("PubMedCentral", links.pubmedcentral) +
      makeBtn("PubMed", links.pubmed) +
      makeBtn("PDF", links.pdf);

    const citeBtn = (pub.cite && (pub.cite.apa || pub.cite.bibtex))
      ? `<button class="pub-chip pub-chip-btn" id="citeToggle" type="button">Cite</button>`
      : "";

    document.getElementById("pub-buttons").innerHTML = btns + citeBtn;

    // Abstract
    document.getElementById("pub-abstract").textContent = pub.abstract || "—";

    // Cite panel
    const citeWrap = document.getElementById("pub-cite");
    if (citeBtn) {
      citeWrap.innerHTML = `
        <div class="pub-cite-panel" style="display:none" id="citePanel">
          ${pub.cite?.apa ? `<div class="pub-cite-block"><div class="pub-cite-label">APA</div><pre>${esc(pub.cite.apa)}</pre></div>` : ""}
          ${pub.cite?.bibtex ? `<div class="pub-cite-block"><div class="pub-cite-label">BibTeX</div><pre>${esc(pub.cite.bibtex)}</pre></div>` : ""}
        </div>
      `;

      document.getElementById("citeToggle").addEventListener("click", () => {
        const panel = document.getElementById("citePanel");
        panel.style.display = (panel.style.display === "none") ? "block" : "none";
      });
    }
  }

  main().catch(err => {
    console.error(err);
    document.getElementById("pub-title").textContent = "Error loading publication.";
  });
})();
