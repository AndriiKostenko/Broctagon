function displayMap(evt, mapName) {
  var i, map, tabLinks;

  map = document.getElementsByClassName("map");
  for (i = 0; i < map.length; i++) {
    map[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  document.getElementById(singapore).style.display = "block";
  evt.currentTarget.className += " active";
}

displayMap();

//  // Get all elements with class="tabcontent" and hide them
//  tabcontent = document.getElementsByClassName("tabcontent");
//  for (i = 0; i < tabcontent.length; i++) {
//    tabcontent[i].style.display = "none";
//  }

//  // Get all elements with class="tablinks" and remove the class "active"
//  tablinks = document.getElementsByClassName("tablinks");
//  for (i = 0; i < tablinks.length; i++) {
//    tablinks[i].className = tablinks[i].className.replace(" active", "");
//  }

//  // Show the current tab, and add an "active" class to the link that opened the tab
//  document.getElementById(cityName).style.display = "block";
//  evt.currentTarget.className += " active";
