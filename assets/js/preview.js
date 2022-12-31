const images = [...document.querySelectorAll('.post__image')];

const preview = document.querySelector('.preview');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const previewImage = document.querySelector('.preview-image');

let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        preview.classList.toggle('active');
    })
})

closeBtn.addEventListener('click', () => {
    preview.classList.toggle('active');
})