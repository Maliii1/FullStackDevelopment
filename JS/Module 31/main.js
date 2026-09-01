var emri = document.getElementById("emri");
var button = document.getElementById("button_emri");
var lista = document.getElementById("lista");

var emrat = [];

button.onclick = function () {

    if (emri.value != "") {

        emrat.push(emri.value);

        lista.innerHTML = "";

        for (var i = 0; i < emrat.length; i++) {
            lista.innerHTML += "<li>" + emrat[i] + "</li>";
        }

        emri.value = "";
    }
};