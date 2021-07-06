// Specifying buttons
funButton = document.querySelector(`.fun`);
mountainButton = document.querySelector(`.mountain`)
islandButton = document.querySelector(`.island`);
divs = document.querySelectorAll(`.destination`)
for (let i = 0; i < divs.length; i++){
    divs[i] = document.querySelector(`.destination:nth-of-type(${i + 1})`)
}
// Mouse Enter and Leave
function colorTo (event){
    divs[0].style.background = `blue`;
    divs[1].style.background = `green`;
    divs[2].style.background = `cyan`;
}
function colorBack (event){
    divs[0].style.background = `white`;
    divs[1].style.background = `white`;
    divs[2].style.background = `white`;
}
funButton.addEventListener(`mouseenter`, colorTo);
mountainButton.addEventListener(`mouseenter`, colorTo);
islandButton.addEventListener(`mouseenter`, colorTo);
funButton.addEventListener(`mouseleave`, colorBack);
mountainButton.addEventListener(`mouseleave`, colorBack);
islandButton.addEventListener(`mouseleave`, colorBack);

// Mouse click, double-click, and up
function green (event) {
    divs[0].querySelector(`h4`).style.color = `green`;
    divs[0].querySelector(`p`).style.color = `green`;
}
funButton.addEventListener(`click`, green);

function cyan (event) {
    divs[1].querySelector(`h4`).style.color = `cyan`;
    divs[1].querySelector(`p`).style.color = `cyan`;
}
mountainButton.addEventListener(`dblclick`, cyan);

function blue (event) {
    divs[2].querySelector(`h4`).style.color = `blue`;
    divs[2].querySelector(`p`).style.color = `blue`;
}
islandButton.addEventListener(`mouseup`, blue)

// Specifying Nav Bar
const nav = Array.from(document.querySelectorAll(`nav a`))
for (let i = 0; i < nav.length; i++){
    nav[i] = document.querySelector(`nav a:nth-of-type(${i + 1})`)
}

// key down and up
function navDown (event) {
    nav[0].style.color = `red`;
    nav[1].style.color = `gold`;
    nav[2].style.color = `green`;
    nav[3].style.color = `blue`;
}
document.addEventListener(`keydown`, navDown);

function navUp (event) {
    for (let i = 0; i < nav.length; i++){
        nav[i].style.color = `black`;
    }
}
document.addEventListener(`keyup`, navUp);

// Specifying h2s
const h2s = document.querySelectorAll(`h2`);
for (let i = 0; i < h2s.length; i++){
    h2s[i] = document.querySelector(`h2:nth-of-type(${i + 1})`);
}

// scroll
function goRed (event) {
    for (let i = 0; i < h2s.length; i++){
        h2s[i].style.color = `red`;
    }
}
document.addEventListener(`scroll`, goRed);

// Specifying intro
const introTitle = document.querySelector(`.intro h2`);
const introText = document.querySelector(`.intro p`);

// copy and load
function intro (event) {
    introTitle.style.background = `cyan`
}
function steal (event) {
    alert(`Stealing is bad!`)
}

window.addEventListener(`load`, intro)
introText.addEventListener(`copy`, steal)
