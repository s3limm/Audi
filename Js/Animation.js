window.addEventListener('scroll', function () {
    var parallaxLayer = document.querySelector('.Parallax');
    var scrollPosition = window.pageYOffset;

    parallaxLayer.style.transform = 'translate3d(-50%, ' + scrollPosition * 0.5 + 'px, 0)';
});


window.addEventListener('scroll', function () {
    var parallaxLayer = document.querySelector('.Items-Parallax');
    var scrollPosition = window.pageYOffset;

    parallaxLayer.style.transform = 'translate3d(0, ' + scrollPosition * -0.5 + 'px, 0)';
});
