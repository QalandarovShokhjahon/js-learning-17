'use strict';

// addEventListener() → elementga hodisa (event) qo‘shadi va hodisa sodir bo‘lganda berilgan funksiyani ishlatadi.
//  let btns = document.querySelectorAll('button');

// btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         console.log(btn.textContent);
        
//     })
// })

// Hodisa	Tavsif
// click	Element bosilganda ishga tushadi
// dblclick - Element ikki marta bosilganda
// mouseenter	Element ustiga hover qilinga holati
// mouseleave	Sichqoncha elementdan chiqib ketganda
// contextmenu	O‘ng tugma bosilganda
// mousemove	Sichqoncha harakatlanayotganda
// wheel	Sichqoncha g‘ildiragini aylantirganda

// let btns = document.querySelectorAll("button")

// btns[0].addEventListener("click", () => {
//   alert("Button 1 clicked")
// })
// btns[1].addEventListener("dblclick", () => {
//   alert("Button 2 double clicked")
// })
// btns[2].addEventListener("mouseover", () => {
//   alert("Button 3 mouseover")
// })
// btns[3].addEventListener("mouseleave", () => {
//   alert("Button 4 mouseout")
// })
// btns[4].addEventListener("contextmenu", () => {
//   alert("Button 5 right clicked")
// })
// btns[5].addEventListener("mousemove", () => {
//   alert("Button 6 mousemove")
// })
// btns[6].addEventListener("wheel", () => {
//   alert("Button 7 wheel")
// })


// event.target → hodisa qaysi elementda sodir bo‘lganini aniqlab beradi.
// let btns = document.querySelectorAll("button");

// btns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         event.target.textContent = 'Clicked'
//         event.target.style.backgroundColor = "orange"
//     })
// })


// event.target.remove() → hodisa sodir bo‘lgan elementni sahifadan o‘chiradi.
// let btns = document.querySelectorAll("button");

// btns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         event.target.remove()
//     })
// })


// event.key → klaviaturada bosilgan tugmaning nomini qaytaradi.
// document.addEventListener("keydown", (event) => {
//   alert(`Siz "${event.key}" tugmasini bosdingiz.`)
// })


// let btns = document.querySelectorAll("button")

// btns.forEach((qiymat) => {
//   qiymat.addEventListener("keyup", (event) => {
//     if (event.key === "w") {
//       event.target.style.transform = "translateY(-100px)"
//     } else if (event.key === "s") {
//       event.target.style.transform = "translateY(100px)"
//     } else if (event.key === "a") {
//       event.target.style.transform = "translateX(-100px)"
//     } else if (event.key === "d") {
//       event.target.style.transform = "translateX(100px)"
//     }
//   })
// })


// Event Bubbling → JavaScript'da hodisa (event) avval bosilgan elementda boshlanib, ota elementlarga ketma-ket ko‘tarilishi jarayoni. Ya’ni, agar farzand element bosilsa, uning barcha ota elementlari ham bosilgandek bo‘ladi.

let btns = document.querySelectorAll("button")
let btnsWrapper = document.querySelector("#btns-wrapper")

btnsWrapper.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log(e.target.textContent)
  }
})


// preventDefault() metodi brauzerning odatiy harakatini oldini oladi. Forma jo‘natilishini to‘xtatish, havolani bosganda sahifa yangilanishining oldini olish, va boshqa standart harakatlarni bekor qilish uchun ishlatiladi.

let link = document.querySelector("#myLink")

link.addEventListener("click", (event) => {
  event.preventDefault()
  alert("Havola bosildi, lekin sahifa o'zgarmadi!")
})