import './style.css';
console.log("hello from index.js");

//todo - generate html with js and add styling to it
const content = document.createElement("content");
content.classList.add("content");

//header
const header = document.createElement("header");
const headerLeft = document.createElement("div");
headerLeft.classList.add("left-side");
const headerRight = document.createElement("div");
headerRight.classList.add("right-side");
//header left side
const logo = document.createElement("img");
logo.classList.add("restaurant-logo");
const headerName = document.createElement("h2");
headerLeft.appendChild(logo);
headerLeft.appendChild(headerName);
//header right side
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");
homeBtn.textContent = "Home";
menuBtn.textContent = "Menu";
contactBtn.textContent = "Contact Us";


headerRight.appendChild(homeBtn);
headerRight.appendChild(menuBtn);
headerRight.appendChild(contactBtn);
//append left and right side to the header
header.appendChild(headerLeft);
header.appendChild(headerRight);


//main
const main = document.createElement("main");
const headline = document.createElement("h1");
headline.textContent = "Order some quick and delicious deserts!";
const orderBtn = document.createElement("button");
orderBtn.textContent = "Order now"
const infoWrapper = document.createElement("div");
infoWrapper.classList.add("info");
//info
const address = document.createElement("div");
address.textContent = "address";
infoWrapper.appendChild(address);
//append all to main
main.appendChild(headline);
main.appendChild(orderBtn);
main.appendChild(infoWrapper);

content.appendChild(header);
content.appendChild(main);

document.body.appendChild(content);