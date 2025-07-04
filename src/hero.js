export default function hero() {
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".heroImage");
    const slides = slider.querySelectorAll("a");
    const dots = document.querySelectorAll(".slider-dot");
    let currentIndex = 0;
    let slideInterval;

    function showNextSlide() {
      // Hide current slide
      slides[currentIndex].style.transform = "translateX(-100%)";

      // Update current index
      currentIndex = (currentIndex + 1) % slides.length;

      // Show new slide
      slides[currentIndex].style.transform = "translateX(0)";

      // Update dots
      updateDots();

      // Reset hidden slides after transition
      setTimeout(() => {
        slides.forEach((slide, index) => {
          if (index !== currentIndex) {
            slide.style.transform = "translateX(100%)";
          }
        });
      }, 1000);
    }

    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle("bg-opacity-100", index === currentIndex);
        dot.classList.toggle("bg-opacity-50", index !== currentIndex);
      });
    }

    function goToSlide(index) {
      if (index !== currentIndex) {
        slides[currentIndex].style.transform = "translateX(-100%)";
        currentIndex = index;
        slides[currentIndex].style.transform = "translateX(0)";
        updateDots();

        // Reset other slides
        slides.forEach((slide, i) => {
          if (i !== currentIndex) {
            slide.style.transform = "translateX(100%)";
          }
        });
      }
    }

    // Dot navigation
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index);
        goToSlide(index);
        resetInterval();
      });
    });

    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(showNextSlide, 5000);
    }

    // Pause on hover
    slider.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    slider.addEventListener("mouseleave", resetInterval);

    // Start the slider
    slideInterval = setInterval(showNextSlide, 5000);
  });
}
