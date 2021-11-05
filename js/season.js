window.addEventListener('scroll', stickyNav);
let navbar = document.querySelector("header");

function stickyNav(){
  navbar.classList.toggle("sticky", window.scrollY >0)

};
document.getElementById('autumn-icon').addEventListener("click", displayAutumn);

function displayAutumn(){
let autumnPara = document.querySelector(".autumn-para");
let autumn = document.querySelector("autumn")
autumnPara.classList.toggle("visible")
};

document.getElementById("winter-icon").addEventListener("click", displayWinter);

function displayWinter(){
  let winterPara = document.querySelector(".winter-para");
  winterPara.classList.toggle("visible")
};


document.getElementById("spring-icon").addEventListener("click", displaySpring);

function displaySpring(){
  let springPara = document.querySelector(".spring-para");
  springPara.classList.toggle("visible")
};

document.getElementById("summer-icon").addEventListener("click", displaySummer);

function displaySummer(){
  let summerPara = document.querySelector(".summer-para");
  summerPara.classList.toggle("visible")
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
