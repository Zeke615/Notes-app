let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slider img').length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const translateValue = -currentSlide * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Auto-play the slider
setInterval(function() {
  changeSlide(1);
}, 3000);
