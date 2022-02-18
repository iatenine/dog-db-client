const dbmock = [
    {
        "id": 1, //Don't include
        "name": "Spot",
        "breed": "Beagle",
        "adopted": false, //Don't include
        "size": "large",
        "dob": 243422110,
        "img_src": "https://www.xtree.com.au/images/2018/11/26/129/healthy-teacup-white-pomeranian-puppies-for-sale_1.jpg",
        "sex": "M",
        "vaccinated": false
    },
    {
        "id": 2,
        "name": "Milo",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "http://wallpapershero.com/wp-content/uploads/sites/13/2013/10/Nice-Puppies-Wallpaper-Hd-Widescreen.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 3,
        "name": "Max",
        "breed": "Poodle",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://yt3.ggpht.com/a/AATXAJwVy60_TgjXhbz9kjlZqy2yaaMjvoNUgDHrmg=s900-c-k-c0xffffffff-no-rj-mo",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 4,
        "name": "Mickey",
        "breed": "Chihuahua",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://cdn.fotofits.com/responsive/1200x1200/petzlover/gallery/img/l/cavapoo-688686.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 5,
        "name": "Bob",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://th.bing.com/th/id/R.26ab931a8dc4081da4ce0edcc22deeb1?rik=HWfanOA6qpF5DQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f43100000%2fcute-puppy-dogs-43117550-736-736.jpg&ehk=oNvFFrAXwIytGZL5SPx0V95EWpHGAi48IJelRlOuKMo%3d&risl=&pid=ImgRaw&r=0",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 1, //Don't include
        "name": "Spot",
        "breed": "Beagle",
        "adopted": false, //Don't include
        "size": "large",
        "dob": 243422110,
        "img_src": "https://www.xtree.com.au/images/2018/11/26/129/healthy-teacup-white-pomeranian-puppies-for-sale_1.jpg",
        "sex": "M",
        "vaccinated": false
    },
    {
        "id": 2,
        "name": "Milo",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "http://wallpapershero.com/wp-content/uploads/sites/13/2013/10/Nice-Puppies-Wallpaper-Hd-Widescreen.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 3,
        "name": "Max",
        "breed": "Poodle",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://yt3.ggpht.com/a/AATXAJwVy60_TgjXhbz9kjlZqy2yaaMjvoNUgDHrmg=s900-c-k-c0xffffffff-no-rj-mo",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 4,
        "name": "Mickey",
        "breed": "Chihuahua",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://cdn.fotofits.com/responsive/1200x1200/petzlover/gallery/img/l/cavapoo-688686.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 5,
        "name": "Bob",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://th.bing.com/th/id/R.26ab931a8dc4081da4ce0edcc22deeb1?rik=HWfanOA6qpF5DQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f43100000%2fcute-puppy-dogs-43117550-736-736.jpg&ehk=oNvFFrAXwIytGZL5SPx0V95EWpHGAi48IJelRlOuKMo%3d&risl=&pid=ImgRaw&r=0",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 1, //Don't include
        "name": "Spot",
        "breed": "Beagle",
        "adopted": false, //Don't include
        "size": "large",
        "dob": 243422110,
        "img_src": "https://www.xtree.com.au/images/2018/11/26/129/healthy-teacup-white-pomeranian-puppies-for-sale_1.jpg",
        "sex": "M",
        "vaccinated": false
    },
    {
        "id": 2,
        "name": "Milo",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "http://wallpapershero.com/wp-content/uploads/sites/13/2013/10/Nice-Puppies-Wallpaper-Hd-Widescreen.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 3,
        "name": "Max",
        "breed": "Poodle",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://yt3.ggpht.com/a/AATXAJwVy60_TgjXhbz9kjlZqy2yaaMjvoNUgDHrmg=s900-c-k-c0xffffffff-no-rj-mo",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 4,
        "name": "Mickey",
        "breed": "Chihuahua",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://cdn.fotofits.com/responsive/1200x1200/petzlover/gallery/img/l/cavapoo-688686.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 5,
        "name": "Bob",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://th.bing.com/th/id/R.26ab931a8dc4081da4ce0edcc22deeb1?rik=HWfanOA6qpF5DQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f43100000%2fcute-puppy-dogs-43117550-736-736.jpg&ehk=oNvFFrAXwIytGZL5SPx0V95EWpHGAi48IJelRlOuKMo%3d&risl=&pid=ImgRaw&r=0",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 1, //Don't include
        "name": "Spot",
        "breed": "Beagle",
        "adopted": false, //Don't include
        "size": "large",
        "dob": 243422110,
        "img_src": "https://www.xtree.com.au/images/2018/11/26/129/healthy-teacup-white-pomeranian-puppies-for-sale_1.jpg",
        "sex": "M",
        "vaccinated": false
    },
    {
        "id": 2,
        "name": "Milo",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "http://wallpapershero.com/wp-content/uploads/sites/13/2013/10/Nice-Puppies-Wallpaper-Hd-Widescreen.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 3,
        "name": "Max",
        "breed": "Poodle",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://yt3.ggpht.com/a/AATXAJwVy60_TgjXhbz9kjlZqy2yaaMjvoNUgDHrmg=s900-c-k-c0xffffffff-no-rj-mo",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 4,
        "name": "Mickey",
        "breed": "Chihuahua",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://cdn.fotofits.com/responsive/1200x1200/petzlover/gallery/img/l/cavapoo-688686.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 5,
        "name": "Bob",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://th.bing.com/th/id/R.26ab931a8dc4081da4ce0edcc22deeb1?rik=HWfanOA6qpF5DQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f43100000%2fcute-puppy-dogs-43117550-736-736.jpg&ehk=oNvFFrAXwIytGZL5SPx0V95EWpHGAi48IJelRlOuKMo%3d&risl=&pid=ImgRaw&r=0",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 1, //Don't include
        "name": "Spot",
        "breed": "Beagle",
        "adopted": false, //Don't include
        "size": "large",
        "dob": 243422110,
        "img_src": "https://www.xtree.com.au/images/2018/11/26/129/healthy-teacup-white-pomeranian-puppies-for-sale_1.jpg",
        "sex": "M",
        "vaccinated": false
    },
    {
        "id": 2,
        "name": "Milo",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "http://wallpapershero.com/wp-content/uploads/sites/13/2013/10/Nice-Puppies-Wallpaper-Hd-Widescreen.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 3,
        "name": "Max",
        "breed": "Poodle",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://yt3.ggpht.com/a/AATXAJwVy60_TgjXhbz9kjlZqy2yaaMjvoNUgDHrmg=s900-c-k-c0xffffffff-no-rj-mo",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 4,
        "name": "Mickey",
        "breed": "Chihuahua",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://cdn.fotofits.com/responsive/1200x1200/petzlover/gallery/img/l/cavapoo-688686.jpg",
        "sex": "F",
        "vaccinated": true
    },
    {
        "id": 5,
        "name": "Bob",
        "breed": "German Shepherd",
        "adopted": false,
        "size": "medium",
        "dob": 24322110,
        "img_src": "https://th.bing.com/th/id/R.26ab931a8dc4081da4ce0edcc22deeb1?rik=HWfanOA6qpF5DQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f43100000%2fcute-puppy-dogs-43117550-736-736.jpg&ehk=oNvFFrAXwIytGZL5SPx0V95EWpHGAi48IJelRlOuKMo%3d&risl=&pid=ImgRaw&r=0",
        "sex": "F",
        "vaccinated": true
    }
    
];


function appendCard(dog) {
    const dogContainer = document.createElement("div");
    dogContainer.classList = "card";
    dogContainer.style = "width: 18rem;";

    const img = document.createElement("img");
    img.classList = "card-img-top";
    img.src = dog["img_src"];

    const card = document.createElement("div");
    card.classList.add("card-body");
    card.classList.add("d-flex");
    card.classList.add("flex-column");

    //Name
    const name = document.createElement("p");
    name.classList = "card-text";
    name.textContent = "Hello, my name is " + dog["name"] + "!";
    //Breed
    const breed = document.createElement("p");
    breed.classList = "card-text";
    breed.textContent = "Breed: " + dog["breed"];
    //Size
    const size = document.createElement("p");
    size.classList = "card-text";
    size.textContent = "Size: " + dog["size"];
    //Date of Birth
    const dob = document.createElement("p");
    dob.classList = "card-text";
    dob.textContent = "Date of Birth: " + dog["dob"];
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
    adoptMe.textContent = "Adopt Me";

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



function getCharacterById() {
    console.log("getting dog by breed");

    const breed = document.getElementById("idInput").value;
    for (let i = 0; i < dbmock.length; i++) {
        if(dbmock[i]["breed"] == breed) {
            appendCard(dbmock[i]);
        }
    }

    
}

const cardContainer = document.querySelector("#cards");

for (let i = 0; i < dbmock.length; i++) {
    appendCard(dbmock[i]);
}
