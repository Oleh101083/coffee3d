function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();

/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});



/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});
/*SLIDER*/
sr.reveal('.slider',{interval: 300});  

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*-----slider-------*/
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      slidesWrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;


const activeSlide = n => {
for(slide of slides){
    slide.classList.remove('active');
}
slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
    }

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    }
const nextSlide  = () => {
 if(index ==slides.length - 1){
     index = 0;
     prepareCurrentSlide(index);
 } else {
     index++;
     prepareCurrentSlide(index);
 }
}
const prevSlide  = () => {
    if(index == 0){
       index = slides.length - 1;
       prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
   }

dots.forEach((item,indexDot)=>{
    item.addEventListener('click', () =>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})   

const interval = setInterval(nextSlide, 2500);
function startSlid(){
   return interval;
}
function stopSlid(){
    clearInterval(interval);
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// clearInterval(interval)





/*-----slider end-------*/

