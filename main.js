let slide2 = document.querySelector("body > div.slide-2");
slide2.style.display = "none";
slide2.style.scale = "0";

function slide() {
	slide2.style.display = "block";
	slide2.style.scale = "1";
}