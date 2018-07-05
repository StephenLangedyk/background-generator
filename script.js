var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodyColor");




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";

}


function randomNumber() {
	var x = Math.floor((Math.random() * 255) + 1);
	var z = Math.floor((Math.random() * 255) + 1);
	var y = Math.floor((Math.random() * 255) + 1);

    
    body.style.background = 
	"linear-gradient(to right, rgb(" + x + "," + y + "," + z 
	+ "), rgb(" + y + "," + z + "," + x + "))"; 
	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);
	

color2.addEventListener("input", setGradient);



