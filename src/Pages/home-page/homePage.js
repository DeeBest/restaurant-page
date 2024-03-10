import { mainContentContainer } from '../../index.js';
import './homePage.css';
import image1_1 from '../../Assets/image1_1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';


const img1 = new Image();
img1.src = image1_1;
img1.classList.add('grid-img');

const img2 = new Image();
img2.src = image2;
img2.classList.add('grid-img');

const img3 = new Image();
img3.src = image3;
img3.classList.add('grid-img');


export function createHomePage(){
  const homePageContent = document.createElement('div');
  homePageContent.classList.add('home-page-content');
   
  const homePageParaDiv = document.createElement('div');
  homePageParaDiv.classList.add('home-page-para-div'); 
  homePageParaDiv.innerHTML = `
  <p>
  Welcome to our culinary haven, where every bite is a journey and every dish tells a story. At Foodies Hub, we transcend the ordinary, inviting you to savor an exquisite fusion of flavors that dance on your palate. Immerse yourself in a symphony of tastes crafted with passion, where each ingredient is a star in its own right.
  </p>

  <br>

  <p>
  From farm-fresh produce to the finest spices, our chefs curate an unforgettable experience that celebrates the art of dining. Whether you're here for a casual brunch or an intimate dinner, our warm ambiance and impeccable service ensure that every moment is a celebration.
  </p>

  <br>

  <p>
  Join us and indulge in a culinary voyage that transcends the ordinary, making Foodies Hub not just a destination but a gastronomic odyssey.
  </p>`; 
  homePageContent.appendChild(homePageParaDiv);
 
  const imagesDiv = document.createElement('div');
  imagesDiv.classList.add('images-div'); 
  homePageContent.appendChild(imagesDiv);

  const imageCard1 = document.createElement('div');
  imageCard1.classList.add('image-card1');
  imageCard1.appendChild(img1);
  imagesDiv.appendChild(imageCard1);

  const imageCard2 = document.createElement('div'); 
  imageCard2.classList.add('image-card2');
  imageCard2.appendChild(img2);
  imagesDiv.appendChild(imageCard2);

  const imageCard3 = document.createElement('div');
  imageCard3.classList.add('image-card3');
  imageCard3.appendChild(img3);
  imagesDiv.appendChild(imageCard3);



  mainContentContainer.appendChild(homePageContent)
};