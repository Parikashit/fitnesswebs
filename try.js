// Add a smooth scrolling effect to the CTA button
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


