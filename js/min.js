var // Var Header
    link = document.querySelector(".header .contener .link"),
    iconTransform = document.querySelector(".header .contener .link .icon"),
    nav = document.querySelector(".header .contener .link .nav");
link.onclick = function () {
    iconTransform.classList.toggle("iconTransform"),
    nav.classList.toggle("open");
};