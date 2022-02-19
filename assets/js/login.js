const usernameInput = document.getElementById("username");
const email = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

const enterName = document.getElementById("enterName");
const enterUsername = document.getElementById("enterUsername");
const enterEmail = document.getElementById("enterEmail");
const enterPhone = document.getElementById("enterPhoneNumber");
const enterPassword = document.getElementById("enterPassword");
const registerButton = document.getElementById("button2");
//name, username, email, phone, password

loginButton.addEventListener("click", async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: "JWTTest",
    password: "password",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    const response = await fetch("http://localhost:8080/login", requestOptions);
    const result = await response.json();
    const token = result.token;
    if (token) localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    console.log("error", error);
  }
});

registerButton.addEventListener("click", async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: enterEmail.value || "",
    phone: enterPhoneNumber.value || "",
    legalName: enterName.value || "",
    username: enterUsername.value,
    password: enterPassword.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://localhost:8080/register",
      requestOptions
    );
    const result = await response.json();
    const token = result.token;
    if (token) localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    console.log("error", error);
  }
});
