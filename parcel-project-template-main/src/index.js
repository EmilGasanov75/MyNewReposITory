//imports and variables

import './styles.css';
import menuItem from './partials/menu-item.hbs';
import menu from './menu.json'

const itemBox = document.querySelector('.menu');
const body = document.querySelector('body');
const mark = menuItem(menu)
itemBox.insertAdjacentHTML('beforeend', mark);

//theme switch

const Theme = {
    LIGHT: 'light-theme',      
    DARK: 'dark-theme',
};

const ThemeSwitcher = document.querySelector('#theme-switch-toggle')

ThemeSwitcher.checked = localStorage.getItem('localStorageTheme') === Theme.DARK ? true : false





const themesArray = Object.values(Theme)

function renderTheme() {
    const defaultTheme = localStorage.getItem('localStorageTheme')
    body.classList.add(defaultTheme)
}

renderTheme()

ThemeSwitcher.addEventListener("change", function(e) {
    e.preventDefault()
    if (body.classList.contains(themesArray[1])) {
        body.classList.add(themesArray[0])
        body.classList.remove(themesArray[1])
        localStorage.setItem('localStorageTheme', themesArray[0])
    } 
    
    else {
        body.classList.add(themesArray[1])
        body.classList.remove(themesArray[0])
        localStorage.setItem('localStorageTheme', themesArray[1])
    }
});

