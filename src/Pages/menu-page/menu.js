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
    
  mainContentContainer.appendChild(menuPageContent);
}
