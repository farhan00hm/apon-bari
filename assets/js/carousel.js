document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.ride-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Initialize
    showSlide(currentSlide);
    
    // Navigation
    document.querySelector('.carousel-prev').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    
    document.querySelector('.carousel-next').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
    
    // Dot controls
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
    
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }
    
    // Optional: Auto-rotate every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  });