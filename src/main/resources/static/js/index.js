document.querySelector("#container-bars").addEventListener("click", animateBars)
document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault()
    submitForm()
    document.querySelector("#form").reset();
    messageAnimation();
})

let line1 = document.querySelector("#line1")
let line2 = document.querySelector("#line2")
let line3 = document.querySelector("#line3")
let options = document.querySelector("#container-options")

//Hamburger button and menu mobile

function animateBars() {
    line1.classList.toggle("activeLine1")
    line2.classList.toggle("activeLine2")
    line3.classList.toggle("activeLine3")

    options.classList.toggle("translate-x-[200%]")
}

//Send Email 

function submitForm() {
    let formData = new FormData(document.querySelector("#form"))

    fetch('/send-email', {
        method: 'POST',
        body: formData
    }).catch(error => console.error('Error: ', error))
}

//Show message that message was sent successfully

function messageAnimation() {
    let object =  document.querySelector("#messageSend")
    object.classList.remove("animate-messageAnimation")

    void object.offsetWidth;

    object.classList.add("animate-messageAnimation")
}