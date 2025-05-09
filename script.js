let noteFiles = [
    { name: 'DOM API', file: 'notes/dom_api.md', subtopics: ['getElementById', 'querySelector', 'addEventListener', 'getBoundingClientRect', 'innerHTML vs textContent vs innerText'] },
    { name: 'Fetch API', file: 'notes/fetch_api.md', subtopics: [] },
    { name: 'Web Storage API', file: 'notes/web_storage_api.md', subtopics: ['LocalStorage', 'SessionStorage', 'Cookies'] },
    { name: 'Geolocation API', file: 'notes/geolocation_api.md', subtopics: [] },
    { name: 'Canvas API', file: 'notes/canvas_api.md', subtopics: [] },
    { name: 'Web Socket API', file: 'notes/web_socket_api.md', subtopics: [] },
    { name: 'Intersection Observer API', file: 'notes/intersection_observer_api.md', subtopics: [] },
    { name: 'Notification & Clipboard API', file: 'notes/notification_clipboard_api.md', subtopics: [] },
    { name: 'Web Workers API', file: 'notes/web_workers_api.md', subtopics: [] },
    { name: 'History & Location API', file: 'notes/history_location_api.md', subtopics: [] },
    { name: 'Event Handling API', file: 'notes/event_handling_api.md', subtopics: ['addEventListener', 'event delegation', 'event bubbling vs. capturing'] },
    { name: 'MutationObserver API', file: 'notes/mutation_observer_api.md', subtopics: [] },
    { name: 'Media Devices API', file: 'notes/media_devices_api.md', subtopics: [] }
];

// Array for interview question files
let interviewFiles = [
    { name: 'HTML', file: 'interviewQuestions/html.md', subtopics: [] },
    { name: 'CSS', file: 'interviewQuestions/css.md', subtopics: [] },
    { name: 'Web APIs', file: 'interviewQuestions/web_api.md', subtopics: [] }
];

// Declare the currentLang variable
let currentLang = 'english';

// Function to update file paths based on language
function updateFilePaths(lang) {
    noteFiles.forEach(note => {
        const topicFile = note.file.split('/').pop();
        note.file = `notes/${lang}/${topicFile}`;
        console.log(`Updated path for ${note.name}: ${note.file}`);
    });
    
    // Update interview question paths to use language subfolder
    interviewFiles.forEach(interview => {
        const topicFile = interview.file.split('/').pop();
        interview.file = `interviewQuestions/${lang}/${topicFile}`;
        console.log(`Updated path for interview ${interview.name}: ${interview.file}`);
    });
}

// Function to add language parameter to URL
function addLangToUrl(url, lang) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}lang=${lang}`;
}

// Function to get current language from URL or default to English
function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'english';
}

// Populate sidebar with topics and subtopics
async function populateSidebar() {
    const topicList = document.getElementById('topic-list');
    topicList.innerHTML = '';
    
    // Also get the interview list
    const interviewList = document.getElementById('interview-list');
    console.log('Interview list element:', interviewList);
    
    if (interviewList) {
        interviewList.innerHTML = '';
    } else {
        console.error('interview-list element not found in the DOM!');
    }

    // Get current language
    const currentLang = getCurrentLanguage();
    console.log(`Current language: ${currentLang}`);
    const langFolder = currentLang === 'english' ? 'english' : 'hinglish';
    console.log(`Using language folder: ${langFolder}`);
    updateFilePaths(langFolder);

    // Fetch files to ensure they load, but don't overwrite pre-defined subtopics
    await Promise.all(noteFiles.map(async (note) => {
        try {
            console.log(`Fetching file: ${note.file}`);
            const res = await fetch(note.file);
            const content = await res.text();
            const fetchedSubtopics = [];
            const lines = content.split('\n');
            lines.forEach(line => {
                if (line.startsWith('## ') || line.startsWith('### ')) {
                    const heading = line.replace(/^##+ /, '').trim();
                    fetchedSubtopics.push(heading);
                }
            });
            // Only update subtopics if pre-defined array is empty
            if (note.subtopics.length === 0 && fetchedSubtopics.length > 0) {
                note.subtopics = fetchedSubtopics;
            }
        } catch (err) {
            console.error(`Error loading ${note.file}:`, err);
        }
    }));

    // Render sidebar with pre-defined or fetched subtopics
    noteFiles.forEach(note => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const topicId = note.file.split('/').pop().replace('.md', '');
        a.textContent = note.name;
        a.href = addLangToUrl(`notes.html?topic=${topicId}`, currentLang);
        a.dataset.topicId = topicId;
        if (note.subtopics.length > 0) {
            a.classList.add('has-subtopics');
        }
        li.appendChild(a);

        if (note.subtopics.length > 0) {
            const ul = document.createElement('ul');
            ul.classList.add('subtopics', 'hidden');
            ul.dataset.topicId = topicId;
            note.subtopics.forEach(sub => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.textContent = sub;
                subA.href = addLangToUrl(`notes.html?topic=${topicId}#${sub.replace(/\s+/g, '-').toLowerCase()}`, currentLang);
                subLi.appendChild(subA);
                ul.appendChild(subLi);
            });
            li.appendChild(ul);

            // Toggle subtopics on main topic click
            a.addEventListener('click', (e) => {
                e.preventDefault();
                toggleSubtopics(topicId);
            });
        }
        topicList.appendChild(li);
    });
    
    // Populate interview questions list
    if (interviewList) {
        // Fetch interview question files to find subtopics
        await Promise.all(interviewFiles.map(async (interview) => {
            try {
                console.log(`Fetching interview file: ${interview.file}`);
                const res = await fetch(interview.file);
                const content = await res.text();
                const fetchedSubtopics = [];
                const lines = content.split('\n');
                lines.forEach(line => {
                    if (line.startsWith('## ') || line.startsWith('### ')) {
                        const heading = line.replace(/^##+ /, '').trim();
                        fetchedSubtopics.push(heading);
                    }
                });
                // Only update subtopics if pre-defined array is empty
                if (interview.subtopics.length === 0 && fetchedSubtopics.length > 0) {
                    interview.subtopics = fetchedSubtopics;
                }
            } catch (err) {
                console.error(`Error loading ${interview.file}:`, err);
            }
        }));

        // Render interview questions in the sidebar
        interviewFiles.forEach(interview => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const topicId = interview.file.split('/').pop().replace('.md', '');
            a.textContent = interview.name;
            const currentLang = getCurrentLanguage();
            a.href = `notes.html?interview=${topicId}&lang=${currentLang}`;
            a.dataset.interviewId = topicId;
            if (interview.subtopics.length > 0) {
                a.classList.add('has-subtopics');
            }
            li.appendChild(a);

            if (interview.subtopics.length > 0) {
                const ul = document.createElement('ul');
                ul.classList.add('subtopics', 'hidden');
                ul.dataset.interviewId = topicId;
                interview.subtopics.forEach(sub => {
                    const subLi = document.createElement('li');
                    const subA = document.createElement('a');
                    subA.textContent = sub;
                    subA.href = `notes.html?interview=${topicId}&lang=${currentLang}#${sub.replace(/\s+/g, '-').toLowerCase()}`;
                    subLi.appendChild(subA);
                    ul.appendChild(subLi);
                });
                li.appendChild(ul);

                // Toggle subtopics on main topic click
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    toggleInterviewSubtopics(topicId);
                });
            }
            interviewList.appendChild(li);
        });
    }
}

// Toggle subtopics visibility
function toggleSubtopics(topicId) {
    const currentUl = document.querySelector(`.subtopics[data-topicId="${topicId}"]`);
    const isCurrentlyVisible = currentUl && !currentUl.classList.contains('hidden');

    // Hide all subtopics
    document.querySelectorAll('.subtopics').forEach(ul => {
        ul.classList.remove('show');
        ul.classList.add('hidden');
        const parentA = ul.parentElement.querySelector('a.has-subtopics');
        if (parentA) parentA.classList.remove('active');
    });

    // Toggle current topic's subtopics
    if (currentUl && !isCurrentlyVisible) {
        currentUl.classList.remove('hidden');
        currentUl.classList.add('show');
        const parentA = currentUl.parentElement.querySelector('a.has-subtopics');
        if (parentA) parentA.classList.add('active');
    } else if (!currentUl || isCurrentlyVisible) {
        // Redirect if no subtopics or already visible
        const currentLang = getCurrentLanguage();
        window.location.href = addLangToUrl(`notes.html?topic=${topicId}`, currentLang);
    }
}

// Toggle interview subtopics visibility
function toggleInterviewSubtopics(interviewId) {
    const currentUl = document.querySelector(`.subtopics[data-interviewId="${interviewId}"]`);
    const isCurrentlyVisible = currentUl && !currentUl.classList.contains('hidden');

    // Hide all subtopics
    document.querySelectorAll('.subtopics').forEach(ul => {
        ul.classList.remove('show');
        ul.classList.add('hidden');
        const parentA = ul.parentElement.querySelector('a.has-subtopics');
        if (parentA) parentA.classList.remove('active');
    });

    // Toggle current interview's subtopics
    if (currentUl && !isCurrentlyVisible) {
        currentUl.classList.remove('hidden');
        currentUl.classList.add('show');
        const parentA = currentUl.parentElement.querySelector('a.has-subtopics');
        if (parentA) parentA.classList.add('active');
    } else if (!currentUl || isCurrentlyVisible) {
        // Redirect if no subtopics or already visible
        const currentLang = getCurrentLanguage();
        window.location.href = `notes.html?interview=${interviewId}&lang=${currentLang}`;
    }
}

// Initialize sidebar
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    populateSidebar();

    // Render home.md in home-note-container if present
    const homeContainer = document.querySelector('.home-note-container');
    if (homeContainer) {
        console.log('Home container found, loading home.md');
        fetch('home.md')
            .then(res => res.text())
            .then(md => {
                homeContainer.innerHTML = marked.parse(md);
            })
            .catch((err) => {
                console.error('Error loading home content:', err);
                homeContainer.innerHTML = '<p>Error loading home content.</p>';
            });
    }
    
    // Make sure interview section is visible
    const interviewHeading = document.getElementById('interview');
    const interviewList = document.getElementById('interview-list');
    if (interviewHeading && interviewList) {
        console.log('Interview section elements found, ensuring visibility');
        interviewHeading.style.display = 'block';
        interviewList.style.display = 'block';
    } else {
        console.error('Interview section elements not found:', 
            { interviewHeading: !!interviewHeading, interviewList: !!interviewList });
    }
});

// Add click event listener for the header
const header = document.getElementById("header");
if (header) {
    header.addEventListener("click", async () => {
        try {
            window.location.href = "/";
        } catch (err) {
            console.error('Error loading index.html:', err);
            mainContent.innerHTML = '<p>Error loading homepage. Check console.</p>';
        }
    });
}

// Toggle language functionality
const toggleLangBtn = document.getElementById('toggle-lang-btn');
if (toggleLangBtn) {
    toggleLangBtn.addEventListener('click', () => {
        currentLang = currentLang === 'english' ? 'hinglish' : 'english';
        toggleLangBtn.textContent = currentLang === 'english' ? 'Switch to Hinglish' : 'Switch to English';
        toggleLangBtn.dataset.lang = currentLang;
        
        // Update file paths and refresh sidebar
        updateFilePaths(currentLang);
        populateSidebar();
        
        // Clear main content
        mainContent.innerHTML = '<p>Select a topic to view notes.</p>';
    });
}