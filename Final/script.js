let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.toggle_icon');
let nav_menu = document.querySelector('.nav_menu');

nav_toggle.addEventListener('click', () => {
  nav_toggle.classList.toggle('toggle_active');

  nav_toggle.classList.contains('toggle_active')
    ? nav_toggle_icon.setAttribute('name', 'close-outline')
    : nav_toggle_icon.setAttribute('name', 'grid-outline');
  nav_toggle.classList.contains('toggle_active')
    ? nav_menu.classList.add('active_menu')
    : nav_menu.classList.remove('active_menu');
});
