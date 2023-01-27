(function ($) {
  $(document).ready(function () {
    "use strict";

    /* ======= perspective ======= */
    (function () {
      var tiltSettings = [
        {},
        {
          movement: {
            imgWrapper: {
              translation: { x: 10, y: 10, z: 30 },
              rotation: { x: 0, y: -10, z: 0 },
              reverseAnimation: { duration: 200, easing: "easeOutQuad" },
            },
            lines: {
              translation: { x: 10, y: 10, z: [0, 70] },
              rotation: { x: 0, y: 0, z: -2 },
              reverseAnimation: { duration: 2000, easing: "easeOutExpo" },
            },
            caption: {
              rotation: { x: 0, y: 0, z: 2 },
              reverseAnimation: { duration: 200, easing: "easeOutQuad" },
            },
            overlay: {
              translation: { x: 10, y: -10, z: 0 },
              rotation: { x: 0, y: 0, z: 2 },
              reverseAnimation: { duration: 2000, easing: "easeOutExpo" },
            },
            shine: {
              translation: { x: 100, y: 100, z: 0 },
              reverseAnimation: { duration: 200, easing: "easeOutQuad" },
            }
          }
        }
      ]

      /* ======= perspective function ======= */
      function init() {
        var idx = 0;
        [].slice
          .call(document.querySelectorAll(".coddle__box"))
          .forEach(function (el, pos) {
            idx = pos % 2 === 0 ? idx + 2 : idx
            new TiltFx(el, tiltSettings[idx - 2])
          })
      }
      (function () {
        init()
      })()
    })()

    /* ======= sticky navbar ======= */
    $(window).on("scroll touchmove", function (e) {
      $(".navbar").toggleClass("stick-me", $(document).scrollTop() > 1)
    })

    /* ======= hamburger ======= */
    $(".hamburger-menu").on("click", function (e) {
      $(this).toggleClass("open")
      $(".hamburger-menu-box").toggleClass("show-me")
      $(".search-box").removeClass("show-me")
    })

    /* ======= search ======= */
    $(".search-btn").on("click", function (e) {
      $(".search-box").toggleClass("show-me")
      $(".hamburger-menu").removeClass("open")
      $(".hamburger-menu-box").removeClass("show-me")
    })

    /* ======= swiper ======= */
    let swiper = new Swiper(".swiper-slider", {
      speed: 600,
      parallax: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        cliclable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    })

    /* ======= main features ======= */
    $(".main-features .more-link").on("click", function (e) {
      jQuery(this).text("+")
      if ($(".feature-box ul").is(":visible")) {
        jQuery(this).text("+")
      } else {
        jQuery(this).text("-")
      }
      $(this).siblings(".feature-box ul").slideToggle()
      $(this)
        .parent(".main-features")
        .siblings(".feature-box")
        .children("ul")
        .next()
        .slideUp()
      return false
    })

    /* ======= works filter ======= */
    $(window).load(function (e) {
      let $container = $(".works-grid")
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        }
      })
      $(".works-filter a").click(function (e) {
        $(".works-filter .current").removeClass("current")
        $(this).addClass("current")
        let selector = $(this).attr("data-filter")
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        })
        return false;
      })
    })
  }) // ready function end

  /* ======= odometer ======= */
  $(window).scroll(function (e) {
    $(".odometer").each(function (i) {
      let bottom__object = $(this).offset().top + $(this).outerHeight()
      let bottom__window = $(window).scrollTop() + $(window).height()
      if (bottom__window > bottom__object) {
        $("#1").html("2,751")
        $("#2").html("943")
        $("#3").html("1,519")
        $("#4").html("3,279")
      }
    })
  })

  /* ======= wow ======= */
  const wow = new WOW({
    animateClass: "animated",
    offset: 50,
  })
  wow.init()
})(jQuery)
