export function createContact(){
    const headline = document.createElement('h1');
    const copy = document.createElement('p');

    // Set the attributes and content of the elements
    
    headline.textContent = 'Contact Information';
    copy.textContent = "Contact Us: info@fakewebsite.com | Phone: 555-555-1212 | Address: 123 Main St, Faketown USA 12345";

    // Append the elements to the DOM
    const content = document.getElementById('content');
   
    content.appendChild(headline);
    content.appendChild(copy);
}
