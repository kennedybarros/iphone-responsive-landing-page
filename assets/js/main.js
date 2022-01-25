const faviconTag = document.getElementById('favicon_tag');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = './assets/img/favicon-dark.svg';
  else faviconTag.href = './assets/img/favicon-light.svg';
};
changeFavicon();
setInterval(changeFavicon, 1000);

const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// HIDDEN
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});
