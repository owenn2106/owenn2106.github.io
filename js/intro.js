const tl = gsap.timeline({ delay: 2.2 });
const bigText = document.querySelector(".big-text");
const nav = document.querySelectorAll("nav");
const logoAnim = document.querySelectorAll("#logo-anim");
const logoFin = document.querySelectorAll("#logo-finish");
const mouse = document.querySelectorAll(".mouse-div");

tl.to(logoAnim, { display: "none", opacity: 0, duration: 1 })
  .fromTo(
    logoFin,
    { display: "none", opacity: 0, y: 0 },
    { display: "block", opacity: 1, y: -50, duration: 1 }
  )
  .fromTo(
    bigText,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 1 },
    "-=1"
  )
  .fromTo(nav, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1 }, "-=1")
  .from(mouse, { opacity: 0 });
