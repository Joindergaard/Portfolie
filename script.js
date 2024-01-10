function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


/*ABOUT*/
const slides = document.querySelector('.slides');
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
