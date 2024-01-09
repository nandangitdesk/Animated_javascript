const t1 = gsap.timeline({defaults:{duration:0.75,ease: "power1.out"}})
t1.fromTo(".cookie-container",{scale:0.4},{scale:1,ease: "elastic.out(1,0.4)",duration:1.2})
t1.fromTo("#cookie",{opacity:0,x:-50,rotation:'-45deg'},{opacity:1,x:0,rotation:'0deg'},"<50%")
t1.fromTo(".text",{opacity:0,x:30},{opacity:1,x:0},"<")

//jump of cookie
t1.fromTo("#cookie",{x:0,rotation:"0deg"},{y:-20,rotation:"-20deg",yoyo:true,repeat:-1})
t1.fromTo("#crumbs",{x:0},{y:-20,yoyo:true,repeat:-1},"<")

//fading of cookie
document.querySelector("button").addEventListener("click",()=>{

    gsap.to(".cookie-container",{opacity:0,y:100,duration:1.2,ease: "power1.out"})
})
