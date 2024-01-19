// gsap.to(".page2 img",{
//     width:"100%",
//     scrollTrigger:{
//         trigger:".page2",  // yaha hamesha jispe scroll animation lagana chahte ho use define karna hota but jab pin use karte hai tab uske parent par scroller lagana chaiye
//         scroller:"body",
//         markers:true,
//         start:"top 0",
//         end:"top -100%",
//         pin:true,
//         scrub:2
//     }
// })


gsap.to("#page2  h1",{
    transform:"translateX(-230%)",
    scrollTrigger:{
                trigger:"#page2",  // yaha hamesha jispe scroll animation lagana chahte ho use define karna hota but jab pin use karte hai tab uske parent par scroller lagana chaiye
                scroller:"body",
                markers:true,
                start:"top 0",
                end:"top -100%",
                pin:true,
                scrub:3
    }
})
