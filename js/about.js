const aboutTitle = document.querySelector(".about h4");
const about = document.querySelectorAll(".about-wrapper");

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: aboutTitle,
    start: "center bottom",
    end: "+=250px",
    scrub: 0.5,
  },
});

aboutTl.fromTo(aboutTitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1 });

const aboutContentTl = gsap.timeline({
  scrollTrigger: {
    trigger: about,
    start: "top bottom",
    end: "center center",
    scrub: 0.5,
  },
});

aboutContentTl.fromTo(
  about,
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.1, delay: 0.3 }
);
