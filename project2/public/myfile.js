"use strict";
(function(){
    const formE1 = document.querySelector(".register");
    const emailInputE1 = document.querySelector(".register_email input");
    const confirmInputE1 = document.querySelector(".register_confirm input");
    const emailErrorE1 = document.querySelector(".register-email_error");
    const confirmErrorE1 = document.querySelector(".register-confirm_error");
    const buttonE1 = document.querySelector(".register_submit");
    const iconE1 = document.querySelector(".icon");
    const drop1 = document.querySelector(".drop");
    const buttonE2 =document.querySelector(".formbutton");
    const modelE1 = document.querySelector(".model");
    const buttonE3 = document.querySelector("register_cancel");

    iconE1.addEventListener("click",function(){
        drop1.classList.toggle("active");
    });

    buttonE2.addEventListener("click",function(){
        modelE1.style.display = "block";
    });
    
    formE1.addEventListener("submit",(event) =>{

        let isInvalid = false
        var str = document.myform.email.value;

        if( isInvalid){
            event.preventDefault();
        }

        if( !emailInputE1.value){
            emailErrorE1.innerHTML = "This field is required";
            event.preventDefault();
        } 
        else if(str.indexOf("@") === -1){
            emailErrorE1.innerHTML = "This field be a valid email address including a @";
            event.preventDefault();
        }
        else if( confirmInputE1.value != emailInputE1.value){  
        confirmErrorE1.innerHTML = "This field must match the provided email address";
        event.preventDefault();
       }

       if(str.indexOf("@") != -1){

       }
       }
    );

    emailInputE1.addEventListener("change",(event) =>{

        var str = document.myform.email.value;
        if( str.indexOf("@") != -1){
            emailErrorE1.innerHTML="";
        }
        else if(emailInputE1.value){
            emailErrorE1.innerHTML = "This field be a valid email address including a @";
        }
        
        if (!emailInputE1.value){
            emailErrorE1.innerHTML = "This field is required";
        }

    }
    );

    confirmInputE1.addEventListener("change",(event) =>{


        if( confirmInputE1.value === emailInputE1.value){
            confirmErrorE1.innerHTML = "";
        }
        else{confirmErrorE1.innerHTML = "This field must match the provided email address";}

    }
    );

    document.addEventListener('keyup',(event) =>{
        const keyName = event.key;
        if(keyName === 'Enter'){
            drop1.classList.toggle("active");
        }
        if(keyName === ' '){
            drop1.classList.toggle("active");
        }
        if(keyName === 'Escape'){
            location.reload();
        }
     })

})();