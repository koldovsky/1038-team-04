const response = await fetch('api/variety-of-cabins.json');
const cabins = await response.json();

renderCabins(cabins);

function renderCabins(cabins) {
    const cabinsContainer = document.querySelector('.variety-of-cabins__cabins');
    cabinsContainer.innerHTML = '';
    for (const cabin of cabins) {
        cabinsContainer.innerHTML += `
        <article class="cabins__item">
                <div class="cabins__image-container">
                    <img class="cabins__image" src="${cabin.image}" alt="${cabin.name}">
                </div>
                <div class="cabins__title-container">
                    <h3 class="cabins__title">${cabin.name}</h3>
                </div>
                <div class="cabins__description-container">                        
                    <p class="cabins__description">${cabin.description}</p>
                </div>
        </article>`;
    }
}