import { mainContentContainer } from '../../index.js';
import './homePage.css';



export function createHomePage(){
  const homePageContent = document.createElement('div');
  homePageContent.classList.add('home-page-content');
  
  const imagesDiv = document.createElement('div');
  imagesDiv.classList.add('images-div');
  imagesDiv.textContent = 'images-div'
  homePageContent.appendChild(imagesDiv);

  const imageCard1 = document.createElement('div');
  imageCard1.classList.add('image-card1');
  imagesDiv.appendChild(imageCard1);

  const imageCard2 = document.createElement('div'); 
  imageCard2.classList.add('images-card2');
  imagesDiv.appendChild(imageCard2);

  const imageCard3 = document.createElement('div');
  imageCard3.classList.add('images-card3');
  imagesDiv.appendChild(imageCard3);



  mainContentContainer.appendChild(homePageContent)
};