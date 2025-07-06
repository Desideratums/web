const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Alternar visibilidad al hacer clic en el ícono
menuToggle.addEventListener('click', (event) => {
  event.stopPropagation(); // evita que se dispare el evento del documento
  menu.classList.toggle('active');
});

// Cerrar menú al hacer clic fuera del mismo
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});
