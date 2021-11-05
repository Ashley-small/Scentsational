//navbar//

const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", changeIcon);


function changeIcon() {
navbar.classList.toggle("change")

};






const textDisplay = document.getElementById("text");
const phrases = ["Scentsational"];
let i = 0;
let z = 0;
let currentPhrase = []
loop = () => {

    textDisplay.innerHTML = currentPhrase.join("")
    if (i < phrases.length) {

      if (z <= phrases[i].length) {
        currentPhrase.push(phrases[i][z])
        z++
      }
      if (z == phrases[i].length) {
        i++
      }
      setTimeout(loop, 300)
    }
}
loop()
