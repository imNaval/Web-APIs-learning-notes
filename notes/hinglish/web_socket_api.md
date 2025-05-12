# WebSocket API Notes (Hinglish)

### What is WebSocket API?
WebSocket API ek modern web technology hai jo client (jaise browser) aur server ke beech **real-time, two-way communication** enable karti hai. HTTP se alag yeh ek **persistent connection** banata hai, jisse data low-latency ke sath exchange hota hai. Yeh live chats, stock tickers, multiplayer games, ya real-time notifications ke liye perfect hai.

- **Kyun WebSocket?**
  - HTTP polling (bar-bar server se data mangna) slow aur resource-heavy hota hai.
  - WebSocket ek baar connection banata hai aur phir data continuously exchange hota hai bina repeated requests ke.
  - **Full-duplex**: Client aur server ek sath data bhej sakte hain.

![Image Placeholder: WebSocket Persistent Connection](notes/images/webSocket-PersistentConnection.jpg)
*Caption: Diagram dikhata hai ki WebSocket kaise client aur server ko jodta hai.*

### How WebSocket Works?
1. **Handshake**:
   - Client server ko ek special HTTP request bhejta hai jisme `Upgrade: websocket` header hota hai.
   - Agar server agree karta hai, toh connection WebSocket protocol (`ws://` ya `wss://` for secure) pe switch ho jata hai.
2. **Persistent Connection**:
   - Ek baar connection banne ke baad, client aur server data frames (text ya binary) asynchronously bhej sakte hain.
3. **Connection Band Karna**:
   - Connection client ya server dono taraf se band ho sakta hai, ya network issue se bhi disconnect ho sakta hai.

![Image Placeholder: WebSocket Handshake](notes/images/webSocket-Handshake.jpg)
*Caption: WebSocket handshake process ka illustration.*

### Key Features
- **Low Latency**: Data turant transfer hota hai, HTTP polling se kam overhead ke sath.
- **Full-Duplex**: Dono taraf se ek sath communication hoti hai.
- **Event-Driven**: `onopen`, `onmessage`, `onerror`, aur `onclose` events ke through handle hota hai.
- **Scalable**: Bade apps ke liye kaam karta hai, lekin proper infrastructure chahiye thousands of connections ke liye.

### WebSocket API in JavaScript
JavaScript mein `WebSocket` object ke through WebSocket connection handle kiya jata hai. Yeh browser ka built-in API hai, toh koi external library nahi chahiye client-side ke liye.

#### Basic Syntax
```javascript
const socket = new WebSocket('ws://example.com/socket');
```
- `ws://` normal connection ke liye, aur `wss://` secure (encrypted) connection ke liye.
- URL server ka endpoint hota hai jo WebSocket protocol support karta hai.

#### Key Events
1. **`onopen`**: Jab connection successfully ban jata hai, yeh trigger hota hai.
2. **`onmessage`**: Server se message aane par yeh trigger hota hai.
3. **`onerror`**: Koi error (jaise connection fail) hone par trigger hota hai.
4. **`onclose`**: Connection band hone par trigger hota hai.

#### Example: Simple WebSocket Client
```javascript
// WebSocket connection banaya
const socket = new WebSocket('ws://example.com/socket');

// Connection khulne par
socket.onopen = () => {
  console.log('Server se connected!');
  socket.send('Hello, Server!'); // Server ko message bheja
};

// Server se message receive hone par
socket.onmessage = (event) => {
  console.log('Server ka message:', event.data); // Data print kiya
};

// Error handling
socket.onerror = (error) => {
  console.error('WebSocket Error:', error);
};

// Connection band hone par
socket.onclose = () => {
  console.log('Server se disconnected!');
};

// Connection band karne ka tareeka
// socket.close();
```

#### Sending Data
- `socket.send(data)` se data server ko bhejte hain.
- Data string, JSON, Blob, ya ArrayBuffer ho sakta hai.
- Example (JSON bhejna):
```javascript
const message = { user: 'John', text: 'Hi!' };
socket.send(JSON.stringify(message));
```

#### Receiving Data
- Server ka message `event.data` mein milta hai.
- Agar JSON hai, toh parse karna padta hai:
```javascript
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};
```

![Image Placeholder: WebSocket Client Code](./images/socket.png)
*Caption: WebSocket client code ka example structure.*

### Server-Side WebSocket
Client ke liye browser ka `WebSocket` API use hota hai, lekin server ke liye alag libraries chahiye. Kuch popular options:
- **Node.js**: `ws` ya `Socket.IO` library.
- **Python**: `websockets` ya `Django Channels`.
- **Java**: `Spring WebSocket`.

#### Node.js Example with `ws`
```javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected!');

  // Client se message aaye
  ws.on('message', (message) => {
    console.log('Received:', message.toString());
    ws.send('Server bolta hai: Tera message mil gaya!');
  });

  // Connection band ho
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
```

![Image Placeholder: WebSocket Server Setup](./images/socket.png)
*Caption: WebSocket server kaise clients ko handle karta hai.*

### Use Cases
- **Live Chat Apps**: Real-time messaging (jaise WhatsApp, Slack).
- **Stock Market Tickers**: Live price updates (stocks ya crypto ke liye).
- **Online Gaming**: Multiplayer games ke liye instant updates.
- **Collaborative Tools**: Real-time editing (jaise Google Docs).
- **Notifications**: Live alerts ya push notifications.

### Interview Tips
1. **Common Questions**:
   - WebSocket aur HTTP polling mein kya difference hai?
   - WebSocket ka handshake process kaise kaam karta hai?
   - WebSocket ke use cases kya hain?
   - WebSocket vs Server-Sent Events (SSE) vs Long Polling: Kab kya use karna chahiye?
2. **Explain Code**:
   - Ek simple WebSocket client ka code likho aur events explain karo.
   - JSON data kaise bhejte aur receive karte hain?
3. **Edge Cases**:
   - Agar connection drop ho jaye, toh reconnect kaise karoge? (Reconnection logic)
   - WebSocket ke security concerns kya hain? (WSS use karo, data validate karo)
4. **Practical**:
   - Interviewer bol sakta hai: "Ek chat app ke liye WebSocket ka basic flow dikhao."
   - Mini project idea: Simple chat app banane ka code likh do.



### Challenges & Considerations
1. **Scalability**:
   - Hazaar connections ke liye load balancers aur WebSocket-supported servers chahiye.
2. **Security**:
   - Hamesha `wss://` use karo encryption ke liye taaki data intercept na ho.
   - Server-side input validation karo to prevent attacks jaise XSS ya injection.
3. **Reconnection**:
   - Agar connection drop ho jaye, toh automatic reconnect logic likhna padta hai:
   ```javascript
   function connect() {
     const socket = new WebSocket('ws://example.com/socket');
     socket.onclose = () => {
       console.log('5 second baad retry kar raha hu...');
       setTimeout(connect, 5000); // 5 sec baad retry
     };
   }
   connect();
   ```
4. **Fallback**:
   - Agar WebSocket support na ho (bahut rare ab), toh Server-Sent Events ya long polling use karo.

### Mini Project Idea: Simple Chat App
Ek basic chat app banate hain jo WebSocket use karta hai:
- **Frontend**:
  - HTML input field messages ke liye.
  - WebSocket se server se connect aur messages bhej/receive karo.
  - Messages ko dynamically DOM mein dikhana.
- **Backend**:
  - Node.js + `ws` library se WebSocket server banao.
  - Har client ka message sab clients ko broadcast karo.

#### Sample Code (Frontend)
```html
<!DOCTYPE html>
<html>
<head>
  <title>Chat App</title>
</head>
<body>
  <input id="message" placeholder="Message type karo">
  <button onclick="sendMessage()">Send</button>
  <div id="messages"></div>

  <script>
    const socket = new WebSocket('ws://localhost:8080');
    const messagesDiv = document.getElementById('messages');

    socket.onopen = () => {
      messagesDiv.innerHTML += '<p>Connected!</p>';
    };

    socket.onmessage = (event) => {
      messagesDiv.innerHTML += `<p>${event.data}</p>`;
    };

    function sendMessage() {
      const input = document.getElementById('message');
      socket.send(input.value);
      input.value = '';
    }
  </script>
</body>
</html>
```

#### Sample Code (Backend - Node.js)
```javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Sab clients ko message broadcast karo
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});
```

![Image Placeholder: Chat App Example](./images/socket.png)
*Caption: Chat app ka interface ka screenshot.*

### Notes for Revision
- **Protocol**: `ws://` (normal), `wss://` (secure).
- **Methods**: `WebSocket()`, `send()`, `close()`.
- **Events**: `onopen`, `onmessage`, `onerror`, `onclose`.
- **Data Types**: String, JSON, Blob, ArrayBuffer.
- **Security**: WSS use karo, inputs validate karo.
- **Interview Prep**: Handshake, use cases, aur reconnection logic pe focus.