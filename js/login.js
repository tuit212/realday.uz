

// register js

let register = document.querySelector("#register");
let userName = document.querySelector("#text");
let userLastName = document.querySelector("#familiya");
let userPassword = document.querySelector("#tel");
let userAdress = document.querySelector("#manzil");
let registBtn = document.querySelector(".submitBtn");
let registerCard = document.querySelector(".register-card")


registBtn.addEventListener("submit", (e) => {
    e.preventDefault();


    registerCard.sytle.transform = "scale(1)"
})
