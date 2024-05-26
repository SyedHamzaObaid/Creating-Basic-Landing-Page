// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);

    document.getElementById('learn-more').addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('features').offsetTop,
            behavior: 'smooth'
        });
    });
});
