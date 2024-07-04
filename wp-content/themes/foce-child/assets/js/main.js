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
// Initialisation de l'observateur d'intersection
const observerOptions = {
    root: null, // L'élément racine pour l'observation, null signifie que c'est le viewport
    rootMargin: '0px', // Marges autour de l'élément racine
    threshold: 0.1 // Pourcentage d'intersection pour déclencher l'observation
};

// Création de l'observateur
const observer = new IntersectionObserver(handleIntersect, observerOptions);

// Indique à l'observateur quels éléments suivre
const elementsToObserve = document.querySelectorAll('.banner, .story, #characters, #place, #studio, .award-section');
elementsToObserve.forEach(element => observer.observe(element));

// Gère les éléments intersectés
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Si l'élément intersecte le viewport
            console.log('Élément en intersection :', entry.target);
            animateEntry(entry); // Appel la fonction pour animer l'entrée
            observer.unobserve(entry.target); // Arrête d'observer cet élément
        }
    });
}
// Fonction d'animation principale pour l'apparition des éléments
function animateEntry(entry) {
    animateSectionEntry(entry); // Appel la fonction d'animation pour les sections
    animateTitleEntry(entry);   // Appel la fonction d'animation pour les titres
    animateLogoEntry(entry);    // Appel la fonction d'animation pour les logos
    animateParagraphEntry(entry); // Appel la fonction d'animation pour les paragraphes
}

// Fonction d'animation pour l'apparition des sections
function animateSectionEntry(entry) {
    const targetSections = ['banner', 'award-section']; // Sections spécifiques à vérifier
    entry.target.classList.remove('hidden-opacity'); // Retire la classe css d'opacité cachée

    // Détermine la classe d'animation à ajouter en fonction de la section
    const animationClass = targetSections.some(cls => entry.target.classList.contains(cls))
        ? 'section__fade-in--down' // Animation pour descendre
        : 'section__fade-in--up';   // Animation pour monter

    entry.target.classList.add(animationClass); // Ajoute la classe d'animation appropriée
}

// Fonction d'animation pour l'apparition des titres
function animateTitleEntry(entry) {
    const targetTitles = entry.target.querySelectorAll('h2, h3'); // Sélectionner les éléments h2 et h3
    if (targetTitles.length === 0) {
        console.log('Aucun élément h2 ou h3 trouvé dans la cible :', entry.target);
        return;
    }

    targetTitles.forEach(targetTitle => {
        const words = targetTitle.textContent.split(' '); // Divise le texte en mots
        targetTitle.textContent = '';

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word;
            span.style.opacity = 0; // Définir l'opacité initiale à 0
            targetTitle.appendChild(span);

            // Ajouter un espace entre les mots, sauf pour le dernier mot
            if (index < words.length - 1) {
                targetTitle.appendChild(document.createTextNode(' '));
            }

            // Ajouter la classe d'animation avec un délai
            setTimeout(() => {
                span.classList.add('title__fade-in--up');
            }, index * 200); // Délai de 200ms par mot, ajuster si nécessaire
        });
    });
}

// Fonction d'animation pour l'apparition du logo
function animateLogoEntry(entry) {
    const targetLogo = entry.target.querySelector('.banner__logo'); // Sélectionne l'élément du logo
    if (targetLogo) {
        targetLogo.classList.remove('hidden-opacity'); // Retire l'opacité cachée
        targetLogo.classList.add('banner__logo--animated'); // Ajoute la classe d'animation du logo
    }
}
// Fonction d'animation pour l'apparition des paragraphes
function animateParagraphEntry(entry) {
    const targetParagraphs = entry.target.querySelectorAll('p');
    if (targetParagraphs.length > 0) {
        targetParagraphs.forEach(paragraph => {
            paragraph.classList.add('paragraph__fade-in--down'); // Ajoute la classe d'animation des paragraphes
        });
    }
}

// Fonction d'animation pour l'effet de parallaxe des nuages
document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour initialiser l'effet de parallaxe
    function initParallax() {
        const bigCloud = document.querySelector('.place__big-cloud'); // Sélectionner le grand nuage
        const littleCloud = document.querySelector('.place__little-cloud'); // Sélectionner le petit nuage
        const placeSection = document.querySelector('#place'); // Sélectionner la section 'place'

        // Gestionnaire d'événements pour le défilement
        function handleScroll() {
            const sectionOffsetTop = placeSection.offsetTop; // Obtenir la position du haut de la section
            const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Obtenir la position de défilement
            if (scrollPosition >= sectionOffsetTop) {
                const parallaxValue = (scrollPosition - sectionOffsetTop) / 5; // Calculer la valeur de parallaxe
                const translationX = Math.min(parallaxValue, 300); // Limiter la translation à 300

                // Appliquer la propriété de transformation aux nuages
                requestAnimationFrame(() => {
                    setTransform(bigCloud, -translationX); // Transformer le grand nuage
                    setTransform(littleCloud, -translationX); // Transformer le petit nuage
                });
            }
        }
        // Initialiser le gestionnaire de défilement
        window.addEventListener('scroll', handleScroll);
    }

    // Fonction pour appliquer la transformation
    function setTransform(element, value) {
        if (element) {
            element.style.transform = `translateX(${value}px)`;
        }
    }

    // Initialiser l'effet de parallaxe
    initParallax();
});


// Fonction d'animation pour le menu de navigation principal
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu__button'); // Sélectionne le bouton du menu
    const menuContent = document.querySelector('#primary-menu'); // Sélectionne le contenu du menu
    const menuLinks = document.querySelectorAll('#primary-menu a'); // Sélectionne tous les liens du menu

    function toggleMenu() {
        // Vérifie si le menu est actuellement ouvert
        const isOpen = menuContent.classList.contains('menu-active');

        if (isOpen) {
            // Ajoute la classe 'menu-closing' pour déclencher l'animation de fermeture
            menuContent.classList.add('menu-closing');

            // Retire 'menu-active' après la fin de l'animation
            menuContent.addEventListener('animationend', function () {
                menuContent.classList.remove('menu-active');
                menuContent.classList.remove('menu-closing');
            }, { once: true });
        } else {
            // Ajoute 'menu-active' pour ouvrir le menu
            menuContent.classList.add('menu-active');
        }

        // Bascule la classe 'menu-active' sur le bouton
        menuButton.classList.toggle('menu-active');

        // Met à jour l'attribut aria-expanded
        const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !expanded);
    }

    // Attache l'événement de clic au bouton du menu
    menuButton.addEventListener('click', toggleMenu);

    // Attache l'événement de clic à chaque lien du menu pour fermer le menu lorsqu'un lien est cliqué
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Ferme le menu seulement s'il est actuellement ouvert
            if (menuContent.classList.contains('menu-active')) {
                toggleMenu();
            }
        });
    });
});

//# sourceMappingURL=main.js.map
