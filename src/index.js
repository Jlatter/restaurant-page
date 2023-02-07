/* eslint-disable func-names */
import { createHomepage } from './functions/page-load';
import { menuPage } from './functions/menu';
import { createContact } from './functions/contact';

const home = document.createElement('button');
const menu = document.createElement('button');
const contact = document.createElement('button');
const content = document.getElementById('content');
const pagecon = document.createElement('div');
const buttonCon = document.createElement('div');
pagecon.setAttribute('id', 'pagecon');
buttonCon.setAttribute('id', 'buttoncon');
window.onload = function () {
  content.innerHTML = '';
  pagecon.innerHTML = '';
  content.appendChild(buttonCon);
  content.appendChild(pagecon);
  buttonCon.appendChild(home);
  buttonCon.appendChild(menu);
  buttonCon.appendChild(contact);
  createHomepage();

  menu.textContent = 'Menu';
  home.textContent = 'Home';
  contact.textContent = 'Contact';
};
home.onclick = function () {
  content.innerHTML = '';
  pagecon.innerHTML = '';
  content.appendChild(buttonCon);
  content.appendChild(pagecon);
  buttonCon.appendChild(home);
  buttonCon.appendChild(menu);
  buttonCon.appendChild(contact);
  createHomepage();

  menu.textContent = 'Menu';
  home.textContent = 'Home';
  contact.textContent = 'Contact';
};
menu.onclick = function () {
  content.innerHTML = '';
  pagecon.innerHTML = '';
  content.appendChild(buttonCon);
  content.appendChild(pagecon);
  buttonCon.appendChild(home);
  buttonCon.appendChild(menu);
  buttonCon.appendChild(contact);
  menuPage();

  menu.textContent = 'Menu';
  home.textContent = 'Home';
  contact.textContent = 'Contact';
};

contact.onclick = function () {
  content.innerHTML = '';
  pagecon.innerHTML = '';
  content.appendChild(buttonCon);
  content.appendChild(pagecon);
  buttonCon.appendChild(home);
  buttonCon.appendChild(menu);
  buttonCon.appendChild(contact);
  createContact();

  menu.textContent = 'Menu';
  home.textContent = 'Home';
  contact.textContent = 'Contact';
};
