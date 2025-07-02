import "./styles/style.css";

import generateHomePage from "./pages/home";
import generateMenuPage from "./pages/menu";

const card = document.querySelector('#content');

//buttons
const homeBtn = document.querySelector("#homebtn");
const menuBtn = document.querySelector("#menubtn");
const contactBtn = document.querySelector("#contanctbtn");

menuBtn.addEventListener("click", () => {
    generateMenuPage(card);
})

generateHomePage(card);