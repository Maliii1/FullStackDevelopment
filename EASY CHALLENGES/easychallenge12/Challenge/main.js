var circles = document.getElementById("circles");
var text = document.getElementById("text");


function randomCircle() {
   var colors =["red","green"];
   var randomColor = colors[Math.floor(Math.random() * colors.length)];
   circles.style.backgroundColor = randomColor;
}
setInterval(randomCircle, 1000);

circles.onclick = function(){
    if (circles.style.backgroundColor === "green") {
        text.innerHTML = "Great job keep going!";
        randomCircle();
    }
    else {
        text.innerHTML = "Game over!";
        circles.style.display= "none";
    }
};

randomCircle()