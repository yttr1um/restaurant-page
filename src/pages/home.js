//-- the home page of the website

function generateHomePage(div) {
    const overview = document.createElement('div');

    const mainTitle = document.createElement('h2');
    mainTitle.textContent = "Salem's Pizzeria";

    const text = document.createElement('p');
    text.textContent = "Salem’s Pizzeria is all about good vibes and even better pizza. What started as a small neighborhood spot has grown into a local favorite known for fresh ingredients, bold flavors, and a whole lot of love in every slice. Whether you’re grabbing a quick bite or settling in with friends, we’ve got something for everyone — from timeless classics to signature creations you won’t find anywhere else. Come hungry. Leave happy."

    overview.appendChild(mainTitle);
    overview.appendChild(text);

    div.appendChild(overview)
}

export default generateHomePage;