var initialPath = 'M 10 100 Q 500 100 1800 100'
var finalPath = 'M 10 100 Q 500 100 1800 100'

 var string = document.querySelector('.string svg');

string.addEventListener('mousemove', (dets)=> {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1800 100`

  gsap.to('svg path', {
    attr: {d: path},
    ease: 'power3.out',
})
})


string.addEventListener('mouseleave', (dets)=> {
    gsap.to('svg path', {
      attr: {d: finalPath},
      duration: 1.2,
      ease: 'elastic.out(1, 0.2)',
  })
  })
