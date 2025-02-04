/* my own JS for search box, photo gallary project*/

const search= document. getElementById ("search");
let photos = document.querySelectorAll("a");
search.addEventListener("keyup", e => {
    let currentValue = e.target.value.toLowerCase();
    photos.forEach(photo => {
        if (photo.getAttribute("data-caption")
            .textContent.toLowerCase()
            .includes(currentValue)) {
            photo.parentNode.parentNode.style.display = "block";
        } else {
            photo.parentNode.parentNode.style.display = "none";
        }
    });
})



baguetteBox.run('.gallery');
