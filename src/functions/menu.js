export function menuPage() {
  // Create the elements

  const headline = document.createElement('h1');
  const copy = document.createElement('p');

  // Set the attributes and content of the elements
  headline.setAttribute('id', 'headline');
  copy.setAttribute('id', 'copy');
  headline.textContent = 'Menu';
  copy.innerHTML = '<p>Sandwiches: <br> BLT ($7) <br> Grilled Cheese <br><br> Entrees: <br> Grilled Salmon ($18) <br> Chicken Parmesan ($14) <br> Steak ($20) <br><br> Desserts: <br> Cheesecake ($6) <br> Brownies ($4) <br> Ice Cream Sundae ($5) <br><br> Drinks: <br> Soft Drinks ($2) <br> Iced Tea ($3) <br> Coffee ($2) <br><br> Specials: <br> Daily Special ($12) <br> Chefs Recommendation ($15) <br> Seasonal Dish ($16)</p>';

  // Append the elements to the DOM
  const content = document.getElementById('pagecon');

  content.appendChild(headline);
  content.appendChild(copy);
}
