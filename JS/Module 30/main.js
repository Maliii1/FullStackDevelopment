var mosha = 16;

if (mosha >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

var input = document.getElementById("input_id");
var button = document.getElementById("button_id");
var text = document.getElementById("text_id");

button.onclick = function () {
    text.innerHTML = input.value;
};

var age = document.getElementById("mosha");
var buttoni_m = document.getElementById("button_mosha");
var text_m = document.getElementById("text");

buttoni_m.onclick = function () {
    if (age.value > 18) {
        text_m.innerHTML = "You can vote";
    } else if (age.value == 18) {
        text_m.innerHTML = "You can vote, congrats";
    } else {
        text_m.innerHTML = "You cannot vote";
    }
};

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

var button_add = document.getElementById("add");
var button_subtract = document.getElementById("subtract");
var button_multiply = document.getElementById("multiply");
var button_division = document.getElementById("divide");

var result = document.getElementById("result");

button_add.onclick = function () {
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
};
button_add.setAttribute("class", "button");

button_subtract.onclick = function () {
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
};
button_subtract.setAttribute("class", "button");

button_multiply.onclick = function () {
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
};
button_multiply.setAttribute("class", "button");

button_division.onclick = function () {
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
};
button_division.setAttribute("class", "button");