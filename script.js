const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");

// Toggle menu mobile
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Fermer le menu quand on clique un lien
[...nav.querySelectorAll("a")].forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("show"));
});

// Année auto
year.textContent = new Date().getFullYear();
