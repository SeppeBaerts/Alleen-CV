let darkmodeButton;
let isExpanded;
let pijltje = document.getElementsByClassName("pijltje")
let vertaal = document.getElementsByClassName("vertaal")
let backToTop = document.getElementsByClassName("footer-right")
let button = document.getElementById("hamburgerbutton");
const bigPicture = document.querySelector("#bigTimelinePicture");
let timelinePictures = document.getElementById("timelinePictures");
let leftText = document.querySelector("#pictureTimelineLeftText");
let rightText = document.querySelector("#pictureTimeLineRightText");
const pictureTimeline = [
    {
        leftText: "This is the first left text",
        rightText: "This is the first right text",
        imgSource: "assets/FotosTimeline/MijnEersteDotNetApplicatie.png",
        alt: "altTest",
        date:"26/08/2023"
    },
    {
        leftText: "This is the second left text",
        rightText: "This is the second right text",
        imgSource: "assets/FotosTimeline/Mijn%20eerste%20querry.png",
        alt: "secondAltTest",
        date:"13/09/2023"
    },
]



document.getElementById("darkmode").addEventListener("click", darkModeClick)
document.getElementById("DarkModeButton").addEventListener("click", darkModeClick)
document.getElementById("hamburgerbutton").addEventListener("click", expandArea);
document.getElementById("hamburgerbutton").addEventListener("click", toggleNavbar);


function createTimelineImages() {
    for (let pic of pictureTimeline) {
        let container = document.createElement("div");
        let imageNode = document.createElement("img");
        let textNode = document.createElement("p");
        
        container.appendChild(imageNode);
        container.appendChild(textNode);
        container.classList.add("small-timeline-image-container");
        
        textNode.textContent = pic.date;
        imageNode.src = pic.imgSource;
        imageNode.alt = pic.alt;
        imageNode.addEventListener("click",() => setBigPicture(pic))
        timelinePictures.appendChild(container);
    }
    setBigPicture(pictureTimeline[0]);

}
function setBigPicture(pic){
    bigPicture.setAttribute("src", pic.imgSource);
    leftText.textContent = pic.leftText
    rightText.textContent = pic.rightText
}

for (let i = 0; i < 2; i++) {
    pijltje[i].addEventListener("click", uitklappen)
}

// backToTop[0].ariaExpanded.replace("true", "false")
for (let i = 0; i < vertaal.length; i++) {
    vertaal[i].addEventListener("click", vertaalPagina)
}
// pijltje[2].addEventListener("click", hideFooter)
backToTop[0].addEventListener("click", goToTop)
backToTop[1].addEventListener("click", goToTop)

document.body.onload = function () {
    darkmodeButton = document.getElementById("DarkModeButton")
    darkModeCheck();
}

function darkModeCheck() {

    if (!localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", "false");
    } else if (localStorage.getItem("darkMode") === "true") {
        ToggleDarkMode();
    }
}

function ToggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (darkmodeButton.ariaExpanded === "true") {
        darkmodeButton.ariaExpanded = "false";
    } else {
        darkmodeButton.ariaExpanded = "true"
    }
}

function expandArea() {
    if (isExpanded === true) {
        button.ariaExpanded = "false";
        isExpanded = false;
    } else {
        button.ariaExpanded = "true";
        isExpanded = true;
    }
}

function darkModeClick() {
    if (localStorage.getItem("darkMode") === "true") {
        localStorage.setItem("darkMode", "false");
        ToggleDarkMode();
    } else if (localStorage.getItem("darkMode") === "false") {
        localStorage.setItem("darkMode", "true");
        ToggleDarkMode();
    }
}

function goToTop() {
    window.location.href = '#top'
}

function uitklappen() {
    document.getElementById("vaardigheden").classList.toggle("hogerartiekel");
    document.getElementById("pijltje").classList.toggle("rotateup");
    document.getElementById("pijltje").classList.toggle("rotatedown");
    document.getElementById("pijltje2").classList.toggle("rotateup");
    document.getElementById("pijltje2").classList.toggle("rotatedown");
    document.getElementById("talen").classList.toggle("hogerartiekel")
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
    let navbar = document.getElementById('nav')
    navbar.classList.toggle('show')
    navbar.classList.toggle('hide')
}

createTimelineImages();


// function expandArea(){
// // OWDAMN THIS WORKS
//   if(isExpanded === true){
//     button.ariaExpanded = "false";
//     isExpanded = false;
//   }
//   else{
//     button.ariaExpanded = "true";
//     isExpanded = true;
//   }
// }
// function hideFooter(){
//     let footer = document.getElementById("footer");
//     footer.classList.toggle()
// }