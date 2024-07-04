document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');

  window.onscroll = function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Smooth scroll to the About section
  document.getElementById('scrollToAbout').addEventListener('click', function () {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  // Carousel functionality
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel img');

  setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }, 3000);
});
