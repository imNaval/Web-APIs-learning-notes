# Web Workers API Notes

## 1. **What Are Web Workers?**
- **Overview**: Web Workers provide a mechanism to run JavaScript in **background threads**, separate from the main thread, to perform computationally intensive tasks without blocking the user interface (UI).
- **Purpose**:
  - Prevents the UI from freezing during heavy computations.
  - Ideal for tasks like data processing, image manipulation, or game physics.
- **Key Points**:
  - Workers cannot access the **DOM**, `window`, or `document` objects.
  - Communication between the main thread and workers occurs via **messages** (`postMessage` and `onmessage`).

**Interview Answer**:  
"Web Workers API enables running JavaScript in background threads to handle heavy tasks without blocking the UI. They communicate using `postMessage` and `onmessage` but cannot access the DOM."

---

## 2. **How Do Web Workers Work?**
- **Steps**:
  1. Create a separate JavaScript file (e.g., `worker.js`) containing the worker's logic.
  2. Instantiate the worker in the main script using `new Worker('worker.js')`.
  3. Send and receive data using `postMessage` and `onmessage`.

- **Example**:
  ```javascript
  // worker.js
  self.onmessage = (e) => {
    const num = e.data; // Receive number from main thread
    const doubled = num * 2; // Double it
    self.postMessage(doubled); // Send result back
  };
  ```
  ```javascript
  // main.js
  const worker = new Worker('worker.js');
  worker.postMessage(10); // Send 10
  worker.onmessage = (e) => console.log('Worker response:', e.data); // Output: Worker response: 20
  worker.onerror = (err) => console.error('Error:', err);
  ```
  ```html
  <!-- index.html -->
  <!DOCTYPE html>
  <html>
  <body>
    <h1>Web Worker Demo</h1>
    <script src="main.js"></script>
  </body>
  </html>
  ```

- **What Happens?** 
  - The main thread sends `10`, the worker computes `10 * 2 = 20`, and sends `20` back.
  - The UI remains responsive throughout.

**Interview Question**: "How do Web Workers communicate with the main thread?"  
**Answer**: "They use `postMessage()` to send data and `onmessage` to receive data. Data is copied via structured cloning."

---

## 3. **Types of Web Workers**
- **1. Dedicated Workers**:
  - Used by a single script.
  - Example: The code above.
  - Syntax: `new Worker('worker.js')`.

- **2. Shared Workers**:
  - Can be shared by multiple scripts or browser tabs.
  - Syntax: `new SharedWorker('shared-worker.js')`.
  - **How It Works**:
    - A Shared Worker is a single instance that communicates with multiple tabs/scripts via **ports**.
    - **A unique port is created for each tab**: Each client (tab) that connects to the worker gets its own communication channel (port), allowing the worker to interact with each tab independently.
    - When a tab connects, the `onconnect` event is triggered, and `e.ports[0]` provides the port for that tab.
    - The worker tracks all ports to ensure messages are sent to the correct tab.
    - **How to Identify a Specific Port?** Ports are tracked using a `Map` or array in the worker. Each tab sends a unique identifier (e.g., "Tab1"), which the worker maps to the corresponding port.
  - **Example**:
    ```javascript
    // shared-worker.js
    const ports = [];
    const portToIdMap = new Map();
    self.onconnect = (e) => {
      const port = e.ports[0]; // Port for this tab
      ports.push(port);
      port.onmessage = (event) => {
        const data = event.data;
        if (data.type === 'init') {
          portToIdMap.set(port, data.tabId); // Map port to tab ID
          port.postMessage(`Connected as ${data.tabId}`);
        } else {
          port.postMessage(`From ${portToIdMap.get(port)}: ${data.message}`);
        }
      };
    };
    ```
    ```javascript
    // main.js (Tab 1)
    const sharedWorker = new SharedWorker('shared-worker.js');
    sharedWorker.port.postMessage({ type: 'init', tabId: 'Tab1' });
    sharedWorker.port.postMessage({ message: 'Hello from Tab 1!' });
    sharedWorker.port.onmessage = (e) => console.log('Tab 1:', e.data);
    ```
    ```javascript
    // main.js (Tab 2)
    const sharedWorker = new SharedWorker('shared-worker.js');
    sharedWorker.port.postMessage({ type: 'init', tabId: 'Tab2' });
    sharedWorker.port.postMessage({ message: 'Hello from Tab 2!' });
    sharedWorker.port.onmessage = (e) => console.log('Tab 2:', e.data);
    ```
    - **Output**:
      - Tab 1: `Connected as Tab1`, `From Tab1: Hello from Tab 1!`
      - Tab 2: `Connected as Tab2`, `From Tab2: Hello from Tab 2!`
  - **Use Case**: Synchronizing data across multiple tabs, such as in a chat application where messages update across all tabs.

- **3. Service Workers**:
  - A specialized worker that runs in the background to manage **network requests**, enabling **offline support**, **push notifications**, and **caching**. Unlike Dedicated or Shared Workers, it’s designed for app lifecycle management, not heavy computations.
  - **How It Works**:
    1. **Register**: Register the Service Worker in the main script to initialize it.
       ```javascript
       // main.js
       if ('serviceWorker' in navigator) {
         navigator.serviceWorker.register('/service-worker.js')
           .then((reg) => console.log('Service Worker registered!', reg))
           .catch((err) => console.error('Error:', err));
       }
       ```
       - **Note**: Requires HTTPS or localhost for security.
    2. **Install**: The Service Worker installs and caches essential resources (e.g., HTML, CSS, JS).
       ```javascript
       // service-worker.js
       self.addEventListener('install', (event) => {
         event.waitUntil(
           caches.open('app-cache-v1').then((cache) => {
             console.log('Opening cache and storing files!');
             return cache.addAll([
               '/',
               '/index.html',
               '/styles.css',
               '/app.js'
             ]);
           })
         );
       });
       ```
    3. **Activate**: After installation, it activates and can clean up old caches.
       ```javascript
       self.addEventListener('activate', (event) => {
         event.waitUntil(
           caches.keys().then((cacheNames) => {
             return Promise.all(
               cacheNames.filter((name) => name !== 'app-cache-v1')
                 .map((name) => caches.delete(name))
             );
           })
         );
       });
       ```
    4. **Fetch**: Intercepts network requests, serving cached data or fetching from the server.
       ```javascript
       self.addEventListener('fetch', (event) => {
         event.respondWith(
           caches.match(event.request).then((response) => {
             if (response) {
               console.log('Found in cache:', event.request.url);
               return response;
             }
             console.log('Fetching from server:', event.request.url);
             return fetch(event.request);
           })
         );
       });
       ```
  - **Features**:
    - **Offline Support**: Stores files in cache for offline access.
    - **Push Notifications**: Delivers server-sent notifications.
    - **Background Sync**: Syncs tasks when internet connectivity is restored.
  - **Limitations**:
    - Works only on HTTPS or localhost.
    - No DOM access.
    - Not designed for heavy computations.
    - Scope is limited to the directory where it’s registered (e.g., `/app/service-worker.js` controls `/app` requests).
  - **Use Case**: Building Progressive Web Apps (PWAs), such as offline news apps, e-commerce platforms, or chat apps with push notifications.
  - **Example (Full Setup)**:
    ```javascript
    // main.js
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => console.log('Service Worker registered!', reg))
        .catch((err) => console.error('Error:', err));
    }
    ```
    ```javascript
    // service-worker.js
    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open('app-cache-v1').then((cache) => {
          return cache.addAll([
            '/',
            '/index.html',
            '/styles.css',
            '/app.js'
          ]);
        })
      );
    });

    self.addEventListener('activate', (event) => {
      event.waitUntil(
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.filter((name) => name !== 'app-cache-v1')
              .map((name) => caches.delete(name))
          );
        })
      );
    });

    self.addEventListener('fetch', (event) => {
      event.respondWith(
        caches.match(event.request).then((response) => {
          return response || fetch(event.request);
        })
      );
    });
    ```
    ```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html>
    <head>
      <title>Offline App</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <h1>My Offline App</h1>
      <script src="/main.js"></script>
      <script src="/app.js"></script>
    </body>
    </html>
    ```

**Interview Question**: "What’s the difference between Dedicated and Shared Workers?"  
**Answer**: "Dedicated Workers are tied to a single script and terminate when the script ends. Shared Workers can be accessed by multiple scripts/tabs via ports, with a unique port for each tab."

**Interview Question**: "What are Service Workers?"  
**Answer**: "Service Workers intercept network requests and provide caching, offline support, and push notifications. They run on HTTPS and are ideal for Progressive Web Apps."

---

## 4. **What Can Web Workers Do and Not Do?**
### **What They Can Do**:
- **Background Tasks**: Handle computationally intensive tasks like **data processing** (transforming raw data into meaningful results, such as JSON parsing, numerical computations, or image filtering).
- **Structured Cloning**: Copy objects and arrays for message passing.
- **Transferable Objects**: Transfer large data (e.g., ArrayBuffers) without copying, improving performance via ownership transfer.

### **What They Cannot Do**:
- **DOM Access**: Cannot interact with `document`, `window`, or HTML elements.
- **Same-Origin**: Worker scripts must originate from the same domain.
- **Inefficient for Small Tasks**: Starting a worker incurs overhead.
- **Slow Data Copy**: Large data transfers are slow without transferable objects.

**Interview Question**: "What are the limitations of Web Workers?"  
**Answer**: "Web Workers cannot access the DOM or `localStorage`, require same-origin scripts, and have overhead for small tasks. Large data transfers are slow without transferable objects."

**Interview Question**: "What is data processing?"  
**Answer**: "Data processing involves operations on large datasets, such as JSON parsing, numerical computations, or image filtering. Web Workers are ideal for this as they run in the background, keeping the UI responsive."

---

## 5. **Where Are Web Workers Used?**
- **Large-Scale Data Processing**: Parsing JSON, financial calculations.
  - **Example**: Parsing a large JSON file or summing millions of numbers.
  - **Code Example**:
    ```javascript
    // worker.js
    self.onmessage = (e) => {
      const numbers = e.data;
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      self.postMessage(sum);
    };
    ```
    ```javascript
    // main.js
    const worker = new Worker('worker.js');
    worker.postMessage([1, 2, 3, 4, 5]);
    worker.onmessage = (e) => console.log('Sum:', e.data); // Output: Sum: 15
    ```
- **Image Processing**: Applying filters or resizing images.
- **Games**: Handling physics or collision detection.
- **Real-Time Applications**: Processing WebSocket data.

**Interview Question**: "What’s a practical use case for Web Workers?"  
**Answer**: "Web Workers are used for processing large datasets, like JSON parsing or image manipulation, to prevent UI freezing."

---

## 6. **Advanced: Transferable Objects**
- **What Are They?**: A mechanism to transfer large data (e.g., `ArrayBuffer` or `ImageBitmap`) from the main thread to a worker (or vice versa) without copying, by shifting ownership.
- **How It Works**:
  - Uses `postMessage(data, [transferable])`, where the second argument `[transferable]` specifies which data to transfer, not copy.
  - The data’s reference is passed to the worker, and the original thread loses access.
  - **Why `[transferable]`?**: This array indicates which data should be transferred, ensuring no copying occurs.
- **Example**:
  ```javascript
  // main.js
  const worker = new Worker('worker.js');
  const buffer = new ArrayBuffer(1024);
  worker.postMessage(buffer, [buffer]); // [buffer] specifies transfer
  console.log(buffer.byteLength); // 0, as buffer is now with the worker
  ```
  ```javascript
  // worker.js
  self.onmessage = (e) => {
    const buffer = e.data;
    console.log(buffer.byteLength); // 1024, buffer is here
    self.postMessage(buffer, [buffer]);
  };
  ```

**Interview Answer**:  
"Transferable Objects transfer data like ArrayBuffers without copying, using `postMessage(data, [transferable])` to shift ownership. This is highly efficient for large data."

---

## 7. **Error Handling and Termination**
- **Error Handling**:
  - Errors are managed using `try-catch`, `onerror`, or by sending error messages.
  - **Example**:
    ```javascript
    // worker.js
    self.onmessage = (e) => {
      try {
        if (typeof e.data !== 'number') throw new Error('Send a number!');
        self.postMessage(e.data * 2);
      } catch (err) {
        self.postMessage({ error: err.message });
      }
    };
    ```
    ```javascript
    // main.js
    const worker = new Worker('worker.js');
    worker.postMessage('oops');
    worker.onmessage = (e) => {
      if (e.data.error) console.error('Error:', e.data.error);
      else console.log('Result:', e.data);
    };
    worker.onerror = (err) => console.error('Error event:', err.message);
    ```
- **Termination**:
  ```javascript
  worker.terminate(); // Stops the worker
  ```

**Interview Question**: "How are errors handled in Web Workers?"  
**Answer**: "Errors are caught using try-catch and sent via `postMessage`. The main thread checks errors using `onmessage` or `onerror`."

---

## 8. **Interview Tips**
- **When Not to Use?**: For small tasks or DOM manipulation.
- **How They Improve Performance?**: Offload heavy tasks to background threads, keeping the UI responsive.
- **LocalStorage Access?**: No, workers cannot access `localStorage` or the DOM.
- **How to Debug?**: Use browser DevTools (e.g., Chrome’s Sources > Workers tab) with breakpoints and `console.log`.
- **Browser Support?**: Supported by modern browsers (Chrome, Firefox, Safari).

**Pro Tip**: Mention **use cases** (e.g., data processing) and **transferable objects** in interviews to stand out.

---

## 9. **Practice Task**
**Task**: Create a Web Worker to calculate the `n`th Fibonacci number (e.g., `n=40`) and display the result on the page without freezing the UI.

```javascript
// worker.js
self.onmessage = (e) => {
  const n = e.data;
  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }
  self.postMessage(fib(n));
};
```
```javascript
// main.js
const worker = new Worker('worker.js');
document.getElementById('calc-btn').addEventListener('click', () => {
  document.getElementById('result').textContent = 'Calculating...';
  worker.postMessage(40);
});
worker.onmessage = (e) => {
  document.getElementById('result').textContent = `Result: ${e.data}`;
};
```
```html
<!DOCTYPE html>
<html>
<body>
  <button id="calc-btn">Calculate Fibonacci</button>
  <div id="result"></div>
  <script src="main.js"></script>
</body>
</html>
```

---

## 10. **Quick Revision Cheatsheet**
- **What**: Background threads for heavy tasks.
- **Communication**: `postMessage` and `onmessage`.
- **Types**: Dedicated, Shared, Service Workers.
- **Limitations**: No DOM or `localStorage` access.
- **Use Cases**: Data processing, image filters, offline apps.
- **Advanced**: Transferable objects.