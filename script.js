function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.4,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      const timer = document.querySelector("#line1-part1 h5");

      let count = 10; // we dont want to show user 0 - 9
      console.log(timer);

      let interval = setInterval(function () {
        count++;
        timer.textContent = count;
        if (count == 100) {
          clearInterval(interval);
        }
      }, 34);
    },
  });
  tl.to(".line h2", {
    animationName: "animate",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.8,
  });
  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    opacity: 0,
    y: 120,
    stagger: 0.1,
  });
}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (e) {
    gsap.to("#cursor", {
      left: e.clientX,
      top: e.clientY,
    });
  });

  Shery.makeMagnet("#menu h3");
}
cursorAnimation();
