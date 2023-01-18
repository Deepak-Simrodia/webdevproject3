var tl=gsap.timeline()
tl
.from('.Fgsap', {
    stagger:.1,
    y:15,
    duration:2,
    opacity:0,
    ease:'Expo.easeInOut',
    transition:.2
})
.from('.Sgsap', {
    stagger:.1,
    y:15,
    duration:1,
    opacity:0,
    ease:'Expo.easeInOut',
    transition:.2
})       
.from('#name', {
    opacity:0,
    duration:1.2,
    ease:'Expo.easeInOut'
}) 
.from('.Tgsap', {
    scrollTrigger:{
        trigger:'.Tgsap',
        scroller:'body',
        scrub:true,
    },
    width:'30%',
   duration:2
})

.from('#thirdpagelinks',{
    scrollTrigger:{
        trigger:'#thirdpagelinks',
        scroller:'body',
        scrub:true,
    },
    width:'20%',
    opacity:0,
    duration:2
})
.from('.projectsBox', {
    scrollTrigger:{
        trigger:'.projectsBox',
        scroller:'body',
        scrub:true,
    },
    width:'20%',
    opacity:0,
    duration:2
})