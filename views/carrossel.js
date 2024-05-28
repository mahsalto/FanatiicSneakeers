let currentIndex = 0;
const carousel = document.getElementById('myCarousel');
const totalItems = document.querySelectorAll('.carousel-item').length;

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

setInterval(function() {
  changeSlide(1);
}, 3000);