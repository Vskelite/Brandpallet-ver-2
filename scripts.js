function changeYear(){
    let year = document.querySelector("#year");
    year.innerText = new Date().getFullYear();
}

changeYear();

Shery.mouseFollower();
Shery.makeMagnet(".media-logo");
Shery.makeMagnet(".contact");
Shery.textAnimate(".heading>h1", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from("#line-1,#line-2,#line-3,#line-4,#line-5", {
    y: 80,
    duration:2,
    delay:1,
    opacity:0,
    stagger:0.3
})

function animateTitle(element){
  gsap.from(element, {
    x:-50,
    duration:1,
    delay:0.5,
    opacity:0,
  });
}
function animateTitle5(element){
  gsap.from(element , {
    x:100,
    duration:1,
    delay:0.5,
    opacity:0
  });
}

function animateText(element){
  gsap.from(element , {
    y:50,
    duration:1,
    delay:0.5,
    opacity:0
  });
}
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if( entry.isIntersecting){
      animateTitle(entry.target);
      observer.unobserve(entry.target);
     }//else{
    //   gsap.set(entry.target, {opacity:1, x:0});
    // }
  });
 });

 const target1 = document.querySelector('.heading>h1');
 const target2 = document.querySelector('.page3-title');
 const target3 = document.querySelector('.page5-title');
 const target4 = document.querySelector('.page6-title');
 observer.observe(target1);
 observer.observe(target2);
 observer.observe(target3);
 observer.observe(target4);

 const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if( entry.isIntersecting){
      animateTitle5(entry.target);
      observer2.unobserve(entry.target);
    }//else{
    //   gsap.set(entry.target, {opacity:1, x:0});
    // }
  });
 });

 const target5 =document.querySelector('.page4-title');
 observer2.observe(target5);
  
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if( entry.isIntersecting){
      animateText(entry.target);
      observer3.unobserve(entry.target);
     }//else{
    //   gsap.set(entry.target, {opacity:1, y:0});
    // }
  });
 });

 const text = document.querySelector('.page3-text>p');
 const text2 = document.querySelector('.page4-para');
 const text3 = document.querySelector('.page5-text>p');
 const text4 = document.querySelector('.page6-text>h2');
 const content = document.querySelector('.page6-contact');
 observer3.observe(text);
 observer3.observe(text2);
 observer3.observe(text3);
 observer3.observe(text4);
 observer3.observe(content);

