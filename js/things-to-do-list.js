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
                <div class="cards__heading">
                <h3 class="cards__heading-text">${card.name}</h3>
                </div>                
                <h4 class="cards__subheading">${card.price}</h4>
                <div class="cards__description">
                    <p class="cards__description-text">${card.description}</p>
                </div>                
            </article>`;
    }
}