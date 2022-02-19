const usernameInput = document.getElementById("username");
const email = document.getElementById("email");
const passwordInput = document.getElementById("password");;
const loginButton = document.getElementById("loginButton");

const enterName = document.getElementById("enterName");
const enterUsername = document.getElementById("enterUsername");
const enterEmail = document.getElementById("enterEmail");
const enterPhone = document.getElementById("enterPhoneNumber");
const enterPassword = document.getElementById("enterPassword ");
const button2 = document.getElementById("button2");
//name, username, email, phone, password



loginButton.addEventListener("click", async () => {
    console.log(usernameInput.value);
    console.log(email.value);
    console.log(passwordInput.value);

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "JWTTest",
  "password": "password"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
try{
  const response = await fetch("http://localhost:8080/login", requestOptions);
  const result = await response.json();
  const token = result.token;
  console.log(token);
  localStorage.setItem("token",JSON.stringify(token));
}catch(error){
    console.log('error', error);
}

    });

button2.addEventListener("click", () => {
    console.log(enterName.value);
    console.log(enterUsername.value);
    console.log(enterEmail.value);
    console.log(enterPhoneNumber.value);
    console.log(enterPassword.value);
    });