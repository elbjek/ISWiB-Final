'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);

agCookie.erase('example-cookie');

function markoFunkcija(args) {
    console.log(args);

    return true;
}
'use strict';

console.log('I have entered this file.');
console.log('This is crystal clear evidence that this works.');

var calculation = 200 + 223;

console.log('Sanity Check: 200 + 223 = ' + calculation);
console.log('bye.');
"use strict";

var nav = document.getElementById("navigation");
var weather = document.getElementById("weather");
var balloon = document.getElementById("balloon");
window.addEventListener("scroll", function () {

    var scrollPosition = window.scrollY;

    if (scrollPosition > 45) {
        nav.style.padding = "0px";
        nav.style.transform = "translate(0px,-20px)";
        balloon.style.height = "80px";
        weather.style.padding = "0px";
        nav.style.borderBottom = "1px solid gray";
    } else {
        nav.style.padding = '3px';
        balloon.style.height = "100px";
        weather.style.padding = "10px";
        nav.style.transform = "translate(0px,0px)";
        nav.style.borderBottom = "none";
    }
});