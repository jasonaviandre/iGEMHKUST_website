const nav = document.querySelector(".nav-bar");
const body = document.querySelector("header");

const options = {
    rootMargin: "-600px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add("sticky");
            console.log("test");
        } else {
            nav.classList.remove("sticky");
        }
    });
}, options);

headerObserver.observe(body);