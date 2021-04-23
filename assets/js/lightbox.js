class Lightbox {

    constructor(lightbox) {
        this.lightbox = lightbox;
        this.container = lightbox.querySelector('.lightbox-container');
        this.veil = lightbox.querySelector('.lightbox-veil');
        this.veil.addEventListener('click', () => this.close());
        this.images = document.querySelectorAll('img[data-lightbox]');
        this.images.forEach(img => {
            img.addEventListener('click', () => this.showImage(img.src));
        });
    }

    showImage(src) {
        this.container.innerHTML = `<img src="${src}" alt="">`;
        this.lightbox.classList.add('show');
    }

    close() {
        this.lightbox.classList.remove('show');
    }

}

function showImage(src) {

}

document.addEventListener('DOMContentLoaded', function() {
    new Lightbox(document.querySelector('.lightbox'));
});
