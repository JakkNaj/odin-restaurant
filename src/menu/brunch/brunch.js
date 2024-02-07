
function createMenuCard(name, description){
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-card-wrapper");

    const title = document.createElement("h4");
    title.classList.add("menu-card-title");
    title.textContent = name;
    wrapper.appendChild(title);

    const text = document.createElement("p");
    text.textContent = description;
    wrapper.appendChild(text);

    return wrapper;
}

function createBitesAndSpecials(){
    const wrapper = document.createElement("div");

    const heading = document.createElement("h2");
    heading.classList.add("menu-section-heading");
    heading.textContent = "Small Bites & Specials";
    wrapper.appendChild(heading);

    const listWrapper = document.createElement("div");
    listWrapper.classList.add("menu-list-wrapper");

    listWrapper.appendChild(createMenuCard("Chicken Liver Mousse", "Jidori chicken liver mousse, grilled Bub & Grandma's sourdough sesame toast, house orange marmalade, Chavez Farms market pickles, seasonal herbs"));
    listWrapper.appendChild(createMenuCard("Chilled Tofu w/ Avocado & Roe", "Meiji supreme tofu, avocado, wild salmon or trout roe, and house ponzu"));
    listWrapper.appendChild(createMenuCard("Pickled cucumber salad [gf][ve]", "Farmers Market organic cucumber, garlic, ginger, gochugaru, herbs"));
    listWrapper.appendChild(createMenuCard("Raw Oysters", "Fresh oysters of-the-moment, ponzu, fermented hot sauce, lemon"));
    listWrapper.appendChild(createMenuCard("Seasonal Fruit & Kale Salad [gf][ve]", "Gonzaga Farms persimmons, Chavez Farms lacinato kale, herbs, organic multigrain rice, roasted pumpkin seeds, crispy rice, house miso lemon vinaigrette"));
    listWrapper.appendChild(createMenuCard("Smoked Fish Dip", "Smoked fish-of-the-moment dip, Bub & Grandma's sesame sourdough toast, herbs (contains dairy and shallots)"));
    listWrapper.appendChild(createMenuCard("Smoked Salmon Hash", "Smoked salmon belly, preserved meyer lemon crème fraiche, wild salmon or trout roe, house made hash brown, dill, chives"));
    listWrapper.appendChild(createMenuCard("Yang's Fried Chicken Wings [gf]", "Free range chicken wings, lemon, house salt & pepper seasoning"));
    listWrapper.appendChild(createMenuCard("Zumi's Loco Moco", "Breaded and fried grass fed beef patty, napa kraut, cherry tomato confit, sunny side up egg, mushroom gravy, multigrain rice"));

    wrapper.appendChild(listWrapper);

    return wrapper;
}


export default function loadBrunchMenu(){
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    menuWrapper.appendChild(createBitesAndSpecials());

    return menuWrapper;
}
