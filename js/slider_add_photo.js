const carousel_photo = [
    {
        image: 'img/gallery-carousel/galery_carousel-1.jpeg',
        description: 'Working'
    },
    {
        image: 'img/gallery-carousel/galery_carousel-2.jpeg',
        description: 'Working'
    },
    {
        image: 'img/gallery-carousel/galery_carousel-3.jpeg',
        description: 'Working'
    },
    {
        image: 'img/gallery-carousel/galery_carousel-4.jpeg',
        description: 'Working'
    },
    {
        image: 'img/gallery-carousel/galery_carousel-5.jpeg',
        description: 'Working'
    },
    {
        image: 'img/gallery-carousel/galery_carousel-6.jpeg',
        description: 'Working'
    },
    {
        image: 'img/gallery-carousel/galery_carousel-7.jpeg',
        description: 'Working'
    }
]

appendPhoto(carousel_photo);

function appendPhoto(carousel_photo) {
    const carouselImg = document.querySelector('.gallery_sl-items');
    carouselImg.innerHTML = '';
    for (const photo of carousel_photo) {
        carouselImg.innerHTML += `
         <div class="gallery_sl-item">
            <img class="gallery_carousel-img" src="${photo.image}" alt="${photo.description}">
         </div> `;
    }
}
