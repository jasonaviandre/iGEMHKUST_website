const nav = document.querySelector(".nav-btn");
const body = document.querySelector("header");

const options = {
    rootMargin: "-40px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("whiteBg");
            console.log("test");
        } else {
            nav.classList.remove("whiteBg");
        }
    });
}, options);

headerObserver.observe(body);