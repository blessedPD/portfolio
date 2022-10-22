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
    const link = target.dataset.link;
    if (link==null){
        return;
    }else{
        const scrollTo = document.querySelector(link);
        scrollTo.scrollIntoView({behavior:'smooth'});
    }
    
});

/*
document.addEventListener('click',(event)=>{
    let id = event.target.id;
    let className = event.target.className;
    console.log(id);

    if (className="navbar__menu__item"){
        if (id=="menu_item_0"){
            
        }else if (id=="menu_item_1"){
            let el = document.getElementById("about");
            
            window.scrollTo(0,el.offsetTop-document.getElementById("navbar").offsetHeight);
        }else if (id=="menu_item_2"){

        }
    }
});
*/