// Parallax scrolling effect
document.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var parallaxSection = document.querySelector('.parallax-section');
    parallaxSection.style.backgroundPositionY = -scrollTop * 0.3 + 'px'; // Adjust the multiplier for the parallax effect
});
