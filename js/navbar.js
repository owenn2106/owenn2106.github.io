const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation

    burger.classList.toggle("toggle");
  });
};

navSlide();

$(".nav-links li").click(function () {
  $(".burger").click();
});

const burger = document.querySelectorAll(".burger div");
const resume = document.querySelectorAll("#resume-btn");

const navTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".welcome-text",
    start: "bottom top",
    scrub: true,
  },
});

navTl
  .fromTo(
    burger,
    { backgroundColor: "white" },
    { backgroundColor: "var(--clr-red)", ease: "back.out(2)" }
  )
  .to(resume, { color: "var(--clr-red" }),
  "-=1";
