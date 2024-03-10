import { mainContentContainer } from '../../index.js';
import './homePage.css';



export function createHomePage(){
  const homePageContent = document.createElement('div');
  homePageContent.classList.add('home-page-content');
  homePageContent.textContent = 'hello';
  mainContentContainer.appendChild(homePageContent)
};