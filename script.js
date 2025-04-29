// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    console.log("Entrust Initiative script loaded.");

    // --- Optional Enhancement 1: Change Navbar background on scroll ---
    const navbar = document.querySelector('.navbar');
    if (navbar) { // Check if navbar exists
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Add background after scrolling 50px
                navbar.style.backgroundColor = 'var(--deep-sapphire)'; // Keep it the same, or make it slightly darker/opaque if it started transparent
                // Example: If you want it to be slightly transparent initially and solid on scroll:
                // navbar.classList.add('scrolled'); // Add a CSS class instead
            } else {
                navbar.style.backgroundColor = 'var(--deep-sapphire)'; // Original background
                // Example: remove the class
                // navbar.classList.remove('scrolled');
            }
        });
    }


    // --- Optional Enhancement 2: Add smooth scrolling for anchor links ---
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is just a hash (like '#') or links to a different page
            if (this.getAttribute('href') === '#' || this.pathname !== window.location.pathname) {
                return; // Don't prevent default for simple hashes or cross-page links
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                 e.preventDefault(); // Prevent default anchor click behavior

                // Calculate position to scroll to, considering the fixed navbar height
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0; // Get navbar height, default to 0 if not found
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Smooth scroll effect
                });
            }
        });
    });


    // --- Add other potential JavaScript enhancements below ---
    // For example:
    // - Initialize an image carousel/slider (if you add one using libraries like SwiperJS or Slick)
    // - Add form validation (if you add a contact form)
    // - Implement "fade-in" effects on scroll using Intersection Observer API

}); // End of DOMContentLoaded