var url = document.URL;
var regex = /\d{4}/;
var currentPage = parseInt(url.match(regex));
var nextPage = ("0000" + ("" + (currentPage + 1))).substring(
  ("" + (currentPage + 1)).length
);
var prevPage = ("0000" + ("" + (currentPage - 1))).substring(
  ("" + (currentPage - 1)).length
);

var newUrl;
var favicon = document.createElement("link");
favicon.type = "image/x-icon";
favicon.rel = "shortcut icon";
favicon.href =
  "https://vignette.wikia.nocookie.net/martial-world/images/6/64/Favicon.ico/revision/latest?cb=20180714230041";
document.getElementsByTagName("head")[0].appendChild(favicon);

window.onload = function() {
  var main = document.createElement("div");
  var sidebarButton = document.createElement("button");
  var sidebar = document.createElement("div");
  var sidebarContent = document.createElement('div');

  main.id = "main";
  main.appendChild(sidebarButton);

  sidebarContent.className = "sidebarContent";
  sidebarContent.innerHTML = '<object type="text/html" data="nav.xhtml" ></object>';

  sidebar.id = "mySidebar";
  sidebar.className = "sidebar";
  sidebar.appendChild(sidebarContent);

  sidebarButton.innerHTML = "☰";
  sidebarButton.className = "sidebarButton";
  sidebarButton.onclick = function() {
    if (sidebar.style.width == "250px") {
      sidebar.style.width = "0px";
      sidebar.style.backgroundColor = "";
      main.style.marginLeft = "0px";

      sidebarButton.style.backgroundColor = "#182026";
    } else {
      sidebar.style.width = "250px";
      sidebar.style.backgroundColor = "#283640";

      sidebarButton.style.backgroundColor = "#283640";
    }
  };

  document
    .getElementsByTagName("body")[0]
    .insertAdjacentElement("afterbegin", main);
  document
    .getElementsByTagName("body")[0]
    .insertAdjacentElement("afterbegin", sidebar);
};

document.title = "Martial World Chapter " + currentPage;
document.addEventListener("keydown", changePage);

function changePage(e) {
  switch (e.keyCode) {
    case 39:
      console.log(nextPage);
      newUrl = url.replace(regex, nextPage);
      window.location.href = newUrl;
      break;
    case 37:
      console.log(prevPage);
      newUrl = url.replace(regex, prevPage);
      window.location.href = newUrl;
      break;
  }
}