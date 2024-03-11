/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Pages/contact-page/contact.css":
/*!********************************************!*\
  !*** ./src/Pages/contact-page/contact.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Pages/home-page/homePage.css":
/*!******************************************!*\
  !*** ./src/Pages/home-page/homePage.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Pages/menu-page/menu.css":
/*!**************************************!*\
  !*** ./src/Pages/menu-page/menu.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Pages/contact-page/contact.js":
/*!*******************************************!*\
  !*** ./src/Pages/contact-page/contact.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.css */ "./src/Pages/contact-page/contact.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");




function createContactPage(){
  _index_js__WEBPACK_IMPORTED_MODULE_1__.mainContentContainer.textContent = '';

  const contactPageContent = document.createElement('div');
  contactPageContent.id = 'contact-page-content';

  const contactPageHeader = document.createElement('h1');
  contactPageHeader.textContent = 'Give Us Your Feedback';

  const contactForm = document.createElement('form');
  contactForm.id = 'contact-form';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';

  contactForm.appendChild(nameLabel);
  contactForm.appendChild(nameInput);

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';

  contactForm.appendChild(emailLabel);
  contactForm.appendChild(emailInput);

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message:';

  const messageInput = document.createElement('textarea');
  messageInput.name = 'message';

  contactForm.appendChild(messageLabel);
  contactForm.appendChild(messageInput);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  contactForm.appendChild(submitButton);


  contactPageContent.appendChild(contactPageHeader);
  contactPageContent.appendChild(contactForm);

  _index_js__WEBPACK_IMPORTED_MODULE_1__.mainContentContainer.appendChild(contactPageContent);
};

/***/ }),

/***/ "./src/Pages/home-page/homePage.js":
/*!*****************************************!*\
  !*** ./src/Pages/home-page/homePage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");
/* harmony import */ var _homePage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.css */ "./src/Pages/home-page/homePage.css");
/* harmony import */ var _Assets_image1_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Assets/image1_1.jpg */ "./src/Assets/image1_1.jpg");
/* harmony import */ var _Assets_image2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Assets/image2.jpg */ "./src/Assets/image2.jpg");
/* harmony import */ var _Assets_image3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/image3.jpg */ "./src/Assets/image3.jpg");







const img1 = new Image();
img1.src = _Assets_image1_1_jpg__WEBPACK_IMPORTED_MODULE_2__;
img1.classList.add('grid-img');

const img2 = new Image();
img2.src = _Assets_image2_jpg__WEBPACK_IMPORTED_MODULE_3__;
img2.classList.add('grid-img');

const img3 = new Image();
img3.src = _Assets_image3_jpg__WEBPACK_IMPORTED_MODULE_4__;
img3.classList.add('grid-img');


function createHomePage(){
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



  _index_js__WEBPACK_IMPORTED_MODULE_0__.mainContentContainer.appendChild(homePageContent)
};

/***/ }),

/***/ "./src/Pages/menu-page/menu.js":
/*!*************************************!*\
  !*** ./src/Pages/menu-page/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/Pages/menu-page/menu.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");



function createMenuPage() {
  _index_js__WEBPACK_IMPORTED_MODULE_1__.mainContentContainer.textContent = "";

  const menuPageContent = document.createElement("div");
  menuPageContent.id = "menu-page-content";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Menus";

  const menuCardsDiv = document.createElement("div");
  menuCardsDiv.id = "menu-cards-div";

  
  const menuCard1 = document.createElement("div");
  menuCard1.classList.add("menu-card");
  menuCard1.id = `menu-card1`;
  menuCard1.innerHTML = `
    <h2>Starters</h2>
    <br>
    <ul class="menu-list">
      <li>
        <span class="item-name">Spinach and Artichoke Dip</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Bruschetta with Tomato and Basil</span>
        <span class="item-price">:$2.50</span>
      </li>
      <li>
        <span class="item-name">Chicken Wings (Buffalo or BBQ)</span>
        <span class="item-price">:$11.50</span>
      </li>
      <li>
        <span class="item-name">Mozzarella Sticks</span>
        <span class="item-price">:$4.50</span>
      </li>
      <li>
        <span class="item-name">Fried Calamari</span>
        <span class="item-price">:$3.50</span>
      </li>
      <li>
        <span class="item-name">Caprese Salad Skewers</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Shrimp Cocktail</span>
        <span class="item-price">:$7.50</span>
      </li>
      <li>
        <span class="item-name">Spring Rolls</span>
        <span class="item-price">:$1.00</span>
      </li>
      <li>
        <span class="item-name">Stuffed Mushrooms</span>
        <span class="item-price">:$13.50</span>
      </li>
      <li>
        <span class="item-name">Garlic Bread with Cheese</span>
        <span class="item-price">:$5.80</span>
      </li>
    </ul class="menu-list">  
  `;
  
  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("menu-card");
  menuCard2.id = `menu-card2`;
  menuCard2.innerHTML = `
    <h2>Main Courses</h2>
    <br>
    <ul class="menu-list">
      <li>
        <span class="item-name">Grilled Salmon with Lemon Butter</span>
        <span class="item-price">:$3.50</span>
      </li>
      <li>
        <span class="item-name">Chicken Alfredo Pasta</span>
        <span class="item-price">:$5.50</span>
      </li>
      <li>
        <span class="item-name">Beef Tenderloin Steak</span>
        <span class="item-price">:$7.00</span>
      </li>
      <li>
        <span class="item-name">Margherita Pizza</span>
        <span class="item-price">:$7.50</span>
      </li>
      <li>
        <span class="item-name">Vegetable Stir-Fry</span>
        <span class="item-price">:$9.50</span>
      </li>
      <li>
        <span class="item-name">Spaghetti Bolognese</span>
        <span class="item-price">:$18.90</span>
      </li>
      <li>
        <span class="item-name">BBQ Pulled Pork Sandwich</span>
        <span class="item-price">:$23.50</span>
      </li>
      <li>
        <span class="item-name">Vegetarian Lasagna</span>
        <span class="item-price">:$3.70</span>
      </li>
      <li>
        <span class="item-name">Shrimp Scampi</span>
        <span class="item-price">:$9.80</span>
      </li>
      <li>
        <span class="item-name">Teriyaki Chicken Bowl</span>
        <span class="item-price">:$1.50</span>
      </li>
    </ul class="menu-list">  
  `;

  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("menu-card");
  menuCard3.id = `menu-card3`;
  menuCard3.innerHTML = `
    <h2>Desserts</h2>
    <br>
    <ul class="menu-list">
      <li>
        <span class="item-name">Chocolate Lava Cake</span>
        <span class="item-price">:$14.50</span>
      </li>
      <li>
        <span class="item-name">New York Cheesecake</span>
        <span class="item-price">:$15.50</span>
      </li>
      <li>
        <span class="item-name">Tiramisu</span>
        <span class="item-price">:$7.50</span>
      </li>
      <li>
        <span class="item-name">Apple Pie with Vanilla Ice Cream</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Chocolate Mousse</span>
        <span class="item-price">:$3.50</span>
      </li>
      <li>
        <span class="item-name">Fruit Tart</span>
        <span class="item-price">:$12.50</span>
      </li>
      <li>
        <span class="item-name">Red Velvet Cupcakes</span>
        <span class="item-price">:$19.50</span>
      </li>
      <li>
        <span class="item-name">Banana Split</span>
        <span class="item-price">:$5.50</span>
      </li>
      <li>
        <span class="item-name">Key Lime Pie</span>
        <span class="item-price">:$6.70</span>
      </li>
      <li>
        <span class="item-name">Raspberry Chocolate Tart</span>
        <span class="item-price">:$4.50</span>
      </li>
    </ul class="menu-list">  
  `;

  const menuCard4 = document.createElement("div");
  menuCard4.classList.add("menu-card");
  menuCard4.id = `menu-card4`;
  menuCard4.innerHTML = `
    <h2>Cold Drinks</h2>
    <br>
    <ul class="menu-list">
      <li>
        <span class="item-name">Classic Lemonade</span>
        <span class="item-price">:$2.50</span>
      </li>
      <li>
        <span class="item-name">Iced Tea (Sweetened/Unsweetened)</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Berry Blast Smoothie</span>
        <span class="item-price">:$3.50</span>
      </li>
      <li>
        <span class="item-name">Peach Iced Tea</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Watermelon Slush</span>
        <span class="item-price">:$4.50</span>
      </li>
      <li>
        <span class="item-name">Orange Creamsicle Soda</span>
        <span class="item-price">:$6.50</span>
      </li>
      <li>
        <span class="item-name">Mint Mojito</span>
        <span class="item-price">:$9.50</span>
      </li>
      <li>
        <span class="item-name">Blueberry Lemonade</span>
        <span class="item-price">:$2.50</span>
      </li>
      <li>
        <span class="item-name">Cucumber Mint Cooler</span>
        <span class="item-price">:$7.50</span>
      </li>
      <li>
        <span class="item-name">Coconut Pineapple Smoothie</span>
        <span class="item-price">:$3.50</span>
      </li>
    </ul class="menu-list">  
  `;

  const menuCard5 = document.createElement("div");
  menuCard5.classList.add("menu-card");
  menuCard5.id = `menu-card5`;
  menuCard5.innerHTML = `
    <h2>Kids Meals</h2>
    <br>
    <ul class="menu-list">
      <li>
        <span class="item-name">Chicken Nuggets with Fries</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Grilled Cheese Sandwich</span>
        <span class="item-price">:$2.50</span>
      </li>
      <li>
        <span class="item-name">Mini Cheeseburgers</span>
        <span class="item-price">:$3.50</span>
      </li>
      <li>
        <span class="item-name">Macaroni and Cheese</span>
        <span class="item-price">:$4.50</span>
      </li>
      <li>
        <span class="item-name">Peanut Butter and Jelly Sandwich</span>
        <span class="item-price">:$5.50</span>
      </li>
      <li>
        <span class="item-name">Cheese Quesadilla</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Spaghetti with Tomato Sauce</span>
        <span class="item-price">:$6.50</span>
      </li>
      <li>
        <span class="item-name">Fish Sticks with Tater Tots</span>
        <span class="item-price">:$2.00</span>
      </li>
      <li>
        <span class="item-name">Chicken Quesadilla</span>
        <span class="item-price">:$3.00</span>
      </li>
      <li>
        <span class="item-name">Mini Pizzas</span>
        <span class="item-price">:$11.50</span>
      </li>
    </ul class="menu-list">  
  `;

  const menuCard6 = document.createElement("div");
  menuCard6.classList.add("menu-card");
  menuCard6.id = `menu-card6`;
  menuCard6.innerHTML = `
    <h2>Milk Shakes</h2>
    <br>
    <ul class="menu-list">
      <li>
        <span class="item-name">Chocolate Peanut Butter</span>
        <span class="item-price">:$1.50</span>
      </li>
      <li>
        <span class="item-name">Strawberry Banana</span>
        <span class="item-price">:$3.50</span>
      </li>
      <li>
        <span class="item-name">Cookies and Cream</span>
        <span class="item-price">:$5.50</span>
      </li>
      <li>
        <span class="item-name">Vanilla Bean</span>
        <span class="item-price">:$9.50</span>
      </li>
      <li>
        <span class="item-name">Mango Madness</span>
        <span class="item-price">:$2.50</span>
      </li>
      <li>
        <span class="item-name">Salted Caramel</span>
        <span class="item-price">:$5.50</span>
      </li>
      <li>
        <span class="item-name">Mint Chocolate Chip</span>
        <span class="item-price">:$6.00</span>
      </li>
      <li>
        <span class="item-name">Coffee Lovers</span>
        <span class="item-price">:$9.70</span>
      </li>
      <li>
        <span class="item-name">Raspberry Swirl</span>
        <span class="item-price">:$4.50</span>
      </li>
      <li>
        <span class="item-name">Nutella Delight</span>
        <span class="item-price">:$7.50</span>
      </li>
    </ul class="menu-list">  
  `;


  menuCardsDiv.appendChild(menuCard1);
  menuCardsDiv.appendChild(menuCard2);
  menuCardsDiv.appendChild(menuCard3);
  menuCardsDiv.appendChild(menuCard4);
  menuCardsDiv.appendChild(menuCard5);
  menuCardsDiv.appendChild(menuCard6);

  menuPageContent.appendChild(pageHeader);
  menuPageContent.appendChild(menuCardsDiv);
    
  _index_js__WEBPACK_IMPORTED_MODULE_1__.mainContentContainer.appendChild(menuPageContent);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContentContainer: () => (/* binding */ mainContentContainer)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _Pages_home_page_homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/home-page/homePage.js */ "./src/Pages/home-page/homePage.js");
/* harmony import */ var _Pages_menu_page_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/menu-page/menu.js */ "./src/Pages/menu-page/menu.js");
/* harmony import */ var _Pages_contact_page_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/contact-page/contact.js */ "./src/Pages/contact-page/contact.js");





const mainContentContainer = document.getElementById('content');

const homePageBtn = document.getElementById('home-page-btn');
const menuPageBtn = document.getElementById('menu-page-btn');
const contactPageBtn = document.getElementById('contact-page-btn');

homePageBtn.addEventListener('click', () => {
  mainContentContainer.textContent = '';
  (0,_Pages_home_page_homePage_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
}
);

menuPageBtn.addEventListener('click', () => {
  mainContentContainer.textContent = '';
  (0,_Pages_menu_page_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();
}
);

contactPageBtn.addEventListener('click', () => {
  mainContentContainer.textContent = '';
  (0,_Pages_contact_page_contact_js__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();
}
);

(0,_Pages_home_page_homePage_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();



/***/ }),

/***/ "./src/Assets/image1_1.jpg":
/*!*********************************!*\
  !*** ./src/Assets/image1_1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29290526071ab22652fa.jpg";

/***/ }),

/***/ "./src/Assets/image2.jpg":
/*!*******************************!*\
  !*** ./src/Assets/image2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca5cd1ea99634154a756.jpg";

/***/ }),

/***/ "./src/Assets/image3.jpg":
/*!*******************************!*\
  !*** ./src/Assets/image3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae88a0704b6edbb258b4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map