var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 30;

function animate() {
x += (lFollowX - x) * friction;
y += (lFollowY - y) * friction;

translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

$('.bg').css({
'-webit-transform': translate,
'-moz-transform': translate,
'transform': translate
});

window.requestAnimationFrame(animate);
}

$(document).ready(function(){
$(window).on('mousemove click', function(e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (10 * lMouseY) / 100;

});
$('.icon-share').click(function() {
    $('.nav-social').toggleClass('active');
});

new Typed('.hello', {
    strings: ["","Oi! Eu sou Guilherme.", "Eu sou Desenvolvedor back-end.", "Eu sou Desenvolvedor front-end."],
    typeSpeed: 50,
    startDelay:1000, 
    backSpeed:50,
    backDelay:1000,
    loop:true,
    showCursor:false
  });
animate();

});