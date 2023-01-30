let disp = "flex";

function toggleNav() {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "none" ? disp : "none";
}

window.onload = function () {
  let now = new Date(Date.now());
  document.getElementById("dateNow").innerHTML = now.toLocaleDateString(
    "en-US",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" }
  );
  const button = document.getElementById("navShow");
  if (window.innerWidth < 68 * 16) {
    button.addEventListener("click", toggleNav);
    disp = window.innerWidth < 40 * 16 ? "block" : "flex";
  } else {
    button.removeEventListener("click", toggleNav);
  }

  window.addEventListener("resize", () => {
    const p = document.getElementById("footer");
    disp = window.innerWidth < 40 * 16 ? "block" : "flex";
    if (window.innerWidth < 40 * 16) {
      p.innerHTML = p.innerHTML.replace("|", "<br>");
    } else {
      p.innerHTML = p.innerHTML.replace("<br>", "|");
    }
    if (window.innerWidth < 68 * 16) {
      const nav = document.querySelector("nav");
      nav.style.display = "none";
      button.addEventListener("click", toggleNav);
    } else {
      const nav = document.querySelector("nav");
      nav.style.display = "flex";
      button.removeEventListener("click", toggleNav);
    }
  });
  let oLastModif = new Date(document.lastModified);
  document.getElementById("lastMod").innerHTML = oLastModif.toUTCString();
  document.getElementById("yearCopy").innerHTML = oLastModif.getFullYear();
};
