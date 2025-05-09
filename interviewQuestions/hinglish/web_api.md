# Web API Interview Questions

## Fetch API

1. **What is the Fetch API?**
   - A modern interface for making HTTP requests
   - Returns Promises instead of using callbacks
   - Provides a more powerful and flexible feature set than XMLHttpRequest

2. **How do you handle errors with Fetch?**
   ```javascript
   fetch('https://api.example.com/data')
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => console.log(data))
     .catch(error => console.error('Error:', error));
   ```

## DOM API

1. **Explain event delegation**
   - A technique where you add a single event listener to a parent element
   - Handles events for all children through event bubbling
   - Reduces memory usage and improves performance
   - Automatically handles dynamically added elements

2. **What is the difference between innerHTML, textContent, and innerText?**
   - `innerHTML`: Gets/sets the HTML content of an element
   - `textContent`: Gets/sets the text content without formatting
   - `innerText`: Gets/sets the visible text content with formatting

## Storage APIs

1. **What is the difference between localStorage and sessionStorage?**
   - Both store key-value pairs
   - `localStorage`: Persists until explicitly deleted
   - `sessionStorage`: Lasts only for the current browser session
   - Both are limited to about 5MB
   - Both are synchronous and block the main thread

2. **How do service workers help with offline functionality?**
   - Act as a proxy between web app and network
   - Can cache resources for offline use
   - Enable background sync
   - Allow push notifications
   - Run in a separate thread from the main JavaScript 