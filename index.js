document.addEventListener('DOMContentLoaded', function() {
    // Check if smooth scroll is supported by the browser
    const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;

    // Add click event listener to all navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            const targetId = this.getAttribute('href'); // Get the href value (e.g., #section1)
            const targetElement = document.querySelector(targetId); // Find the target element based on the href

            if (targetElement) {
                // If smooth scroll is supported, use scrollIntoView with smooth behavior
                if (isSmoothScrollSupported) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Scroll to the start of the target element
                    });
                } else {
                    // Fallback: If smooth scrolling is not supported, scroll immediately
                    targetElement.scrollIntoView();
                }
            } else {
                // Log an error if the target element doesn't exist
                console.error(`Target element not found for ID: ${targetId}`);
            }
        });

        // Handle keyboard accessibility (e.g., Enter or Space key to trigger the click event)
        anchor.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent the default behavior (scrolling)
                this.click(); // Trigger the click event manually
            }
        });
    });
});


