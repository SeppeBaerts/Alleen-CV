let darkmodeButton;
let pijltje;
let vertaal;
let hamburgerButton;
let bigPicture;
let timelinePictures;
let leftText;
let rightText;
const currentBigPicturecontent = {
    pictureArray: undefined,
    currentPicture: 0,
    containerDiv: undefined,
    pictureNode: undefined,
    hasMultiplePictures: function () {
        return this.pictureArray.length > 1
    },
    textNode: undefined,
    leftArrow: undefined,
    rightArrow: undefined,


    initialize: function () {

        currentBigPicturecontent.textNode = document.getElementById("pictureTimelineText");
        currentBigPicturecontent.leftArrow = document.getElementById("left-img-arrow");
        currentBigPicturecontent.rightArrow = document.getElementById("right-img-arrow");
        currentBigPicturecontent.pictureNode = document.getElementById("bigTimelinePicture");
        currentBigPicturecontent.containerDiv = document.getElementById("big-image-container");

        currentBigPicturecontent.leftArrow.addEventListener("click", currentBigPicturecontent.prevPicture);
        currentBigPicturecontent.rightArrow.addEventListener("click", currentBigPicturecontent.nextPicture);

    },
    closeBigPicture() {
        document.getElementById("big-image-container").classList.add("disabled");
        document.getElementById("image-timeline-container").classList.remove("disabled");
    },
    nextPicture: function () {
        currentBigPicturecontent.currentPicture = Math.min(currentBigPicturecontent.pictureArray.length - 1, currentBigPicturecontent.currentPicture + 1);
        currentBigPicturecontent.changePicture();
    },
    prevPicture: function () {
        currentBigPicturecontent.currentPicture = Math.max(0, currentBigPicturecontent.currentPicture - 1);
        currentBigPicturecontent.changePicture();
    },
    changePicture: function () {
        if (!currentBigPicturecontent.hasMultiplePictures()) {
            currentBigPicturecontent.leftArrow.classList.add("no-pressing");
            currentBigPicturecontent.rightArrow.classList.add("no-pressing");
        } else {
            currentBigPicturecontent.leftArrow.classList.remove("no-pressing");
            currentBigPicturecontent.rightArrow.classList.remove("no-pressing");
        }

        currentBigPicturecontent.pictureNode.src = currentBigPicturecontent.pictureArray[currentBigPicturecontent.currentPicture].imageSource;
        currentBigPicturecontent.pictureNode.alt = currentBigPicturecontent.pictureArray[currentBigPicturecontent.currentPicture].alt;
    },
    changePictureArray: function (newPictureArray, text) {
        document.getElementById("big-image-container").classList.remove("disabled");
        document.getElementById("image-timeline-container").classList.add("disabled");
        currentBigPicturecontent.pictureNode.setAttribute("style", "--minimum-height: 0");
        currentBigPicturecontent.pictureArray = newPictureArray;
        currentBigPicturecontent.currentPicture = 0;
        currentBigPicturecontent.changePicture();
        currentBigPicturecontent.pictureNode.setAttribute("style", "--minimum-height: " + currentBigPicturecontent.pictureNode.height + "px")
        console.log(currentBigPicturecontent.pictureNode.height);
        currentBigPicturecontent.textNode.innerText = text
    }
}
const timeline = {
    leftSemButton: undefined,
    rightSemButton: undefined,
    semText: undefined,
    currentSemester: 0,
    timelineData: [
        {
            text: "19 september 2022 begon mijn avontuur. Ik had nog nooit code geprogrammeerd. Wel al zeer veel mee gespeeld, maar het is natuurlijk wel moeilijk om te beginnen als je niet begrijpt wat '.NET' eigenlijk is... " +
                "Daarom ben ik toch wel met een klein hartje begonnen aan de opleiding. Ik wilde het enorm graag leren, maar ik had het al ene paar keer via Youtube geprobeerd, en dat liep meestal niet goed, of dat was niet uitbreidbaar..." +
                "Het klinkt misschien gek, maar ik herinner mij nog dat ik mijn eerste querry schreef en dacht 'Dit resultaat is er door mij gekomen... IK heb dit gedaan...' en opeens gingen alle zorgen weg en zag ik mijzelf iets " +
                "waarvan ik gisteren niet had kunnen hopen, het was zo een euphorisch gevoel, zo een brandend gevoel, ik zit dit ook met een glimlach te schrijven omdat ik er alleen maar aan terugdenk.",
            imgSources: [
                {
                    imageSource: "assets/FotosTimeline/Mijn%20eerste%20querry.png",
                    alt: "een foto van mijn eerste querry, het gaat als volgt: 'select * from medewerkers"
                },
            ],
            alt: "een foto van mijn eerste querry, het gaat als volgt: 'select * from medewerkers",
            date: "19/09/2022",
            sem: 1,
            timelineCategories: [3],
        },
        {
            text: "Dit was mijn eerste contact met .NET en C#. Ik heb hier eigenlijk enorm veel schrik voor gehad omdat dit altijd als het 'buisvak' werd gezien en iedereen rondom mij toch al wat kennis over coderen had. ",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/MijnEersteDotNetApplicatie.png",
                        alt: "Een foto van code die ervoor zorgt dat een knop, 'welkom in de wereld van C#' gaat zetten op het scherm"
                    }
                ],

            alt: "Een foto van code die ervoor zorgt dat een knop, 'welkom in de wereld van C#' gaat zetten op het scherm",
            date: "22/09/2022",
            sem: 1,
            timelineCategories: [2],
        },
        // {
        //     leftText: "under construction",
        //     rightText: "",
        //     imgSources: "assets/FotosTimeline/het_resultaat.png",
        //     alt: "table dude",
        //     date: "12/10/2022",
        // },
        {
            text: "under construction",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/Gamername.png",
                        alt: "querry"
                    }
                ],
            alt: "querry",
            date: "22/10/2022",
            sem: 1,
            timelineCategories: [3],
        },
        {
            text: "under construction",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/Portfolio_3D_tryout_Dec1.png",
                        alt: "3D portfolio"
                    }
                ],
            alt: "3D portfolio",
            date: "01/12/2022",
            sem: 1,
            timelineCategories: [1],
        },
        {
            text: "under construction",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/SnakeGame.png",
                        alt: "snake game"
                    },
                    {
                        imageSource: "assets/FotosTimeline/snake-menu.png",
                        alt: "snake"
                    },
                    {
                        imageSource: "assets/FotosTimeline/snake-settings.png",
                        alt: "snake"
                    },
                ],
            alt: "snake",
            date: "08/12/2022",
            sem: 1,
            timelineCategories: [2],
        },
        {
            text: "under construction",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/BlackJack.png",
                        alt: "Blackjack"
                    },
                    {
                        imageSource: "assets/FotosTimeline/blackjack0.png",
                        alt: "Blackjack"
                    },
                    {
                        imageSource: "assets/FotosTimeline/blackjack1.png",
                        alt: "Blackjack"
                    },
                    {
                        imageSource: "assets/FotosTimeline/blackjack2.png",
                        alt: "Blackjack"
                    },
                    {
                        imageSource: "assets/FotosTimeline/blackjack3.png",
                        alt: "Blackjack"
                    },
                ],
            alt: "Blackjack",
            date: "06/01/2023",
            sem: 1,
            timelineCategories: [2],
        },
        {
            text: "", /*Hier dacht ik "ik heb toch al de kaarten, what could go wrong. Het is me op dat moment niet gelukt*/
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/solitaire_tryout.png",
                        alt: "Solitaire mislukt"
                    }
                ],
            alt: "Solitaire, mislukt",
            date: "04/02/2023",
            sem: 2,
            timelineCategories: [2],
        },
        {
            text: "",/*Digitale klok is misschien niet echt waaw of moeilijk, but it was a fun project*/
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/digitale_klok.png",
                        alt: "Digitale klok"
                    }
                ],
            alt: "Digitale klok",
            date: "21/03/2023",
            sem: 2,
            timelineCategories: [2],
        },
        {
            text: "",/*space shooters => misschien niet echt visueel aantrekkelijk, maar ik bleef wel de hele tijd de limieten van mijn kennis uittesten*/
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/space_shooters.png",
                        alt: "Space shooters"
                    }
                ],
            alt: "Space shooters",
            date: "27/03/2023",
            sem: 2,
            timelineCategories: [2],
        },
        {
            text: "", /*Dit is een project geweest voor WPL2, hier hebben wij met een team van 5 (maar eigenlijk 3) gewerkt aan een website om dingen te verhuren*/
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/high_end_hire.png",
                        alt: "High end hire site"
                    }
                ],
            alt: "High end hire site. ",
            date: "04/06/2023",
            sem: 2,
            timelineCategories: [1],
        },
        {
            text: "", /*na de high end hire site, geraakte ik vrij gefascineerd door security en encryptie, hierdoor heb ik er zelf een proberen te maken, dit is jammergenoeg niet gelukt. */
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/Encryption_try.png",
                        alt: "Encryption probeersel, maar mislukt"
                    }
                ],
            alt: "Encryption probeersel, maar mislukt",
            date: "13/06/2023",
            sem: 2,
            timelineCategories: [2],
        },

        /*
        {
            text: "under construction",
            imgSources:
                [
                    {
                        imageSource: "",
                        alt: ""
                    },
                ],
            alt: "",
            date: "08/12/2023",
            sem: 3,
            timelineCategories: [2],
        },
        */
    ],
    initialize: function () {

        timeline.leftSemButton = document.getElementById("left-sem-button")
        timeline.rightSemButton = document.getElementById("right-sem-button");
        timeline.semText = document.getElementById("sem-text");
        timeline.leftSemButton.addEventListener("click", timeline.prevSemester);
        timeline.rightSemButton.addEventListener("click", timeline.nextSemester);
    },
    nextSemester: function () {
        timeline.currentSemester = Math.min(4, timeline.currentSemester + 1);
        timeline.semText.innerText = "semester " + timeline.currentSemester;
        timeline.applyFilter();
    },
    prevSemester: function () {
        timeline.currentSemester = Math.max(0, timeline.currentSemester - 1);
        timeline.semText.innerText = timeline.currentSemester === 0 ? "All" : "Semester " + timeline.currentSemester;
        timeline.applyFilter();
    },
    applyFilter() {
        createTimelineImages(timeline.currentSemester === 0 ? timeline.timelineData : timeline.getTimeBySem(timeline.currentSemester));
    },
    getTimeByCategorie: function (category) {
        return timeline.timelineData.filter(m => m.timelineCategories.some(t => t === category));
    },
    getTimeBySem: function (semester) {
        return timeline.timelineData.filter(m => m.sem === semester);
    },
}
const timelineCategories = {
    1: "Web design",
    2: "C#",
    3: "SQL",
}

/*
*********************
* Timeline functions
*********************
*/

function createTimelineImages(timelineArray) {
    console.log(timelinePictures.childNodes);
    timelinePictures.innerHTML = "";
    for (let pic of timelineArray) {
        let container = document.createElement("div");
        let imageNode = createImage(pic.imgSources[0]);
        let textNode = document.createElement("p");

        timelinePictures.appendChild(container);
        container.appendChild(imageNode);
        container.appendChild(textNode);
        container.classList.add("small-timeline-image-container");

        textNode.textContent = pic.date;

        imageNode.addEventListener("click", () => setBigPicture(pic))
    }
    // setBigPicture(timelineArray[0]);
}

function createImage(imgSource) {
    let imageNode = document.createElement("img");
    imageNode.src = imgSource.imageSource;
    imageNode.alt = imgSource.alt;
    return imageNode;
}

function setBigPicture(pic) {
    currentBigPicturecontent.changePictureArray(pic.imgSources, pic.text);
    // bigPicture.setAttribute("src", pic.imgSource);
    // leftText.textContent = pic.leftText
    // rightText.textContent = pic.rightText
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
    targetButton.ariaExpanded = targetButton.ariaExpanded === "true" ? "false" : "true";
}

function darkModeClick() {
    localStorage.setItem("darkMode", localStorage.getItem("darkMode") === "true" ? "false" : "true");
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
    document.getElementById("hamburgerbutton").addEventListener("click", () => toggleAreaExpanded(hamburgerButton));
    document.getElementById("hamburgerbutton").addEventListener("click", toggleNavbar);

    currentBigPicturecontent.initialize();
    timeline.initialize();

    document.getElementById("back-button").addEventListener("click", currentBigPicturecontent.closeBigPicture)

    for (let i = 0; i < pijltje.length; i++) {
        pijltje[i].addEventListener("click", uitklappen)
    }
    for (let i = 0; i < vertaal.length; i++) {
        vertaal[i].addEventListener("click", vertaalPagina)
    }
    if (!localStorage.getItem("hadAlert")) {

        setTimeout(() =>
            alert("Eerst en vooral dankjewel om mijn cv online te bekijken :D, jammergenoeg is deze site is momenteel in de vroege béta. Voor het beste resultaat, kun je het best bekijken op een computer. \n\n First and foremost, thank you for taking the time to look at my cv online :D, sadly it's only an early bèta version. For the best user-experience, use a computer."), 1500);
        localStorage.setItem("hadAlert", "true");
    }
    darkModeCheck();
    createTimelineImages(timeline.timelineData);
});