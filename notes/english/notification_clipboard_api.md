# Notification API & Clipboard API Notes

## Notification API

### Overview
- **What**: A browser API for displaying system-level notifications on desktop and mobile devices.
- **Purpose**: To provide real-time alerts for events like new messages, reminders, or updates.
- **Why**: Engages users even when the browser tab is inactive, integrating with the OS notification center.

### How It Works
1. Request user permission using `Notification.requestPermission()`.
2. Create a notification with `new Notification(title, options)` if permission is granted.
3. Handle events like `onclick`, `onclose`, or `onerror` for interactivity.

### Key Features
- **Customizable**: Supports title, body, icon, actions, and more.
- **Event-Driven**: Handles click, close, and error events.
- **Secure**: Works only on HTTPS websites.
- **Cross-Platform**: Supported on desktop and mobile browsers.

### Syntax
```javascript
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    new Notification('Title', {
      body: 'Message content',
      icon: 'icon.png',
      tag: 'unique-id'
    });
  }
});
```

### Notification Options
- **`body` (String)**: Main text content of the notification (e.g., "New message from John").
- **`icon` (String)**: URL of an image displayed as the notification icon (e.g., app logo).
- **`badge` (String)**: URL of a small monochrome icon for mobile notification trays.
- **`image` (String)**: URL of a larger image for visual context (e.g., product photo).
- **`tag` (String)**: Unique identifier to replace duplicate notifications (e.g., "message-123").
- **`data` (Any)**: Custom data attached to the notification, accessible in events (e.g., `{ id: 123 }`).
- **`actions` (Array)**: Interactive buttons (e.g., `[{ action: 'reply', title: 'Reply' }]`).
- **`silent` (Boolean)**: If `true`, suppresses sound/vibration.
- **`vibrate` (Array)**: Vibration pattern for mobile devices (e.g., `[200, 100, 200]`).
- **`requireInteraction` (Boolean)**: If `true`, notification persists until user interaction.
- **Tip**: Use `body`, `icon`, and `tag` for basic notifications; `actions` and `image` for advanced interactivity.

### Methods & Events
- **Methods**:
  - `Notification.requestPermission()`: Requests user permission (returns a promise with `granted`, `denied`, or `default`).
  - `new Notification(title, options)`: Creates a notification.
- **Events**:
  - `onclick`: Triggered when the user clicks the notification.
  - `onclose`: Triggered when the notification is closed.
  - `onerror`: Triggered if the notification fails to display.

### Example
```javascript
function showNotification() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      const notification = new Notification('New Message!', {
        body: 'You have a new message from Sarah.',
        icon: 'https://via.placeholder.com/64',
        tag: 'message-123',
        actions: [{ action: 'reply', title: 'Reply' }],
        requireInteraction: true,
        data: { messageId: 123 }
      });
      notification.onclick = (event) => {
        console.log('Action:', event.action, 'Data:', event.target.data);
        window.focus();
      };
    }
  });
}
```

### HTML for Example
```html
<button onclick="showNotification()">Show Notification</button>
```

### Notification API vs Push API
- **Notification API**:
  - **Scope**: Local, triggered by client-side JavaScript.
  - **Context**: Requires website/browser tab to be active.
  - **Use Case**: Real-time alerts within the website (e.g., chat message notifications).
  - **Mechanism**: Directly creates notifications using `new Notification()`.
- **Push API**:
  - **Scope**: Remote, triggered by server-side events.
  - **Context**: Works via service workers, even if the browser is closed.
  - **Use Case**: Server-driven notifications (e.g., news updates, email alerts).
  - **Mechanism**: Pushes data to the browser, which uses Notification API to display notifications.
- **Relation**: Push API sends data; Notification API displays it.
- **Example (Push API with Service Worker)**:
  ```javascript
  self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon
    });
  });
  ```

### Use Cases
- Chat applications (new message alerts).
- E-commerce (order status updates).
- Reminders (calendar events).
- News applications (breaking news alerts).

### Interview Questions
- Explain the permission flow and notification options.
- How does Notification API differ from Push API?
- How would you handle a notification click to focus the browser tab?
- Write code for a button-triggered notification with interactive actions.

### Challenges
- **Permission**: Users may deny permission; design a user-friendly prompt.
- **Browser Support**: Limited support in iOS Safari for some options (e.g., `actions`).
- **Security**: Requires HTTPS; avoid spammy notifications to prevent browser blocking.
- **Rate Limiting**: Excessive notifications may be throttled by browsers.

## Clipboard API

### Overview
- **What**: A browser API for interacting with the system clipboard (temporary storage for copy, cut, and paste operations).
- **Purpose**: To programmatically copy and paste text or data.
- **Why**: A secure, modern alternative to `document.execCommand`.

### What is the Clipboard?
- The system’s temporary memory where data (text, images, etc.) is stored during copy, cut, or paste operations.
- Clipboard API allows JavaScript to read from or write to this memory.

### How It Works
1. Write data to the clipboard using `navigator.clipboard.writeText()` or `write()`.
2. Read data from the clipboard using `navigator.clipboard.readText()` or `read()`.
3. Requires user permission, prompted by the browser during access.

### Key Features
- **Asynchronous**: Promise-based API for reliable operations.
- **Secure**: Requires HTTPS and a user gesture (e.g., click).
- **Rich Data**: Supports text, images, and custom formats.
- **Cross-Platform**: Works on desktop and mobile browsers.

### Why Write = Copy, Read = Paste?
- **Write**: Stores data in the clipboard (equivalent to copying, like Ctrl+C).
- **Read**: Retrieves data from the clipboard (equivalent to pasting, like Ctrl+V).
- **Logic**: From a system perspective, clipboard is a memory buffer:
  - `write` = store data (copy).
  - `read` = fetch data (paste).
- **User Terms**: `write` aligns with copy, `read` aligns with paste.
- **Tip**: Think of the clipboard as a database: `write` is insert, `read` is fetch.

### Syntax
```javascript
// Copy (Write)
navigator.clipboard.writeText('Hello').then(() => console.log('Copied!'));

// Paste (Read)
navigator.clipboard.readText().then(text => console.log('Pasted:', text));
```

### Methods
- `writeText(text)`: Copies text to the clipboard.
- `readText()`: Reads text from the clipboard.
- `write()`: Copies rich data (e.g., images).
- `read()`: Reads rich data.

### Example
```html
<input id="input" placeholder="Enter text">
<button onclick="copyText()">Copy</button>
<button onclick="pasteText()">Paste</button>
<div id="output"></div>

<script>
function copyText() {
  const text = document.querySelector('#input').value;
  navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied!');
  }).catch(err => {
    console.error('Copy failed:', err);
  });
}

function pasteText() {
  navigator.clipboard.readText().then(text => {
    document.querySelector('#output').textContent = `Pasted: ${text}`;
  }).catch(err => {
    console.error('Paste failed:', err);
  });
}
</script>
```

### Example: Copying Rich Data
```javascript
async function copyImage() {
  const response = await fetch('image.png');
  const blob = await response.blob();
  await navigator.clipboard.write([
    new ClipboardItem({ 'image/png': blob })
  ]);
  console.log('Image copied!');
}
```

### Use Cases
- Copying shareable links, coupon codes, or code snippets.
- Pasting text into form fields.
- Copying/pasting images or rich content (e.g., HTML).
- Online code editors or note-taking applications.

### Interview Questions
- Explain the Clipboard API permission flow.
- How does Clipboard API differ from `document.execCommand`?
- Implement a copy/paste feature with a fallback for older browsers.
- Write code for a copy-to-clipboard button.

### Challenges
- **Permission**: Requires HTTPS and a user gesture (e.g., click).
- **Browser Support**: Limited `read()` support in iOS Safari.
- **Fallback**: Use `document.execCommand` for older browsers.
  ```javascript
  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  ```
- **Security**: Sanitize data before copying to prevent malicious content.

## Combined Tips
- **Security**: Both APIs require HTTPS and user interaction for security.
- **Performance**: Clipboard API is lightweight; Notification API may face browser rate-limiting.
- **Mini Project**:
  - Build a note-taking app:
    - Use Clipboard API to copy/paste notes.
    - Use Notification API to alert when a note is saved.
  - Sample Code:
    ```html
    <input id="note" placeholder="Enter note">
    <button onclick="copyNote()">Copy</button>
    <button onclick="saveNote()">Save</button>
    <script>
      function copyNote() {
        const text = document.querySelector('#note').value;
        navigator.clipboard.writeText(text).then(() => console.log('Copied!'));
      }
      function saveNote() {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('Note Saved!', { body: 'Your note is saved.' });
          }
        });
      }
    </script>
    ```

## Revision Points
- **Notification API**:
  - Permission: `granted`, `denied`, `default`.
  - Options: `body`, `icon`, `tag`, `actions`, `vibrate`, `requireInteraction`.
  - Events: `onclick`, `onclose`, `onerror`.
  - vs Push API: Local (client-side) vs remote (server-driven).
- **Clipboard API**:
  - Clipboard: System’s temporary storage for copy/paste.
  - Methods: `writeText` (copy), `readText` (paste), `write`, `read`.
  - Terminology: `write` = store/copy, `read` = retrieve/paste.
  - Fallback: `document.execCommand` for older browsers.
- **Use Cases**: Notifications for alerts, Clipboard for copy/paste operations.