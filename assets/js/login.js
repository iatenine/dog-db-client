const container = document.querySelector("#login-stuff");
const navLoginBtn = document.querySelector("#nav-login-btn");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

const enterName = document.getElementById("enterName");
const enterUsername = document.getElementById("enterUsername");
const enterEmail = document.getElementById("enterEmail");
const enterPhone = document.getElementById("enterPhoneNumber");
const enterPassword = document.getElementById("enterPassword");
const registerButton = document.getElementById("button2");

let currentVisibleSection = "";

function toggleHidableSections(sectionId) {
  const sections = document.querySelectorAll(".hidable");
  if (currentVisibleSection === sectionId) {
    currentVisibleSection = "";
  } else {
    currentVisibleSection = sectionId;
  }
  sections.forEach((section) => {
    section.style.display = "none";
    if (section.id == currentVisibleSection) {
      section.style.display = "flex";
    }
  });
}

const loginUser = (result) => {
  const token = result.token;
  if (!token) return;
  localStorage.setItem("token", JSON.stringify(token));
  // Refresh the page
  window.location.reload();
};

loginButton.addEventListener("click", async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: usernameInput.value,
    password: passwordInput.value,
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
    loginUser(result);
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
    loginUser(result);
  } catch (error) {
    console.log("error", error);
  }
});

toggleHidableSections(-1);

// Check if user has a token
if (localStorage.getItem("token")) {
  navLoginBtn.innerHTML = "Logout";
  navLoginBtn.onclick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
}
