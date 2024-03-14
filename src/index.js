import './style.css';

import dish_1 from './images/dish(1).png';
import dish_2 from './images/dish(2).png';
import dish_3 from './images/dish(3).png';
import dish_4 from './images/dish(4).png';
import dish_5 from './images/dish(5).png';
import dish_6 from './images/dish(6).png';
import dish_7 from './images/dish(7).png';
import dish_8 from './images/dish(8).png';
import dish_9 from './images/dish(9).png';
import dish_10 from './images/dish(10).png';

const homeLink = document.querySelector('.nav__link--home');
const menuLink = document.querySelector('.nav__link--menu');
const contactLink = document.querySelector('.nav__link--contact');
const contentContainer = document.querySelector('.main__inner');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const contents = {
  home: `
        <div class="home">
          <h1 class="home__heading">Best Saudi Dishes been served</h1>
          <p class="home__text">Made with love since 2003</p>
          <img src="./images/chicken.jpg" alt="" class="home__img" />
          <p class="home__text">Order with us now!</p>
        </div>`,
  menu: `
        <div class="menu">
          <div class="menu__dish">
            <img src="${dish_1}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_2}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_3}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_4}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_5}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_6}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_7}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_8}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_9}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_10}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_10}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
          <div class="menu__dish">
            <img src="${dish_10}" alt="" class="menu__img" />
            <p class="menu__text">Lorem ipsum dolor</p>
          </div>
        </div>`,
  contact: `
        <div class="contact">
          <p class="contact__text">📞 123 456 789</p>
          <p class="contact__text">🏠 23 Imam University, Riyadh, KSA</p>
          <div class="contact__location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14500.764251561668!2d46.83368454846027!3d24.685957945492333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa835e4c39e49%3A0xc7a9bd92e092ad38!2sAlBayt%20AlRomancy%20Restaurant%20-%20As-Saadah!5e0!3m2!1sen!2ssa!4v1710364488494!5m2!1sen!2ssa"
              style="border: 0"
              class="contact__map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>`,
};

const loadContent = (content) => {
  contentContainer.innerHTML = contents[content];
};

const activateNav = (link) => {
  [homeLink, menuLink, contactLink].map((link) =>
    link.classList.remove('active')
  );
  document.querySelector(`.nav__link--${link}`).classList.add('active');
};

const monitorHash = () => {
  window.addEventListener('hashchange', () => {
    const hash = location.hash.slice(1);
    activateNav(hash);
    loadContent(hash);
  });
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
  let hash = location.hash.slice(1);
  if (!hash) hash = 'home';
  activateNav(hash);
  loadContent(hash);
  monitorHash();
  stickyNav();
};

init();
