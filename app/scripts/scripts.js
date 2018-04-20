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

var form = document.querySelector('form');

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // name 

    var name = document.querySelector('.name').value;

    var regex = /^[a-zA-Z ]{2,30}$/;
    if (regex.test(name)) {
        console.log(name);
        document.querySelector('.myName').style.display = "none";
    } else {
        document.querySelector('.myName').innerHTML = "Name is required";
    }

    //last name

    var lastname = document.querySelector('.lastname').value;

    if (regex.test(lastname)) {
        console.log(lastname);
        document.querySelector('.myLastname').style.display = "none";
    } else {
        document.querySelector('.myLastname').innerHTML = "Name is required";
    }

    //email 

    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var mail = document.querySelector('.email').value;

    if (re.test(String(mail).toLowerCase())) {
        console.log('Mail is bueno');
        document.querySelector('.mail').style.display = "none";
    } else {

        document.querySelector('.mail').innerHTML = "Please enter a valid e-mail";
    }

    // textarea

    var textarea = document.querySelector('.textarea').value;
    if (textarea == "") {
        document.querySelector('.myTextarea').innerHTML = "Please fill out the form";
    } else {
        document.querySelector('.myTextarea').style.display = "none";
    }
});
'use strict';

var svg = document.getElementById('myBalloon');
var svgDoc = svg.contentDocument;
var balloon = svg.Doc.getElementById('balloon');
balloon.setAttribute('height', '60px');
"use strict";