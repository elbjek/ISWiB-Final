function isScrolled(){
    var scrolled = window.pageYOffset;
  //    is how much we have scrolled
    var nav = document.getElementById('navigation');
    var balloon = document.getElementById('balloon');
    if (scrolled >45){

nav.classList.add('navFixed');
balloon.style.height="60px";

    }
    else{
        nav.classList.remove('navFixed');
        balloon.style.height="90px";

    }
  }
  
  
//   document.querySelector('button').addEventListener("click", scrollToTop);
  window.addEventListener('scroll',isScrolled);