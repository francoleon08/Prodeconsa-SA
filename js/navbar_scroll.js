//Navbar cambia de color cuando se hace scroll
const navbarScroll = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbarScroll.classList.add("navbar_on-scroll");
    if (window.scrollY == 0) {
        navbarScroll.classList.remove("navbar_on-scroll");
    }
    
    console.log(window.scrollY);
})