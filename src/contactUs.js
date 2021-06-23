function addP(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
};

function contactUs() {
    const contact = document.createElement("div");
    contact.classList.add("contact-us");
    contact.id = "contact-us";

    const location = document.createElement("img");
    location.src = "../assets/asgard.jpg";
    location.alt = "A map showing where our restaurant is located."

    contact.appendChild(addP("Phone: 012 345 678"));
    contact.appendChild(addP("Email: odinrestaurant@asgard.com"));
    contact.appendChild(location);

    return contact;
};

function contactUsLoader() {
    const content = document.getElementById("content");
    content.appendChild(contactUs());
};

export default contactUsLoader;