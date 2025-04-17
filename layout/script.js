// Show mobile menu after 1 second
function showIt() {
    document.getElementById("mobMEnu").style.visibility = "visible";
}
setTimeout(showIt, 1000);

// Menu initialization with mmenu
$(function() {
    $('#menu').mmenu();
    $('.mh-head.first').mhead({ scroll: false });
    $('.mh-head.second').mhead({ scroll: { hide: 200 } });
    $(document).ready(function() {
        $("#menu").delay(2000).fadeIn(500);
    });
});

// Sliding link animation
$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
});

// Marquee animation for #marquee
// window.addEventListener('load', function() {
//     function go() {
//         i = i < width ? i + step : 1;
//         m.style.marginLeft = -i + 'px';
//     }
//     var i = 0, step = 3, space = '     ';
//     var m = document.getElementById('marquee');
//     var t = m.innerHTML;
//     m.innerHTML = t + space;
//     m.style.position = 'absolute';
//     var width = (m.clientWidth + 1);
//     m.style.position = '';
//     m.innerHTML = t + space + t + space + t + space + t + space + t + space + t + space + t + space;
//     m.addEventListener('mouseenter', function() { step = 0; }, true);
//     m.addEventListener('mouseleave', function() { step = 3; }, true);
//     var x = setInterval(go, 100);
// }, true);

// // Marquee animation for #marquee01 (if needed, though not present in HTML)
// window.addEventListener('load', function() {
//     function go() {
//         i = i < width ? i + step : 1;
//         m.style.marginLeft = -i + 'px';
//     }
//     var i = 0, step = 3, space = '     ';
//     var m = document.getElementById('marquee01');
//     var t = m.innerHTML;
//     m.innerHTML = t + space;
//     m.style.position = 'absolute';
//     var width = (m.clientWidth + 1);
//     m.style.position = '';
//     m.innerHTML = t + space + t + space + t + space + t + space + t + space + t + space + t + space;
//     m.addEventListener('mouseenter', function() { step = 0; }, true);
//     m.addEventListener('mouseleave', function() { step = 3; }, true);
//     var x = setInterval(go, 100);
// }, true);

// Modal functionality
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() { modal.style.display = "block"; }
span.onclick = function() { modal.style.display = "none"; }
window.onclick = function(event) { if (event.target == modal) modal.style.display = "none"; }

// Refresh CAPTCHA
var refreshButton = document.querySelector(".refresh-captcha");
refreshButton.onclick = function() {
    document.querySelector(".captcha-image").src = 'captcha.php?' + Date.now();
}