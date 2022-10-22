'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');

    }else{
        navbar.classList.remove('navbar--dark');
    }
});


//Handle scrolling when tapping on hte navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    
    const target = event.target;
    const link = target.dataset.link; //data 활용
    if (link==null){
        return;
    }else{
        scrollIntoView(link);
    }
    
});

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',(event)=>{
    scrollIntoView('#Contact')
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


//Make home slowly fade to transparent as the window scrolls down


const homeMenu = document.querySelector('.home__container');
const homeMenuHeight = homeMenu.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    homeMenu.style.opacity = 1- scrollY/homeMenuHeight;
});
