import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs
window.addEventListener('load', async() => {
    const dogs = await getDogs();
    for (const dog of dogs) {
        dogListContainer.append(renderDogCard(dog));
    }

});
// render and append all dog cards to the container
