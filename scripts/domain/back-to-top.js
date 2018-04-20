


    function scrollToTop(){
        if(window.pageYOffset > 0){
          
          window.scrollBy(0,-20);
          setTimeout(scrollToTop, 0);
          
        }
      }


      document.querySelector('#back-to-top').addEventListener("click", scrollToTop);

