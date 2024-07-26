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
        // currentBigPicturecontent.pictureNode.setAttribute("style", "--minimum-height: " + currentBigPicturecontent.pictureNode.height + "px")
        console.log(currentBigPicturecontent.pictureNode.height);
        currentBigPicturecontent.textNode.innerText = text
    }
}
//Todo: Create a video option
//Todo: Expanding images
//Todo: Create a way to put links in the text.
const timeline = {
    leftSemButton: undefined,
    rightSemButton: undefined,
    semText: undefined,
    currentSemester: 0,
    timelineData: [
        {
            title: "Eerste Query",
            text: "19 september 2022 begon mijn avontuur. Ik had nog nooit geprogrammeerd. Wel al vaker mee gespeeld, maar het is natuurlijk wel moeilijk om te beginnen als je niet begrijpt wat '.NET' eigenlijk is... " +
                "Daarom ben ik toch wel met een klein hartje begonnen aan de opleiding. Ik wilde het enorm graag leren, maar ik had het al ene paar keer via Youtube geprobeerd, en dat liep meestal niet goed, of dat was niet uitbreidbaar... " +
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
            title: "Hello world C#",
            text: "Dit was mijn eerste contact met .NET en C#. Ik heb hier eigenlijk enorm veel schrik voor gehad omdat " +
                "dit altijd als het 'buisvak' werd gezien en iedereen rondom mij toch al wat kennis over coderen had. " +
                "Hoewel dit misschien wel wat stress met zich mee bracht, was mijn doel niet veranderd en was ik gedreven om het beste te zijn.",
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
        {
            title: "GamerNamen",
            text: "Dit is de eerste keer dat ik iets buiten de oefeningen heb geprobeerd. We hadden net de replace geleerd bij SQL en " +
                "het leek mij een cool idee om hiermee alle medewerkers hun namen af te printen als gamer tags, dus gamer wordt g4m3r. Dit " +
                "heeft me geleerd om te spelen met de code en er zo meer uit te leren. ",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/Gamername.png",
                        alt: "Een screenshot van een sql-query waar ik namen verander in gamernamen."
                    }
                ],
            alt: "querry",
            date: "22/10/2022",
            sem: 1,
            timelineCategories: [3],
        },
        {
            title: "3D-portfolio",
            text: "Hier ben ik met CSS in contact gekomen met de 3D elementen. Het was een heel gedoe om het aan de praat " +
                "te krijgen met bijvoorbeeld perspectieven etc, maar het zag er enorm nice uit. Het enige jammere was dat het " +
                "3D view van mijn portfolio, mijn portfolio ook weldegelijk kapot maakte. Vandaar heb ik het er uit moeten halen. ",
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
            title: "Snake",
            text: "Mijn leerkracht van C# heeft mij en een medestudent deze game gegeven als een opdracht. " +
                "Dit was omdat wij altijd veel te snel klaar waren met de opdrachten en hij hoopte dat dit ons kon bezighouden. " +
                "Hoewel ik het eigenlijk 1 of 2 dagen later al had, ben ik er zelfstandig een pauze menu en een settings " +
                "menu aan gaan toevoegen. Het was leuk omdat ik hier eigenlijk alles kon gebruiken wat ik geleerd had, " +
                "ook was ik enorm trots dat ik dat kreeg als extra oefening omdat ik “verder” was dan de rest van de klas.  ",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/SnakeGame.png",
                        alt: "snake game"
                    },
                    {
                        imageSource: "assets/FotosTimeline/snake-menu.png",
                        alt: "snake menu"
                    },
                    {
                        imageSource: "assets/FotosTimeline/snake-settings.png",
                        alt: "snake settings"
                    },
                ],
            alt: "snake",
            date: "08/12/2022",
            sem: 1,
            timelineCategories: [2],
        },
        {
            title: "BlackJack",
            text: "Blackjack was mijn eerste zeer complexe applicatie. Je moet hier weten dat ik 4 maanden aan’t coderen " +
                "was en ik dit al had gemaakt. Ik had nog niet eens over een class geleerd. Deze blackjack heeft enorm veel" +
                " mogelijkheden, zoals een sandbox-modus of je kunt de zwarte randen wegdoen, de achtergrond weglaten, split " +
                "altijd toelaten enz. Hij houdt ook de geschiedenis van de laatste 10 (dacht ik) rondjes bij. De opdracht " +
                "zei dat je alleen maar moest laten zien wat je in welke ronden gewonnen of verloren had, maar ik heb het " +
                "gemaakt dat je terug kunt gaan naar hoe de kaarten op dat moment lagen, ik ben iemand die graag de kers op de taart zet. " +
                "Mijn web portfolio en mijn Blackjack opdracht waren samen het eindexamen van WPL1. Ik heb hier een 20/20 op " +
                "gehaald en een van mijn leerkrachten zei dat het echt een unicum was. Dit was ook het moment dat ik met meer " +
                "vertrouwen dan schrik ging coderen. ",
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
            title: "Solitaire",
            text: "Aangezien ik toch de foto’s van de kaarten al op mijn computer had staan, was mijn idee eigenlijk om nog een " +
                "spelletje te maken. Omdat ik toch solitaire aan het spelen was, leek dat mij een goeie keuze. " +
                "Jammer genoeg werkte dit niet en kreeg je dus deze gekke dingen. Ik heb hier wel enorm veel over intersections enz. " +
                "geleerd, dus het was geen weggegooide tijd. Coderen is nooit echt weggegooide tijd. ",
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
            title: "Digitale klok",
            text: "Hoewel de digitale klok misschien niet zo heel geweldig leek. Vond ik het enorm leuk gedaan en vond ik dat het echt leek op een alarmklok, daarom dat het erin moest ",/*Digitale klok is misschien niet echt waaw of moeilijk, but it was a fun project*/
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
            title:"Space Shooters",
            text: "Na de les van het Solitaire spelletje, heb ik geleerd hoe intersections werken. Daarom heb ik daarna geprobeerd om een soort space-shooters spel te maken. " +
                "Het is aardig gelukt alleen ging het enorm traag en ik begreep niet waarom. Nadat ik mijn leerkracht hierover heb gevraagd heeft hij me uitgelegd dat dat " +
                "kwam omdat ik alle lazers aan’t vergelijken was met alle vallende objecten. " +
                "Dit was natuurlijk niet de bedoeling en ik heb toen bedacht om kleine sectoren te maken zodat de lazers alleen maar moesten kijken in hun sector. ",/*space shooters => misschien niet echt visueel aantrekkelijk, maar ik bleef wel de hele tijd de limieten van mijn kennis uittesten*/
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
            title:"High end Hire",
            text: "High end hire is het project van WPL 2, Hier moesten we een verkoperswebsite maken in een groep." +
                " We mochten kiezen tussen HTML,CSS en Javascript, of Vue.js, maar dat hadden we nog nooit gebruikt. Mijn eerste keuze ging dus direct uit naar Vue " +
                "(aangezien ik dan nieuwe dingen kon leren) en hoewel het misschien niet mijn beste werk was, omdat " +
                "er maar 3/5 in ons groepje actief meewerkte, heb ik er zeer fijne herinneringen en ervaring aan overgehouden. ", /*Dit is een project geweest voor WPL2, hier hebben wij met een team van 5 (maar eigenlijk 3) gewerkt aan een website om dingen te verhuren*/
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
            title:"Encryption try",
            text: "Tijdens het maken van de High end Hire site ben ik in contact gekomen met encryptie. Aangezien " +
                "ik wilde weten hoe het werkte en hoe zo iets zou werken ben ik het zelf beginnen maken. Eerst wat gedacht en uitgetekend, en hierna gewoon gecodeerd. " +
                "Het was niet zo eenvoudig als ik dacht dat het ging zijn, maar zeker en vast een leuke uitdaging. " +
                "Hoewel dit project niet echt gewerkt heeft, heb ik veel geleerd over het maken van encryptie. ", /*na de high end hire site, geraakte ik vrij gefascineerd door security en encryptie, hierdoor heb ik er zelf een proberen te maken, dit is jammergenoeg niet gelukt. */
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
        {
            title: "Anifood -Mobile",
            text: "Dit was mijn project voor C# Mobile, Ik heb een App gemaakt waarmee je kunt checken of je huisdier eten heeft gekregen, " +
                "hoe vaak die eten heeft gekregen en hoe lang je nog met de zak eten zou komen. Je kunt er ook verschillende families in hebben. " +
                "Wanneer er een actie wordt uitgevoerd, zoals een dier eten geven of toevoegen, een gezin verlaten, inloggen, een account maken... " +
                "wordt een achterliggende database (gemaakt met Entity Framework) geüpdate via mijn API. Ik heb in dit project ook gefocust op accessibility voor bijv screenreaders etc. " +
                "Meer informatie en een complete rundown van de app kun je in deze video zien (je moet het wel even kopiëren en plakken): \n\nhttps://youtu.be/n-W7a24X_3Y",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/Anifood/MainPage1.png",
                        alt: "Anifood overview"
                    },
                    {
                        imageSource: "assets/FotosTimeline/Anifood/MainPage2.png",
                        alt: "Anifood overview"
                    },
                    {
                        imageSource: "assets/FotosTimeline/Anifood/AnimalDetailPage.png",
                        alt: "Anifood overview"
                    },
                    {
                        imageSource: "assets/FotosTimeline/Anifood/FamilySettingsOverview2.png",
                        alt: "Anifood overview"
                    },
                    {
                        imageSource: "assets/FotosTimeline/Anifood/FamilySettings.png",
                        alt: "Anifood overview"
                    },
                    {
                        imageSource: "assets/FotosTimeline/Anifood/CreateFoodSelectFamilyAndPet.png",
                        alt: "Anifood overview"
                    },
                ],
            alt: "",
            date: "08/01/2024",
            sem: 3,
            timelineCategories: [2],
        },
        {
            title:"Beats perfect - Groepswerk",
            text: "Deze website was een groepswerk voor C# web, we moesten een website maken met MVC en Blazor. " +
                "Hierin hebben we ook een API geschreven die de stock regelt en kon je inloggen met Google, facebook..." +
                "De website is geschreven met MVC, Blazor en Identity framework.",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/MVCWebsite/webMVC2.png",
                        alt: "A website with guitars"
                    },
                    {
                        imageSource: "assets/FotosTimeline/MVCWebsite/webmvc3.png",
                        alt: "A login page"
                    },
                ],
            alt: "",
            date: "16/04/2024",
            sem: 4,
            timelineCategories: [1,2],
        },
        {
            title:"Eindwerk",
            text: "De vraag vanuit mijn stageplaats was om 'de resultaten van de compliance checker (een software dat ik in mijn stage heb gemaakt) weer te geven in Power BI.' " +
                "Aangezien ik altijd het kerstje op de taart wil, heb ik gezegd 'Jazeker, In Real-Time!' 'Terwijl ik Blazor vergelijk met React...' Ik heb mij daar een beetje in mispakt. " +
                "Iets teveel hooi op mijn vork genomen, maar het is mij gelukt. Een 19/20 voor mijn eindwerk vind ik toch een heel mooi cijfer. " +
                "Voor de volledige graduaatsproef kun je me altijd een mailtje sturen en dan stuur ik ze met plezier door, ik ben er ook enorm trots op :D. "+
                "De eerste foto is mijn interface in React, de 2e is dezelfde in Blazor, de 3e en 4e foto's zijn de bijbehorende stroomdiagrammen die ik heb gemaakt om " +
                "uit te leggen hoe mijn applicatie in elkaar zit. Ik zou hier uren over kunnen doorpraten om eerlijk te zijn, dus als je nog vragen hebt leg ik ze met plezier uit." +
                "\n \n" +
                "P.S: Het besef dat ik SignalR ook kon gebruiken in React is pas later in het process gekomen, hierdoor heb ik het niet kunnen toevoegen.",
            imgSources:
                [
                    {
                        imageSource: "assets/FotosTimeline/Eindwerk/Eindwerk_Res.png",
                        alt: "de interface van de compliance checker in React."
                    },
                    {
                        imageSource: "assets/FotosTimeline/Eindwerk/Eindwerk_Res_blazor.png",
                        alt: "de interface van de compliance checker in Blazor."
                    },
                    {
                        imageSource: "assets/FotosTimeline/Eindwerk/schema_react.png",
                        alt: "de Werking van de React integratie"
                    },
                    {
                        imageSource: "assets/FotosTimeline/Eindwerk/schema_blazor.png",
                        alt: "de werking van de Blazor integratie"
                    },
                ],
            alt: "",
            date: "03/06/2024",
            sem: 4,
            timelineCategories: [1,2],
        },

        /*
        {
            title:" ",
            text: "under construction",
            imgSources:
                [
                    {
                        imageSource: "",
                        alt: ""
                    },
                ],
            alt: "",
            date: "08/01/2024",
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
        let title = document.createElement("h3");
        let imageNode = createImage(pic.imgSources[0]);
        let textNode = document.createElement("p");

        timelinePictures.appendChild(container);
        container.appendChild(title);
        container.appendChild(imageNode);
        container.appendChild(textNode);
        container.classList.add("small-timeline-image-container");
        textNode.textContent = pic.date;
        title.textContent = pic.title;

        container.addEventListener("click", () => setBigPicture(pic))
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
        localStorage.setItem("darkMode", "true");
        toggleDarkmode();
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

    // for (let i = 0; i < pijltje.length; i++) {
    //     pijltje[i].addEventListener("click", uitklappen)
    // }
    for (let i = 0; i < vertaal.length; i++) {
        vertaal[i].addEventListener("click", vertaalPagina)
    }
    if (!localStorage.getItem("hadAlert")) {

        setTimeout(() =>
            alert("Eerst en vooral dankjewel om mijn cv online te bekijken :D, jammergenoeg is deze site is momenteel in de vroege béta, dus problemen of bugs kunnen voorkomen. Voor het beste resultaat, kun je het best bekijken op een computer. \n\n First and foremost, thank you for taking the time to look at my cv online :D, sadly it's only an early bèta version, so problems or bugs may occur. For the best user-experience, use a computer."), 1500);
        localStorage.setItem("hadAlert", "true");
    }
    darkModeCheck();
    createTimelineImages(timeline.timelineData);
});