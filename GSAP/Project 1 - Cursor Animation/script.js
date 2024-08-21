

function cursorEffect1(){
    let cursor1 = document.querySelector('.cursor1');
    let page1 = document.querySelector('.page1');

    
    page1.addEventListener("mousemove", (dets) =>{
        cursor1.innerHTML = 'View More'
    gsap.to(cursor1, {
        x : dets.x,
        y : dets.y,
        ease: 'back.out(1, 0.2)',
        duration: 1,
    })
    })
    
    page1.addEventListener("mouseenter", () =>{
    gsap.to(cursor1,{
        scale: 1,
        opacity: 1
    })
    })
    page1.addEventListener("mouseleave", () =>{
        gsap.to(cursor1, {
            scale : 0,
            opacity: 0
        })
    })
}
cursorEffect1();