/*In order to get that typing effect use this layour*/
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Student.", "Web Developer.", "Tech Enthusiast.", "Lifelong Learner." ], // Replace with your name
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };

    new Typed('.typed-name', options);
});
