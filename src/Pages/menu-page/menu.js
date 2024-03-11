import './menu.css';
import { mainContentContainer } from '../../index.js';


export function createMenuPage(){
  mainContentContainer.textContent = '';

  const menuPageContent = document.createElement('div');
  menuPageContent.textContent = 'menu';

  mainContentContainer.appendChild(menuPageContent);
};