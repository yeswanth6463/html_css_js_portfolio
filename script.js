function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


  
ScrollReveal({
    /*reset: true, */
     distance:'80px',
     duration: 2000,
     delay: 200
   });
   ScrollReveal().reveal('.section_text, .heading,.nav-links', { origin: 'top' });
   ScrollReveal().reveal('.heading, .title,.logo', { origin: 'left' });
   ScrollReveal().reveal('.details-container, .contact-info-upper-container,.nav-links-container,.section_text_p2', { origin: 'bottom' });
   
   
   ScrollReveal().reveal('.text-container, .about-img img', { origin: 'right' });
   
   ScrollReveal().reveal('.home-content h3, .home-content p, .about-content,.section_text_p1,.hamburger-menu', { origin: 'right' });
   

//dark mode //light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}





