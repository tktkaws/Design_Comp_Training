$(function () {
  $(".typed").typed({
    strings: ["タカハシタカユキのポートフォリオ"],
    // strings: ["タカハシタカユキのポートフォリオ", "左の画像をクリック"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500,
  });
});

$(function () {
  $(".typed-about").typed({
    strings: ["タカハシタカユキについて"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500,
  });
});

$(function () {
  $(".typed-works").typed({
    strings: ["タカハシタカユキの制作物"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500,
  });
});

const mySwiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  speed: 8000,
  autoplay: {
    delay: 0,
  },
});

window.addEventListener("load", function () {
  initSwiper(); // ページ読み込み後に初期化
});
