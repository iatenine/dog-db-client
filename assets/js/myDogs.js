async function revealMyDogs() {
  toggleHidableSections("my-dogs");
  // Remove all children of the cards div
  const cards = document.getElementById("my-dogs");
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
  const res = await makeAuthenticatedRequest(
    "GET",
    "http://localhost:8080/users/mydogs"
  );
  const dogs = await res.json();
  dogs.forEach((dog) => {
    appendDogCard(document.querySelector("#my-dogs"), dog, true);
  });
}

function getApplicants(dog) {
  return async function getApplicants() {
    const res = await makeAuthenticatedRequest(
      "GET",
      `http://localhost:8080/applicants/dog/${dog.id}`
    );
    const applicants = await res.json();
    console.log("Applicants: ", applicants);
    applicants.forEach((user) => {
      const container = document.querySelector("#my-dogs");
      const card = buildApplicantCard(user, dog);
      container.prepend(card);
    });
  };
}

function buildApplicantCard(user, dog) {
  user["src"] = user["src"] || "assets/media/JacksDog.jpg";
  const dogContainer = document.createElement("div");
  dogContainer.classList = "card";
  dogContainer.style = "width: 18rem;";

  const img = document.createElement("img");
  img.classList = "card-img-top";
  img.src = user["src"];

  const card = document.createElement("div");
  card.classList.add("card-body");
  card.classList.add("d-flex");
  card.classList.add("flex-column");

  //Name
  const name = document.createElement("p");
  name.classList = "card-title, fw-bold text-center fs-4";
  name.textContent = user["legalName"] ?? user["username"];

  // Applied for...
  const appliedFor = document.createElement("p");
  appliedFor.classList = "card-text";
  appliedFor.textContent = `Applied for ${dog.name}`;

  const approve = document.createElement("button");
  approve.textContent = "Approve";
  approve.classList.add("mt-auto");
  approve.onclick = approveUser(user.id, dog.id);
  //   approve.onclick = applyToAdopt(user["id"]);

  approve.id = `approve-applicant-${user["id"]}`;

  dogContainer.append(img);
  dogContainer.append(card);
  card.append(name);
  card.append(appliedFor);
  card.append(approve);
  return dogContainer;
}

function approveUser(id, dogId) {
  return async function () {
    // PUT /applicants/approve/{userId}/{dogId}
    const res = await makeAuthenticatedRequest(
      "PUT",
      `http://localhost:8080/applicants/approve/${id}/${dogId}`
    );
    const data = await res.text();
    console.log(data);
  };
}

async function savedDogs() {
  toggleHidableSections("my-dogs");
  // Remove all children of the cards div
  const cards = document.getElementById("my-dogs");
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
  const res = await makeAuthenticatedRequest(
    "GET",
    "http://localhost:8080/users/mysaveddogs"
  );
  const dogs = await res.json();
  console.log(dogs);
  dogs.forEach((dog) => {
    appendDogCard(document.querySelector("#my-dogs"), dog, false, true);
  });
}
