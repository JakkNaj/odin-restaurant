import './homepage.css';
import loadMain from './main/main.js';
import loadHeader from "./header/header.js";
import loadMenu from "./menu/menu";

const header = document.getElementById("header");
header.appendChild(loadHeader());

document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    function loadPage(page) {
        content.innerHTML = '';
        content.appendChild(page);
    }

    document.querySelectorAll('nav header button.navigBtn, #site-logo').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.dataset.href;
            switch (url) {
                case '#main':
                    loadPage(loadMain());
                    break;
                case '#menu':
                    loadPage(loadMenu());
                    break;
                default:
                    // Handle unknown URLs
                    break;
            }
        });
    });

    // Initial load of the homepage
    loadPage(loadMain());
});