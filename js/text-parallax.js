const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".welcome-text",
    start: "top top",
    scrub: 1,
  },
});

timeline.to(".welcome-text h3", {
  y: 600,
  opacity: 0,
  duration: 1,
});
