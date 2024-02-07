import './menu.css';
import loadBrunchMenu from "./brunch/brunch";
import loadBeveragesMenu from "./beverages/beverages";
import loadDinnerMenu from "./dinner/dinner";

export default function loadMenu() {
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");

    const menuNav = document.createElement("div");
    menuNav.classList.add("menu-nav");

    const brunchNav = document.createElement("button");
    brunchNav.classList.add("menu-nav-item");
    brunchNav.dataset.href = "#brunch";
    brunchNav.textContent = "BRUNCH";
    menuNav.appendChild(brunchNav);

    const dinnerNav = document.createElement("button");
    dinnerNav.classList.add("menu-nav-item");
    dinnerNav.dataset.href = "#dinner";
    dinnerNav.textContent = "DINNER";
    menuNav.appendChild(dinnerNav);

    const beveragesNav = document.createElement("button");
    beveragesNav.classList.add("menu-nav-item");
    beveragesNav.dataset.href = "#beverages";
    beveragesNav.textContent = "BEVERAGES";
    menuNav.appendChild(beveragesNav);

    contentWrapper.appendChild(menuNav);

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    menuWrapper.appendChild(loadBrunchMenu());
    contentWrapper.appendChild(menuWrapper);

    function loadConcreteMenu(page) {
        menuWrapper.innerHTML = '';
        menuWrapper.appendChild(page);
    }

    contentWrapper.querySelectorAll('.menu-nav-item').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.dataset.href;
            console.log(url);
            switch (url) {
                case '#brunch':
                    loadConcreteMenu(loadBrunchMenu());
                    break;
                case '#dinner':
                    loadConcreteMenu(loadDinnerMenu());
                    break;
                case '#beverages':
                    loadConcreteMenu(loadBeveragesMenu());
                    break;
                default:
                    // Handle unknown URLs
                    break;
            }
        });
    });


    return contentWrapper;
}