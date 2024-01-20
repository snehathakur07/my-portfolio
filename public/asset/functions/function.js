window.addEventListener("scroll", () => {
  var aboutOffset = document.querySelector("#about").offsetTop;
  var projOffset = document.querySelector(".projects").offsetTop - 10;
  var contOffset = document.querySelector(".contact").offsetTop - 10;

  var scroll = window.scrollY;

  if (scroll < aboutOffset) setactive("home")

  if (scroll >= aboutOffset && scroll < projOffset) {
    setactive("about")
    
  }

  if (scroll >= projOffset && scroll < contOffset) setactive("proj")

  if (scroll >= contOffset) setactive("cont")

})


function setactive(active) {
  document.querySelector(".home").classList.remove("active")
  document.querySelector(".about").classList.remove("active")
  document.querySelector(".proj").classList.remove("active")
  document.querySelector(".cont").classList.remove("active")
  document.querySelector(`.${active}`).classList.add("active")
}

var myLink = "https://mind2023.nith.ac.in/";
function openMind() {
  window.open(myLink, "_blank");
}

var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var original = 38;
var offset = 25;
var unit = "%"

var dots = document.querySelectorAll(".circle");
var tiles = document.querySelectorAll(".tile");
dots[0].classList.add("active-circle")

// console.log(dots);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    i = 0;
    for (i in dots) {
      if (dots[i] === dot) break;
    }
    showSlide(i);
  })
})
function updateTile(i) {
  tiles.forEach((tile) => {
    tile.classList.remove("active-tile")
  })
  tiles[i].classList.add("active-tile")
}

function showSlide(i) {
  tileElement.setAttribute("style", `margin-left:${(original - i * offset) + unit}`)
  updateTile(i);
  clearInterval(id)
  carousel();
  updateDot(i)
}
var tileElement = document.querySelector(".tile");


function updateDot(i) {
  dots.forEach((dot) => {
    dot.classList.remove("active-circle")
  })
  dots[i].classList.add("active-circle")
}


var i = 0;
function right() {
  i++;
  if (i === 4) {
    showSlide(0)
    i = 0;
  }
  else {
    showSlide(i);
  }
  updateTile(i);
  clearInterval(id)
  carousel();
  updateDot(i)
}

function left() {
  i--;
  if (i === -1) {
    showSlide(3)
    i = 3;
  }
  else {
    showSlide(i)
  }
  updateTile(i);
  clearInterval(id)
  carousel();
  updateDot(i);
}

var id;
function carousel() {
  id = setInterval(() => {
    right()
  }, 4000);
}

function handleScroll() {
  if (window.scrollY >= document.querySelector(".projects").offsetTop) {
    carousel();
    window.removeEventListener("scroll", handleScroll);
  }
}


window.addEventListener("scroll", handleScroll);

function reveal(){
  var reveals=document.querySelectorAll(".reveal");
  reveals.forEach(box=> {
    var windowHeight = window.innerHeight;
    var elementTop = box.getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      box.classList.add("revealed");
    } 
  });
}
window.addEventListener("scroll",reveal);

document.querySelectorAll("span").forEach((span) => {
  span.addEventListener("click", () => {
    var classToAdd
    if (span.classList.contains("left")) classToAdd = "clicked-span-left"
    else classToAdd = "clicked-span-right"
    span.classList.add(classToAdd)
    setTimeout(() => {
      span.classList.remove(classToAdd)
    }, 200);
  })
})  
