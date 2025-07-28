  function toggleMenu() {
    // Toggle visibility of the menu
    const menu = document.querySelector('.menu-container');
    const overlay = document.querySelector('.overlay');

    // Si el menú ya está visible, lo ocultamos
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      overlay.classList.remove('show');  // También ocultamos el overlay
    } else {
      menu.classList.add('show');
      overlay.classList.add('show');  // Mostramos el overlay con blur
    }
  }

