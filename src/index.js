import './style.css';
import contents from './contents';

const homeLink = document.querySelector('.nav__link--home');
const menuLink = document.querySelector('.nav__link--menu');
const contactLink = document.querySelector('.nav__link--contact');
const contentContainer = document.querySelector('.main__inner');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

let hash;

const loadContent = (content) => {
  contentContainer.innerHTML = contents[content];
};

const activateNav = (content) => {
  [homeLink, menuLink, contactLink].map((link) =>
    link.classList.remove('active')
  );
  document.querySelector(`.nav__link--${content}`).classList.add('active');
};

const monitorHash = () => {
  window.addEventListener('hashchange', () => {
    defineHash();
    activateNav(hash);
    loadContent(hash);
  });
};

const defineHash = () => {
  hash = location.hash.slice(1);
  if (!hash) hash = 'home';
};

const stickyNav = () => {
  const observerCallback = (payload) => {
    if (!payload[0].isIntersecting) {
      nav.classList.add('sticky');
      return;
    }
    nav.classList.remove('sticky');
  };

  const observerOptions = {
    threshold: 0,
  };

  const observeNav = new IntersectionObserver(
    observerCallback,
    observerOptions
  );
  observeNav.observe(header);
};

const init = () => {
  defineHash();
  activateNav(hash);
  loadContent(hash);
  monitorHash();
  stickyNav();
};

init();
