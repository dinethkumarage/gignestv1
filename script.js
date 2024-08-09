const changingText = document.getElementById('changing-text');
const words = ['internship', 'job', 'opportunity', 'future'];
let currentIndex = 0;

function changeText() {
    changingText.style.opacity = 0;
    setTimeout(() => {
        changingText.textContent = words[currentIndex];
        changingText.style.opacity = 1;
        currentIndex = (currentIndex + 1) % words.length;
    }, 500);
}

setInterval(changeText, 1500);

// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');