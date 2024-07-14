function openForm() {
    document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}


function changeProjectImage(image) {
    document.getElementById("projectImage").src = image;
}

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
    const textItems = document.querySelectorAll('.text-item');
    textItems.forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}



// Add this script to your HTML if you need to pause the slider on hover
const slides = document.querySelector('.slider');

slides.addEventListener('mouseover', () => {
    slides.style.animationPlayState = 'paused';
});

slides.addEventListener('mouseout', () => {
    slides.style.animationPlayState = 'running';
});
