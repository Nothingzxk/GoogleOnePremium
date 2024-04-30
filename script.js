document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", revealOnScroll);
});

function revealOnScroll() {
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (sectionTop < windowHeight) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}
