
function isScrolled(){
    var scrolled = window.pageYOffset;
  //    is how much we have scrolled
    
    if (scrolled > 0){
      document.querySelector('button').classList.add('show');
    }
    else{
      document.querySelector('button').classList.remove('show');
    }
  }
  
  
  document.querySelector('button').addEventListener("click", scrollToTop);
  window.addEventListener('scroll',isScrolled);