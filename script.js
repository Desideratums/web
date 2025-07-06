const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("show");
  overlay.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !menu.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    overlay.classList.contains("active")
  ) {
    menu.classList.remove("show");
    overlay.classList.remove("active");
  }
});

overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("active");
});
