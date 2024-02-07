import kitchen from './kitchen_view.jpeg';
import './main.css';
import sushi from "./sushi_plate.jpeg";
import diner from "./diner_view.jpeg";

export default function loadMain(){
    const mainbody = document.createElement("div");
    mainbody.classList.add("mainContent");

    const kitchenView = new Image();
    kitchenView.id = "kitchenView";
    kitchenView.src = kitchen;
    kitchenView.alt = "photograph of our chef working in the kitchen";

    mainbody.appendChild(kitchenView);

    const infoBlock = document.createElement("div");
    infoBlock.classList.add("infoBlock");

    const dinnerRes = document.createElement("div");
    dinnerRes.classList.add("dinnerReservations");

    const dinnerHeading = document.createElement("h3");
    dinnerHeading.textContent = "DINNER RESERVATIONS!";
    dinnerRes.appendChild(dinnerHeading);

    const dinnerSubtext = document.createElement("div");
    dinnerSubtext.classList.add("text");
    dinnerSubtext.textContent = "We are now open for dinner service Thursday through Sunday! We'll be accepting limited " +
        "walk-ins and reservations on Yelp."
    dinnerRes.appendChild(dinnerSubtext);

    const brunchSubtext = document.createElement("div");
    brunchSubtext.classList.add("text");
    brunchSubtext.textContent = "For brunch, we still do not take reservations as we seat guests on a first come first serve basis." +
        " However, you can join our Yelp! Waitlist to save your spot ahead of time (same day only)!\n" + "\n"
    dinnerRes.appendChild(brunchSubtext);

    infoBlock.appendChild(dinnerRes);

    const bussinessHours = document.createElement("div");
    bussinessHours.classList.add("bussinessHours");

    const bussinessHoursHeading = document.createElement("h3");
    bussinessHoursHeading.textContent = "BUSINESS HOURS";
    bussinessHours.appendChild(bussinessHoursHeading)

    const brunchHours = document.createElement("div");
    brunchHours.classList.add("text");
    brunchHours.textContent = "BRUNCH: Thursday through Monday 9:00am - 2:30pm";
    bussinessHours.appendChild(brunchHours);

    const dinnerHours = document.createElement("div");
    dinnerHours.classList.add("text");
    dinnerHours.textContent = "DINNER: Thursday through Sunday 5:00pm - 9:00pm";
    bussinessHours.appendChild(dinnerHours);

    const closedHours = document.createElement("div");
    closedHours.classList.add("text");
    closedHours.textContent = "CLOSED Tuesdays & Wednesdays";
    bussinessHours.appendChild(closedHours);

    const takeOutHours = document.createElement("div");
    takeOutHours.classList.add("text");
    takeOutHours.textContent = "Dine-in, takeout, and delivery (via DoorDash & UberEats) available";
    bussinessHours.appendChild(takeOutHours);

    infoBlock.appendChild(bussinessHours);

    const orderBtn = document.createElement("button");
    orderBtn.classList.add("orderBtn");
    orderBtn.textContent = "ORDER ONLINE";

    infoBlock.appendChild(orderBtn);

    mainbody.appendChild(infoBlock);



    const imageSection = document.createElement("div");
    imageSection.classList.add("imageSection");

    const dinerView = new Image()
    dinerView.id = "dinerView";
    dinerView.src = diner;

    const rightTextSection = document.createElement("div");
    rightTextSection.classList.add("rightsideText-wrapper");

    const rightText = document.createElement("div");
    rightText.classList.add("small-description", "text")
    rightText.textContent = "Yang’s Kitchen strives to source local, sustainable and organic when possible." +
        " We work hard to source premium ingredients and we cook everything from scratch with love. We also do our best" +
        " to pay our employees living wages (tips are shared with all employees, including kitchen staff) and to reduce our" +
        " environmental footprint wherever we can. Overall, these factors translate to higher menu prices, but we hope that" +
        " you find value and feel a sense of comfort in knowing that we aim to get better everyday at doing what is important" +
        " to us.;"

    rightTextSection.appendChild(dinerView);

    rightTextSection.appendChild(rightText);

    imageSection.appendChild(rightTextSection);

    const sushiView = new Image();
    sushiView.id = "sushiView";
    sushiView.src = sushi;
    imageSection.appendChild(sushiView);

    mainbody.appendChild(imageSection);
    return mainbody;
}