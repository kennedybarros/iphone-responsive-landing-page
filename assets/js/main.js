// Favicon Dark/Light Mode
const faviconTag = document.getElementById('favicon_tag');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = './assets/svg/favicon_dark.svg';
  else faviconTag.href = './assets/svg/favicon_light.svg';
};
changeFavicon();
setInterval(changeFavicon, 1000);

// Menu Toggle
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// IMG Hover Effect 3D
document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll('.move').forEach((layer) => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 170;
    const y = (window.innerHeight - e.pageY * speed) / 170;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Animation GSAP
gsap.from('.nav_logo, .nav_toggle', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 10,
});
gsap.from('.nav_item', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});

gsap.from('.home_title', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_description', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_description_2', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
});
gsap.from('.home_text', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_buy', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_learn', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_img', { opacity: 0, duration: 1, delay: 1, y: 30 });
