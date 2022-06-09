const heading = document.querySelector(".heading");

heading.innerHTML += `
<div class="topping">
          <div class="logo">
            <p class="logo-text">Onedesign</p>
            <p class="logo-memo">Only one design needed</p>
          </div>
          <div class="sidemenu"></div>
        </div>
        <button class="hamburger">
        <!-- material icons https://material.io/resources/icons/ -->
        <i class="menuIcon material-icons">menu</i>
        <i class="closeIcon material-icons" style="display: none">close</i>
      </button>
        <div class="nav-menu menu">
          <nav>
            <ul>
              <a href="index.html" class="nav-link"><li class="menuItem">Home</li></a>
              <a href="portfolio.html" class="nav-link"><li class="menuItem">Portfolio</li></a>
              <a href="project.html" class="nav-link"><li class="menuItem">Project</li></a>
              <a href="about.html" class="nav-link"><li class="menuItem">About</li></a>
            </ul>
          </nav>
        </div>

`;

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

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

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

console.log(window.onresize);
