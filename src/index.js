import navBarLoader from "./navbar";
import homeLoader from "./home";
import aboutUsLoader from "./aboutUs";
import contactUsLoader from "./contactUs";

function createHeader() {
    const header = document.createElement("header");
    const buttonContainer = document.getElementById("button-container");
    header.classList.add("header");
    header.textContent = "The Odin Restaurant";
    buttonContainer.appendChild(header);
};

function divInitialize() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    createHeader();
    navBarLoader(); 
};

divInitialize();

const homeButton = document.querySelector(".home");
const aboutUsButton = document.querySelector(".about-us");
const contactUsButton = document.querySelector(".contact-us");

homeButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    homeLoader();
});

aboutUsButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    aboutUsLoader();
});

contactUsButton.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    contactUsLoader();
});