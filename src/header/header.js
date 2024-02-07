import InstaIcon from './instagramIcon.png';
import './header.css';

export default function loadHeader() {
    const header = document.createElement('header');


    const topLeft = document.createElement('div');
    topLeft.classList.add("top-left", "top-classes");

    const topCenter = document.createElement('div');
    topCenter.classList.add("top-center", "top-classes");

    const h1Logo = document.createElement('h1');
    h1Logo.id = "site-logo";
    h1Logo.textContent = "Yang's Kitchen";
    h1Logo.dataset.href = "#main";
    topCenter.appendChild(h1Logo);



    const topRight = document.createElement('nav');
    topRight.classList.add("top-right", "top-classes");

    const innerNav = document.createElement('div');
    innerNav.classList.add("inner-nav");

    const button1 = document.createElement('button');
    button1.classList.add("navigBtn");
    button1.textContent = "1 View our Menu";
    button1.dataset.href = "#menu";
    innerNav.appendChild(button1);

    const button2 = document.createElement('button');
    button2.classList.add("navigBtn");
    button2.textContent = "2 Make a Reservation (dinner)";
    innerNav.appendChild(button2);

    const button3 = document.createElement('button');
    button3.classList.add("navigBtn");
    button3.textContent = "3 Join the Waitlist (brunch/lunch)";
    innerNav.appendChild(button3);

    const button4 = document.createElement('button');
    button4.classList.add("navigBtn");
    button4.textContent = "4 Order takeout";
    innerNav.appendChild(button4);

    const button5 = document.createElement('button');
    button5.classList.add("navigBtn");
    button5.textContent = "5 Order delivery";
    innerNav.appendChild(button5);

    const button6 = document.createElement('button');
    button6.classList.add("navigBtn");
    button6.textContent = "6 Purchase a gift card";
    innerNav.appendChild(button6);

    const button7 = document.createElement('button');
    button7.classList.add("navigBtn");
    button7.textContent = "7 Contact Us";
    innerNav.appendChild(button7);

    topRight.appendChild(innerNav);

    const socials = document.createElement('div');
    socials.classList.add("socials");
    const instagram = new Image();
    instagram.src = InstaIcon;
    instagram.let = "instagram icon";
    socials.appendChild(instagram);

    topRight.appendChild(socials)

    header.appendChild(topLeft);
    header.appendChild(topCenter);
    header.appendChild(topRight);
    return header;
}


