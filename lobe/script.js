gsap.from(".TextAnimation",{
    
    y:100,
    opacity: 0,
    scale: 1,
    duration:2,
    ease: "power1.out"
    
})
gsap.registerPlugin(ScrollTrigger);

gsap.from(".text", {
  scrollTrigger: {
    trigger: ".text",      // elemento que vai acionar a animação
    start: "top 80%",    
    toggleActions: "play none none none", // anima só uma vez
  },
  opacity: 0,
  y: 100,
  duration: 1
});
gsap.from(".img",{
  scale:2,
  opacity:0,
  duration: 1,
})