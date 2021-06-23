function createNavBar() {
    const navBar = document.createElement("nav");
    navBar.classList.add("navBar");

    const home = document.createElement("button");
    const aboutUs = document.createElement("button");
    const contactUs = document.createElement("button");

    home.innerHTML = "Home";
    aboutUs.innerHTML = "About Us";
    contactUs.innerHTML = "Contact Us";

    home.classList.add("home");
    aboutUs.classList.add("about-us");
    contactUs.classList.add("contact-us");

    /* initially the plan was just to create links to specific sections of the same webpage, change of plans 
    home.href = "#home";
    aboutUs.href = "#about-us";
    contactUs.href = "#contact-us";
    */

    navBar.appendChild(home);
    navBar.appendChild(aboutUs);
    navBar.appendChild(contactUs);

    return navBar;
};

function navBarLoader() {
    const content = document.getElementById("content");
    content.appendChild(createNavBar());
};

export default navBarLoader;