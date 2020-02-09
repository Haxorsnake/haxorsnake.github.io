var url = document.URL;
var regex = /\d{4}/;
var currentPage = parseInt(url.match(regex));
var nextPage = ('0000' + ("" + (currentPage + 1))).substring(("" + (currentPage + 1)).length);
var prevPage = ('0000' + ("" + (currentPage - 1))).substring(("" + (currentPage - 1)).length);

var newUrl;

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://vignette.wikia.nocookie.net/martial-world/images/6/64/Favicon.ico/revision/latest?cb=20180714230041';
    document.getElementsByTagName('head')[0].appendChild(link);

document.title = "Martial World Chapter " + currentPage;
document.addEventListener('keydown', changePage);

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