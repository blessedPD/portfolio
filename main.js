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
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    
    
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__togle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
});


const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',(event)=>{
    scrollIntoView('#Contact')
});

//Make home slowly fade to transparent as the window scrolls down


const homeMenu = document.querySelector('.home__container');
const homeMenuHeight = homeMenu.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    homeMenu.style.opacity = 1- scrollY/homeMenuHeight;
});

//Show Up-Arrow Button when scrolling down, 
//and when Show Up-Arrow Button is clicked, Go to Top Page

const arrowUp =document.querySelector(".arrow-up");
document.addEventListener('scroll',()=>{
    if (window.scrollY > homeMenuHeight){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click',()=>{
    scrollIntoView('#Home');
});



//Projects

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click',(e)=> {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

    if (filter==null){
        return;
    }

    //Remove selection from the previous item and
    //select New One
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName==='BUTTON' ? e.target:
    e.target.parentNode;
    
    target.classList.add('selected');


    projectContainer.classList.add('anim-out');
    setTimeout(()=> {
        projects.forEach((project)=>{
            if(filter==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    },300);
});




////////////////
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});   
}