$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-to-top').fadeIn('slow');
    if (scrolled < 200) $('.go-to-top').fadeOut('slow');
  });
  
  //Click event
  $('.go-to-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});


// Delete above for go to top button 

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

// Delete above for dark and light mode toggle


const sections = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.5, // Adjust this value as needed
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});


// Delete above for fade in effect 



$(window).scroll(function() {

  if ($(this).scrollTop()>0)
   {
      $('.navbar').fadeOut();
   }
  else
   {
    $('.navbar').fadeIn();
   }
});

let val;
window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});


// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
