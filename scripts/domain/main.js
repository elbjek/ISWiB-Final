var form = document.querySelector(' .address form');



form.addEventListener('submit',function(event){
    
    event.preventDefault();
    var name = document.querySelector('.name').value;
    
    
    // name & lastname isto ovo
    
    if(name == ""){
        document.querySelector('.stagod').innerHTML = "Name is required";
    }
    
    
    if(name.charAt(0)== " "){
        document.querySelector('.stagod').innerHTML = "Name cannot start with space";
    }
    console.log(name.charAt(0));
    
    
    
    //email 
    
    
    
    //regular expression
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    var mail = document.querySelector('.email').value;
    
    if(re.test(String(mail).toLowerCase())){
console.log('')
    }else{
        
        console.log("mejl niej dobar");
    }
    
})






