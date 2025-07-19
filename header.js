async function loadHeader() {
    try {
        const response = await fetch('header.html');
        const headerHtml = await response.text();
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
        
        // Initialize theme after header is loaded
        if (typeof initTheme === 'function') {
            initTheme();
        } else {
            // If not loaded yet, try again shortly
            setTimeout(() => {
                if (typeof initTheme === 'function') {
                    initTheme();
                }
            }, 100);
        }
        
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

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });
    // Hide sidebar when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
          sidebar.classList.remove('open');
        }
      }
    });
  }

  const langBtn = document.getElementById('toggle-lang-btn');
  function updateLangBtnText() {
    if (window.innerWidth <= 768) {
      langBtn.textContent = langBtn.dataset.lang === 'english' ? 'Hinglish' : 'English';
    } else {
      langBtn.textContent = langBtn.dataset.lang === 'english' ? 'Switch to Hinglish' : 'Switch to English';
    }
  }
  if (langBtn) {
    updateLangBtnText();
    window.addEventListener('resize', updateLangBtnText);
    langBtn.addEventListener('click', function() {
      // Toggle language as before, then update text
      updateLangBtnText();
    });
  }
}); 