# Fetch API Notes for Interview Prep

## What is Fetch API?
The Fetch API is a modern JavaScript interface for making HTTP requests (e.g., GET, POST) in the browser. It’s a cleaner, promise-based alternative to `XMLHttpRequest` and is widely used to:
- Fetch data from a server (e.g., JSON, images, files).
- Send data to a server (e.g., form data, JSON).
- Interact with APIs, a must-know for frontend roles.

**Analogy**: Think of Fetch API as a waiter who takes your order (request) to the kitchen (server) and brings back the food (response).

## How Fetch API Works
1. Call `fetch(url, options)` to send an HTTP request.
2. It returns a Promise that resolves to a `Response` object (raw response).
3. Process the response (e.g., convert to JSON using `response.json()`).
4. Handle errors (network issues or HTTP errors like 404).

## Basic Syntax
```javascript
fetch(url, options)
  .then(response => {
    // Process response
  })
  .catch(error => {
    // Handle errors
  });
```

- **url**: The endpoint to send the request to (e.g., `https://api.example.com/data`).
- **options** (optional): Object with request details:
  - `method`: GET, POST, PUT, DELETE, etc.
  - `headers`: Request headers (e.g., `{ 'Content-Type': 'application/json' }`).
  - `body`: Data for POST/PUT (e.g., JSON string).
- **Returns**: A Promise resolving to a `Response` object.

## Key Components of Response Object
The `Response` object returned by `fetch()` has:
- `response.ok`: Boolean, true if status is 200-299.
- `response.status`: HTTP status code (e.g., 200, 404, 500).
- `response.statusText`: Status message (e.g., "OK", "Not Found").
- `response.headers`: Response headers (e.g., content-type).
- **Body processing methods**:
  - `response.json()`: Parse body as JSON.
  - `response.text()`: Get body as plain text.
  - `response.blob()`: Get body as Blob (e.g., for images).
  - `response.arrayBuffer()`: Get body as ArrayBuffer.

**Note**: `fetch()` only rejects on network errors. For HTTP errors (e.g., 404, 500), check `response.ok` manually.

## Examples

### 1. GET Request (Fetching Data)
Fetch a list of users from a public API.

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Array of users
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

**Output** (sample):
```javascript
[
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  ...
]
```

### 2. POST Request (Sending Data)
Create a new user on the server.

```javascript
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
  }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('User created:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

**Output** (sample):
```javascript
{
  id: 11,
  name: "John Doe",
  email: "john@example.com"
}
```

### 3. Async/Await with Fetch
Cleaner syntax using `async/await` for a GET request.

```javascript
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchUsers();
```

## Error Handling
Fetch API handles two types of errors:
1. **Network Errors**: No internet or server is unreachable.
2. **HTTP Errors**: Server responds with error status (e.g., 404, 500).

**Example with Robust Error Handling**:
```javascript
fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Resource not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      }
      throw new Error('Something went wrong');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

**Output**:
```
Error: Resource not found
```

## Interview Questions and Answers
1. **Fetch vs XMLHttpRequest?**
   - Fetch: Modern, promise-based, cleaner syntax.
   - XMLHttpRequest: Older, callback-based, more complex.

2. **How to handle errors in Fetch?**
   - Check `response.ok` for HTTP errors.
   - Use `.catch()` or `try/catch` for network errors.
   - Handle specific status codes (e.g., 404, 500) with custom logic.

3. **Difference between GET and POST?**
   - GET: Fetches data, no body.
   - POST: Sends data to server, includes body.

4. **How to process Fetch response?**
   - Use `response.json()` or `response.text()` to parse body.
   - Access headers via `response.headers`.

5. **What is CORS?**
   - Cross-Origin Resource Sharing: Browser security feature controlling requests between different origins.
   - Fetch may fail with CORS errors if server doesn’t allow the request.

## Practical Mini Project
Build a simple webpage that fetches and displays posts from JSONPlaceholder API.

**Code**:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Fetch Posts</title>
</head>
<body>
  <button onclick="fetchPosts()">Load Posts</button>
  <ul id="posts"></ul>

  <script>
    async function fetchPosts() {
      const postList = document.getElementById('posts');
      postList.innerHTML = 'Loading...';

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        postList.innerHTML = '';
        posts.forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title;
          postList.appendChild(li);
        });
      } catch (error) {
        postList.innerHTML = `Error: ${error.message}`;
      }
    }
  </script>
</body>
</html>
```

**What it does**:
- Button click fetches posts from `/posts` endpoint.
- Displays post titles in a `<ul>`.
- Shows error message if API call fails.

## Tips for Interview Prep
1. **Practice**: Code the examples above using free APIs like JSONPlaceholder or PokeAPI.
2. **Master Promises**: Understand `.then()`, `async/await`, and error handling.
3. **Explain Projects**: Be ready to discuss how you used Fetch in a project (e.g., the mini project above).
4. **Learn CORS Basics**: Understand CORS errors and API authentication (e.g., adding API keys in headers).

## Additional Notes
- **Fetch doesn’t reject on HTTP errors** (e.g., 404, 500). Always check `response.ok`.
- Use `JSON.stringify()` to send JSON data in `body`.
- For file uploads, use `FormData` with Fetch.
- Explore advanced Fetch options like `credentials` (for cookies) and `mode` (for CORS).