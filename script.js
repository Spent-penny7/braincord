/*=====================================================
                MOBILE NAVIGATION
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("JavaScript Loaded");

    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    if (!hamburger || !mobileMenu) {
        console.error("Hamburger or mobile menu not found.");
        return;
    }

    // Toggle menu
    hamburger.addEventListener("click", function (e) {

        e.stopPropagation();

        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    // Close when clicking a link
    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {

        if (
            !mobileMenu.contains(e.target) &&
            !hamburger.contains(e.target)
        ) {

            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

});
const modal = document.getElementById("serviceModal");

const title = document.getElementById("modalTitle");

const description = document.getElementById("modalDescription");

document.querySelectorAll(".learn-more").forEach(button=>{

button.addEventListener("click",function(e){

e.preventDefault();

title.innerHTML=this.dataset.title;

description.innerHTML=this.dataset.description;

modal.classList.add("active");

});

});

document.querySelector(".close-service").onclick=()=>{

modal.classList.remove("active");

};

document.querySelector(".close-popup").onclick=()=>{

modal.classList.remove("active");

};

modal.addEventListener("click",function(e){

if(e.target===modal){

modal.classList.remove("active");

}

});