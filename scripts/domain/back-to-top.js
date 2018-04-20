

function scrollToTop(){
    if(window.pageYOffset > 0){
        
        window.scrollBy(0,-20);
        setTimeout(scrollToTop, 0);
        
    }
}


var heroHeight = document.getElementById('hero').clientHeight;

function Scrolled(){
   
    var scrolled = window.pageYOffset;
    
    var back = document.getElementById('back-to-top');   
    
    
    if (scrolled > 200){
        
        back.classList.add('back-fixed');
      

    } 
    else{
        back.classList.remove('back-fixed');
    }

    

}




document.getElementById('back-to-top').addEventListener("click", scrollToTop);
window.addEventListener('scroll',Scrolled);


