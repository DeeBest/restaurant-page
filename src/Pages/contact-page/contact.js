import './contact.css';
import { mainContentContainer } from '../../index.js';


export function createContactPage(){
  mainContentContainer.textContent = '';

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

  mainContentContainer.appendChild(contactPageContent);
};