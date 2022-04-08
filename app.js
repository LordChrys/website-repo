window.transitionToPage = (href) => {
    document.querySelector('body').style.opacity = 0
    setTimeout(() => { 
        window.location.href = href;
    }, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').style.opacity = 1
})

const menu = document.querySelector(".navContent");
const menuItems = document.querySelectorAll(".navOp");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector("#menu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
