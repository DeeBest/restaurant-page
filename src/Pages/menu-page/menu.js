import "./menu.css";
import { mainContentContainer } from "../../index.js";

export function createMenuPage() {
  mainContentContainer.textContent = "";

  const menuPageContent = document.createElement("div");
  menuPageContent.id = "menu-page-content";

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Menus";

  const menuCardsDiv = document.createElement("div");
  menuCardsDiv.id = "menu-cards-div";

  
  const menuCard1 = document.createElement("div");
  menuCard1.classList.add("menu-card");
  menuCard1.id = `menu-card1`;
  menuCard1.innerHTML = `<h2>Starters</h2>`;
  
  const menuCard2 = document.createElement("div");
  menuCard2.classList.add("menu-card");
  menuCard2.id = `menu-card2`;
  menuCard2.innerHTML = `<h2>Mains</h2>`;

  const menuCard3 = document.createElement("div");
  menuCard3.classList.add("menu-card");
  menuCard3.id = `menu-card3`;
  menuCard3.innerHTML = `<h2>Desserts</h2>`;

  const menuCard4 = document.createElement("div");
  menuCard4.classList.add("menu-card");
  menuCard4.id = `menu-card4`;
  menuCard4.innerHTML = `<h2>Cold Drinks</h2>`;

  const menuCard5 = document.createElement("div");
  menuCard5.classList.add("menu-card");
  menuCard5.id = `menu-card5`;
  menuCard5.innerHTML = `<h2>Kids Meals</h2>`;

  const menuCard6 = document.createElement("div");
  menuCard6.classList.add("menu-card");
  menuCard6.id = `menu-card6`;
  menuCard6.innerHTML = `<h2>Milk Shakes</h2>`;



  menuCardsDiv.appendChild(menuCard1);
  menuCardsDiv.appendChild(menuCard2);
  menuCardsDiv.appendChild(menuCard3);
  menuCardsDiv.appendChild(menuCard4);
  menuCardsDiv.appendChild(menuCard5);
  menuCardsDiv.appendChild(menuCard6);

  menuPageContent.appendChild(pageHeader);
  menuPageContent.appendChild(menuCardsDiv);
    
  mainContentContainer.appendChild(menuPageContent);
}
