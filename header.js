async function loadHeader() {
    try {
        const response = await fetch('header.html');
        const headerHtml = await response.text();
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
        // Wait for language.js to be loaded, then call initLanguageToggle
        if (typeof initLanguageToggle === 'function') {
            initLanguageToggle();
        } else {
            // If not loaded yet, try again shortly
            setTimeout(() => {
                if (typeof initLanguageToggle === 'function') {
                    initLanguageToggle();
                }
            }, 100);
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Load header when the DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader); 