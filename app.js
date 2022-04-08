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









// // pSwitch = (scroll) =>{

// //     scroll();
// // }


// // const pageScroll = () => {
// //     window.scrollTo(0,50); // horizontal and vertical scroll increments
// //     scrolldelay = setTimeout('pageScroll()',5000); // scrolls every 100 milliseconds
// // }


// // setTimeout(0, 5000);
//     // window.scrollTo(0, 1350);
//     // document.getElementById('#class').scrollIntoView();
//     // contact.scrollIntoView();
//     // window.scrollTo(0,findPos(document.getElementsByClassName(".contact")));
//     // window.scrollTo(0,document.body.scrollHeight())


