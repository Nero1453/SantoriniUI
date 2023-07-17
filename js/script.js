$(document).ready(function(){
    $('.text_group h1').lettering();

    var tl = gsap.timeline();
    tl .from("header .logo", {
        opacity: 0,
        y: -100,
        duration: 1,
    })
    .from("header nav", {
        opacity: 0,
        y: -100,
        duration: 1,
    })
    .from(".text-group .btn", {
        opacity: 0,
        y: 100,
        duration: 1,
    })   
    .from(".text-group p", {
        y: 100,
        opacity: 0,
        duration: 1,
    }, "-=.3")
    .from(".text-group h1", {
        opacity: 0,
        y: 100,
        stagger: .02,
    })
    .from(".img-group img", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: .02,
    })
});