var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("btn");

css.textContent = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

button.style.background = css.textContent;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	button.style.background = body.style.background;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * (Math.floor(max)));
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateRandom() {
	var r1 = getRandomInt(256);
	var g1 = getRandomInt(256);
	var b1 = getRandomInt(256);
	var r2 = getRandomInt(256);
	var g2 = getRandomInt(256);
	var b2 = getRandomInt(256);

	

	var randomGradient = "linear-gradient(to right, rgb(" + r1 + "," + g1 + "," + b1 + ")" 
						+ ", rgb(" + r2 + "," + g2 + "," + b2 + "))" ;
	body.style.background = randomGradient;
	button.style.background = body.style.background;
	css.textContent = body.style.background + ";";

	color1.value = rgbToHex(r1, g1, b1)
	color2.value = rgbToHex(r2, g2, b2)

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandom);