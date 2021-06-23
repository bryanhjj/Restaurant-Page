function addP(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
};


function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    home.id = "home";

    home.appendChild(addP("The best restaurant in Asgard!"));
    home.appendChild(addP("Founded by our lord Odin himself!"));

    return home;
};

function homeLoader() {
    const content = document.getElementById("content");
    content.appendChild(createHome());
};

export default homeLoader;