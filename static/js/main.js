var scrollPosition = document.querySelector('header.top-menu');
var heroSection = document.querySelector('.hero-section');
var about = document.querySelector('.about');
var skillsSection = document.querySelector('.skills-section');
var latestProjects = document.querySelector('.latest-projects');
var testimonials = document.querySelector('.testimonials');
var news = document.querySelector('.news');
var footer = document.querySelector('.footer');


console.log(scrollPosition);


window.addEventListener("scroll", () => {
    if( heroSection.scrollTop){
        console.log('we are at the hero section')
    }
})