import './homepage.css';
import header from  './header.js';

const content = document.createElement('div');
content.classList.add("content");

content.appendChild(header);

document.body.appendChild(content);