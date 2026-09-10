function showmessage(){

   alert('This is my first function')

}

function sum(number1,number2){
    return number1 + number2
}

console.log(sum(32,42))

function toCelcius(Farenheight){
    return(5/9)*(Farenheight - 32)
}

var result = toCelcius(54)
console.log("Fareenheight in celcius is"+result+"degrees")

function calculator(number1,number2){
    return number1 + number2
    return number1 - number2 
    return number1 / number2 
    return number1 * number2
}

showmessage()

calculator(10,15)