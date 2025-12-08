'use strict';

// addEventListener() → elementga hodisa (event) qo‘shadi va hodisa sodir bo‘lganda berilgan funksiyani ishlatadi.
 let btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
        
    })
})  