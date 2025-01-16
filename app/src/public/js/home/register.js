"use strict"

const id = document.querySelector("#id"), //#은 id의 id를 의미
name = document.querySelector("#name"),
password = document.querySelector("#password"),
confirmPassword = document.querySelector("#confirm-password"),
registerButton = document.querySelector("#button");

registerButton.addEventListener("click", register);
function register(){
   const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
   };

   fetch("/register", {
    method: "POST",
    headers: {
        "content-Type": "application/json", //json으로 보냄 
    },
    body: JSON.stringify(req),
   })
    .then((res) => res.json())
    .then((res) => {
        if (res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
    }
    }).catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}