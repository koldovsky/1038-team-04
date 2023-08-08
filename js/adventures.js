const imageContainers = document.querySelectorAll('.adventure__cards-container img');

imageContainers.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('enlarged');
    });
});