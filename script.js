document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: false,
    grabCursor: true,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      disabledClass: "swiper-button-disabled",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      620: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
    on: {
      slideChange: function () {
        if (this.isEnd) {
          this.autoplay.stop();
        }
      },
    },
  });
});
