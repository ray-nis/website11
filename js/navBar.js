let nav = document.querySelector(".nav-bar");
let navItems = document.querySelectorAll(".nav-item");

for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.color = "";

    navItems[i].addEventListener("mouseover", () => {
        navItems[i].style.color = "#fff";
    })
    navItems[i].addEventListener("mouseout", () => {
        navItems[i].style.color = "";
    })
}

function changeNavOnScroll() {
    let windowY = Math.ceil(window.scrollY);

    if (windowY > 100) {
        nav.style.backgroundColor = "#f4f4f4";

        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "#000";

            navItems[i].addEventListener("mouseover", () => {
                navItems[i].style.color = "#fdcc52";
            })
            navItems[i].addEventListener("mouseout", () => {
                navItems[i].style.color = "#000";
            })
        }
    }

    else {
        nav.style.backgroundColor = "";

        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "";

            navItems[i].addEventListener("mouseover", () => {
                navItems[i].style.color = "#fff";
            })
            navItems[i].addEventListener("mouseout", () => {
                navItems[i].style.color = "";
            })
        }
    }
}

window.addEventListener("scroll", changeNavOnScroll);