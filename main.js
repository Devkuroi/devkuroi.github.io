var button = document.querySelector('.btn-whatsapp');

button.addEventListener("transitionend", function (event) {
	if (event.propertyName === "width" || event.propertyName === "height") {
		button.querySelector('.logo-whatsapp').style.display = "none";
		button.querySelector('.text').style.display = "block";
	}
});
