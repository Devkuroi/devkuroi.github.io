document.querySelector("#container-bars").addEventListener("click", animateBars)

let line1 = document.querySelector("#line1")
let line2 = document.querySelector("#line2")
let line3 = document.querySelector("#line3")

function animateBars() {
    line1.classList.toggle("activeLine1")
    line2.classList.toggle("activeLine2")
    line3.classList.toggle("activeLine3")

}