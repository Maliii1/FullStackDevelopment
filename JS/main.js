function printName(){
    var teksti = document.getElementById("text");

    teksti.innerHTML = "Hello<br>";

    setTimeout(function(){
        teksti.innerHTML += "Good morning<br>";
    }, 3000);

    teksti.innerHTML += "Goodnight<br>";
}

printName();

var colors = ["red","green","blue","yellow","purple"];

function changeTextColor(){
    document.getElementById("text").style.color = colors[Math.floor(Math.random() * colors.length)];
} 
setInterval(changeTextColor, 2000);

function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random() * colors.length)];
}
setInterval(changeBgColor, 2000);