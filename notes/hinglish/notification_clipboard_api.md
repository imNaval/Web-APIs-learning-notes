# Notification API aur Clipboard API Notes (Hinglish)

## Notification API

### Overview
- **Kya Hai**: Browser API jo desktop ya mobile pe system-level notifications dikhata hai.
- **Kaam**: Real-time alerts dene ke liye, jaise new message, reminder, ya updates.
- **Kyun**: User ko engage karta hai, even jab tab active na ho; OS ke notification center se connect hota hai.

### Kaise Kaam Karta Hai
1. User se permission mangta hai using `Notification.requestPermission()`.
2. Permission milne pe `new Notification(title, options)` se notification banata hai.
3. Events jaise `onclick`, `onclose`, ya `onerror` handle karta hai.

### Key Features
- **Customizable**: Title, body, icon, actions, aur bhi bohot kuch set kar sakte hain.
- **Event-Driven**: Click, close, error events support karta hai.
- **Secure**: Sirf HTTPS websites pe kaam karta hai.
- **Cross-Platform**: Desktop aur mobile browsers mein chalta hai.

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
- **`body` (String)**: Notification ka main text (e.g., "John se naya message").
- **`icon` (String)**: Notification ke saath image ka URL (e.g., app ka logo).
- **`badge` (String)**: Mobile pe chhota monochrome icon notification tray ke liye.
- **`image` (String)**: Bada image visual context ke liye (e.g., product photo).
- **`tag` (String)**: Unique ID, same tag wala notification replace ho jata hai (e.g., "message-123").
- **`data` (Any)**: Custom data jo events mein use hota hai (e.g., `{ id: 123 }`).
- **`actions` (Array)**: Interactive buttons (e.g., `[{ action: 'reply', title: 'Reply' }]`).
- **`silent` (Boolean)**: Agar `true`, toh sound/vibration nahi hota.
- **`vibrate` (Array)**: Mobile pe vibration pattern (e.g., `[200, 100, 200]`).
- **`requireInteraction` (Boolean)**: Agar `true`, toh notification tab tak rehta hai jab tak user interact na kare.
- **Tip**: Basic ke liye `body`, `icon`, `tag` kaafi hain; `actions`, `image` advanced ke liye.

### Methods aur Events
- **Methods**:
  - `Notification.requestPermission()`: User se permission mangta hai (`granted`, `denied`, `default`).
  - `new Notification(title, options)`: Notification banata hai.
- **Events**:
  - `onclick`: User notification pe click kare.
  - `onclose`: Notification band ho jaye.
  - `onerror`: Notification show na ho paye.

### Example
```javascript
function showNotification() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      const notification = new Notification('Naya Message!', {
        body: 'Sarah se naya message aaya.',
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
<button onclick="showNotification()">Notification Dikhayein</button>
```

### Notification API vs Push API
- **Notification API**:
  - **Scope**: Local, client-side JavaScript se trigger hota hai.
  - **Context**: Website/browser tab open hone ka zarurat hai.
  - **Use Case**: Website ke andar real-time alerts (e.g., chat message).
  - **Mechanism**: Direct `new Notification()` se banata hai.
- **Push API**:
  - **Scope**: Remote, server se trigger hota hai.
  - **Context**: Service worker ke through kaam karta hai, browser band hone pe bhi.
  - **Use Case**: Server se updates (e.g., news, email alerts).
  - **Mechanism**: Server data push karta hai, Notification API usse dikhata hai.
- **Relation**: Push API data bhejta hai; Notification API notification dikhata hai.
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
- Chat apps (naye message ke alerts).
- E-commerce (order status updates).
- Reminders (calendar events).
- News apps (breaking news).

### Interview Questions
- Notification API ka permission flow aur options samjhao.
- Notification API aur Push API mein kya farak hai?
- Notification click pe tab focus kaise karoge?
- Button se notification with `actions` ka code likho.

### Challenges
- **Permission**: Users deny kar sakte hain; user-friendly prompt banao.
- **Browser Support**: iOS Safari mein kuch options (e.g., `actions`) limited hain.
- **Security**: HTTPS zaroori; spammy notifications se bacho.
- **Rate Limiting**: Zyada notifications pe browser rok sakta hai.

## Clipboard API

### Overview
- **Kya Hai**: Browser API jo system clipboard (copy, cut, paste ke liye temporary storage) ke saath kaam karta hai.
- **Kaam**: Text ya data ko programmatically copy/paste karna.
- **Kyun**: `document.execCommand` ka secure aur modern alternative.

### Clipboard Kya Hai?
- System ka temporary memory jahan copy, cut, ya paste ka data rakha jata hai (text, images, etc.).
- Clipboard API is memory ko JavaScript se access karta hai.

### Kaise Kaam Karta Hai
1. Clipboard mein data likhna using `navigator.clipboard.writeText()` ya `write()`.
2. Clipboard se data padhna using `navigator.clipboard.readText()` ya `read()`.
3. User permission chahiye, jo browser prompt karta hai.

### Key Features
- **Asynchronous**: Promise-based API, reliable hai.
- **Secure**: HTTPS aur user gesture (e.g., click) zaroori.
- **Rich Data**: Text, images, aur custom formats support karta hai.
- **Cross-Platform**: Desktop aur mobile browsers pe chalta hai.

### Write = Copy, Read = Paste Kyun?
- **Write**: Clipboard mein data store karna (copy, jaise Ctrl+C).
- **Read**: Clipboard se data retrieve karna (paste, jaise Ctrl+V).
- **Logic**: Clipboard ek memory buffer hai:
  - `write` = data store karo (copy).
  - `read` = data fetch karo (paste).
- **User Terms**: `write` = copy, `read` = paste.
- **Tip**: Clipboard ko database jaisa socho: `write` = insert, `read` = fetch.

### Syntax
```javascript
// Copy (Write)
navigator.clipboard.writeText('Hello').then(() => console.log('Copied!'));

// Paste (Read)
navigator.clipboard.readText().then(text => console.log('Pasted:', text));
```

### Methods
- `writeText(text)`: Text ko clipboard mein copy karta hai.
- `readText()`: Clipboard se text padhta hai.
- `write()`: Rich data (e.g., images) copy karta hai.
- `read()`: Rich data padhta hai.

### Example
```html
<input id="input" placeholder="Text daalo">
<button onclick="copyText()">Copy</button>
<button onclick="pasteText()">Paste</button>
<div id="output"></div>

<script>
function copyText() {
  const text = document.querySelector('#input').value;
  navigator.clipboard.writeText[text].then(() => {
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

### Example: Rich Data Copy
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
- Shareable links, coupon codes, ya code snippets copy karna.
- Form fields mein text paste karna.
- Images ya rich content (e.g., HTML) copy/paste.
- Online code editors ya note-taking apps.

### Interview Questions
- Clipboard API ka permission flow samjhao.
- Clipboard API aur `document.execCommand` mein kya farak hai?
- Purane browsers ke liye fallback kaise banayein?
- Copy-to-clipboard button ka code likho.

### Challenges
- **Permission**: HTTPS aur user gesture (e.g., click) chahiye.
- **Browser Support**: iOS Safari mein `read()` ka support limited hai.
- **Fallback**: Purane browsers ke liye `document.execCommand` use karo.
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
- **Security**: Data copy karne se pehle sanitize karo.

## Combined Tips
- **Security**: Dono APIs ko HTTPS aur user interaction chahiye.
- **Performance**: Clipboard API lightweight hai; Notification API browser rate-limiting face kar sakta hai.
- **Mini Project**:
  - Note-taking app banao:
    - Clipboard API se notes copy/paste karo.
    - Notification API se note save hone ka alert do.
  - Sample Code:
    ```html
    <input id="note" placeholder="Note daalo">
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
            new Notification('Note Saved!', { body: 'Tera note save ho gaya.' });
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
  - Clipboard: System ka temporary storage.
  - Methods: `writeText` (copy), `readText` (paste), `write`, `read`.
  - Terminology: `write` = store/copy, `read` = retrieve/paste.
  - Fallback: `document.execCommand`.
- **Use Cases**: Notifications for alerts, Clipboard for copy/paste.