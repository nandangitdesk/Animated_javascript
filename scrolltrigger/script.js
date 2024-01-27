gsap.from("#page1 #box",{
    scale :2,
    duration:1,
    opacity:0,
    delay:1
})
gsap.from("#page2 #box",{
    scale :2,
    rotate:("360deg"),
    backgroundColor:"red",
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:("top 60%"),
        end:("top 10%"),
        scrub:5
    }
})
gsap.from("#page3 #box",{
    scale :2,

  
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        scrub:true,
      
    }
})