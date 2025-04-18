# Web Storage API Notes for Interview Prep

## Overview
The Web Storage API enables client-side data storage in the browser as key-value pairs, used for persisting user preferences, form data, or temporary states. It includes three mechanisms:

- **LocalStorage**: Permanent storage (until manually cleared).
- **SessionStorage**: Temporary storage for a single tab session (clears on tab close).
- **Cookies**: Small data fragments shareable with the server, ideal for authentication and tracking.

**Analogy**: LocalStorage is a permanent drawer, SessionStorage is a temporary drawer, and Cookies are sticky notes shared between browser and server.

---

## 1. LocalStorage

### What is LocalStorage?
LocalStorage stores data permanently for a specific domain, accessible across all tabs/windows of that domain until explicitly cleared.

### Features
- **Storage Limit**: ~5-10 MB (browser-dependent).
- **Scope**: Same domain, all tabs/windows.
- **Data Type**: Strings (objects require `JSON.stringify()` for storage).
- **Persistence**: Persists until manually removed.

### Methods
- `localStorage.setItem(key, value)`: Stores a key-value pair.
- `localStorage.getItem(key)`: Retrieves value for a key (`null` if key doesn’t exist).
- `localStorage.removeItem(key)`: Deletes a specific key-value pair.
- `localStorage.clear()`: Clears all data.
- `localStorage.key(index)`: Returns key at given index.
- `localStorage.length`: Number of stored items.

### Example
```javascript
// Store data
localStorage.setItem('username', 'JohnDoe');

// Store object
const user = { name: 'John', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve data
console.log(localStorage.getItem('username')); // JohnDoe
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser); // { name: 'John', age: 25 }

// Remove and clear
localStorage.removeItem('username');
localStorage.clear();
```

### Use Cases
- Save user preferences (e.g., dark mode).
- Cache API responses.
- Persist form data across page refreshes.

### Error Handling
- Throws `QuotaExceededError` if storage limit is exceeded.
```javascript
try {
  localStorage.setItem('key', 'value');
} catch (error) {
  console.error('LocalStorage error:', error);
}
```

---

## 2. SessionStorage

### What is SessionStorage?
SessionStorage stores data for a single browser tab’s session, cleared when the tab closes.

### Features
- **Storage Limit**: ~5-10 MB (browser-dependent).
- **Scope**: Specific to the tab (not shared with other tabs/windows).
- **Data Type**: Strings (objects require `JSON.stringify()`).
- **Persistence**: Clears on tab close.

### Methods
Same as LocalStorage, but with `sessionStorage`:
- `sessionStorage.setItem(key, value)`
- `sessionStorage.getItem(key)`
- `sessionStorage.removeItem(key)`
- `sessionStorage.clear()`
- `sessionStorage.key(index)`
- `sessionStorage.length`

### Example
```javascript
// Store data
sessionStorage.setItem('theme', 'dark');

// Store object
const settings = { fontSize: '16px', color: 'blue' };
sessionStorage.setItem('settings', JSON.stringify(settings));

// Retrieve data
console.log(sessionStorage.getItem('theme')); // dark
const storedSettings = JSON.parse(sessionStorage.getItem('settings'));
console.log(storedSettings); // { fontSize: '16px', color: 'blue' }

// Remove and clear
sessionStorage.removeItem('theme');
sessionStorage.clear();
```

### Use Cases
- Temporary storage for multi-step forms.
- Tab-specific state (e.g., user selections).
- Sensitive data for one session.

### Error Handling
- Throws `QuotaExceededError` if limit exceeded.
```javascript
try {
  sessionStorage.setItem('key', 'value');
} catch (error) {
  console.error('SessionStorage error:', error);
}
```

---

## 3. Cookies

### What are Cookies?
Cookies are small text fragments stored as key-value pairs, shareable with the server via HTTP headers. They’re used for authentication, tracking, and personalization, unlike LocalStorage/SessionStorage, which are client-only.

**Analogy**: Cookies are sticky notes that both browser and server can read/write.

### Features
- **Storage Limit**: ~4 KB.
- **Scope**: Domain-specific, accessible across tabs/windows and by the server.
- **Data Type**: Strings (key-value pairs with attributes).
- **Persistence**: Depends on `expires` or `max-age`. Session cookies clear on browser close.
- **Server Access**: Sent in `Cookie` header with HTTP requests.

### How Cookies Work
1. **Set**: Via JavaScript (`document.cookie`) or server (`Set-Cookie` header).
2. **Stored**: Browser saves cookies for the domain.
3. **Sent**: Included in HTTP requests to matching domain/path.
4. **Accessed**: Via `document.cookie` (unless `HttpOnly`).

**Example Flow**:
- Server sets `Set-Cookie: sessionId=abc123`.
- Browser stores it.
- Next request includes `Cookie: sessionId=abc123`.

### Cookie Attributes
Attributes control cookie behavior and security:
- **expires**: Expiry date (e.g., `Fri, 18 Apr 2026 12:00:00 UTC`).
- **max-age**: Lifetime in seconds (e.g., `3600` for 1 hour).
- **path**: URL path where cookie is valid (e.g., `/blog`).
- **domain**: Domain where cookie is valid (e.g., `example.com`).
- **secure**: Send only over HTTPS.
- **HttpOnly**: Blocks JavaScript access (`document.cookie`).
- **SameSite**: Controls cross-site requests:
  - `Strict`: Same-site only.
  - `Lax`: Some cross-site allowed (default).
  - `None`: Cross-site allowed (requires `secure`).

**Example**:
```javascript
document.cookie = "username=JohnDoe; max-age=3600; path=/; secure; SameSite=Strict";
```

### Setting, Getting, and Deleting Cookies
Cookies are managed via `document.cookie`, returning a semicolon-separated string (e.g., `username=JohnDoe; theme=dark`).

#### Set Cookie
```javascript
document.cookie = "theme=dark; max-age=3600; path=/; secure";
```

#### Get Cookie
```javascript
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
console.log(getCookie('theme')); // dark
```

#### Delete Cookie
```javascript
document.cookie = "theme=; max-age=0; path=/";
```

#### Full Example
```javascript
// Set
document.cookie = "username=JohnDoe; max-age=3600; path=/; secure";

// Get
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
console.log(getCookie('username')); // JohnDoe

// Delete
document.cookie = "username=; max-age=0; path=/";
```

### Cookies and Server Communication
Cookies are sent in the `Cookie` header with HTTP requests. Servers set cookies via `Set-Cookie` header.

**Example with Fetch API**:
```javascript
fetch('https://example.com/api/data', {
  method: 'GET',
  credentials: 'include', // Send cookies
})
  .then(response => response.json())
  .then(data => console.log(data));
```

**Server Response**:
```
Set-Cookie: sessionId=abc123; Max-Age=3600; Secure; HttpOnly
```

### Security Considerations
Cookies often store sensitive data (e.g., session IDs), so security is critical.
- **XSS (Cross-Site Scripting)**: JavaScript can steal cookies via `document.cookie`. Use `HttpOnly`.
- **CSRF (Cross-Site Request Forgery)**: Fake requests can misuse cookies. Use `SameSite=Strict` or `Lax`.
- **MITM (Man-in-the-Middle)**: HTTP cookies can be intercepted. Use `secure`.
- **Best Practices**:
  - Use `HttpOnly`, `secure`, `SameSite` for sensitive data.
  - Keep cookies small (4 KB limit).
  - Avoid unnecessary cookies for performance.

### Use Cases
- Authentication (e.g., session IDs).
- User tracking (e.g., analytics).
- Personalization (e.g., language preference).

### Error Handling
- Parsing errors or invalid attributes can occur.
- `HttpOnly` cookies are inaccessible via JavaScript.

---

## Comparison: LocalStorage vs SessionStorage vs Cookies

| Feature              | LocalStorage                     | SessionStorage                   | Cookies                          |
|----------------------|----------------------------------|----------------------------------|----------------------------------|
| **Storage Limit**    | 5-10 MB                         | 5-10 MB                         | ~4 KB                           |
| **Scope**            | Same domain, all tabs/windows   | Same tab only                   | Same domain + server            |
| **Persistence**      | Permanent (until cleared)       | Tab session                     | Depends on `expires`/`max-age`  |
| **Server Access**    | No                              | No                              | Yes (via HTTP headers)          |
| **Ease of Use**      | Simple (key-value API)          | Simple (key-value API)          | Complex (string parsing)        |
| **Security**         | Vulnerable to XSS               | Vulnerable to XSS               | `HttpOnly`, `Secure`, `SameSite`|
| **Use Case**         | User settings, caching          | Temporary form data             | Authentication, tracking        |

---

## Practical Mini Project
A webpage demonstrating LocalStorage, SessionStorage, and Cookies.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Web Storage Demo</title>
</head>
<body>
  <h1>Web Storage Demo</h1>
  <label>Name: <input type="text" id="nameInput"></label>
  <button onclick="saveName()">Save Name (LocalStorage)</button>
  <p>Saved Name: <span id="savedName"></span></p>

  <label>Form Data: <input type="text" id="formInput"></label>
  <button onclick="saveForm()">Save Form (SessionStorage)</button>
  <p>Saved Form Data: <span id="savedForm"></span></p>

  <label>Theme: <input type="text" id="themeInput" placeholder="e.g., dark"></label>
  <button onclick="setCookie()">Set Theme Cookie</button>
  <p>Current Theme: <span id="theme"></span></p>
  <button onclick="deleteCookie()">Delete Theme Cookie</button>

  <script>
    // LocalStorage
    function saveName() {
      const name = document.getElementById('nameInput').value;
      try {
        localStorage.setItem('username', name);
        displayName();
      } catch (error) {
        console.error('LocalStorage error:', error);
      }
    }
    function displayName() {
      const savedName = localStorage.getItem('username') || 'None';
      document.getElementById('savedName').textContent = savedName;
    }
    displayName();

    // SessionStorage
    function saveForm() {
      const formData = document.getElementById('formInput').value;
      try {
        sessionStorage.setItem('formData', formData);
        displayForm();
      } catch (error) {
        console.error('SessionStorage error:', error);
      }
    }
    function displayForm() {
      const savedForm = sessionStorage.getItem('formData') || 'None';
      document.getElementById('savedForm').textContent = savedForm;
    }
    displayForm();

    // Cookies
    function setCookie() {
      const theme = document.getElementById('themeInput').value;
      document.cookie = `theme=${theme}; max-age=3600; path=/; secure; SameSite=Strict`;
      displayTheme();
    }
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return 'None';
    }
    function deleteCookie() {
      document.cookie = "theme=; max-age=0; path=/";
      displayTheme();
    }
    function displayTheme() {
      const theme = getCookie('theme');
      document.getElementById('theme').textContent = theme;
    }
    displayTheme();
  </script>
</body>
</html>
```

**What it does**:
- **LocalStorage**: Saves user name, persists across refreshes.
- **SessionStorage**: Saves form data, clears on tab close.
- **Cookies**: Sets/deletes a theme cookie, visible in browser’s cookie storage.

---

## Interview Questions and Answers

### General
1. **What is the Web Storage API?**
   - A browser API for client-side key-value storage, including LocalStorage, SessionStorage, and Cookies.

2. **When to use LocalStorage vs SessionStorage vs Cookies?**
   - LocalStorage: Long-term client-side data (e.g., settings).
   - SessionStorage: Temporary tab-specific data (e.g., form state).
   - Cookies: Server-client communication (e.g., authentication).

### LocalStorage
3. **How to store objects in LocalStorage?**
   - Use `JSON.stringify()` to store, `JSON.parse()` to retrieve.

4. **What happens if LocalStorage is full?**
   - Throws `QuotaExceededError`. Handle with try-catch.

### SessionStorage
5. **How is SessionStorage different from LocalStorage?**
   - SessionStorage is tab-specific and clears on tab close; LocalStorage is permanent and shared.

### Cookies
6. **What are cookie attributes?**
   - `expires`, `max-age`, `path`, `domain`, `secure`, `HttpOnly`, `SameSite` control behavior/security.

7. **How to delete a cookie?**
   - Set `max-age=0` or `expires` to a past date.

8. **What is an HttpOnly cookie?**
   - Inaccessible to JavaScript, protects against XSS.

9. **Why is the cookie size limited to 4 KB?**
   - Cookies are sent with every HTTP request, so larger sizes impact performance.

10. **How do cookies prevent CSRF attacks?**
    - Use `SameSite=Strict` or `Lax` to restrict cross-site requests.

---

## Security Considerations
- **LocalStorage/SessionStorage**:
  - Vulnerable to XSS; avoid sensitive data.
  - No server access, safer for non-sensitive data.
- **Cookies**:
  - Vulnerable to XSS (mitigate with `HttpOnly`).
  - Vulnerable to CSRF (mitigate with `SameSite`).
  - HTTP cookies can be intercepted (use `secure`).
- **Best Practices**:
  - Use `HttpOnly`, `secure`, `SameSite` for cookies.
  - Sanitize inputs to prevent XSS.
  - Minimize stored data for performance.

---

## Tips for Interview Prep
- **Practice**: Code the mini project to demonstrate all three mechanisms.
- **Security**: Understand XSS, CSRF, and cookie attributes (`HttpOnly`, `SameSite`).
- **Use Cases**: Explain scenarios (e.g., form data with SessionStorage, authentication with Cookies).
- **Fetch Integration**: Know how Cookies work with Fetch API (`credentials: 'include'`).
- **Performance**: Explain why Cookies are limited to 4 KB and minimal storage is better.