const cards = [
    {
        id: '1',
        name: 'Horse Riding',
        price: '$4/hour',
        image: 'img/girl-on-horse.jpg',
        description: 'Take a measured romantic horseback riding tour and enjoy our unforgettable picturesque surroundings.'
    },
    {
        id: '2',
        name: 'Rock Climbing',
        price: '$2/hour',
        image: 'img/rock-climbing.jpg',
        description: 'Whether you are a professional mountaineer or it`s your first time, Yosemite one of the best places for this kind of sport.'
    },
    {
        id: '3',
        name: 'Biking',
        price: '$1/hour',
        image: 'img/biking.jpg',
        description: 'Rent a bike and take a fun and easy two-wheel tour over Yosemite Valley. It usually takes 2 hours.'
    },
    {
        id: '4',
        name: 'Rafting',
        price: '$3/hour',
        image: 'img/rafting.jpg',
        description: 'You have a perfect choice to combine your river rafting adventure with a visit to the park. Test our waters.'
    },
    {
        id: '5',
        name: 'Fishing',
        price: '$2/hour',
        image: 'img/fishing.jpg',
        description: 'With a number of permanent streams and mountain lakes, we offer anglers of all levels a diverse variety of opportunities for fishing.'
    },
    {
        id: '6',
        name: 'Spas and Wellness',
        price: '$2/hour',
        image: 'img/wellness.jpg',
        description: 'After a long exhausting day, you can relax and pamper yourself in our unique spa and wellness center.'
    }
]

renderCards(cards);

function renderCards(cards) {
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = '';
    for (const card of cards) {
        cardsContainer.innerHTML += `
        <article class="cards__item">
                <div class="cards__item-image-container">
                    <img class="cards__image" src="${card.image}" alt="${card.name}">
                </div>
                <h3 class="cards__heading">${card.name}</h3>
                <h4 class="cards__subheading">${card.price}</h4>
                <p class="cards__description">${card.description}</p>
            </article>`;
    }
}