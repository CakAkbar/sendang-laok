
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderContainer = document.querySelector('.slider-container');
    let currentSlideIndex = 0;

    // Function to go to a specific slide
    function goToSlide(index) {
      // Remove the 'active' class from all slides and dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      // Add 'active' class to the current slide and corresponding dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      // Move the slider container to the current slide
      const offset = -index * 100; // Each slide is 100% width
      sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    // Show the next slide
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      goToSlide(currentSlideIndex);
    }

    // Show the previous slide
    function prevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      goToSlide(currentSlideIndex);
    }

    // Navigate by clicking the dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlideIndex = index;
        goToSlide(currentSlideIndex);
      });
    });

    // Event listeners for next/prev buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Initialize the first slide
    goToSlide(currentSlideIndex);
  });

