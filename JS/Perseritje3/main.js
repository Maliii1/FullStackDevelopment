var button = document.getElementById("bttn1");
var nr1 = document.getElementById("numriipare");
var nr2 = document.getElementById("numriidyte");
var calculateButton = document.getElementById("calculate");
var result = document.getElementById("shfaqe");

function calculateSum() {
    var num1 = parseFloat(nr1.value)
    var num2 = parseFloat(nr2.value)
    var sum = num1 + num2
result2.textContent = "Shuma e numrave eshte:" + sum;
}


function isEligible() {
    var num1 = parseFloat(nr1.value)
    var num2 = parseFloat(nr2.value)
    if(num1+num2>10){
        result2.textContent="Ju keni te drejt te aplikoni";
    }
    else{
        result1.textContent="Ju nuk keni te drejte te aplikoni";
    }

}

calculateButton.onclick = function() {
    calculateSum();
    isEligible();
}

button.onclick = function () {
    button.style.backgroundColor = "red";
    button.style.color = "white";

    alert("no datas")
};

function shuma (numeri1,numeri2){
    return numeri1 + numeri2;
}



console.log(shuma(10,20))

function zbritja(numeri1,numeri2){
    return numeri1 - numeri2
}
console.log(zbritja(10,20))

function pjestimi(numeri1,numeri2){
    return numeri1 / numeri2
}
console.log(pjestimi(10,20))

function shumzimi(numeri1,numeri2){
    return numeri1 * numeri2
}
console.log(shumzimi(10,20))