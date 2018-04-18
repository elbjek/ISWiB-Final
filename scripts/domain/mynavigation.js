





function isScrolled(){
    var scrolled = window.pageYOffset;
    
    var weather = document.getElementById("weather");
    var nav = document.querySelectorAll("myNav");
    var announce = document.getElementById("announcement");
    console.log(nav.length);
    // if (scrolled > 45){
    //     weather.style.display="none";
    //     nav.classList.add('sticky');
    //     // announce.style.display="none";
    //     console.log("radi");
    // }
    // else{
        



    // }
}



window.addEventListener('scroll',isScrolled);