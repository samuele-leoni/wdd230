window.onload = function () {
  let oLastModif = new Date(document.lastModified);
  document.getElementById("lastMod").innerHTML = oLastModif.toUTCString();
  document.getElementById("yearCopy").innerHTML = oLastModif.getFullYear();
};
