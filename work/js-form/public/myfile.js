"use strict";
(function(){
    const formE1 = document.querySelector(".register");
    const nameGroupE1 = document.querySelector(".register_name");
    const nameInputE1 = document.querySelector(".register_name input");
    const emailInputE1 = document.querySelector(".register_email input");
    const confirmInputE1 = document.querySelector(".register_confirm input");
    const emailErrorE1 = document.querySelector(".register-email_error");
    const confirmErrorE1 = document.querySelector(".register-confirm_error");
    const buttonE1 = document.querySelector(".register_submit");
    
    formE1.addEventListener("submit",(event) =>{

        let isInvalid = false
        nameGroupE1.classList.remove('register-name-invalid');

        if( !nameInputE1.value){
            nameGroupE1.classList.add('register-name-invalid');
            isInvalid = true;
        }

        if( isInvalid){
            event.preventDefault();
        }

        if( !emailInputE1.value){
            emailErrorE1.innerHTML = "This Email field is required";
            event.preventDefault();
        }

        if( emailInputE1.value){
        emailErrorE1.innerHTML = "";
        }

       if( confirmInputE1.value != emailInputE1.value){
        
        confirmErrorE1.innerHTML = "The confirm email should match the email";
        event.preventDefault();
       }
       }
    );

    nameInputE1.addEventListener("change",(event) =>{

        let isInvalid = false
        nameGroupE1.classList.remove('register-name-invalid');

        if( !nameInputE1.value){
            nameGroupE1.classList.add('register-name-invalid');
            isInvalid = true;

        }

        if( isInvalid){
            event.preventDefault();
        }
    }
    );

    keyboard.addEventListener("keyup",function(){
        if(KeyboardEvent.keycode === 9){
            document.getElementById(".register_submit").click();
        }
    
     })

})();