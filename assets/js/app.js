const init = async () => {
  populateBreedOptions();
  const result = await fetch("http://localhost:8080/dogs/search");
  const data = await result.json();

  for (let i = 0; i < data.length; i++) {
    appendDogCard(document.getElementById("cards"), data[i]);
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

function appendDogCard(container, dog, owned, saved) {
  container.append(createCard(dog, owned, saved));
}

function createCard(dog, owned = false, saved = false) {
  dog["src"] = dog["src"] || "assets/media/JacksDog.jpg";
  const dogContainer = document.createElement("div");
  dogContainer.classList = "card";
  dogContainer.style = "width: 18rem;";

  if (localStorage.getItem("token") && !owned && !saved) {
    const saveBtn = document.createElement("button");
    saveBtn.classList = "btn btn-primary";
    saveBtn.id = `saveBtn-${dog.id}`;
    saveBtn.textContent = "Save";
    saveBtn.onclick = saveForLater(dog.id);
    dogContainer.append(saveBtn);
    console.log(saved);

  }

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
  const result = dog["vaccinated"] ? "Yes" : "No";
  vacc.classList = "card-text";
  vacc.textContent = "Vaccinated: " + result;

  const adoptMe = document.createElement("button");
  adoptMe.classList.add("adoptMe");
  adoptMe.classList.add("mt-auto");
  adoptMe.onclick = applyToAdopt(dog["id"]);

  adoptMe.id = `adoptMeBtn-${dog["id"]}`;

  if (localStorage.getItem("token") && !owned) {
    adoptMe.textContent = "Adopt Me!";
  } else if (owned) {
    adoptMe.textContent = "View Applicants";
    adoptMe.onclick = getApplicants(dog);

    //Delisting dog
    const delistDog = document.createElement("button");

    if (!dog.adopted) {
      delistDog.textContent = "Delist Dog";
      delistDog.onclick = removeDogFromList(dog, false, delistDog);
    } else {
      delistDog.textContent = "Release Dog";
      delistDog.onclick = removeDogFromList(dog, true, delistDog);
    }
    card.append(delistDog);
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
  return dogContainer;
}

function saveForLater(dogId) {
  return async function save() {
    const btnRef = document.getElementById(`saveBtn-${dogId}`);
    try {
      const res = await makeAuthenticatedRequest(
        "POST",
        `http://localhost:8080/applicants/save/${dogId}`,
        {}
      );
      console.log(res);
      btnRef.disabled = true;
      btnRef.textContent = "Saved";
    } catch (err) {
      console.error(err);
      btnRef.textContent = "Request Failed, Try again";
    }
  };
}

function applyToAdopt(dogId) {
  return async function sumbitApplication() {
    const btnRef = document.getElementById(`adoptMeBtn-${dogId}`);
    try {
      await makeAuthenticatedRequest(
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

  var raw = JSON.stringify(body);

  var requestOptions = {
    method,
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(url, requestOptions);
  return result;
}

function removeDogFromList(dog, isListing, button) {
  return async function sumbitApplication() {
    const res = await makeAuthenticatedRequest(
      "PUT",
      `http://localhost:8080/users/${isListing ? "listDog" : "removelisting"}/${
        dog.id
      }`
    );
    const applicants = await res.text();
    console.log(applicants);

    if (res.status == 200) {
      button.textContent = "Updated!";
      button.disabled = true;
    } else {
      button.textContent = "Something went wrong!";
    }
  };
}

// Call endpoint to get all breeds
async function getAllBreeds() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const breeds = await res.json();
  return breeds;
}
// Convert object of breeds into array of strings
async function getBreedNames() {
  const result = await getAllBreeds();
  const breeds = result.message;
  const breedNames = [];
  // Iterate through keys of breeds
  Object.keys(breeds).forEach((key) => {
    if (breeds[key].length === 0) {
      breedNames.push(key);
    } else {
      breeds[key].forEach((breed) => {
        breedNames.push(breed + " " + key);
      });
    }
  });

  return breedNames;
}
// Convert a string from human-readable to url-encoded
function encodeBreed(breed) {
  breed = breed.toLowerCase();
  const splitBreed = breed.split(" ");
  if (splitBreed.length === 1) {
    return breed;
  }
  // Reverse array
  return splitBreed.reverse().join("/");
}

getBreedNames().then((result) => {
  console.log(result);
  console.log("Encoded breed: ", encodeBreed("Labrador Retriever"));
});

async function populateBreedOptions() {
  const breedNames = await getBreedNames();
  const breedSelect = document.getElementById("dog-breed");

  breedNames.forEach((breed) => {
    const option = document.createElement("option");
    option.value = encodeBreed(breed);
    option.textContent = breed;
    breedSelect.append(option);
  });
}

init();
