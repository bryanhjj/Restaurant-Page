function addP(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
};

function aboutUs() {
    const about = document.createElement("div");
    about.classList.add("about-us");
    about.id = "about-us";

    const odinImg = document.createElement("img");
    odinImg.src = "../assets/odin.jpg";
    odinImg.alt = "A picture of Odin.";

    about.appendChild(odinImg);
    about.appendChild(addP("During c. 5 BCE, our lord Odin grew tired of the inadequate cooking and offerings from his followers and decided to take matters into his own hands."));
    about.appendChild(addP("And thus, begins our lords' culinary career"));
    about.appendChild(addP("Have a taste of our famous mead, or our prized smoked sheep meat so delicious it's as if your tastebuds have transcended to Valhalla!"));
    about.appendChild("Come visit us or order online today!");

    return about;
};

function aboutUsLoader() {
    const content = document.getElementById("content");
    content.appendChild(aboutUs());
};

export default aboutUsLoader;