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
      // navigation: {
      //   nextEl: ".restaurant-menu .swiper-button-next",
      //   prevEl: ".restaurant-menu .swiper-button-prev",
      // },
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
      // navigation: {
      //   nextEl: ".news-main .swiper-button-next",
      //   prevEl: ".news-main .swiper-button-prev",
      // },
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
    $("select").selectric();
  }

  ///////////////////////////////////////

  if ($(".complect-tabs").length) {
    $(".complect-tabs").tabslet({
      mouseevent: "click",
      animation: true,
    });

    $(".complect-tabs").on("_before", function (e) {
      $(e.target).find("input").prop("checked", true);
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".rugs-slider").length > 0) {
    const swiper = new Swiper(".rugs-slider .swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-120%", 0, -500],
        },
        next: {
          translate: ["120%", 0, -500],
        },
      },
      loop: false,
      navigation: {
        nextEl: ".rugs-slider .swiper-button-next",
        prevEl: ".rugs-slider .swiper-button-prev",
      },
      pagination: {
        el: ".rugs-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          autoHeight: true,
        },
        640: {
          slidesPerView: 1,
        },
      },
    });
  }

  if ($(".linkFancyBox").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".menu-burger").length) {
    $(".menu-burger").on("click", function () {
      $(".menu-burger").stop().toggleClass("open");
      $(".header__inner").stop().slideToggle();
    });
  }

  if ($(".menu").length > 0) {
    if (location.hash != "") {
      let scroll;
      hashLoad = location.hash;

      scroll = setScrollMargin(hashLoad);

      $("html, body").animate(
        {
          scrollTop: scroll,
        },
        {
          duration: 0,
          easing: "linear",
        }
      );
    }

    initMenuAnchor();
  }

  if ($("[data-aos]").length) {
    $("[data-aos]").each((i, el) => {
      AOS.init({
        offset: 300,
        // duration: 1200,
        once: false,
      });
    });
  }
});

$(window).resize(function () {
  console.log("resize");
});

function initMenuAnchor() {
  $(".menu ul li a").on("click", function () {
    if ($(".menu-burger").hasClass("open")) {
      $(".menu-burger").trigger("click");
    }

    if ($(this).attr("data-link")) {
      let href = $(this).attr("data-link");
      let settingsScroll;

      if ($(window).width() < 1440) {
        settingsScroll = $(href).offset().top - 59;
      } else {
        settingsScroll = $(href).offset().top - 120;
      }

      settingsScroll = setScrollMargin(href);

      $("html, body").animate(
        {
          scrollTop: settingsScroll,
        },
        {
          duration: 370,
          easing: "linear",
        }
      );
    }
  });
}
