document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '39') {
        console.log("Testing")

    }else if (e.keyCode == '37'){
        console.log("Testing")

    }

}
