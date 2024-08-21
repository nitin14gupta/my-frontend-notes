// locomotive JS 
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

gsap.to('.box1', {
    scale: 0.2,
    rotate: 360,
    duration: 2,
})

gsap.to('.page2 .box2', {
    rotate: 360,
    duration: 2,
    scale: 0,
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: 'top 60%',
        markers: true, //just for developing time
        scrub: 2, //level of smoothness and for both upside and downward scroll
        pin: true, //making the scroll stop and then animation will run completely
    }
})

gsap.to('.box3', {
    rotate: 360,
    duration: 2,
    scale: 0,
    delay: 1,
})