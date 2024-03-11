import './contact.css';
import { mainContentContainer } from '../../index.js';


export function createContactPage(){
  mainContentContainer.textContent = '';

  const contactPageContent = document.createElement('div');
  contactPageContent.textContent = 'contact';

  mainContentContainer.appendChild(contactPageContent);
};