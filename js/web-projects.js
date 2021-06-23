const projectTitle = document.querySelector(".projects .title");

const projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: projectTitle,
    start: "top bottom",
    end: "+=250px",
    scrub: true,
  },
});

projectTl.fromTo(projectTitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1 });

const projectImg = document.querySelectorAll(".projects img");
const projectText = document.querySelectorAll(".icastem-text, .eximia-text");

const webImgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects img:nth-child(1)",
    start: "center bottom",
    scrub: true,
  },
});

webImgTl
  .fromTo(
    projectImg,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.8 }
  )
  .fromTo(
    projectText,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.8 },
    "-=1.3"
  );
