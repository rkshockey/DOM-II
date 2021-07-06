// Playing with the buttons
allButtons = Array.from(document.querySelectorAll(`.btn`))
for (let i = 0; i < allButtons.length; i++){
    allButtons[i] = document.querySelector(`.btn:nth-of-type(${i + 1})`)
}
funButton = document.querySelector(`.fun`)
mountainButton = document.querySelector(`.mountain`)
islandButton = document.querySelector(`.island`)
destinations = Array.from(document.querySelectorAll(`.destination`))
for (let i = 0; i < destinations.length; i++){
    destinations[i] = document.querySelector(`.destination:nth-of-type(${i + 1})`)
}

for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener(`mouseover`, (event) => {
        destinations[0].style.background = `blue`;
        destinations[1].style.background = `green`;
        destinations[2].style.background = `cyan`;
})}
for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener(`mouseleave`, (event) => {
        destinations[0].style.background = `white`;
        destinations[1].style.background = `white`;
        destinations[2].style.background = `white`;
})}
