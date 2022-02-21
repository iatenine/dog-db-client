const baseUrl = "http://localhost:8080";

async function listDog() {
  const name = document.getElementById("dogName").value;
  const breed = document.getElementById("dog-breed").value;
  const dogAge = document.getElementById("dogAge").value;
  const vaccinated = document.getElementById("vaccinated").checked;
  const sizeRadios = document.getElementsByName("size");
  const sexRadios = document.getElementsByName("sex");
  const dob = new Date(dogAge).getTime();
  const sex = getCheckedRadio(sexRadios);
  const size = getCheckedRadio(sizeRadios);

  console.log(dob); // Getting set off by a day

  // Breed only works when enums are available

  const res = await makeAuthenticatedRequest(
    "POST",
    `${baseUrl}/users/newdog`,
    {
      name,
      dob,
      sex,
      vaccinated,
      size,
      breed: {
        name: breed,
        averageWeight: size,
      },
    }
  );

  if (res.status !== 200) {
    console.error("Something went wrong: ", res);
  }
}

function getCheckedRadio(radios) {
  for (const radio of radios) {
    if (radio.checked) return radio.value;
  }
}
