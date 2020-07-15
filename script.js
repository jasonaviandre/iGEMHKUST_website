window.addEventListener("scroll", function() {
    var header = document.querySelector(".container");
    header.classList.toggle("whiteBg", window.scrollY > 0);
})