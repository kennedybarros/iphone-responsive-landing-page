// FAVICON DARK/LIGHT MODE
const faviconTag = document.getElementById('favicon_tag');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = './assets/img/favicon-dark.svg';
  else faviconTag.href = './assets/img/favicon-light.svg';
};
changeFavicon();
setInterval(changeFavicon, 1000);
