// assets/js/project-page.js
(function () {
  const params = new URLSearchParams(location.search);
  const id = (params.get("id") || "").trim();

  const errEl = document.getElementById("projError");
  const wrapEl = document.getElementById("projWrap");
  const titleEl = document.getElementById("projTitle");
  const imgEl = document.getElementById("projImg");
  const linksEl = document.getElementById("projLinks");
  const bodyEl = document.getElementById("projBody");

  function showError(msg){
    errEl.style.display = "block";
    errEl.textContent = msg;
  }

  function escapeHtml(str){
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  if(!id){
    showError("Project not found (missing id). Use project.html?id=xxx");
    return;
  }

  fetch("assets/data/projects.json", { cache: "no-store" })
    .then(res => {
      if(!res.ok) throw new Error("projects.json 读取失败：" + res.status);
      return res.json();
    })
    .then(projects => {
      const p = Array.isArray(projects) ? projects.find(x => (x.id||"").trim() === id) : null;
      if(!p){
        showError("Project not found: " + id);
        return;
      }

      const title = p.title || "Untitled";
      const img = p.image || "assets/img/projects/placeholder.png";

      document.title = title + " | Montgomery Group";
      titleEl.textContent = title;

      imgEl.src = img;
      imgEl.alt = title;

      // buttons (optional)
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

      // body (plain text -> paragraphs)
      const full = (p.description || p.summary || "").trim();
      if(!full){
        bodyEl.innerHTML = "<p class='muted'>No description available.</p>";
      }else{
        bodyEl.innerHTML = "<p>" + escapeHtml(full).replace(/\n\s*\n/g, "</p><p>").replace(/\n/g, "<br>") + "</p>";
      }

      wrapEl.style.display = "block";
    })
    .catch(e => showError("加载 Project 页面失败： " + e.message));
})();

