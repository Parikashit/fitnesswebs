var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("slider-dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");
  }

  
  // Get the button
var scrollBtn = document.getElementById("scroll-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// our main section==========

const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
   const section = document.querySelector('#main-section');
   section.scrollIntoView({ behavior: 'smooth' });
});

// Add a smooth scrolling effect to the Read More button
const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach((btn) => {
   btn.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.querySelector('#blog-section');
      section.scrollIntoView({ behavior: 'smooth' });
   });
});



