const dbmock = [
    {
        "id": 1,
        "breed": "Beagle",
        "adopted": false,
        "size": "large",
        "dob": 243422110,
        "img_src": "https://some-image-2.png",
        "sex": "M",
        "vaccinated": false
    },
    {
        "id": 2,
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://some-image.png",
        "sex": "F",
        "vaccinated": true
    }
];

const result = dbmock[1];

const cardContainer = document.querySelector("#cards")
function appendCard(dog) {
    const p = document.createElement("p");
    p.textContent = dog["breed"];
    cardContainer.append(p);
}

appendCard(result);

