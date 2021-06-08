// Js voor de navigatie bij scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0)
});

//responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll("navigation a")
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
})

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  })
});
 
//scroll to top button js
const scrollbtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
  scrollbtn.classList.toggle("active", window.scrollY > 500)
});

//js scroll back to top on click  
scrollbtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//js for reveals elements 
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal"); 
  
  for(let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}