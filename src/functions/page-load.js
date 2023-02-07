export function createHomepage() {
  // Create the elements

  const headline = document.createElement('h1');
  const copy = document.createElement('p');
  const image = document.createElement('img');
  image.src = '../src/images/food.jpg';

  image.width = '630';
  // Set the attributes and content of the elements
  headline.setAttribute('id', 'headline');
  copy.setAttribute('id', 'copy');

  headline.textContent = 'Welcome to My Restaurant';
  copy.textContent = 'We are a wonderful restaurant, come and visit us!';

  // Append the elements to the DOM
  const content = document.getElementById('pagecon');

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(copy);
}
