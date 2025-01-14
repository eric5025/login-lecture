"use strict"

const id = document.querySelector("#id"), //#은 id의 id를 의미
password = document.querySelector("#password"),
loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);
function login(){
   const req = {
    id: id.value,
    password: password.value
   };

   fetch("/login", {
    method: "POST",
    headers: {
        "content-Type": "application/json", //json으로 보냄 
    },
    body: JSON.stringify(req),
   });
}