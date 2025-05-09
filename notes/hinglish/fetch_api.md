# Fetch API Notes for Interview Prep

Arre bhai, Fetch API ek powerful Web API hai, jo modern web development mein bohot kaam aata hai—specially jab APIs se data fetch karna ho ya server pe data bhejna ho. Since tu DOM APIs pe already kaam kar chuka hai (jaise `getElementById`, `querySelector`, `addEventListener`), Fetch API tujhe next level pe le jayega for interview prep. Main tujhe pura detailed aur simple tareeke se samjhaunga—kaise kaam karta hai, kya return karta hai, aur sab kuch. Plus, examples aur interview tips bhi doonga. Ready? Chalo shuru karte hain! 🚀

## Fetch API Kya Hai?
Fetch API ek modern JavaScript interface hai jo browser mein HTTP requests (jaise GET, POST) karne ke liye use hota hai. Ye XMLHttpRequest ka replacement hai, aur iska syntax zyada clean aur promise-based hai. Iska kaam hai:
- Server se data fetch karna (jaise JSON, images, ya files).
- Server pe data bhejna (jaise form data ya JSON).
- API calls handle karna, jo aajkal har frontend job mein must hai.

**Simple analogy**: Soch ki tu ek restaurant mein hai. Fetch API tera waiter hai jo tera order (request) kitchen (server) tak le jata hai aur khana (response) wapas laata hai. Agar khana late ho ya galat ho, toh tu usko handle bhi kar sakta hai.

## Fetch API Kaise Kaam Karta Hai?
Fetch API `fetch()` function ke through kaam karta hai. Ye ek Promise return karta hai, jo ya toh resolve hota hai (data milta hai) ya reject hota hai (error aata hai). Iska basic flow yeh hai:
1. Tu `fetch()` ko URL aur optional settings (method, headers, body) deta hai.
2. `fetch()` server se response laata hai (ye raw response hota hai, `Response` object ke form mein).
3. Tu is response ko process karta hai (jaise JSON mein convert karna).
4. Agar error aata hai (network issue ya server error), toh tu usko handle karta hai.

## Basic Syntax of Fetch API
```javascript
fetch(url, options)
  .then(response => {
    // Response ko process karo
  })
  .catch(error => {
    // Error handle karo
  });
```

- **url**: Woh endpoint jahan request bhejna hai (e.g., `https://api.example.com/data`).
- **options** (optional): Ek object jisme request ke details hote hain, jaise:
  - `method`: GET, POST, PUT, DELETE, etc.
  - `headers`: Request headers (e.g., `{ 'Content-Type': 'application/json' }`).
  - `body`: POST ya PUT ke liye data (e.g., JSON string).
- **Return**: `fetch()` ek Promise return karta hai jo `Response` object resolve karta hai.

## Step-by-Step: Fetch API in Action
Chalo, ek real-world example se samjhte hain. Maan le, tu ek public API se users ka data fetch karna chahta hai (e.g., JSONPlaceholder API).

### Example 1: GET Request with Fetch
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Check if response is OK (status 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Response ko JSON mein convert karo
  })
  .then(data => {
    // Data use karo
    console.log(data); // Array of users
  })
  .catch(error => {
    // Error handle karo
    console.error('Fetch error:', error);
  });
```

**Kya ho raha hai?**
1. `fetch('https://jsonplaceholder.typicode.com/users')` ek GET request bhejta hai.
2. `response` ek `Response` object hai, jisme headers, status, aur body hota hai.
3. `response.ok` check karta hai ki response successful hai ya nahi (status 200-299).
4. `response.json()` raw response body ko JSON mein parse karta hai (ye bhi ek Promise return karta hai).
5. `data` mein parsed JSON milta hai, jo yahan users ka array hai.
6. Agar koi error hota hai (network issue ya server error), `.catch()` usko handle karta hai.

**Output (sample)**:
```javascript
[
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  ...
]
```

### Example 2: POST Request with Fetch
Ab maan le tu server pe data bhejna chahta hai, jaise ek naya user create karna.

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

**Kya ho raha hai?**
1. `method: 'POST'` batata hai ki ye ek POST request hai.
2. `headers` mein `'Content-Type': 'application/json'` server ko batata hai ki body JSON format mein hai.
3. `body` mein data JSON string ke roop mein bheja jata hai (use `JSON.stringify()`).
4. Server response wapas bhejta hai, jo hum JSON mein parse karte hain.

**Output (sample)**:
```javascript
{
  id: 11,
  name: "John Doe",
  email: "john@example.com"
}
```

## Fetch API Kya Return Karta Hai?
`fetch()` ek **Promise** return karta hai jo **Response** object resolve karta hai. Ye `Response` object bohot important hai, isme ye properties hoti hain:
- `response.ok`: Boolean, true if status 200-299 hai.
- `response.status`: HTTP status code (e.g., 200, 404, 500).
- `response.statusText`: Status ka message (e.g., "OK", "Not Found").
- `response.headers`: Response headers (e.g., content-type).
- **Methods to process body**:
  - `response.json()`: Body ko JSON mein parse karta hai.
  - `response.text()`: Body ko plain text mein deta hai.
  - `response.blob()`: Body ko Blob (e.g., images) mein deta hai.
  - `response.arrayBuffer()`: Body ko ArrayBuffer mein deta hai.

**Note**: `fetch()` sirf network errors pe reject hota hai (jaise internet nahi hai). Agar server 404 ya 500 status bhejta hai, toh ye reject nahi hota—tu manually `response.ok` check karni padti hai.

## Error Handling in Fetch
Fetch API mein errors do tarah ke hote hain:
1. **Network Errors**: Internet nahi hai ya server unreachable hai.
2. **HTTP Errors**: Server response deta hai, lekin status code error hai (jaise 404, 500).

Example with robust error handling:
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

## Async/Await with Fetch
Agar tujhe Promises se zyada clean syntax chahiye, toh `async/await` use kar sakta hai. Ye interviews mein bhi bohot common hai.

### Example: GET with Async/Await
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

**Kya ho raha hai?**
- `async` function banaya, jo `await` use karta hai.
- `await fetch()` Promise resolve hone ka wait karta hai.
- `await response.json()` JSON parsing ke liye wait karta hai.
- `try/catch` errors handle karta hai.

## Common Interview Questions on Fetch API
1. **Fetch vs XMLHttpRequest?**
   - Fetch modern hai, promise-based, aur cleaner syntax hai.
   - XMLHttpRequest purana hai, callback-based, aur complex.

2. **Fetch mein error handling kaise karte ho?**
   - `response.ok` check karo.
   - Network errors ke liye `.catch()` ya `try/catch` use karo.
   - Specific status codes (404, 500) ke liye custom logic likho.

3. **GET aur POST mein kya difference hai?**
   - GET: Data fetch karta hai, no body.
   - POST: Data server pe bhejta hai, body mein data hota hai.

4. **Fetch ka response kaise process karte ho?**
   - `response.json()` ya `response.text()` use karke body parse karo.
   - `response.headers` se headers access karo.

5. **CORS kya hai?**
   - Cross-Origin Resource Sharing. Browser security feature jo different origins ke beech requests control karta hai.
   - Fetch mein CORS errors aa sakte hain agar server allow na kare.

## Practical Mini Project Idea
Ek chhota project try kar, jo Fetch API use kare:
1. Ek HTML page bana jisme ek button ho.
2. Button click pe `fetch` se JSONPlaceholder ke `/posts` endpoint se data fetch karo.
3. Data ko DOM mein display karo (jaise post titles ko `<li>` mein).
4. Error handling add karo (e.g., agar API fail ho).

### Sample Code
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

**Ye kya karega?**
- Button click pe posts fetch honge.
- Titles `<ul>` mein list honge.
- Error ho toh message show hoga.

## Tips for Interview Prep
1. **Practice**: Upar wale examples aur project code kar ke dekho. JSONPlaceholder ya PokeAPI jaise free APIs use karo.
2. **Understand Promises**: Fetch promise-based hai, toh `.then()`, `async/await`, aur error handling strong honi chahiye.
3. **Real-World Scenarios**: Interviewers poochh sakte hain, “Tumne Fetch kaise use kiya?” Project example ya upar ka mini project mention kar sakte ho.
4. **CORS aur Security**: Basic CORS concepts aur API authentication (e.g., API keys in headers) samajh lo.

## Aur Kya Chahiye?
Bhai, ye notes mein Fetch API ko poora cover kar diya—basics, syntax, examples, error handling, async/await, aur interview tips. Agar tujhe kisi specific part pe aur detail chahiye (jaise headers kaise set karte hain, file upload kaise karte hain, ya koi specific use case), toh bata. Ya phir koi aur Web API (jaise LocalStorage, Canvas) pe jana hai? Tu bol, main tujhe next topic bhi isi tarah clear kar doonga! 😎