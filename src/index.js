import "./index.css";
import { createHomePage } from "./Pages/home-page/homePage.js";


const homePageBtn = document.getElementById('home-page-btn');
const menuPageBtn = document.getElementById('menu-page-btn');
const contactPageBtn = document.getElementById('contact-page-btn');


homePageBtn.addEventListener('click', () => {
  console.log('home page button clicked')
}
);

menuPageBtn.addEventListener('click', () => {
  console.log('menu page button clicked')
}
);

contactPageBtn.addEventListener('click', () => {
  console.log('contact page button clicked')
}
);


export const mainContentContainer = document.getElementById('content');


createHomePage();
