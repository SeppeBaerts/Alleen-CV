let darkmodeButton;
let pijltje = document.getElementsByClassName("pijltje")
let vertaal = document.getElementsByClassName("vertaal")
// let backToTop = document.getElementsByClassName("footer-right")
let hamburgerButton = document.getElementById("hamburgerbutton");
const bigPicture = document.querySelector("#bigTimelinePicture");
let timelinePictures = document.getElementById("timelinePictures");
let leftText = document.querySelector("#pictureTimelineLeftText");
let rightText = document.querySelector("#pictureTimeLineRightText");
//TODO: use media querry to put left and right text below each other.
const pictureTimeline = [
    {
        leftText: "This is the first left text",
        rightText: "This is the first right text",
        imgSource: "assets/FotosTimeline/MijnEersteDotNetApplicatie.png",
        alt: "altTest",
        date: "26/08/2023"
    },
    {
        leftText: "This is the second left text",
        rightText: "This is the second right text",
        imgSource: "assets/FotosTimeline/Mijn%20eerste%20querry.png",
        alt: "secondAltTest",
        date: "13/09/2023"
    },
]


/*
*********************
* Timeline functions
*********************
*/

function createTimelineImages() {
    for (let pic of pictureTimeline) {
        let container = document.createElement("div");
        let imageNode = document.createElement("img");
        let textNode = document.createElement("p");

        timelinePictures.appendChild(container);
        container.appendChild(imageNode);
        container.appendChild(textNode);
        container.classList.add("small-timeline-image-container");

        textNode.textContent = pic.date;
        imageNode.src = pic.imgSource;
        imageNode.alt = pic.alt;
        imageNode.addEventListener("click", () => setBigPicture(pic))
    }
    setBigPicture(pictureTimeline[0]);

}

function setBigPicture(pic) {
    bigPicture.setAttribute("src", pic.imgSource);
    leftText.textContent = pic.leftText
    rightText.textContent = pic.rightText
}

function darkModeCheck() {
    if (!localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", "false");
    } else if (localStorage.getItem("darkMode") === "true") {
        toggleDarkmode();
    }
}

function toggleDarkmode() {
    document.body.classList.toggle("dark-mode");
    toggleAreaExpanded(darkmodeButton)
}

function toggleAreaExpanded(targetButton) {
    targetButton.ariaExpanded = targetButton.ariaExpanded === "true"? "false" : "true";
}

function darkModeClick() {
    localStorage.setItem("darkMode", localStorage.getItem("darkMode") === "true"? "false" : "true");
    toggleDarkmode();
}

function uitklappen() {
    document.getElementById("vaardigheden").classList.toggle("hogerartiekel");
    document.getElementById("talen").classList.toggle("hogerartiekel")
    document.getElementById("pijltje").classList.toggle("rotateup");
    document.getElementById("pijltje").classList.toggle("rotatedown");
    document.getElementById("pijltje2").classList.toggle("rotateup");
    document.getElementById("pijltje2").classList.toggle("rotatedown");
}

function vertaalPagina() {
    const engelsTalig = document.getElementsByClassName("engels");
    const nederlandsTalig = document.getElementsByClassName("nederlands");
    for (let i = 0; i < engelsTalig.length; i++) {
        engelsTalig[i].classList.toggle("disabled");
        nederlandsTalig[i].classList.toggle("disabled");
    }
}

function toggleNavbar() {
    let navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.toggle('show')
    navbar.classList.toggle('hide')
}

window.addEventListener("load", () => {
    darkmodeButton = document.getElementById("darkModeButton")

    darkmodeButton.addEventListener("click", darkModeClick)
    document.getElementById("darkmode").addEventListener("click", darkModeClick)
    document.getElementById("hamburgerbutton").addEventListener("click", ( ) => toggleAreaExpanded(hamburgerButton));
    document.getElementById("hamburgerbutton").addEventListener("click", toggleNavbar);

    for (let i = 0; i < pijltje.length; i++) {
        pijltje[i].addEventListener("click", uitklappen)
    }
    for (let i = 0; i < vertaal.length; i++) {
        vertaal[i].addEventListener("click", vertaalPagina)
    }

    darkModeCheck();
    createTimelineImages();
});