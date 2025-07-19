// Language preference management
const DEFAULT_LANGUAGE = 'english';

function getCurrentLanguage() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || DEFAULT_LANGUAGE;
    // console.log('Current language from URL:', lang);
    return lang;
}

function setLanguage(lang) {
    // console.log('Setting language to:', lang);
    const params = new URLSearchParams(window.location.search);
    params.set('lang', lang);
    
    // Preserve the topic or interview parameter if it exists
    const topic = params.get('topic');
    const interview = params.get('interview');
    
    let newUrl;
    if (topic) {
        newUrl = `notes.html?topic=${topic}&lang=${lang}`;
    } else if (interview) {
        newUrl = `notes.html?interview=${interview}&lang=${lang}`;
    } else {
        newUrl = `index.html?lang=${lang}`;
    }
    
    // console.log('Navigating to:', newUrl);
    window.location.href = newUrl;
}

function updateToggleButton(lang) {
    const btn = document.getElementById('toggle-lang-btn');
    if (btn) {
        const newText = lang === 'english' ? 'Switch to Hinglish' : 'Switch to English';
        // console.log('Updating button text to:', newText);
        btn.textContent = newText;
        btn.setAttribute('data-lang', lang);
    }
}

function initLanguageToggle() {
    const btn = document.getElementById('toggle-lang-btn');
    // console.log('Toggle button found:', !!btn);

    if (btn) {
        // Initial button state
        const initialLang = getCurrentLanguage();
        // console.log('Initial language:', initialLang);
        updateToggleButton(initialLang);

        // Add click handler
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            //  console.log('Button clicked');
            const currentLang = getCurrentLanguage();
            // console.log('Current language before switch:', currentLang);
            const newLang = currentLang === 'english' ? 'hinglish' : 'english';
            // console.log('Switching to:', newLang);
            setLanguage(newLang);
        });
    }
} 