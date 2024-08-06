window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const color = `hsl(${scrollPercent * 360}, 100%, 75%)`;
    document.body.style.backgroundColor = color;

    const image = document.querySelector('.rotate-zoom');
    const scale = 1 + 0.5 * Math.sin(scrollPercent * Math.PI * 5);
    image.style.transform = `rotate(${scrollPercent * 360}deg) scale(${scale})`;

    const thankYouMessage = document.getElementById('thank-you');
    const animatedImages = document.querySelectorAll('.animated-image');

    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10) {
        thankYouMessage.classList.add('show');
        animatedImages.forEach(img => img.classList.add('show'));
    } else {
        thankYouMessage.classList.remove('show');
        animatedImages.forEach(img => img.classList.remove('show'));
    }
});
