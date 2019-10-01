// header fixed
window.onscroll = function() {
  fixedHeader();
};

let sticky = window.pageYOffset;
let header = document.querySelector(".header");

function fixedHeader() {
  if (window.pageYOffset >= 1) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

// tabs for services
window.onload = function() {
  document.querySelector(".tabs").addEventListener("click", showTabNameContent);

  function showTabNameContent(event) {
    let tabIndex = event.target.dataset.tab;
    let tabTitles = document.querySelectorAll(".tab-title");
    for (let i = 0; i < tabTitles.length; i++) {
      if (i == tabIndex) {
        tabTitles[i].classList.contains("active-tab") ||
          tabTitles[i].classList.add("active-tab");
      } else {
        tabTitles[i].classList.contains("active-tab") &&
          tabTitles[i].classList.remove("active-tab");
      }
    }
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
      if (i == tabIndex) {
        slides[i].classList.contains("active") ||
          slides[i].classList.add("active");
      } else {
        slides[i].classList.contains("active") &&
          slides[i].classList.remove("active");
      }
    }
  }
};

//changing maps

let countries = document.querySelectorAll(".country");

function changeMap(mapFileName, index) {
  if (window.outerWidth < 1020) return;
  document.querySelector(".map img").src = "./img/Offices/maps/" + mapFileName;

  for (var childIndex = 0; childIndex < countries.length; childIndex++) {
    if (index === childIndex) {
      countries[childIndex].style.opacity = 1;
      let image = countries[childIndex].querySelector("img");
      image.src = image.src.replace("flag-grey-icon", "flag-icon");
      let details = countries[childIndex].querySelector(".details");
      details.style.display = "block";
      let name = countries[childIndex].querySelector(".name");
      name.style.backgroundColor = "#C32027";
    } else {
      countries[childIndex].style.opacity = 0.5;
      let image = countries[childIndex].querySelector("img");
      image.src = image.src.replace("flag-icon", "flag-grey-icon");
      let details = countries[childIndex].querySelector(".details");
      details.style.display = "none";
      let name = countries[childIndex].querySelector(".name");
      name.style.backgroundColor = "#dbdcdc";
    }
  }
}

function handleContactFormSubmit() {
  let form = document.forms["contact_form"];
  let firstName = form.elements["first name"].value;
  let lastName = form.elements["last name"].value;
  let email = form.elements["email"].value;
  let company = form.elements["company"].value;
  let url = form.elements["url"].value;
  let service = form.elements["service"].value;
  let otherContacts = form.elements["other contact"].value;

  //make API call
  alert(
    "Making API call on contact form submit with data: " +
      "\n" +
      "First Name:" +
      firstName +
      "\n" +
      "Last Name:" +
      lastName +
      "\n" +
      "Email:" +
      email +
      "\n" +
      "Company:" +
      company +
      "\n" +
      "URL:" +
      url +
      "\n" +
      "Service:" +
      service +
      "\n" +
      "Other Contacts:" +
      otherContacts
  );
  form.reset();
}

function refreshResearchTable() {
  fetch("https://webapi.mt4.space:8443/price/all")
    .then(response => {
      return response.json();
    })
    .then(data => {
      updateTable(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function refreshResearchTableUsedMockData() {
  updateTable(getMockData());
}

function findCurrencyData(data, currency) {
  return data.find(function(element) {
    return element["Symbol"].includes(currency);
  });
}

function updateTable(data) {
  let table = document.querySelector(".reserch_table");
  let rows = table.querySelectorAll(".table_row.data");

  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i];
    let currencyData = findCurrencyData(data, currentRow.children[1].innerText);
    currentRow.children[2].innerText = currencyData.Spread;
    currentRow.children[3].innerText = currencyData.Bid;
    currentRow.children[4].innerText = currencyData.Ask;
  }
}

// setInterval(refreshResearchTable, 1000);
setInterval(refreshResearchTableUsedMockData, 1000);

function getMockData() {
  return [
    {
      Ask: (Math.random() + 1).toFixed(5),
      Bid: (Math.random() + 1).toFixed(5),
      Spread: Math.random().toFixed(2),
      Symbol: "EURUSD.ecn"
    },
    {
      Ask: (Math.random() + 1).toFixed(5),
      Bid: (Math.random() + 1).toFixed(5),
      Spread: Math.random().toFixed(2),
      Symbol: "GBPUSD.ecn"
    },
    {
      Ask: (Math.random() * 1000).toFixed(3),
      Bid: (Math.random() * 1000).toFixed(3),
      Spread: Math.random().toFixed(2),
      Symbol: "USDJPY.ecn"
    },
    {
      Ask: (Math.random() * 10000).toFixed(3),
      Bid: (Math.random() * 10000).toFixed(3),
      Spread: Math.random().toFixed(2),
      Symbol: "BTCUSD.nx"
    },
    {
      Ask: (Math.random() * 1000).toFixed(3),
      Bid: (Math.random() * 1000).toFixed(3),
      Spread: Math.random().toFixed(2),
      Symbol: "ETHUSD.nx"
    },
    {
      Ask: (Math.random() + 1).toFixed(5),
      Bid: (Math.random() + 1).toFixed(5),
      Spread: Math.random().toFixed(2),
      Symbol: "XRPUSD.nx"
    },
    {
      Ask: (Math.random() * 10000).toFixed(3),
      Bid: (Math.random() * 10000).toFixed(3),
      Spread: Math.random().toFixed(2),
      Symbol: "XAUUSD.ecn"
    },
    {
      Ask: (Math.random() * 10000).toFixed(3),
      Bid: (Math.random() * 10000).toFixed(3),
      Spread: Math.random().toFixed(2),
      Symbol: "NACUSD.c"
    }
  ];
}

function styleCountriesForMobile() {
  if (window.outerWidth < 1020) {
    for (var childIndex = 0; childIndex < countries.length; childIndex++) {
      countries[childIndex].style.opacity = 1;
      let image = countries[childIndex].querySelector("img");
      image.src = image.src.replace("flag-grey-icon", "flag-icon");
      let details = countries[childIndex].querySelector(".details");
      details.style.display = "block";
      let name = countries[childIndex].querySelector(".name");
      name.style.backgroundColor = "#C32027";
    }
  }
}

styleCountriesForMobile();
