let darkmodeButton;
let pijltje;
let vertaal;
let hamburgerButton;
let bigPicture;
let timelinePictures;
let leftText;
let rightText;
//TODO: use media querry to put left and right text below each other.
const pictureTimeline = [
    {
        leftText: "19 september 2022 begon mijn avontuur. Ik had nog nooit code geprogrammeerd. Wel al zeer veel mee gespeeld, maar het is natuurlijk wel moeilijk om te beginnen als je niet begrijpt wat '.NET' eigenlijk is... " +
            "Daarom ben ik toch wel met een klein hartje begonnen aan de opleiding. Ik wilde het enorm graag leren, maar ik had het al ene paar keer via Youtube geprobeerd, en dat liep meestal niet goed, of dat was niet uitbreidbaar...",
        rightText: "Het klinkt misschien gek, maar ik herinner mij nog dat ik mijn eerste querry schreef en dacht 'Dit resultaat is er door mij gekomen... IK heb dit gedaan...' en opeens gingen alle zorgen weg en zag ik mijzelf iets " +
            "waarvan ik gisteren niet had kunnen hopen, het was zo een euphorisch gevoel, zo een brandend gevoel, ik zit dit ook met een glimlach te schrijven omdat ik er alleen maar aan terugdenk",
        imgSource: "assets/FotosTimeline/Mijn%20eerste%20querry.png",
        alt: "altTest",
        date: "19/09/2022"
    },
    {
        leftText: "Dit was mijn eerste contact met .NET en C#. Ik heb hier eigenlijk enorm veel schrik voor gehad omdat dit altijd als het 'buisvak' werd gezien en iedereen rondom mij toch al wat kennis over coderen had. ",
        rightText: "This is the second right text",
        imgSource: "assets/FotosTimeline/MijnEersteDotNetApplicatie.png",
        alt: "secondAltTest",
        date: "22/09/2022"
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
    darkmodeButton = document.getElementById("darkModeButton");
    pijltje = document.getElementsByClassName("pijltje");
    vertaal = document.getElementsByClassName("vertaal")
    hamburgerButton = document.getElementById("hamburgerbutton");
    bigPicture = document.querySelector("#bigTimelinePicture");
    timelinePictures = document.getElementById("timelinePictures");
    leftText = document.querySelector("#pictureTimelineLeftText");
    rightText = document.querySelector("#pictureTimeLineRightText");

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
    if(!localStorage.getItem("hadAlert")){

           setTimeout(() =>
           alert("Eerst en vooral dankjewel om mijn cv online te bekijken :D, jammergenoeg is deze site is momenteel in de vroege béta. Voor het beste resultaat, kun je het best bekijken op een computer. \n\n First and foremost, thank you for taking the time to look at my cv online :D, sadly it's only an early bèta version. For the best user-experience, use a computer."),1500);
           localStorage.setItem("hadAlert", "true");
    }
    darkModeCheck();
    createTimelineImages();
});