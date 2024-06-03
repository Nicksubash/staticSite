document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconClosed = menuBtn.querySelector('svg.block');
    const iconOpen = menuBtn.querySelector('svg.hidden');

    function hideMobileMenu() {
        mobileMenu.classList.add('hidden');
        iconClosed.classList.remove('hidden');
        iconOpen.classList.add('hidden');
    }

    hideMobileMenu();

    menuBtn.addEventListener('click', function() {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);

        // Toggle visibility of the mobile menu
        mobileMenu.classList.toggle('hidden');

        // Toggle icons
        iconClosed.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
    });
});

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


//   for the arrow
document.addEventListener("DOMContentLoaded", (event)=> {
    const scrollToTopIcon= document.getElementById('scrollToTop');

    scrollToTopIcon.addEventListener("click", ()=> {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })
})


  document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
  });



  document.addEventListener('DOMContentLoaded', (event) => {
    const scrollToTopIcon = document.getElementById('scrollToTop');

    scrollToTopIcon.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
