var // Var Header
    link = document.querySelector(".header .contener .link"),
    iconTransform = document.querySelector(".header .contener .link .icon"),
    nav = document.querySelector(".header .contener .link .nav");
var hi = prompt("Hi there how are yuo?");

if (hi !== "3612") {
    location.reload();
};

link.onclick = function(e) {
    e.stopPropagation(),
        iconTransform.classList.toggle("iconTransform"),
        nav.classList.toggle("open");
};

document.addEventListener("click", (e) => {
    if (e.iconTransform !== link) {
        if (nav.classList.contains("open")) {
            iconTransform.classList.toggle("iconTransform"),
                nav.classList.toggle("open");
        }
    }
})