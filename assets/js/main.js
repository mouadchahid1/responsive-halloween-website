/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu") ,
      navToogle = document.getElementById("nav-toogle")  , 
      navClose = document.getElementById("nav-close") ;
    
// affiche le menu en cliquant sur nav-toogle  
if(navToogle) {
    navToogle.addEventListener("click",() => { 
        navMenu.classList.add("show-menu");
    })
} 
// fermer le menu en cliquant sur le button close 
if(navClose) {
    navClose.addEventListener("click",() => { 
        navMenu.classList.remove("show-menu");
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const NavLinks = document.querySelectorAll(".nav__link") ;
const linkAction = () => {  
    // on click sur le lien le menu va etre disparu ;
     navMenu.classList.remove("show-menu");
}
NavLinks.forEach(e => e.addEventListener("click",linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/ 
const header = document.getElementById("header");
const bgHeader = () => {  
    this.scrollY <=50 ? header.classList.add("bg-header") :
                        header.classList.remove("bg-header");
}
window.addEventListener("scroll",bgHeader);
/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__shadow",1.5,{opacity : 0,y:-300,delay : .2})
gsap.from(".home__points",1.5,{opacity : 0,y:-300,delay : .4})
gsap.from(".home__grass",1.5,{opacity : 0,y:300,delay : .2,ease:"elastic.out(1,.5)"})
gsap.from(".home__pumpkin",1.5,{opacity : 0,y:-300,delay : .6,ease:"bounce.out"})
gsap.from(".home__stone",1.5,{opacity : 0,y:300,delay : .8,ease:"elastic.out(1,.5)"})
gsap.from(".home__moon",1.5,{opacity : 0,y:300,delay : 1.5,ease:"elastic.out(1,.5)"}) 
gsap.from(".home__titles",1.5,{opacity : 0,y:-300,delay : 1.5,ease:"elastic.out(1,.5)"})
gsap.from(".home__data",1.5,{opacity : 0,y:300,delay : 2,ease:"elastic.out(1,.5)"})
gsap.from(".home__tree",1.5,{opacity : 0,y:200,delay : 2,ease:"elastic.out(1,.5)"})
