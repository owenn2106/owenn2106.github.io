const skillsTitle = document.querySelector(".skills h4");
const skill = document.querySelectorAll(".skill");

const skillsTl = gsap.timeline({
  scrollTrigger: {
    trigger: skillsTitle,
    start: "center bottom",
    end: "+=250px",
    scrub: 0.5,
  },
});

skillsTl.fromTo(skillsTitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1 });

const skillContentTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills-row:nth-child(1)",
    start: "top bottom",
    end: "+=610px",
    scrub: 0.5,
  },
});

skillContentTl.fromTo(
  skill,
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.1, delay: 0.3 }
);
