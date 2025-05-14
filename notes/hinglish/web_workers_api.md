# Web Workers API Notes:

## 1. **Web Workers Kya Hai, Bhai?**
- **Seedha Funda**: Web Workers ek tarika hai JavaScript mein heavy kaam (jaise bade calculations) ko **background mein alag thread pe** chalane ka, taaki tera web page hang na ho aur buttons, animations sab smooth chale.
- **Kyun Jaruri?** 
  - UI ko freeze hone se bachata hai.
  - Heavy tasks jaise data crunching, image processing ya game physics ke liye perfect.
- **Yaad Rakh**: 
  - Workers **DOM** (HTML elements) ya `window`, `document` ko touch nahi kar sakte.
  - Main thread aur worker ke beech baat **messages** se hoti hai (`postMessage` aur `onmessage`).

**Interview Mein Bol**:  
"Web Workers API lets you run heavy JavaScript tasks in a background thread, so the main UI thread stays free. They use `postMessage` and `onmessage` for communication but can’t access the DOM."

---

## 2. **Kaise Kaam Karta Hai Yeh?**
- **Simple Steps**:
  1. Ek alag JS file bana (e.g., `worker.js`) jisme worker ka logic hoga.
  2. Main script mein worker ko `new Worker('worker.js')` se call kar.
  3. Data bhej aur receive kar using `postMessage` aur `onmessage`.

- **Chhota Sa Example**:
  ```javascript
  // worker.js
  self.onmessage = (e) => {
    const num = e.data; // Main thread se number aaya
    const doubled = num * 2; // Usko double kar
    self.postMessage(doubled); // Wapas bhej
  };
  ```
  ```javascript
  // main.js
  const worker = new Worker('worker.js');
  worker.postMessage(10); // 10 bhejo
  worker.onmessage = (e) => console.log('Worker ka jawab:', e.data); // Output: 20
  worker.onerror = (err) => console.error('Kuch toh gadbad:', err);
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

- **Kya Hua?** 
  - Main thread ne `10` bheja, worker ne `10 * 2 = 20` kiya, aur wapas `20` bheja.
  - UI freeze nahi hua, sab smooth!

**Interview Sawal**: "Main thread aur Web Worker ke beech baat kaise hoti hai?"  
**Jawab**: "`postMessage()` se data bheja jata hai aur `onmessage` se receive hota hai. Data structured cloning ke through copy hota hai."

---

## 3. **Web Workers Ke Prakar**
- **1. Dedicated Workers**:
  - Sirf ek script ke liye kaam karta hai.
  - Example: Upar wala code.
  - Syntax: `new Worker('worker.js')`.

- **2. Shared Workers**:
  - Multiple scripts ya browser tabs share kar sakte hain.
  - Syntax: `new SharedWorker('shared-worker.js')`.
  - **Kaise Kaam Karta Hai**:
    - Ek shared worker ek single instance hai jo sab tabs ke saath ports ke through baat karta hai.
    - **Har tab ke liye alag port banta hai**: Har client (tab) jo connect karta hai, uske liye ek unique communication channel (port) banaya jata hai, taaki worker har tab se alag-alag baat kar sake.
    - Jab ek tab connect karta hai, `onconnect` event trigger hota hai, aur `e.ports[0]` us tab ka port deta hai.
    - Worker saare ports ko track karta hai taaki messages confuse na ho.
  - **Specific Port Ka Pata Kaise Lagega?** Ports ko track karne ke liye worker mein ek `Map` ya array use karte hain. Har tab ek unique ID (jaise "Tab1") bhejta hai, aur worker us ID ko port ke saath map karta hai.
  - **Example**:
    ```javascript
    // shared-worker.js
    const ports = [];
    const portToIdMap = new Map();
    self.onconnect = (e) => {
      const port = e.ports[0]; // Is tab ka port
      ports.push(port);
      port.onmessage = (event) => {
        const data = event.data;
        if (data.type === 'init') {
          portToIdMap.set(port, data.tabId); // Port ko tab ID se map
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
    sharedWorker.port.postMessage({ message: 'Yo Tab 1!' });
    sharedWorker.port.onmessage = (e) => console.log('Tab 1:', e.data);
    ```
    ```javascript
    // main.js (Tab 2)
    const sharedWorker = new SharedWorker('shared-worker.js');
    sharedWorker.port.postMessage({ type: 'init', tabId: 'Tab2' });
    sharedWorker.port.postMessage({ message: 'Yo Tab 2!' });
    sharedWorker.port.onmessage = (e) => console.log('Tab 2:', e.data);
    ```
    - **Output**:
      - Tab 1: `Connected as Tab1`, `From Tab1: Yo Tab 1!`
      - Tab 2: `Connected as Tab2`, `From Tab2: Yo Tab 2!`
  - **Use Case**: Multiple tabs mein data sync, jaise chat app jahan sab tabs pe messages update ho.

- **3. Service Workers**:
  - Service Workers ek special script hai jo **background mein network requests** intercept karta hai aur **offline support**, **push notifications**, aur **caching** deta hai. Yeh heavy computations ke liye nahi, balki app ke lifecycle aur network management ke liye bana hai.
  - **Kaise Kaam Karta Hai**:
    1. **Register**: Main script mein Service Worker ko register karo, jo browser ko batata hai ke ek background script shuru karna hai.
       ```javascript
       // main.js
       if ('serviceWorker' in navigator) {
         navigator.serviceWorker.register('/service-worker.js')
           .then((reg) => console.log('Service Worker taiyaar hai!', reg))
           .catch((err) => console.error('Problem hai bhai:', err));
       }
       ```
       - **Note**: HTTPS ya localhost pe kaam karta hai (security ke liye).
    2. **Install**: Service Worker install hota hai aur important files (HTML, CSS, JS) cache mein store karta hai.
       ```javascript
       // service-worker.js
       self.addEventListener('install', (event) => {
         event.waitUntil(
           caches.open('app-cache-v1').then((cache) => {
             console.log('Cache khol diya, files daal raha hoon!');
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
    3. **Activate**: Installation ke baad activate hota hai, purane caches saaf kar sakta hai.
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
    4. **Fetch**: Network requests ko intercept karta hai, cache se data de sakta hai ya server se fetch karta hai.
       ```javascript
       self.addEventListener('fetch', (event) => {
         event.respondWith(
           caches.match(event.request).then((response) => {
             if (response) {
               console.log('Cache se mila:', event.request.url);
               return response;
             }
             console.log('Server se la raha hoon:', event.request.url);
             return fetch(event.request);
           })
         );
       });
       ```
  - **Features**:
    - **Offline Support**: Cache mein files store karke app offline chala sakta hai.
    - **Push Notifications**: Server se notifications bhej sakta hai.
    - **Background Sync**: Internet wapas aane pe tasks sync karta hai.
  - **Limitations**:
    - Sirf HTTPS ya localhost pe kaam karta hai.
    - DOM access nahi hota, heavy computations ke liye nahi bana.
    - Scope uske folder tak limited hota hai (e.g., `/app/service-worker.js` sirf `/app` ke requests control karega).
  - **Use Case**: Progressive Web Apps (PWAs) jaise offline news apps, e-commerce apps, ya chat apps jo push notifications bhejte hain.
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
      <h1>Mera Offline App</h1>
      <script src="/main.js"></script>
      <script src="/app.js"></script>
    </body>
    </html>
    ```

**Interview Sawal**: "Dedicated aur Shared Workers mein kya fark hai?"  
**Jawab**: "Dedicated Workers ek script ke liye hote hain aur script khatam hone pe band ho jate hain. Shared Workers multiple scripts/tabs ke saath ports ke through kaam karte hain, har tab ke liye alag port banakar."

**Interview Sawal**: "Service Workers kya hain?"  
**Jawab**: "Service Workers background mein network requests intercept karte hain aur caching, offline support, aur push notifications dete hain. Yeh HTTPS pe chalta hai aur PWAs ke liye ideal hai."

---

## 4. **Kya Kar Sakta Hai, Kya Nahi?**
### **Kya Kar Sakta Hai**:
- **Background Kaam**: Heavy tasks jaise calculations ya **data processing** (raw data ko process karke meaningful result nikalna, jaise JSON parsing, number crunching, ya image filtering).
- **Structured Cloning**: Objects, arrays ko copy karke bhej sakta hai.
- **Transferable Objects**: Bade data (jaise ArrayBuffers) ko copy kiye bina transfer karta hai, ownership shift karke, jo super fast hai.

### **Kya Nahi Kar Sakta**:
- **DOM Access**: `document`, `window`, ya HTML elements ko nahi chhoo sakta.
- **Same-Origin**: Worker file same domain se honi chahiye.
- **Chhote Tasks Ke Liye Mehnga**: Worker start karne mein time lagta hai.
- **Data Copy Slow**: Bade data ke liye slow ho sakta hai (transferable objects ke bina).

**Interview Sawal**: "Web Workers ki limitations kya hain?"  
**Jawab**: "Web Workers DOM ya `localStorage` ko access nahi kar sakte, same-origin scripts chahiye, aur chhote tasks ke liye overhead hota hai. Bade data ke liye transferable objects na ho toh slow ho sakta hai."

**Interview Sawal**: "Data processing kya hai?"  
**Jawab**: "Data processing bade datasets pe operations jaise JSON parsing, number crunching, ya image filtering hai. Web Workers iske liye ideal hain kyunki yeh background mein kaam karke UI smooth rakhta hai."

---

## 5. **Kahan Use Hoga?**
- **Bada Data Process**: JSON parsing, financial calculations.
  - **Example**: Ek bada JSON file parse karna ya lakhon numbers ka sum nikalna.
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
- **Image Processing**: Filters ya resizing.
- **Games**: Physics ya collision detection.
- **Real-Time**: WebSocket data handle karna.

**Interview Sawal**: "Web Workers ka practical use case bata."  
**Jawab**: "Web Workers bade datasets jaise JSON parsing ya image processing ke liye use hote hain, taaki UI freeze na ho."

---

## 6. **Thoda Advance: Transferable Objects**
- **Kya Hai?**: Bade data (jaise `ArrayBuffer` ya `ImageBitmap`) ko copy kiye bina main thread se worker (ya worker se main thread) tak transfer karna.
- **Kaise Kaam Karta Hai**:
  - `postMessage(data, [transferable])` use hota hai, jahan doosra argument `[transferable]` batata hai ki data ko copy nahi, transfer karna hai.
  - Data ka reference worker ko jata hai, aur original thread se chheen liya jata hai (ownership shift).
- **Kyun `[transferable]`?**: Yeh array batata hai ki kaunsa data transfer karna hai, copy nahi.
- **Example**:
  ```javascript
  // main.js
  const worker = new Worker('worker.js');
  const buffer = new ArrayBuffer(1024);
  worker.postMessage(buffer, [buffer]); // [buffer] batata hai transfer karna
  console.log(buffer.byteLength); // 0, kyunki buffer worker ke paas gaya
  ```
  ```javascript
  // worker.js
  self.onmessage = (e) => {
    const buffer = e.data;
    console.log(buffer.byteLength); // 1024, buffer yahan hai
    self.postMessage(buffer, [buffer]);
  };
  ```

**Interview Mein Bol**:  
"Transferable Objects copy kiye bina data transfer karte hain, jaise ArrayBuffer. `postMessage(data, [transferable])` se ownership shift hoti hai, jo large data ke liye fast hai."

---

## 7. **Error Handle aur Band Karna**
- **Error Handling**:
  - Errors ko `try-catch`, `onerror`, ya error messages se handle karte hain.
  - **Example**:
    ```javascript
    // worker.js
    self.onmessage = (e) => {
      try {
        if (typeof e.data !== 'number') throw new Error('Number bhejo!');
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
- **Band Karna**:
  ```javascript
  worker.terminate(); // Worker ko bye-bye!
  ```

**Interview Sawal**: "Web Workers mein errors kaise handle karte hain?"  
**Jawab**: "Errors ko try-catch se pakadte hain aur `postMessage` se error messages bhejte hain. Main thread `onmessage` ya `onerror` se errors check karta hai."

---

## 8. **Interview Ke Liye Chhote Tips**
- **Kab Nahi Use Karna?**: Chhote tasks ya DOM ke kaam ke liye.
- **Performance Kaise Better?**: Heavy tasks background mein chala ke UI free rakhta hai.
- **LocalStorage Access?**: Nahi, workers `localStorage` ya DOM nahi chhoo sakte.
- **Debug Kaise?**: Browser DevTools (Chrome > Sources > Workers) mein breakpoints aur `console.log`.
- **Browser Support?**: Modern browsers (Chrome, Firefox, Safari) support karte hain.

**Pro Tip**: Interview mein **use cases** (jaise data processing) aur **transferable objects** ka zikr kar, impress honge!

---

## 9. **Ek Chhota Practice Task**
**Task**: Ek Web Worker bana jo `n`th Fibonacci number calculate kare (e.g., `n=40`) aur result page pe dikhaaye, bina UI freeze kiye.

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
  document.getElementById('result').textContent = 'Ruko, calculate kar raha...';
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
  <button id="calc-btn">Fibonacci Nikalo</button>
  <div id="result"></div>
  <script src="main.js"></script>
</body>
</html>
```

---

## 10. **Quick Revision Cheatsheet**
- **Kya Hai**: Background thread heavy tasks ke liye.
- **Baat Kaise**: `postMessage` aur `onmessage`.
- **Types**: Dedicated, Shared, Service Workers.
- **Nahi Kar Sakta**: DOM, `localStorage` access.
- **Use Cases**: Data processing, image filters, offline apps.
- **Advance**: Transferable objects.