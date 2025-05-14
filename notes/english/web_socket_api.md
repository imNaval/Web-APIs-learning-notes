# WebSocket API Notes (English)

### What is WebSocket API?
The WebSocket API is a modern web technology that enables **real-time, two-way communication** between a client (like a browser) and a server. Unlike HTTP, which is request-response based, WebSocket creates a **persistent connection**, allowing low-latency data exchange. It's ideal for applications like live chats, stock tickers, multiplayer games, or real-time notifications.

- **Why WebSocket?**
  - HTTP polling (repeatedly requesting data from the server) is slow and resource-heavy.
  - WebSocket maintains a single connection for continuous data exchange without repeated requests.
  - Supports **full-duplex** communication, meaning the client and server can send data simultaneously.

![Image Placeholder: WebSocket Overview](notes/images/socket.png)
*Caption: Diagram showing the WebSocket connection between client and server.*

### How WebSocket Works?
1. **Handshake**:
   - The client sends a special HTTP request to the server with an `Upgrade: websocket` header.
   - If the server agrees, the connection switches to the WebSocket protocol (`ws://` for normal or `wss://` for secure).
2. **Persistent Connection**:
   - Once the connection is established, both the client and server can send data frames (text or binary) asynchronously.
3. **Closing Connection**:
   - The connection can be closed by either the client or server, or it may disconnect due to network issues.

![Image Placeholder: WebSocket Handshake](notes/images/webSocket-Handshake.jpg)
*Caption: Illustration of the WebSocket handshake process.*

### Key Features
- **Low Latency**: Data is transferred instantly with minimal overhead compared to HTTP polling.
- **Full-Duplex**: Both client and server can communicate simultaneously.
- **Event-Driven**: Communication is handled through events like `onopen`, `onmessage`, `onerror`, and `onclose`.
- **Scalable**: Suitable for large-scale applications, but requires proper infrastructure for handling many connections.

### WebSocket API in JavaScript
The `WebSocket` object in JavaScript is used to manage WebSocket connections. It is a built-in browser API, so no external libraries are needed for the client-side.

#### Basic Syntax
```javascript
const socket = new WebSocket('ws://example.com/socket');
```
- `ws://` is used for normal connections, and `wss://` for secure (encrypted) connections.
- The URL points to a server endpoint that supports the WebSocket protocol.

#### Key Events
1. **`onopen`**: Triggered when the connection is successfully established.
2. **`onmessage`**: Triggered when a message is received from the server.
3. **`onerror`**: Triggered when an error occurs (e.g., connection failure).
4. **`onclose`**: Triggered when the connection is closed.

#### Example: Simple WebSocket Client
```javascript
// Create a WebSocket connection
const socket = new WebSocket('ws://example.com/socket');

// When connection opens
socket.onopen = () => {
  console.log('Connected to server!');
  socket.send('Hello, Server!'); // Send a message to the server
};

// When a message is received
socket.onmessage = (event) => {
  console.log('Message from server:', event.data); // Print the received data
};

// Handle errors
socket.onerror = (error) => {
  console.error('WebSocket Error:', error);
};

// When connection closes
socket.onclose = () => {
  console.log('Disconnected from server!');
};

// To close the connection manually
// socket.close();
```

#### Sending Data
- Use `socket.send(data)` to send data to the server.
- Data can be a string, JSON, Blob, or ArrayBuffer.
- Example (sending JSON):
```javascript
const message = { user: 'John', text: 'Hi!' };
socket.send(JSON.stringify(message));
```

#### Receiving Data
- Messages from the server are received in `event.data`.
- If the data is JSON, you need to parse it:
```javascript
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};
```

![Image Placeholder: WebSocket Persistent Connection](notes/images/WebSocketvsHTTP.png)
*Caption: Example of WebSocket Persistent Connection vs HTTP .*


### Server-Side WebSocket
The client uses the browser's `WebSocket` API, but the server requires specific libraries to handle WebSocket connections. Popular options include:
- **Node.js**: `ws` or `Socket.IO` libraries.
- **Python**: `websockets` or `Django Channels`.
- **Java**: `Spring WebSocket`.

#### Node.js Example with `ws`
```javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected!');

  // When a message is received from the client
  ws.on('message', (message) => {
    console.log('Received:', message.toString());
    ws.send('Server says: Got your message!');
  });

  // When the connection closes
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
```

![Image Placeholder: WebSocket Server Setup](notes/images/WebSocketCommunication.png)
*Caption: Diagram of a WebSocket client-server two way communication.*



## Closing Connections (Server-Side)

Closing connections from the server is crucial for scenarios like maintenance, invalid data, or inactive clients.

### Methods
1. **Graceful Close (`close` Method)**:
   - Sends a close frame with a code and reason.
   - Example:
     ```javascript
     ws.close(4000, 'Invalid message received');
     ```

2. **Forceful Close (`terminate` Method)**:
   - Immediately terminates the connection without a close frame.
   - Example:
     ```javascript
     ws.terminate();
     ```

3. **Closing All Connections**:
   - Closes all active connections, e.g., during server shutdown.
   - Example:
     ```javascript
     server.clients.forEach((ws) => {
       ws.close(1001, 'Server shutting down');
     });
     ```

### Timeout-Based Close
Closes connections for inactive clients after a set period.
```javascript
let timeout = setTimeout(() => {
  ws.close(4001, 'Inactive for 30 seconds');
}, 30000);

ws.on('message', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    ws.close(4001, 'Inactive for 30 seconds');
  }, 30000);
});
```

### Common Close Codes
- 1000: Normal closure
- 1001: Going away (e.g., server shutdown)
- 4000-4999: Custom codes

**Visualization Idea**: A flowchart showing the close process: client inactivity → timeout → `close(4001)` → client `onclose` event. Use red for timeout and grey for close.



### Use Cases
- **Live Chat Apps**: Real-time messaging, like WhatsApp or Slack.
- **Stock Market Tickers**: Live price updates for stocks or cryptocurrencies.
- **Online Gaming**: Instant updates for multiplayer games.
- **Collaborative Tools**: Real-time editing, like Google Docs.
- **Notifications**: Live alerts or push notifications.

### Interview Tips
1. **Common Questions**:
   - What is the difference between WebSocket and HTTP polling?
   - How does the WebSocket handshake process work?
   - What are the use cases for WebSocket?
   - Compare WebSocket, Server-Sent Events (SSE), and Long Polling: When to use each?
2. **Explain Code**:
   - Write a simple WebSocket client and explain its events.
   - How do you send and receive JSON data over WebSocket?
3. **Edge Cases**:
   - How would you handle a dropped connection? (Implement reconnection logic)
   - What are the security concerns with WebSocket? (Use WSS, validate data)
4. **Practical**:
   - The interviewer may ask: "Show the flow for a chat app using WebSocket."
   - Be ready to write a mini-project code for a simple chat app.



### Challenges & Considerations
1. **Scalability**:
   - Handling thousands of simultaneous connections requires load balancers and WebSocket-supported servers.
2. **Security**:
   - Always use `wss://` for encrypted communication to prevent data interception.
   - Validate server-side inputs to prevent attacks like XSS or injection.
3. **Reconnection**:
   - If the connection drops, you need automatic reconnect logic:
   ```javascript
   function connect() {
     const socket = new WebSocket('ws://example.com/socket');
     socket.onclose = () => {
       console.log('Retrying in 5 seconds...');
       setTimeout(connect, 5000); // Retry after 5 seconds
     };
   }
   connect();
   ```
4. **Fallback**:
   - For older browsers without WebSocket support (rare today), use Server-Sent Events or long polling as fallback mechanisms.

### Mini Project Idea: Simple Chat App
Let's build a basic chat app that uses WebSocket:
- **Frontend**:
  - Create an HTML input field for typing messages.
  - Use WebSocket to connect to the server and send/receive messages.
  - Display messages dynamically in the DOM.
- **Backend**:
  - Use Node.js with the `ws` library to create a WebSocket server.
  - Broadcast each client's message to all connected clients.

#### Sample Code (Frontend)
```html
<!DOCTYPE html>
<html>
<head>
  <title>Chat App</title>
</head>
<body>
  <input id="message" placeholder="Type a message">
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
    // Broadcast the message to all clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});
```

![Image Placeholder: Chat App Example](./images/socket.png)
*Caption: Screenshot of the chat app interface.*

### Notes for Revision
- **Protocol**: `ws://` (normal), `wss://` (secure).
- **Methods**: `WebSocket()`, `send()`, `close()`.
- **Events**: `onopen`, `onmessage`, `onerror`, `onclose`.
- **Data Types**: String, JSON, Blob, ArrayBuffer.
- **Security**: Use WSS and validate inputs.
- **Interview Prep**: Focus on handshake, use cases, and reconnection logic.