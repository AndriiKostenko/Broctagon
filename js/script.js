let countries = document.querySelectorAll(".country");

function changeMap(mapFileName, index) {
  console.log(mapFileName);
  document.querySelector(".map img").src = './img/Offices/maps/' + mapFileName;

  for (var childIndex = 0; childIndex < countries.length; childIndex++) {
    if (index === childIndex) {
      countries[index].style.opacity = 1;
      let image = countries[index].querySelector("img");
      image.src = image.src.replace('flag-grey-icon','flag-icon');
      continue;
    }
    countries[childIndex].style.opacity = 0.5;
    let image = countries[childIndex].querySelector("img");
    image.src = image.src.replace('flag-icon','flag-grey-icon');
  }
}

function handleContactFormSubmit(e) {
  if (e.preventDefault) e.preventDefault();

  let form = document.forms["contact_form"];
  let firstName = form.elements["first name"].value;
  let lastName = form.elements["last name"].value;
  let email = form.elements["email"].value;
  let company = form.elements["company"].value;
  let url = form.elements["url"].value;
  let service = form.elements["service"].value;
  let otherContacts = form.elements["other contact"].value;

  //make API call
  alert("Making API call on contact form submit with data: " + "\n" +
    "First Name:" + firstName + "\n" +
    "Last Name:" + lastName + "\n" +
    "Email:" + email + "\n" +
    "Company:" + company + "\n" +
    "URL:" + url + "\n" +
    "Service:" + service + "\n" +
    "Other Contacts:" + otherContacts
  );
  return false;
}