const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Create the observer
const observer = new IntersectionObserver(handleIntersect, observerOptions);

// Tell the observer which elements to track
const elementsToObserve = document.querySelectorAll('.banner, .story, #characters, #place, #studio, .award-section');
elementsToObserve.forEach(element => observer.observe(element));

// Handle intersecting elements
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Intersecting element:', entry.target);
            animateEntry(entry);
            observer.unobserve(entry.target);
        }
    });
}

function animateEntry(entry) {
    animateSectionEntry(entry);
    animateTitleEntry(entry);
    animateLogoEntry(entry);
}

// Fonction d'animation pour l'apparition des sections
function animateSectionEntry(entry) {
    const targetSections = ['banner', 'award-section'];
    entry.target.classList.remove('hidden-opacity');

    const animationClass = targetSections.some(cls => entry.target.classList.contains(cls))
        ? 'section__fade-in--down'
        : 'section__fade-in--up';

    entry.target.classList.add(animationClass);
}
// Fonction d'animation pour l'apparition des titres
function animateTitleEntry(entry) {
    const targetTitles = entry.target.querySelectorAll('h2, h3');
    if (targetTitles.length === 0) {
        console.log('No h2 or h3 element found within the target:', entry.target);
        return;
    }

    targetTitles.forEach(targetTitle => {
        const words = targetTitle.textContent.split(' ');
        targetTitle.textContent = '';

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word;
            span.style.opacity = 0; // Set initial opacity to 0
            targetTitle.appendChild(span);

            // Add space between words, except for the last word
            if (index < words.length - 1) {
                targetTitle.appendChild(document.createTextNode(' '));
            }

            // Add the fade-in class with a delay
            setTimeout(() => {
                span.classList.add('title__fade-in--up');
            }, index * 200); // 100ms delay per word, adjust as needed
        });
    });
}

// Fonction d'animation pour l'apparition du logo
function animateLogoEntry(entry) {
    const targetLogo = entry.target.querySelector('.banner__logo');
    if (targetLogo) {
        targetLogo.classList.remove('hidden-opacity');
        targetLogo.classList.add('banner__logo--animated');
        console.log(targetLogo);
    }
}


// Fonction d'animation pour l'effet de parallaxe des nuages
document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize the parallax effect
    function initParallax() {
        const bigCloud = document.querySelector('.place__big-cloud');
        const littleCloud = document.querySelector('.place__little-cloud');
        const placeSection = document.querySelector('#place');

        // Event handler for scroll event
        function handleScroll() {
            const sectionOffsetTop = placeSection.offsetTop;
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition >= sectionOffsetTop) {
                const parallaxValue = (scrollPosition - sectionOffsetTop) / 5;
                const translationX = Math.min(parallaxValue, 300);

                // Apply transform property to clouds
                requestAnimationFrame(() => {
                    setTransform(bigCloud, -translationX);
                    setTransform(littleCloud, -translationX);
                });
            }
        }

        // Function to set transform property for cloud elements
        function setTransform(element, value) {
            element.style.transform = `translateX(${value}px)`;
        }

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);
    }

    // Initialize parallax effect
    initParallax();
});

// Fonction d'animation pour le menu de navigation principal
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu__button');
    const menuContent = document.querySelector('#primary-menu');
    const menuLinks = document.querySelectorAll('#primary-menu a');

    function toggleMenu() {
        // Check if the menu is currently open
        const isOpen = menuContent.classList.contains('menu-active');

        if (isOpen) {
            // Add the 'menu-closing' class to trigger the closing animation
            menuContent.classList.add('menu-closing');

            // Remove 'menu-active' after the animation ends
            menuContent.addEventListener('animationend', function () {
                menuContent.classList.remove('menu-active');
                menuContent.classList.remove('menu-closing');
            }, { once: true });
        } else {
            // Add 'menu-active' to open the menu
            menuContent.classList.add('menu-active');
        }

        // Toggle the 'menu-active' class on the button
        menuButton.classList.toggle('menu-active');

        // Update aria-expanded attribute
        const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !expanded);
    }

    // Attach click event to the menu button
    menuButton.addEventListener('click', toggleMenu);

    // Attach click event to each menu link to close the menu when a link is clicked
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Only close the menu if it's currently open
            if (menuContent.classList.contains('menu-active')) {
                toggleMenu();
            }
        });
    });
});