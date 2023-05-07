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
      speed: 600,
      loop: false,
      navigation: {
        nextEl: ".concept .swiper-button-next",
        prevEl: ".concept .swiper-button-prev",
      },
    });
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

  if ($("select").length > 0) {
    $("select").selectric();
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-custom-open",
      disableScroll: true,

      onShow: (modal) => {
        $("body").addClass("modal-open");
      },

      onClose: (modal) => {
        $("body").removeClass("modal-open");
      },
    });

    $("a[data-custom-open]").map(function () {
      $(this).click((e) => e.preventDefault());
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
