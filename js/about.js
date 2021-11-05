
window.addEventListener('scroll', stickyNav);
let navbar = document.querySelector("header");
let heading = document.querySelector("brand");
let sticky = navbar.offsetTop;


function stickyNav(){
  navbar.classList.toggle("sticky", window.scrollY >0)

};
const menuIcon = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.nav-list');

menuIcon.addEventListener("click",changeIcon);

function changeIcon(){
menuIcon.classList.toggle("change")
navbarLinks.classList.toggle("active")
document.body.classList.toggle("fixed")
document.getElementById('footer').classList.toggle("hidden")
};
