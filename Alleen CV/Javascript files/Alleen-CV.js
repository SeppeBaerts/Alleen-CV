let pijltje = document.getElementsByClassName("pijltje")
let vertaal = document.getElementsByClassName("vertaal")
let backToTop = document.getElementsByClassName("footer-right")
let darkmodeButton;
let button = document.getElementById("hamburgerbutton");
let isExpanded;
document.getElementById("darkmode").addEventListener("click", darkModeClick)
document.getElementById("DarkModeButton").addEventListener("click", darkModeClick)
document.getElementById("hamburgerbutton").addEventListener("click", expandArea);
document.getElementById("hamburgerbutton").addEventListener("click", toggleNavbar);


for (let i = 0; i < 2; i++){
    pijltje[i].addEventListener("click", uitklappen)
}

// backToTop[0].ariaExpanded.replace("true", "false")
for (let i = 0; i < vertaal.length; i++){
        vertaal[i].addEventListener("click", vertaalPagina)
}
// pijltje[2].addEventListener("click", hideFooter)
backToTop[0].addEventListener("click", goToTop)
backToTop[1].addEventListener("click", goToTop)

document.body.onload = function (){
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
  if (darkmodeButton.ariaExpanded === "true"){
    darkmodeButton.ariaExpanded = "false";
  }
  else {
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
function goToTop(){
    window.location.href = '#top'}
function uitklappen(){
  document.getElementById("vaardigheden").classList.toggle("hogerartiekel");
  document.getElementById("pijltje").classList.toggle("rotateup");
  document.getElementById("pijltje").classList.toggle("rotatedown");
  document.getElementById("pijltje2").classList.toggle("rotateup");
  document.getElementById("pijltje2").classList.toggle("rotatedown");
  document.getElementById("talen").classList.toggle("hogerartiekel")
}
function vertaalPagina(){
  const engelsTalig = document.getElementsByClassName("engels");
  const nederlandsTalig = document.getElementsByClassName("nederlands");
  for (let i=0; i < engelsTalig.length; i++){
    engelsTalig[i].classList.toggle("disabled");
    nederlandsTalig[i].classList.toggle("disabled");
  }
}
function toggleNavbar(){
  let navbar = document.getElementById('nav')
  navbar.classList.toggle('show')
  navbar.classList.toggle('hide')
}

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