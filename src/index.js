import "./index.css";
import { createHomePage } from "./Pages/home-page/homePage.js";
import { createMenuPage } from "./Pages/menu-page/menu.js";
import { createContactPage } from "./Pages/contact-page/contact.js";

const mainContentContainer = document.getElementById('content');

const homePageBtn = document.getElementById('home-page-btn');
const menuPageBtn = document.getElementById('menu-page-btn');
const contactPageBtn = document.getElementById('contact-page-btn');

homePageBtn.addEventListener('click', () => {
  mainContentContainer.textContent = '';
  createHomePage();
}
);

menuPageBtn.addEventListener('click', () => {
  mainContentContainer.textContent = '';
  createMenuPage();
}
);

contactPageBtn.addEventListener('click', () => {
  mainContentContainer.textContent = '';
  createContactPage();
}
);

createHomePage();

export { mainContentContainer };