function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Definisi navItems tetap seperti semula, dengan ID elemen DOM
const navItems = {
    home: document.getElementById("home"),
    features: document.getElementById("features"),
    project: document.getElementById("project"),
    certificate: document.getElementById("certificate"),
    pricing: document.getElementById("pricing"),
    about: document.getElementById("about")
};

function scrollToSection(targetSectionId) {
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Elemen dengan ID "${targetSectionId}" tidak ditemukan.`);
    }
}

for (const key in navItems) {
    if (navItems.hasOwnProperty(key) && navItems[key]) {
        navItems[key].addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(key + "-section");
        });
    }
}