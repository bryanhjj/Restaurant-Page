function createNavBar() {
    const navBar = document.createElement("nav");
    navBar.classList.add("navBar");

    const home = document.createElement("a");
    const menu = document.createElement("a");
    const aboutUs = document.createElement("a");
    const contactUs = document.createElement("a");

    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    aboutUs.innerHTML = "About Us";
    contactUs.innerHTML = "Contact Us";

    // to update once the sections' id are defined
    home.href = "#home";
    menu.href = "#menu";
    aboutUs.href = "#about-us";
    contactUs.href = "#contact-us";

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(aboutUs);
    navBar.appendChild(contactUs);

    return navBar;
};

function navBarLoader() {
    const content = document.getElementById("content");
    content.appendChild(createNavBar());
};

export default navBarLoader;