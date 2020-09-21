window.addEventListener("scroll", function() {
    var header = document.querySelector(".container1");
    var logo = document.querySelector(".logo img");
    header.classList.toggle("whiteBg", window.scrollY > 0);
    logo.classList.toggle("logoSmall", window.scrollY > 0);
})
