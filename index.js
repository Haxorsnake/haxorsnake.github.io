var imageHolder = document.querySelector(".imageHolder");

function test() {
    let imgEle = document.createElement("img");

    imgEle.src = "https://pbs.twimg.com/profile_images/1148502291692965889/rdZ5NNWh_400x400.png";
    imageHolder.appendChild(imgEle);
}