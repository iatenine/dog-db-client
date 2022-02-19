const cardContainer = document.querySelector("#cards");

const init = async () => {
  const result = await fetch("http://localhost:8080/dogs/search");
  const data = await result.json();

  for (let i = 0; i < data.length; i++) {
    data[i]["src"] = data[i]["src"] || "assets/media/JacksDog.jpg";
    appendCard(data[i]);
  }
};

/*Takes in a number and returns the size*/
function getSize(size) {
  if (size == 1) {
    return "small";
  } else if (size == 2) {
    return "medium";
  } else if (size == 3) {
    return "large";
  } else if (size == 0) {
    return "unknown";
  } else {
    return "test failed";
  }
}

function appendCard(dog) {
  const dogContainer = document.createElement("div");
  dogContainer.classList = "card";
  dogContainer.style = "width: 18rem;";

  const img = document.createElement("img");
  img.classList = "card-img-top";
  img.src = dog["src"];

  const card = document.createElement("div");
  card.classList.add("card-body");
  card.classList.add("d-flex");
  card.classList.add("flex-column");

  //Name
  const name = document.createElement("p");
  name.classList = "card-title, fw-bold text-center fs-4";
  name.textContent = dog["name"] ?? "Name Me!";
  //Breed
  const breed = document.createElement("p");
  breed.classList = "card-text";
  console.log(dog["breed"] == null);
  breed.textContent = `Breed: ${dog["breed"]?.name ?? "unknown"}`;
  //Size
  const size = document.createElement("p");
  size.classList = "card-text";
  size.textContent = "Size: " + getSize(dog["size"]);
  //Date of Birth
  const dob = document.createElement("p");
  dob.classList = "card-text";
  dob.textContent =
    "Date of Birth: " +
    new Date(dog["dob"]).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  //Sex
  const sex = document.createElement("p");
  sex.classList = "card-text";
  sex.textContent = "Sex: " + dog["sex"];
  //Vaccinated
  const vacc = document.createElement("p");
  vacc.classList = "card-text";
  let result = "Yes";
  if (!dog["vaccinated"]) {
    result = "No";
  }
  vacc.textContent = "Vaccinated: " + result;

  const adoptMe = document.createElement("button");
  adoptMe.classList.add("adoptMe");
  adoptMe.classList.add("mt-auto");
  adoptMe.onclick = applyToAdopt(dog["id"]);

  adoptMe.id = `adoptMeBtn-${dog["id"]}`;

  if (localStorage.getItem("token")) {
    adoptMe.textContent = "Adopt Me!";
  } else {
    // Add disabled attribute to button
    adoptMe.setAttribute("disabled", "disabled");
    adoptMe.textContent = "Login to Adopt Me!";
  }

  dogContainer.append(img);
  dogContainer.append(card);
  card.append(name);
  card.append(breed);
  card.append(size);
  card.append(dob);
  card.append(sex);
  card.append(vacc);
  card.append(adoptMe);
  cardContainer.append(dogContainer);
}

function applyToAdopt(dogId) {
  return async function sumbitApplication() {
    const btnRef = document.getElementById(`adoptMeBtn-${dogId}`);
    try {
      const res = await makeAuthenticatedRequest(
        "POST",
        `http://localhost:8080/applicants/apply/${dogId}`,
        {}
      );
      btnRef.disabled = true;
      btnRef.textContent = "Applied";
    } catch (err) {
      btnRef.textContent = "Request Failed, Try again";
    }
  };
}

async function makeAuthenticatedRequest(method, url, body) {
  var myHeaders = new Headers();
  const token = localStorage.getItem("token");
  myHeaders.append("Authorization", `${token.replace(/['"]+/g, "")}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ body });

  var requestOptions = {
    method,
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(url, requestOptions);
  return result;
}

// function getCharacterById() {
//   console.log("getting dog by breed");

//   const breed = document.getElementById("idInput").value;
//   for (let i = 0; i < dbmock.length; i++) {
//     if (dbmock[i]["breed"] == breed) {
//       appendCard(dbmock[i]);
//     }
//   }
// }

init();
