$(document).ready(function () {
  if ($(".grettings").length > 0) {
    const swiper = new Swiper(".grettings .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      speed: 600,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      navigation: {
        nextEl: ".grettings .swiper-button-next",
        prevEl: ".grettings .swiper-button-prev",
      },
    });
  }

  if ($(".concept").length > 0) {
    const swiper = new Swiper(".concept .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoHeight: true,
      speed: 600,
      loop: false,
      navigation: {
        nextEl: ".concept .swiper-button-next",
        prevEl: ".concept .swiper-button-prev",
      },
    });
  }

  if ($(".restaurant-menu").length > 0) {
    const swiper = new Swiper(".restaurant-menu .swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
            nextEl: ".restaurant-menu .swiper-button-next",
            prevEl: ".restaurant-menu .swiper-button-prev",
          },
        },
        768: {
          slidesPerView: "auto",
        },
      },
    });
  }

  if ($(".restaurant-location").length > 0) {
    const swiper = new Swiper(".restaurant-location .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 1200,
      loop: false,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".restaurant-location .swiper-button-next",
        prevEl: ".restaurant-location .swiper-button-prev",
      },
    });
  }

  if ($(".news-main").length > 0) {
    const swiper = new Swiper(".news-main .swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      autoHeight: true,
      navigation: {
        nextEl: ".news-main .swiper-button-next",
        prevEl: ".news-main .swiper-button-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: "auto",
        },
      },
    });
  }

  if ($(".gallery").length > 0) {
    if ($(window).width() < 1200) {
      const swiper = new Swiper(".gallery", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: ".gallery .swiper-button-next",
          prevEl: ".gallery .swiper-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
    }
  }

  if ($(".services").length > 0) {
    const swiper = new Swiper(".services .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 1200,
      loop: false,
      effect: "fade",
      autoHeight: true,
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: ".services .swiper-button-next",
        prevEl: ".services .swiper-button-prev",
      },
    });
  }

  if ($(".menu-slider__slider").length > 0) {
    const swiper = new Swiper(".menu-slider__slider", {
      slidesPerView: 7,
      slidesPerGroup: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".menu-slider .swiper-button-next",
        prevEl: ".menu-slider .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 6,
        },
        1620: {
          slidesPerView: 7,
        },
      },
    });
  }

  if ($(".phoneInput").length > 0) {
    $(".phoneInput").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".input-time").length > 0) {
    $(".input-time input").map(function () {
      $(this).inputmask({
        mask: "99:99",
        placeholder: "0",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".counter").length > 0) {
    $(".counter").map(function () {
      let minus = $(this).find(".counter__minus");
      let plus = $(this).find(".counter__plus");
      let text = $(this).find(".counter__text");

      minus.on("click", () => {
        let count = Number(text.text());
        text.text(count == 0 ? 0 : count - 1);
      });

      plus.on("click", () => {
        let count = Number(text.text());
        text.text(count + 1);
      });
    });
  }

  if ($(".datepicker").length > 0) {
    $.datepicker.setDefaults($.datepicker.regional["ru"]);

    $(".datepicker").map(function () {
      $(this).datepicker();
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-custom-open",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($("select").length > 0) {
    if ($(window).width() >= 1200) {
      $("select").map(function () {
        let inputTime = $(this).parents(".input-item").find(".input-time");

        $(this).selectric({
          onOpen: function () {
            inputTime.addClass("visible");
            inputTime.find("input").focus();
          },
          onChange: function (element) {
            let current = $(element).val();

            $(inputTime.find("input")).val(current);
          },
          onClose: function () {
            inputTime.removeClass("visible");
          },
        });
      });
    }
  }

  if ($(".menu-burger").length) {
    $(".menu-burger").on("click", function () {
      $("body").toggleClass("hidden");
      $(".menu-burger").stop().toggleClass("open");
      $(".menu-open").stop().slideToggle();
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($("[data-aos]").length) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 400,
        once: false,
      });
    });
  }

  if ($(".js-all-menu").length) {
    $(".js-all-menu").on("click", function (e) {
      e.preventDefault();

      let text = "";
      let menuFull = $(".menu-full");
      let menuDetails = $(".menu-details");

      if ($(this).hasClass("active")) {
        text = $(this).attr("data-text");
        menuFull.show();
        menuDetails.hide();
      } else {
        text = $(this).attr("data-text-active");
        menuFull.hide();
        menuDetails.show();
      }

      $(this).text(text).toggleClass("active");
    });
  }
});
