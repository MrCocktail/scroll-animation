import SplitType from "split-type"
gsap.registerPlugin(ScrollTrigger)
const text = document.querySelector("p.labels")
const replaced = document.querySelector("p.replaced-text")
const iconContainer = document.querySelector(".socials")	
const blockFooter = document.querySelector("div.foot")
const textSplitter = SplitType.create(".splitted", {types: "chars"})
console.log(text);
for (let i = 0; i < 100; i++){
    i % 45 === 0 && (replaced.innerHTML += ' <br>')
    if (i % 2 === 0){
        replaced.textContent += "0"
    } else {
        replaced.textContent += "I"
    }
}
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: replaced,
        
    }
})
tl.to(replaced, {scale: 1, opacity: .5, duration: .5})
    .to(replaced, {scale: .7, duration: .1, opacity: 0.3})
    .to(replaced, {scale: .5, duration: 1, opacity: 0})
tl.add(() => {
    replaced.classList.add("notShowed")
    text.classList.add("isShow")
})
tl
    .to(replaced, {autoAlpha: 0, duration: 0.5, opacity: 0})
    .to(text, {autoAlpha: 1, duration: 0.5})
    .to(".date", {y:0, duration: 2.5, opacity: 1, ease: "power1.inOut"})		

gsap.to("#navbar", { 
    y: 10,
    ease: "power1.out",
    duration: 3
})
gsap.to(".hero-description", {
    y: 10,
    ease: "power1.inOut",
    duration: 2,
    delay: 2
})
gsap.to(".button-box", {
    y: 0,
    ease: "power1.inOut",
    duration: 2,
    delay: 3,
    opacity: 1
})
gsap.to(".img-2", {
    duration: 4,
    delay: 2,
    opacity: 1
})
gsap.to("#partners", {
    x: 0,
    opacity: 1,
    scrollTrigger : {
        trigger: "#partners h4",
        start: "top center",
        opacity: 1,
        ease: "power2.inOut",
        toggleActions: "restart",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        toggleClass: 'translateSec'
    }
})
gsap.to("#partners", {
    scrollTrigger: {
        trigger: "#partners",
        start: "top top",
        pin: true,
        pinSpacing: false,
    }
})
gsap.to("#partners h6", {
    // y: 0,
    rotateX: 0,
    ease: "power1.inOut",
    duration: 2,
    opacity: 1
})
gsap.to("#reservation", {
    scrollTrigger: {
        trigger: "#reservation",
        start: "top top",
        pin: true,
        pinSpacing: false
    }
})
gsap.to(".char", {
    scrollTrigger: {
        trigger: ".splitted",
        toggleClass: "hello",
        toggleActions: "restart pause restart pause",
        scrub: true 
    },
    y: 0,
    stagger: .5,
    duration: 1,
    rotate: 360
})
gsap.to(".train", {
    x: -1400,
    scrollTrigger: {
        trigger: ".train img",
        start: "top center",
        ease: "power1.inOut",
        duration: 10,
        // toggleActions: "restart pause restart pause",
        scrub: true
    }
})
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: blockFooter
    }
})
tl2.to("ul.footer-links", {
    y: 10,
    opacity: 1,
})
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: iconContainer,
    }
})

tl3
    .to(".socials-icon1", {scale: 1, opacity: 1, duration: .2, ease: "power1.inOut"})
    .to(".socials-icon2", {scale: 1, opacity: 1, duration: .2, ease: "power1.inOut", delay: .5})
    .to(".socials-icon3", {scale: 1, opacity: 1, duration: .2, ease: "power1.inOut", delay: .5})
  
  
  
  
  