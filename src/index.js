const home = document.createElement("button")
const menu= document.createElement("button")
const contact =document.createElement("button")
const content = document.getElementById("content")

import { createHomepage } from '../src/functions/page-load'; console.log("this worked")
window.onload = function() {
   content.innerHTML = ""
   content.appendChild(home)
content.appendChild(menu)
content.appendChild(contact)
    createHomepage();
    
    menu.textContent = "Menu"
home.textContent = "Home"
contact.textContent = "Contact"
}
home.onclick = function() {
   content.innerHTML = ""
   content.appendChild(home)
content.appendChild(menu)
content.appendChild(contact)
    createHomepage();
    
    menu.textContent = "Menu"
home.textContent = "Home"
contact.textContent = "Contact"
}


import { menuPage } from '../src/functions/menu'; console.log("this worked")
menu.onclick = function() {
   content.innerHTML = ""
   content.appendChild(home)
content.appendChild(menu)
content.appendChild(contact)
   menuPage();
   
   menu.textContent = "Menu"
home.textContent = "Home"
contact.textContent = "Contact"
   
}
import { createContact } from '../src/functions/contact'; console.log("this worked")
contact.onclick = function() {
   content.innerHTML = ""
   content.appendChild(home)
content.appendChild(menu)
content.appendChild(contact)
   createContact();
  
   menu.textContent = "Menu"
home.textContent = "Home"
contact.textContent = "Contact"
}