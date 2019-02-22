function navChange() {
    let windowY = Math.ceil(window.scrollY);
    let download = document.querySelector("#download").offsetTop - 100;
    let features = document.querySelector("#features").offsetTop - 100;
    let contact = document.querySelector("#contact").offsetTop - 300;

    if (windowY >= download && windowY < features) {
        document.querySelector("#m1").style.color = "#fdcc52";
    }
    else if (windowY >= features && windowY < contact) {
        document.querySelector("#m2").style.color = "#fdcc52";
    }
    else if (windowY >= contact) {
        document.querySelector("#m3").style.color = "#fdcc52";
    }
}

window.addEventListener("scroll", navChange);