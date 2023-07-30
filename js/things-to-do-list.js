const response = await fetch('api/things-to-do-list-cards.json');
const cards = await response.json();

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