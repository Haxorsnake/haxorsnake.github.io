function test() {
    var imageHolder = document.querySelector(".images");
    let imgEle = document.createElement("img");

    if (imageHolder.children.length == 10) {
        imgEle.src = "https://cdn.pixabay.com/photo/2017/07/27/12/12/stop-2545121_960_720.png";
        imageHolder.appendChild(imgEle);
    }else if (imageHolder.children.length < 10) {
        imgEle.src = "https://pbs.twimg.com/profile_images/1148502291692965889/rdZ5NNWh_400x400.png";
        imageHolder.appendChild(imgEle);
        console.log(":D");
    }
}