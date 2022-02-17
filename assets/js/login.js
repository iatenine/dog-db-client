const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");;
const button = document.getElementById("button");

const enterName = document.getElementById("enterName");
const enterUsername = document.getElementById("enterUsername");
const enterEmail = document.getElementById("enterEmail");
const enterPhone = document.getElementById("enterPhoneNumber");
const enterPassword = document.getElementById("enterPassword ");
const button2 = document.getElementById("button2");
//name, username, email, phone, password



button.addEventListener("click", () => {
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    });

button2.addEventListener("click", () => {
    console.log(enterName.value);
    console.log(enterUsername.value);
    console.log(enterEmail.value);
    console.log(enterPhoneNumber.value);
    console.log(enterPassword.value);
    });