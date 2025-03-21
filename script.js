/*In order to get that typing effect use this layour*/
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Student.", "Developer.", "Tech Enthusiast.", "Lifelong Learner." ], 
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };

    new Typed('.typed-name', options);
});
