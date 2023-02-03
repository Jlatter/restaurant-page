export function menuPage() {
    // Create the elements
    
    const headline = document.createElement('h1');
    const copy = document.createElement('p');

    // Set the attributes and content of the elements
    
    headline.textContent = "Menu";
    copy.textContent = "Sandwiches:\nBLT ($7)\nGrilled Cheese ($5)\nTurkey Club ($9)\n\nSalads:\nCaesar ($6)\nGreek ($8)\nGarden ($5)\n\nSoups:\nTomato ($4)\nChicken Noodle ($5)\nBroccoli Cheddar ($6)\n\nPasta:\nSpaghetti Bolognese ($10)\nFettuccine Alfredo ($12)\nPesto Penne ($9)\n\nPizza:\nMargherita ($12)\nPepperoni ($14)\nMushroom ($13)\n\nAppetizers:\nMozzarella Sticks ($6)\nWings ($8)\nNachos ($7)\n\nEntrees:\nGrilled Salmon ($18)\nChicken Parmesan ($14)\nSteak ($20)\n\nDesserts:\nCheesecake ($6)\nBrownies ($4)\nIce Cream Sundae ($5)\n\nDrinks:\nSoft Drinks ($2)\nIced Tea ($3)\nCoffee ($2)\n\nSpecials:\nDaily Special ($12)\nChef's Recommendation ($15)\nSeasonal Dish ($16)"




    // Append the elements to the DOM
    const content = document.getElementById('content');
   
    content.appendChild(headline);
    content.appendChild(copy);
}