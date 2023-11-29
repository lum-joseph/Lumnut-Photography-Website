document.addEventListener("DOMContentLoaded", function () {
    // Get the section element
    var section = document.querySelector(".fade-in-section");

    // Initialize variables to track scroll direction and last scroll position
    var lastScrollTop = 0;
    var isScrollingDown = true;

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Get the current scroll position
        var currentScrollTop = window.scrollY;

        // Check the scroll direction
        isScrollingDown = currentScrollTop > lastScrollTop;

        // Check if the section is in the viewport
        var sectionRect = section.getBoundingClientRect();
        var isVisible = sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

        // Toggle the "fade-in" class based on scroll direction and visibility
        if (isVisible) {
            if (isScrollingDown) {
                section.classList.add("fade-in");
            } else {
                section.classList.remove("fade-in");
            }
        }

        // Update the last scroll position
        lastScrollTop = currentScrollTop;
    });
});
