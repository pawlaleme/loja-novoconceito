document.addEventListener('DOMContentLoaded', function () {
    // Initialize Splide.js
    new Splide('#image-carousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        breakpoints: {
            640: {
                perPage: 1,
            },
            768: {
                perPage: 2,
            },
        },
    }).mount();

    // Modal functionality
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    document.querySelectorAll('.zoom-image').forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});