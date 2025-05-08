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

document.addEventListener('DOMContentLoaded', async function() {
  // Load the header
  await loadHeader();

  // Dynamically set the Home link after header is loaded
  var homeLink = document.querySelector('.home-link');
  if (homeLink) {
    if (window.location.hostname === "imnaval.github.io") {
      homeLink.setAttribute('href', '/Web-APIs-learning-notes/index.html');
    } else {
      homeLink.setAttribute('href', 'index.html');
    }
  }
}); 