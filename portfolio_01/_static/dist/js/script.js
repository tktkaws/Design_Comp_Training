const run = function () {
  barba.init({
    transitions: [
      {
        name: "page-transition",
        sync: true,
        leave: function (data) {
          const done = this.async();
          data.current.container.style.top = -window.scrollY + "px";
          data.current.container.classList.add("js-barba__leave");

          window.scrollTo(0, 0);
          anime({
            targets: data.current.container,
            translateX: [0, "-100%"],
            easing: "easeInOutCubic",
            duration: 400,
            complete: function () {
              done();
            },
          });
        },
        enter: function (data) {
          const done = this.async();
          anime({
            targets: data.next.container,
            translateX: ["100%", 0],
            easing: "easeInOutCubic",
            duration: 400,
            complete: function () {
              done();
            },
          });
        },
      },
    ],
  });
};
document.addEventListener("DOMContentLoaded", run);
