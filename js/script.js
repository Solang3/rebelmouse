
var scrollPosition = window.scrollY;
var sideAdContainer = document.querySelector('.side-bar');
var sideAd = document.querySelector('.side-bar__ad');

if (sideAdContainer && sideAd) {
    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;
        positionTop = sideAdContainer.offsetTop;
        if (scrollPosition >= positionTop ) {
            sideAd.classList.add('side-ad--fixed');
        } else {
            sideAd.classList.remove('side-ad--fixed');
        }
    });
}
