const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");

const enterEmail = document.getElementById("enterEmail");
const enterPassword = document.getElementById("enterPassword");
const button2 = document.getElementById("button2");

button.addEventListener("click", () => {
    console.log(email.value);
    console.log(password.value);
    });

button2.addEventListener("click", () => {
    console.log(enterEmail.value);
    console.log(enterPassword.value);
    });