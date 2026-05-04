// assets/js/project-page.js
// This script loads one project detail page using the id in the URL.
(function () {
  // Read the project id from the URL query string.
  const params = new URLSearchParams(location.search);
  const id = (params.get("id") || "").trim();

  // Store references to the HTML elements that will be updated by this script.
  const errEl = document.getElementById("projError");
  const wrapEl = document.getElementById("projWrap");
  const titleEl = document.getElementById("projTitle");
  const imgEl = document.getElementById("projImg");
  const imageWrapEl = document.getElementById("projImageWrap");
  const linksEl = document.getElementById("projLinks");
  const bodyEl = document.getElementById("projBody");

  // Display an error message when the project cannot be loaded.
  function showError(msg){
    errEl.style.display = "block";
    errEl.textContent = msg;
  }

  // Escape special characters before inserting text as HTML.
  function escapeHtml(str){
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Stop early if the page URL does not include a project id.
  if(!id){
    showError("Project not found (missing id). Use project.html?id=xxx");
    return;
  }

  // Load project data from the JSON file without using cached data.
  fetch("assets/data/projects.json", { cache: "no-store" })
    .then(res => {
      if(!res.ok) throw new Error("projects.json read failed: " + res.status);
      return res.json();
    })
    .then(projects => {
      // Find the project whose id matches the URL id.
      const p = Array.isArray(projects)
        ? projects.find(x => (x.id || "").trim() === id)
        : null;

      if(!p){
        showError("Project not found: " + id);
        return;
      }

      const title = p.title || "Untitled";
      const img = (p.image || "").trim();

      // Update the browser title and main page title.
      document.title = title + " | Montgomery Group";
      titleEl.textContent = title;

      // Show the project image only when the project has an image path.
      if(img){
        imgEl.src = img;
        imgEl.alt = title;
        imageWrapEl.style.display = "block";
      } else {
        imageWrapEl.style.display = "none";
      }

      // Build the optional project buttons, such as website, paper, or GitHub links.
      linksEl.innerHTML = "";
      const btns = [];

      if(p.external_url) btns.push(["Website", p.external_url]);
      if(p.paper_url) btns.push(["Related Paper", p.paper_url]);
      if(p.github_url) btns.push(["GitHub", p.github_url]);

      btns.forEach(([label, url]) => {
        const a = document.createElement("a");
        a.className = "btn btn-sm";
        a.textContent = label;
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        linksEl.appendChild(a);
      });

      // Use the full description if available; otherwise use the shorter summary.
      const full = (p.description || p.summary || "").trim();
      if(!full){
        bodyEl.innerHTML = "<p class='muted'>No description available.</p>";
      }else{
        bodyEl.innerHTML =
          "<p>" +
          escapeHtml(full)
            .replace(/\n\s*\n/g, "</p><p>")
            .replace(/\n/g, "<br>") +
          "</p>";
      }

      wrapEl.style.display = "block";
    })
    .catch(e => showError("Failed to load Project page: " + e.message));
})();
