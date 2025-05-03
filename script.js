document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let current = 0;

      const updateCounter = () => {
        const increment = target / 200;

        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current) + suffix;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target + suffix;
        }
      };

      updateCounter();
    });
  });

  
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  });

