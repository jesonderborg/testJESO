/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// Get the elements
const aboutLink = document.getElementById('about-link');
const aboutBtn = document.getElementById('about-btn');
const aboutBackBtn = document.getElementById('about-back-btn');
const aboutSection = document.getElementById('about');
const aboutSubsection = document.getElementById('about-subsection');

// Show the sub-page section and hide the main section when the user clicks the "Read More" button
// aboutBtn.addEventListener('click', function() {
//   aboutSection.style.display = 'none';
//   aboutSubsection.style.display = 'block';
// });

// // Show the main section and hide the sub-page section when the user clicks the "Go Back" button
// aboutBackBtn.addEventListener('click', function() {
//   aboutSubsection.style.display = 'none';
//   aboutSection.style.display = 'block';
// });

// // Scroll to the about section when the user clicks the "About" link
// aboutLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   aboutSection.scrollIntoView({behavior: 'smooth'});
// });
// // Show the sub-page section and hide the main section when the user clicks the "Read More" button
// aboutBtn.addEventListener('click', function() {
//     aboutSection.classList.remove('active');
//     aboutSubsection.classList.add('active');
//   });
  
//   // Show the main section and hide the sub-page section when the user clicks the "Go Back" button
//   aboutBackBtn.addEventListener('click', function() {
//     aboutSubsection.classList.remove('active');
//     aboutSection.classList.add('active');
//   });
  // Toggle the active class on both sections when the user clicks the "Read More" button

  aboutBtn.addEventListener('click', function() {
    // aboutSection.style.display = 'none';
    // aboutSubsection.style.display = 'block';
    // aboutSection.style.height = '0';
    // aboutSubsection.style.height = '100%';
    aboutSection.classList.toggle('active');
    aboutSubsection.classList.toggle('active');
  });
  
  // Toggle the active class on both sections when the user clicks the "Go Back" button
  aboutBackBtn.addEventListener('click', function() {
    // aboutSection.style.display = 'block';
    // aboutSubsection.style.display = 'none';
    // aboutSection.style.height = '100%';
    // aboutSubsection.style.height = '0';
    aboutSection.classList.toggle('active');
    aboutSubsection.classList.toggle('active');
    // aboutSection.scrollIntoView({behavior: 'smooth'});
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.querySelector('#about-btn');
  
    aboutBtn.addEventListener('click', function() {
      const aboutSection = document.querySelector('#about-section');
      const aboutSubSection = document.querySelector('#about-subsection');
  
      if (aboutSection.style.display !== 'none' && aboutSubSection.style.display === 'none') {
        // about section is active, scroll to about-subsection
        aboutSubSection.scrollIntoView({ behavior: 'smooth' });
      } else if (aboutSection.style.display === 'none' && aboutSubSection.style.display !== 'none') {
        // about-subsection is active, scroll to about section
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  