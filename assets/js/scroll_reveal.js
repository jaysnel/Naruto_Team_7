var $scrollReveal = $('.spotlight');
var $alternateScrollReveal = $('.character_headshots');

window.sr = ScrollReveal({
  distance: 0,
  scale: 1,
  duration: 5000,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  mobile: false
});
sr.reveal('.spotlight');


ScrollReveal().reveal('.character_headshots', {
    rotate: {
        y: 50
    }
});
