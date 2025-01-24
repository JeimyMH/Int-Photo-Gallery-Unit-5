/* my own JS for search box, photo gallary project*/

const search= document. getElementById ('search');
search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let photo = document.querySelectorAll('alt.data-caption.gallary');
    photo.forEach(photo => {
        if (photo.textContent.toLowerCase().includes(currentValue)) {
            photo.parentNode.parentNode.style.display = 'block';
        } else {
            photo.parentNode.parentNode.style.display = 'none';
        }    

     })
});






baguetteBox.run('.gallery');
