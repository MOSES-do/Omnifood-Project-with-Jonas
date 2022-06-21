
// Set current year
const yearEl = document.querySelector('.currentYear');
console.log(yearEl);

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
////////////////////////////////////////////////////////////

// mobile nav
const mobileNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const push = function(){
    headerEl.classList.toggle('nav-open'); 
}
mobileNavEl.addEventListener('click', push)


///////////////////////////////////////////////////////////////
//Smooth scroll animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefualt();
        const href =link.getAttribute('href');

        //Scroll back to top
        if(href === "#") window.scrollTo({top:0, behavior:"smooth"});

        if(href !== '#' && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:
            "smooth"});
        }
    })
})