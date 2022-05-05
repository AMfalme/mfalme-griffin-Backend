var scrollPosition = document.querySelector('header.top-menu');
var heroSection = document.querySelector('.hero-section');
var about = document.querySelector('.about');
var skillsSection = document.querySelector('.skills-section');
var latestProjects = document.querySelector('.latest-projects');
var testimonials = document.querySelector('.testimonials');
var news = document.querySelector('.news');
var footer = document.querySelector('.footer');

var heroDistanceToTop = window.pageYOffset + heroSection.getBoundingClientRect().top;
var aboutDistanceToTop = window.pageYOffset + about.getBoundingClientRect().top;
var skillsSectionToTop = window.pageYOffset + skillsSection.getBoundingClientRect().top;
var latestProjectsToTop = window.pageYOffset + latestProjects.getBoundingClientRect().top;
var testimonialsSectionToTop = window.pageYOffset + testimonials.getBoundingClientRect().top;
var newsSectionToTop = window.pageYOffset + news.getBoundingClientRect().top;
var footerSectionToTop = window.pageYOffset + footer.getBoundingClientRect().top;
console.log(heroDistanceToTop);


window.addEventListener("scroll", () => {
    if( window.pageYOffset < aboutDistanceToTop){
        scrollPosition.style = "background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #C4C4C4";
        console.log('we are at the hero section')
    } else if( window.pageYOffset < skillsSectionToTop) {
        scrollPosition.style.background = "black";
        
        console.log(window.pageYOffset)
        console.log("out of the hero section")
    } else if( window.pageYOffset < latestProjectsToTop) {
        scrollPosition.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #C4C4C4";
    } else if( window.pageYOffset < testimonialsSectionToTop) {
        scrollPosition.style.background = "black";
    } else if( window.pageYOffset < newsSectionToTop) {
        scrollPosition.style.background = "#C4C4C4";
    } else if( window.pageYOffset < footerSectionToTop) {
        scrollPosition.style.background = "black";
    } else if( window.pageYOffset < (footerSectionToTop + footer.scrollTop)){
        scrollPosition.style.background ="#C4C4C4";
    }});