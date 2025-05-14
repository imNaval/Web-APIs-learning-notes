# Event Handling API Notes (Hinglish)

## Introduction
Event Handling API web development ka ek zaroori hissa hai jo user ke actions (jaise click, keypress, scroll) ko handle karta hai. Ye DOM ke zariye events ko pakadta aur process karta hai. Isme main concepts hain: **addEventListener**, **event delegation**, aur **event bubbling vs. capturing**.

---

## 1. addEventListener
`addEventListener` ek method hai jo DOM elements pe events (jaise click, keypress) ko sunta hai aur jab event hota hai, toh ek callback function chalata hai.

### Syntax
```javascript
element.addEventListener(event, callback, options/useCapture);
```
- **event**: Event ka naam (jaise `"click"`, `"mouseover"`).
- **callback**: Function jo event hone pe chalta hai, sath mein `Event` object milta hai.
- **options/useCapture** (optional):
  - Boolean: `true` matlab capturing phase, `false` matlab bubbling (default).
  - Object: `{ capture: boolean, once: boolean, passive: boolean }`.
    - `once`: Listener ek baar chalega aur khud remove ho jayega.
    - `passive`: Batata hai ki `event.preventDefault()` nahi hoga (performance ke liye).

### Key Features
- **Event Object**: Isme event ki details hoti hain jaise `event.target`, `event.type`, `event.clientX`, `event.clientY`.
- **Multiple Listeners**: Ek element pe kayi listeners laga sakte ho.
- **Removing Listeners**: `removeEventListener(event, callback)` se hata sakte ho, lekin callback wahi hona chahiye jo add kiya tha.

### Example
```html
<button id="myButton">Click Me!</button>
<p id="output">Waiting...</p>

<script>
    const button = document.getElementById("myButton");
    button.addEventListener("click", (event) => {
        document.getElementById("output").textContent = `Clicked at (${event.clientX}, ${event.clientY})!`;
    }, { once: true });
</script>
```

### Removing Listener
```javascript
function handleClick() {
    console.log("Clicked!");
}
const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

### Best Practices
- Anonymous functions mat use karo `removeEventListener` ke liye.
- Inline handlers (jaise `onclick`) ke bajay `addEventListener` use karo.
- `once: true` use karo jab ek baar event handle karna ho.

---

## 2. Event Delegation
Event delegation ek technique hai jisme parent element pe listener lagate hain jo uske child elements ke events ko handle karta hai. Ye event bubbling pe kaam karta hai.

### Kyun Use Karein?
- **Performance**: Har child pe alag listener lagane se memory bachti hai.
- **Dynamic Elements**: Naye elements add hone pe bhi listener kaam karta hai.
- **Cleaner Code**: Code ko maintain karna asaan hota hai.

### Kaise Kaam Karta Hai?
- Event child se parent tak bubble hota hai.
- Parent ka listener `event.target` check karta hai taaki pata chale kis child pe event hua.

### Example
```html
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
<button id="addItem">Add Item</button>

<script>
    document.getElementById("myList").addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.textContent = `${event.target.textContent} - Clicked!`;
        }
    });

    document.getElementById("addItem").addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = `Item ${document.querySelectorAll("li").length + 1}`;
        document.getElementById("myList").appendChild(li);
    });
</script>
```

### Key Points
- `event.target.tagName`, `classList.contains()`, ya `id` se target check karo.
- **Limitation**: Kuch events (jaise `focus`, `blur`) bubble nahi karte, unke liye capturing ya direct listeners chahiye.
- Bade lists ya dynamic content ke liye best hai.

### Advanced Example
```html
<table id="myTable">
    <tr>
        <td class="clickable">Cell 1</td>
        <td>Cell 2</td>
    </tr>
</table>

<script>
    document.getElementById("myTable").addEventListener("click", (event) => {
        if (event.target.classList.contains("clickable")) {
            event.target.style.backgroundColor = "lightblue";
        }
    });
</script>
```

---

## 3. Event Bubbling vs. Capturing
Ye batate hain ki event DOM tree mein kaise travel karta hai. Do phases hote hain: bubbling aur capturing.

### Propagation Phases
1. **Capturing Phase**: Event `window` se target element tak jata hai (top-down).
2. **Target Phase**: Event target pe pohanchta hai.
3. **Bubbling Phase**: Event target se wapas `window` tak jata hai (bottom-up).

### Event Bubbling
- Default: Events child se parent tak jate hain.
- **Example**:
  ```html
  <div id="parent">
      <button id="child">Click Me</button>
  </div>

  <script>
      document.getElementById("parent").addEventListener("click", () => {
          console.log("Parent clicked!");
      });
      document.getElementById("child").addEventListener("click", () => {
          console.log("Child clicked!");
      });
  </script>
  ```
  - Output: `Child clicked!` → `Parent clicked!`

- **Bubbling Rokna**:
  - `event.stopPropagation()`: Bubbling ko rokta hai.
  - `event.stopImmediatePropagation()`: Same element ke baaki listeners bhi rok deta hai.
  - Example:
    ```javascript
    document.getElementById("child").addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("Child clicked!");
    });
    ```

### Event Capturing
- Event `window` se target tak jata hai.
- `addEventListener` ke teesre parameter ko `true` karke enable hota hai.
- **Example**:
  ```html
  <div id="parent">
      <button id="child">Click Me</button>
  </div>

  <script>
      document.getElementById("parent").addEventListener("click", () => {
          console.log("Parent (capturing)");
      }, true);
      document.getElementById("child").addEventListener("click", () => {
          console.log("Child");
      });
  </script>
  ```
  - Output: `Parent (capturing)` → `Child`

### Kab Use Karein?
- **Bubbling**: Event delegation aur general use ke liye common.
- **Capturing**: Jab parent pe pehle action chahiye (jaise analytics ya complex UI).
- Capturing listeners pehle chalte hain, fir bubbling.

### Full Example
```html
<div id="grandparent">Grandparent
    <div id="parent">Parent
        <button id="child">Click Me</button>
    </div>
</div>

<script>
    document.getElementById("grandparent").addEventListener("click", () => {
        console.log("Grandparent (capturing)");
    }, true);
    document.getElementById("parent").addEventListener("click", () => {
        console.log("Parent (capturing)");
    }, true);
    document.getElementById("grandparent").addEventListener("click", () => {
        console.log("Grandparent (bubbling)");
    });
    document.getElementById("parent").addEventListener("click", () => {
        console.log("Parent (bubbling)");
    });
    document.getElementById("child").addEventListener("click", () => {
        console.log("Child");
    });
</script>
```
- Output:
  ```
  Grandparent (capturing)
  Parent (capturing)
  Child
  Parent (bubbling)
  Grandparent (bubbling)
  ```

---

## 4. Aur Key Concepts

### Prevent Default Behavior
- Kuch events ke default actions hote hain (jaise form submit pe page reload, `<a>` click pe navigation).
- `event.preventDefault()` inko rokta hai.
- **Example**:
  ```html
  <form id="myForm">
      <input type="text" required>
      <button type="submit">Submit</button>
  </form>

  <script>
      document.getElementById("myForm").addEventListener("submit", (event) => {
          event.preventDefault();
          console.log("Form submitted without reload!");
      });
  </script>
  ```

### Common Events
- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`.
  - Example:
    ```javascript
    document.addEventListener("mousemove", (event) => {
        console.log(`Mouse at: ${event.clientX}, ${event.clientY}`);
    });
    ```

- **Keyboard Events**: `keydown`, `keyup`, `keypress` (ab deprecated hai).
  - Example:
    ```javascript
    document.getElementById("myInput").addEventListener("keydown", (event) => {
        console.log(`Key: ${event.key}`);
    });
    ```

- **Form Events**: `submit`, `change`, `focus`, `blur`.
  - Example:
    ```javascript
    document.getElementById("myInput").addEventListener("change", (event) => {
        console.log(`Value: ${event.target.value}`);
    });
    ```

- **Window Events**: `load`, `resize`, `scroll`.
  - Example:
    ```javascript
    window.addEventListener("resize", () => {
        console.log(`Window: ${window.innerWidth}x${window.innerHeight}`);
    });
    ```

### Debouncing aur Throttling
- **Problem**: Frequent events (jaise `scroll`, `resize`) performance ko hit karte hain.
- **Debouncing**: Last event ke baad wait karta hai aur ek hi baar chalata hai.
- **Throttling**: Fixed time interval pe event chalata hai.

- **Debouncing Example**:
  ```javascript
  function debounce(func, wait) {
      let timeout;
      return function() {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, arguments), wait);
      };
  }

  window.addEventListener("resize", debounce(() => {
      console.log("Resized!");
  }, 200));
  ```

- **Throttling Example**:
  ```javascript
  function throttle(func, limit) {
      let inThrottle;
      return function() {
          if (!inThrottle) {
              func.apply(this, arguments);
              inThrottle = true;
              setTimeout(() => (inThrottle = false), limit);
          }
      };
  }

  window.addEventListener("scroll", throttle(() => {
      console.log("Scrolling!");
  }, 100));
  ```

---

## 5. Interview-Focused Topics (Detailed)

### Event Loop aur Event Handling
- **Event Loop Kya Hai?**: JavaScript ka ek mechanism jo async tasks (jaise event listeners, `setTimeout`, promises) ko manage karta hai. Ye call stack, task queue, aur microtask queue ke sath kaam karta hai.
- **Event Handling se Connection**: Jab koi event (jaise click) hota hai, uska callback task queue mein jata hai. Event loop check karta hai ki call stack khali hai ya nahi, aur jab khali hota hai, tab callback ko execute karta hai.
- **Kaise Kaam Karta Hai?**:
  1. Call stack mein synchronous code chalta hai.
  2. Async tasks (jaise event callbacks) task queue mein wait karte hain.
  3. Microtasks (jaise promises) pehle execute hote hain.
  4. Event loop task queue se callbacks ko stack mein push karta hai.
- **Interview Question**: "Ek click event ka callback kaise execute hota hai?"
  - **Answer**: Click event ka callback task queue mein jata hai. Event loop isse tab execute karta hai jab call stack khali ho. Agar microtasks (jaise promises) hain, toh woh pehle chalte hain.
- **Example**:
  ```javascript
  document.getElementById("myButton").addEventListener("click", () => {
      console.log("Clicked!");
      setTimeout(() => console.log("Timeout after click"), 0);
      Promise.resolve().then(() => console.log("Promise resolved"));
  });
  console.log("Script running");
  ```
  - **Output**:
    ```
    Script running
    (on click) Clicked!
    Promise resolved
    Timeout after click
    ```
  - **Explanation**: Synchronous code (`console.log("Script running")`) pehle chalta hai. Click hone pe callback queue mein jata hai, `Promise` microtask queue mein jata hai, aur `setTimeout` task queue mein. Event loop microtasks ko pehle chalaata hai, fir task queue ka callback.
- **Interview Tip**: Event loop ke sath microtask queue ka role (promises) aur task queue ka difference samajhna zaroori hai.

### Custom Events
- **Custom Events Kya Hain?**: Aap apne khud ke events bana sakte ho using `CustomEvent` constructor aur `dispatchEvent` se trigger kar sakte ho.
- **Use Case**: Components ke beech communication (jaise ek button click hone pe dusre component ko inform karna) ya app-specific triggers ke liye.
- **Kaise Banayein?**:
  1. `CustomEvent` constructor se event banao, optional `detail` object ke sath data pass kar sakte ho.
  2. `dispatchEvent` se event trigger karo.
  3. `addEventListener` se custom event ko listen karo.
- **Example**:
  ```html
  <button id="myButton">Trigger Custom Event</button>

  <script>
      const button = document.getElementById("myButton");
      
      // Custom event banao
      const myEvent = new CustomEvent("myCustomEvent", {
          detail: { message: "Hello from custom event!", timestamp: Date.now() }
      });

      // Custom event ko listen karo
      document.addEventListener("myCustomEvent", (event) => {
          console.log(`Message: ${event.detail.message}, Time: ${event.detail.timestamp}`);
      });

      // Event trigger karo
      button.addEventListener("click", () => {
          document.dispatchEvent(myEvent);
      });
  </script>
  ```
- **Advanced Use Case**: Ek app mein jab user koi action karta hai (jaise item add), toh ek custom event dispatch karo jo analytics track kare ya UI update kare.
  ```javascript
  document.addEventListener("itemAdded", (event) => {
      console.log(`Item added: ${event.detail.itemName}`);
      // Analytics call ya UI update
  });
  ```
- **Interview Question**: "Custom events ka use case aur native events se difference kya hai?"
  - **Answer**: Custom events developer-defined hote hain aur app-specific logic ke liye hote hain, jabki native events browser ke hote hain (jaise `click`). Custom events mein `detail` se custom data pass kar sakte ho, aur ye frameworks mein communication ke liye useful hain.
- **Interview Tip**: Frameworks mein synthetic events ke sath custom events ka comparison pucha ja sakta hai.

### Event Listener Memory Management
- **Problem**: Agar listeners ko remove nahi kiya toh memory leaks ho sakte hain, khaas kar single-page apps ya dynamic elements mein.
- **Kaise Avoid Karein?**:
  1. `removeEventListener` use karo jab element DOM se hataye ya listener ki zarurat na ho.
  2. Cleanup functions banayein (jaise React mein `useEffect` ke cleanup).
- **Example**:
  ```javascript
  const button = document.getElementById("myButton");
  function handleClick() {
      console.log("Clicked!");
  }
  button.addEventListener("click", handleClick);

  // Cleanup function
  function cleanup() {
      button.removeEventListener("click", handleClick);
      console.log("Listener removed!");
  }

  // Example: Element remove hone pe cleanup
  setTimeout(cleanup, 5000);
  ```
- **Real-World Scenario**: Ek SPA mein jab ek component unmount hota hai, toh uske saare listeners remove karne chahiye.
  ```javascript
  // React example
  useEffect(() => {
      const handleClick = () => console.log("Clicked!");
      button.addEventListener("click", handleClick);
      return () => button.removeEventListener("click", handleClick); // Cleanup
  }, []);
  ```
- **Interview Question**: "Event listeners se memory leaks kaise prevent karte hain?"
  - **Answer**: `removeEventListener` use karke listeners hatao jab element ya component destroy ho. Dynamic elements ke liye cleanup functions banayein, aur anonymous functions avoid karo kyunki unko remove nahi kar sakte.
- **Interview Tip**: SPAs mein memory management ke real-world examples (jaise React cleanup) discuss karna impactful hota hai.

### Touch Events
- **Touch Events Kya Hain?**: Mobile devices ke liye events jaise `touchstart`, `touchmove`, `touchend`, jo touch interactions handle karte hain.
- **Key Properties**:
  - `event.touches`: Current touch points ka list.
  - `event.targetTouches`: Specific element pe touch points.
  - `event.changedTouches`: Is event mein changed touch points.
- **Example**:
  ```html
  <div id="touchArea" style="width: 200px; height: 200px; background: lightgray;"></div>

  <script>
      const touchArea = document.getElementById("touchArea");
      touchArea.addEventListener("touchstart", (event) => {
          console.log(`Touch started at: ${event.touches[0].clientX}, ${event.touches[0].clientY}`);
      });
      touchArea.addEventListener("touchmove", (event) => {
          event.preventDefault(); // Default scroll rokne ke liye
          console.log(`Touch moved to: ${event.touches[0].clientX}, ${event.touches[0].clientY}`);
      });
      touchArea.addEventListener("touchend", (event) => {
          console.log("Touch ended");
      });
  </script>
  ```
- **Advanced Use Case**: Multi-touch gestures (jaise pinch-to-zoom) ke liye `event.touches` ka use karo.
  ```javascript
  touchArea.addEventListener("touchmove", (event) => {
      if (event.touches.length > 1) {
          console.log(`Multi-touch: ${event.touches.length} fingers`);
      }
  });
  ```
- **Interview Question**: "Touch events aur mouse events mein kya difference hai?"
  - **Answer**: Touch events multi-touch support karte hain aur mobile devices ke liye hain, jabki mouse events single pointer ke liye. Touch events mein `touches` array hota hai jo multiple touch points track karta hai. Touch events ko `preventDefault` se scroll jaise defaults rok sakte hain.
- **Interview Tip**: Mobile-first apps mein touch events ka performance impact (e.g., `passive: true`) discuss karo.

### Event Handling in Frameworks
- **Frameworks Mein Kaise?**: Frameworks jaise React native DOM events ke bajay synthetic events use karte hain jo cross-browser consistency dete hain.
- **Key Differences**:
  - React mein events camelCase hote hain (e.g., `onClick` instead of `onclick`).
  - Synthetic events pooled hote hain, isliye `event` object ko async access nahi kar sakte.
  - React internally event delegation use karta hai, listeners root element pe lagaye jate hain.
- **Example (React)**:
  ```jsx
  function MyComponent() {
      const handleClick = (event) => {
          console.log("Clicked!", event.target);
          // event.persist() agar async access chahiye
      };
      return <button onClick={handleClick}>Click Me</button>;
  }
  ```
- **Kaise Kaam Karta Hai?**:
  - React ek virtual DOM maintain karta hai aur events ko root element pe delegate karta hai.
  - Synthetic events native events ka wrapper hote hain, jo browser differences handle karte hain.
  - Event pooling ke wajah se, `event` object ke properties async mein undefined ho sakti hain, isliye `event.persist()` use karo.
- **Example (Async Issue)**:
  ```jsx
  function MyComponent() {
      const handleClick = (event) => {
          setTimeout(() => {
              console.log(event.target); // Undefined (pooled event)
          }, 0);
      };
      return <button onClick={handleClick}>Click Me</button>;
  }
  ```
  - **Fix**:
    ```jsx
    const handleClick = (event) => {
        event.persist();
        setTimeout(() => {
            console.log(event.target); // Works
        }, 0);
    };
    ```
- **Interview Question**: "React ke synthetic events aur native JavaScript events mein kya difference hai?"
  - **Answer**: Synthetic events React ka abstraction hain jo native events pe based hote hain. Ye cross-browser consistency dete hain, event delegation internally handle karte hain, aur pooling ke wajah se memory optimize karte hain. Native events mein pooling nahi hoti, aur events directly DOM elements pe lagaye jate hain.
- **Interview Tip**: React ke event delegation ka internal working (root pe listeners) aur performance benefits discuss karo.

---

## 6. Best Practices
1. Inline handlers (jaise `onclick`) avoid karo, `addEventListener` use karo.
2. Event delegation large lists ya dynamic elements ke liye use karo.
3. `event.stopPropagation()` ya `event.stopImmediatePropagation()` se unnecessary propagation rok.
4. `removeEventListener` se memory leaks rok.
5. Frequent events ke liye debouncing/throttling use karo.
6. Cross-browser edge cases test karo.
7. Touch events ke liye `passive: true` use karo taaki scroll performance better ho.
8. Custom events mein `detail` object se data pass karo.

---

## 7. Practice Project: Todo List
```html
<input id="search" placeholder="Search todos...">
<form id="todoForm">
    <input id="todoInput" type="text" required>
    <button type="submit">Add Todo</button>
</form>
<ul id="todoList"></ul>

<script>
    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, arguments), wait);
        };
    }

    document.getElementById("todoForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("todoInput");
        const li = document.createElement("li");
        li.innerHTML = `${input.value} <button class="delete">Delete</button>`;
        document.getElementById("todoList").appendChild(li);
        input.value = "";
        
        // Custom event dispatch
        const todoAdded = new CustomEvent("todoAdded", { detail: { todo: input.value } });
        document.dispatchEvent(todoAdded);
    });

    document.getElementById("todoList").addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.style.textDecoration = "line-through";
        }
        if (event.target.classList.contains("delete")) {
            event.stopPropagation();
            event.target.parentElement.remove();
        }
    });

    document.getElementById("search").addEventListener("input", debounce((event) => {
        console.log(`Searching: ${event.target.value}`);
    }, 300));

    // Custom event listen
    document.addEventListener("todoAdded", (event) => {
        console.log(`New todo added: ${event.detail.todo}`);
    });
</script>
```

---

## 8. Resources
- **MDN Web Docs**: [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events), [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- **JavaScript.info**: [Bubbling and Capturing](https://javascript.info/bubbling-and-capturing), [Event Delegation](https://javascript.info/event-delegation)
- **React Docs**: [Handling Events](https://react.dev/learn/responding-to-events)