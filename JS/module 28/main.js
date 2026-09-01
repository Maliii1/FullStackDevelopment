var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button3 = document.getElementById('btn4');
var titulli = document.getElementById('titulli');
var button5 = document.getElementById('btn5');
var button6 = document.getElementById('btn6');

button1.onclick= function(){
    alert('Hello');
}

button2.onmouseleave= function(){
    alert('Hey you just left me :(');
}

button3.onmouseover= function(){
    alert('Why are you hovering me ??');
}

button4.onmousewheel= function(){
    alert('Stop scrolling me');
}

titulli.onmouseover= function(){
    alert('Hovering text');
}

button5.onclick= function(){
    titulli.style.color='red';
    titulli.style.backgroundColor = 'lightgrey';
    titulli.style.fontSize='100px';
    titulli.style.textAlign='center';
    titulli.style.padding='20px'
}

button6.onclick= function(){
    titulli.setAttribute("class","test");
}


