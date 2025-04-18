
---

### **How to Set Up and Use**
1. **Create Directory Structure**:
   - Make a folder (e.g., `web_apis_notes`).
   - Save the files:
     - `index.html` (from the artifact)
     - `styles.css`
     - `script.js`
     - `notes.html`
     - Create a `notes` folder and add `dom_api.md` (sample above).
   - Add more `.md` files for other topics (e.g., `fetch_api.md`, `web_storage_api.md`) in the `notes` folder.

2. **Update noteFiles Array**:
   - In `script.js`, update the `noteFiles` array with your actual `.md` files and subtopics:
     ```javascript
     const noteFiles = [
       { name: 'DOM API', file: 'notes/dom_api.md', subtopics: ['getElementById', 'querySelector', 'addEventListener', 'getBoundingClientRect', 'innerHTML vs textContent vs innerText'] },
       { name: 'Fetch API', file: 'notes/fetch_api.md', subtopics: [] },
       // Add more topics
     ];

3. Run Locally:
Use VS Code Live Server: Right-click index.html and select “Open with Live Server”.
Or use Node.js: npx http-server.
Or Python: python -m http.server.
Open http://localhost:port in your browser.

4. Test the Website:
Homepage: Shows a welcome message and sidebar with topics.
Sidebar: Lists all topics (e.g., “DOM API”, “Fetch API”). For topics with subtopics, shows nested links (e.g., “getElementById” under DOM API).
Topic Pages: Click a topic (e.g., “DOM API”) to go to notes.html?topic=dom_api, which renders dom_api.md. Click a subtopic to scroll to that section.
Copy Buttons: Click “Copy” on code blocks to copy the code.

5 Add New Notes:
Create a new .md file in /notes (e.g., fetch_api.md).
Add it to the noteFiles array in script.js with its subtopics (if any).

Example fetch_api.md:

# Fetch API

The Fetch API provides a modern interface for making HTTP requests.

## Basic Fetch
- **Syntax**: `fetch(url)`
- **Example**:
```javascript
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));

6. Host Online (Optional):
Push the folder to a GitHub repo and enable GitHub Pages.
Or deploy to Netlify/Vercel by uploading the folder.