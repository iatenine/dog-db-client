const dbmock = [];

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

const cardContainer = document.querySelector("#cards");
function appendCard(dog) {
  const dogContainer = document.createElement("div");
  dogContainer.classList = "card";
  dogContainer.style = "width: 18rem;";

  const img = document.createElement("img");
  img.classList = "card-img-top";
  img.src = dog["src"];

  const card = document.createElement("div");
  card.classList = "card-body";

  /*Dog's name*/
  const p = document.createElement("p");
  p.classList = "card-title";
  p.textContent = "name:  " + (dog["name"] ?? "Name Me");

  /*Sex of Dog*/
  const sex = document.createElement("p");
  sex.classList = "card-text";
  sex.textContent = "sex: " + (dog["sex"] == "F" ? "female" : "male");

  const breed = document.createElement("p");
  breed.classList = "card-text";
  breed.textContent = "breed: " + (dog["breed"]?.name ?? "unknown");

  /*date*/
  const dob = document.createElement("p");
  dob.classList = "card-text";
  const d = new Date(dog["dob"]);
  dob.textContent =
    "dob: " +
    d.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  /*--vacination */
  const vaccinated = document.createElement("p");
  vaccinated.classList = "card-text";
  vaccinated.textContent =
    "vaccinated: " + (dog["vaccinated"] == true ? "yes" : "no");

  /*--size */
  const size = document.createElement("p");
  size.classList = "card-text";
  size.textContent = "size: " + getSize(dog["size"]);

  //   Apply to adopt
  const adopt = document.createElement("button");
  adopt.classList = "btn btn-primary";
  adopt.textContent = "Adopt";
  adopt.addEventListener("click", () => {
    console.log("adopt");
  });

  dogContainer.append(img);
  dogContainer.append(card);
  card.append(p);
  card.append(breed);
  /* card.append(adopted);*/
  card.append(size);
  card.append(dob);
  card.append(sex);
  card.append(vaccinated);
  if (localStorage.getItem("token")) card.append(adopt);
  cardContainer.append(dogContainer);
}

init();
/*
 *<img class="card-img-top" src="assets/media/JacksDog2.jpg" alt="Card image cap" width="200">
        <div class="card-body">
          <p class="card-text">Jack's Dog S</p>
        </div> 
 */
