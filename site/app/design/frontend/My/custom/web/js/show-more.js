define([], function () {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const buttonMore = document.getElementById('buttonMore');

    buttonMore.addEventListener('click', () => {
        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            buttonMore.innerHTML = 'Read more';
            moreText.style.display = 'none';
        } else {
            dots.style.display = 'none';
            buttonMore.innerHTML = 'Read less';
            moreText.style.display = 'inline';
        }
    });
});
