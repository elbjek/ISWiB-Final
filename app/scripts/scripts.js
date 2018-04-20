'use strict';

function scrollToTop() {
    if (window.pageYOffset > 0) {

        window.scrollBy(0, -20);
        setTimeout(scrollToTop, 0);
    }
}

var heroHeight = document.getElementById('hero').clientHeight;

function Scrolled() {

    var scrolled = window.pageYOffset;

    var back = document.getElementById('back-to-top');

    if (scrolled > 200) {

        back.classList.add('back-fixed');
    } else {
        back.classList.remove('back-fixed');
    }
}

document.getElementById('back-to-top').addEventListener("click", scrollToTop);
window.addEventListener('scroll', Scrolled);
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

if (document.querySelector('form')) {

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
}
"use strict";
'use strict';

function isScrolled() {
    var scrolled = window.pageYOffset;
    //    is how much we have scrolled
    var nav = document.getElementById('navigation');
    var balloon = document.getElementById('balloon');
    if (scrolled > 45) {

        nav.classList.add('navFixed');
        balloon.style.height = "60px";
    } else {
        nav.classList.remove('navFixed');
        balloon.style.height = "90px";
    }
}

//   document.querySelector('button').addEventListener("click", scrollToTop);
window.addEventListener('scroll', isScrolled);
"use strict";