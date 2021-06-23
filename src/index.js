import navBarLoader from "./navbar";
import homeLoader from "./home";
import aboutUsLoader from "./aboutUs";
import contactUsLoader from "./contactUs";

navBarLoader();

const homeButton = document.querySelector(".home");
const aboutUsButton = document.querySelector(".about-us");
const contactUsButton = document.querySelector(".contact-us");

homeButton.addEventListener("click", () => {
    homeLoader();
});

aboutUsButton.addEventListener("click", () => {
    aboutUsLoader();
});

contactUsButton.addEventListener("click", () => {
    contactUsLoader();
});