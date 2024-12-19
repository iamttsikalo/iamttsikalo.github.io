//КАРУСЕЛЬ
const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const cardWidth = cards[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateCarousel() {
    const offset = -(cardWidth + 20) * currentIndex; 
    track.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}