let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;

function changeSlide(direction) {
    index = (index + direction + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(${-index * 100}%)`;
    resetAutoSlide();
}

// Auto-slide function
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

// Reset auto-slide timer on manual navigation
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Start auto-slide on page load
window.onload = startAutoSlide;

let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll Down → Show navbar
            header.style.top = "0";
        } else {
            // Scroll Up → Hide navbar
            header.style.top = "-100px"; /* Moves navbar out of view */
        }
        lastScrollTop = scrollTop;
    });
