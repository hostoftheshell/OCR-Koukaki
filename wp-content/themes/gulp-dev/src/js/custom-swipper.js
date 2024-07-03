// Initialisation de 'Swiper' avec Paramètres Personnalisés
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        // Réglages généraux
        speed: 1000,
        loop: true,
        grabCursor: true,
        // Paramètres de lecture automatique
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // Paramètres d'effet
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 90,
            modifier: 1,
            slideShadows: false,
        },
        // Alignement des slides
        centeredSlides: false,
        // Responsive breakpoints
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            699: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
});