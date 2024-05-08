gsap.registerPlugin(ScrollTrigger);
const t = gsap.timeline();

t.from('.title span', {
    y: 150,
    skewY: 7,
    duration: 2
}).from('.text-bottom', {
    // letterSpacing:-10,
    opacity: 0,
    duration: 3
})

gsap.to('.img-container', {
    scale: 70,
    ease: "ease",
    scrollTrigger: {
        trigger: '.video',
        scrub: 3,
        start: "top top",
        end: "bottom",
        pin: true,
    }
})
ScrollTrigger.defaults({
    toggleActions: "play none none reverse"
})

gsap.to('.right', {
    opacity: 0,
    x: 500,
    duration: 1.5,
    scrollTrigger: {
        start: 1
    }
})
gsap.to('.left', {
    opacity: 0,
    x: -500,
    duration: 1.5,
    scrollTrigger: {
        start: 1,
    }
})
// gsap.to('.text-bottom', {
//     letterSpacing: -10,
//     opacity: 0,
//     duration: 2,
//     scrollTrigger: {
//         start: 1
//     }
// })
const tl = gsap.timeline();
tl.from('.left-side div', {
    y: 150,
    opacity: 0,
    stagger: {
        amount: .4
    },
    delay:.3
}).from('.right-side',{
    // y:150,
    opacity:0,
    duration:.5
}).to('.wrapper',{
    x:-window.innerWidth
})
ScrollTrigger.create({
    animation: tl,
    trigger: '.wrapper',
    start: "top top",
    end: "+=600",
    scrub: 1,
    pin: true,
    ease: "ease"
})
gsap.to('.txt-bottom', {
    opacity: 0,
    scaleX: 0,
    duration: 2,
    scrollTrigger: {
        start: 2
    }
})
tl.from('.columns div img',{
    opacity:0,
    duration:2,
    y:150,
    stagger:.4,
    scrollTrigger:{
        trigger:'.columns',
        start:"top 40%",
        // end:"top 70%",
        scrub:10,
        // markers:1
    }
})


