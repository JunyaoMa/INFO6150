"use strict";
(function(){
    const button1 = document.querySelector(".toggle");
    const drop1 = document.querySelector(".drop");
    let keyboard = document.querySelector("input");
    button1.addEventListener("click",function(){
        drop1.classList.toggle("active");
    });
    keyboard.addEventListener("keyup",function(){
        if(KeyboardEvent.keycode === 9){
            button1.classList.toggle("active");
        }
        
        if(KeyboardEvent.keycode === 13){
            drop1.classList.toggle("active");
        }

        
    })

})();