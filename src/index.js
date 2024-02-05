import './homepage.css';
import header from './header/header.js';
import main from './main/main.js';

const content = document.createElement('div');
content.classList.add("content");

content.appendChild(header);

content.appendChild(main);

//-------------------------------------
document.body.appendChild(content);