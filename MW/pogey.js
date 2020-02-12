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
  var footerContent = document.createElement("p");
  footerContent.id = "footercont";
  footerContent.innerHTML = "0 / 100";
  var wrapper = document.createElement("div");

  wrapper.id = "wrapper";

  for (let item of document.body.children) {
    if (item.tagName != "script") {
      wrapper.appendChild(item);
    }
  }

  let child = document.body.firstElementChild;
  while (child) {
    if (child.tagName != "script") {
      document.body.removeChild(child);
      console.log("Removed Child!" + child.tagName);
      child = document.body.firstElementChild;
    } else {
      break;
    }
  }

  document.body.addEventListener("scroll", function() {
    let percentage =
      (document.body.scrollTop /
        (document.body.scrollHeight - document.body.clientHeight)) *
      100;
    console.log(Math.round(percentage));
    footerContent.innerHTML = `${Math.round(percentage)} / 100`;
  });

  document
    .getElementsByTagName("body")[0]
    .insertAdjacentElement("afterbegin", wrapper);

  //Sidebar
  var main = document.createElement("div");
  var sidebarButton = document.createElement("button");
  var sidebar = document.createElement("div");
  var sidebarContent = document.createElement("div");

  main.id = "main";
  main.appendChild(sidebarButton);

  sidebarContent.className = "sidebarContent";
  sidebarContent.innerHTML =
    '<object type="text/html" data="nav.xhtml" ></object>';

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
  //Sidebar END
  //Footer
  var footer = document.createElement("footer");
  var footerButton = document.createElement("button");

  footerButton.id = "footerButton";
  footerButton.innerHTML = "∎";

  footerButton.onclick = function() {
    if (footer.style.backgroundColor) {
      footer.style.backgroundColor = "";
      footerButton.style.backgroundColor = "";
      footerContent.style.display = "";
    } else {
      footerContent.style.display = "contents";
      footer.style.backgroundColor = "#283640";
      footerButton.style.backgroundColor = "#283540";
    }
  };

  footer.appendChild(footerButton);
  footer.appendChild(footerContent);
  footer.id = "footer";

  document.body.appendChild(footer);
  //Footer END
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
