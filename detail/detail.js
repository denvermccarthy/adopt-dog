import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');
const params = new URLSearchParams(window.location.search);
// on load

// console.log(params.get('id'));
window.addEventListener('load', async() => {
    const dog = await getDog(params.get('id'));
    dogDetailContainer.append(renderDogDetail(dog));
});
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
