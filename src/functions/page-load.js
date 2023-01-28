export function createHomepage() {
    // Create the elements
    
    const headline = document.createElement('h1');
    const copy = document.createElement('p');

    // Set the attributes and content of the elements
    
    headline.textContent = 'Welcome to My Restaurant';
    copy.textContent = 'We are a wonderful restaurant, come and visit us!';

    // Append the elements to the DOM
    const content = document.getElementById('content');
   
    content.appendChild(headline);
    content.appendChild(copy);
}
