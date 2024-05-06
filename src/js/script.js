
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2000, // Adjust delay (in milliseconds) between slides
      disableOnInteraction: false, // Allow navigation while autoplaying
    },
    on: {
      slideChange: function () {
        var activeSlide = this.slides[this.activeIndex];
        var allSlides = this.slides;
  
        // Loop through all slides
        for (var i = 0; i < allSlides.length; i++) {
          if (allSlides[i] === activeSlide) {
            // Remove blur effect for active slide
            allSlides[i].style.filter = "blur(0)";
          } else {
            // Apply blur effect to non-active slides
            allSlides[i].style.filter = "blur(2px)"; // Adjust blur strength as needed
          }
        }
      },
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const navbarLinks = document.getElementById('navbarLinks');

    menuBtn.addEventListener('click', function() {
        navbarLinks.classList.toggle('show-nav');
    });
});

  
  //toArrow
const arrowIcon= document.querySelector(".fa-arrow-up");

arrowIcon.addEventListener("click" ,() =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
  
//Servicepage:
document.addEventListener('DOMContentLoaded', function() {
  const animatedHeading = document.getElementById('animatedHeading');
  animatedHeading.style.opacity = '0';
  animatedHeading.style.transform = 'translateY(-100px)';
  animatedHeading.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Trigger the animation after a delay to ensure the page has fully loaded
  setTimeout(function() {
      animatedHeading.style.opacity = '2';
      animatedHeading.style.transform = 'translateY(0)';
  }, 1200); // Adjust the delay time as needed
});
