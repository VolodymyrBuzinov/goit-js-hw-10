import dishesMenu from './menu.json';
import dishesCards from '/templates/dishes-cards.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const dishesGallery = document.querySelector('.js-menu');
const markup = dishesCards(dishesMenu);
dishesGallery.insertAdjacentHTML('beforeend', markup);

const body = document.querySelector('body');
const toggle = document.querySelector('.theme-switch__toggle');
toggle.addEventListener('change', onThemeChange);

function onThemeChange(evt) {    
    if (evt.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}     
const currentTheme = localStorage.getItem('Theme');
function localStorageCheck() {
    if (currentTheme) {
        body.classList.add(currentTheme);
        currentTheme === Theme.DARK ? (toggle.checked = true) : '';
    }
}
localStorageCheck();