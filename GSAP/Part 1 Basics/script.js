// element move from initial position to final
gsap.to('.main1',{
    x : 800, //initial to 1000px from x-axis
    y: 200,  //initial to 200px from y-axis
     duration : 1, //the it will take overall 2 seconds to move
    // delay : 1, //animation will work after one second
    backgroundColor : 'pink', //during the 2sec it will change its bg color
    rotate: 360, //rotate 360deg
    borderRadius: 50, //edges will be a bit rounded
    scale :2, // it will increase the size to twice the original
    repeat: -1, 
    yoyo:true,
})


// element move from final position to initial
gsap.from('.main2',{
    x : 500,  //final to 100px from x-axis
    y: 600,  //final to 600px from y-axis
    duration : 1, 
    // delay : 1,
    backgroundColor : 'white', //initial color will be white a=the changed color will be royal blue as written in the css
    rotate: 300, //rotate 30deg
    borderRadius: 20, //edges will be a bit rounded
    scale : 2, // it will increase the size to twice the original at final and decrease to the initial
    repeat: -1, 
    yoyo:true,
})


// Text Animation
gsap.from('h1',{
    color: 'blue',
    duration : 1,
    delay : 1,
    // fontFamily : 'Calibri',
    opacity: 0,
    stagger: 0.3,
    y: 30,
})


// TimeLine

var tl = gsap.timeline()

tl.to('.box1',{
    x : 500,
})//using timeline we don't have to calc. delay

tl.to('.box2',{
    x : 500,
})//using timeline we don't have to calc. delay

tl.to('.box3',{
    x : 500,
})//using timeline we don't have to calc. delay
