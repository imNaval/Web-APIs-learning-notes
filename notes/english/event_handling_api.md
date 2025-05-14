# Event Handling API Notes (English)

## Introduction
The Event Handling API is a core part of web development that manages user interactions (like clicks, keypresses, scrolls, etc.). It captures and processes events through the DOM. Key concepts include **addEventListener**, **event delegation**, and **event bubbling vs. capturing**.

---

## 1. addEventListener
`addEventListener` is a method that listens for events (e.g., click, keypress) on DOM elements and runs a callback function when the event occurs.

### Syntax
```javascript
element.addEventListener(event, callback, options/useCapture);
```
- **event**: The event name (e.g., `"click"`, `"mouseover"`).
- **callback**: The function that runs when the event triggers, receiving an `Event` object.
- **options/useCapture** (optional):
  - Boolean: `true` for capturing phase, `false` for bubbling (default).
  - Object: `{ capture: boolean, once: boolean, passive: boolean }`.
    - `once`: The listener runs once and is then removed.
    - `passive`: Indicates that `event.preventDefault()` won’t be called (for performance).

### Key Features
- **Event Object**: Provides event details like `event.target`, `event.type`, `event.clientX`, `event.clientY`.
- **Multiple Listeners**: You can add multiple listeners to a single element.
- **Removing Listeners**: Use `removeEventListener(event, callback)` to remove a listener, but the callback must be the same one added.

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
- Avoid anonymous functions for `removeEventListener`.
- Use `addEventListener` instead of inline handlers (e.g., `onclick`).
- Use `once: true` for one-time event handling.

---

## 2. Event Delegation
Event delegation is a technique where a listener is placed on a parent element to handle events for its child elements, leveraging event bubbling.

### Why Use It?
- **Performance**: Saves memory by avoiding individual listeners on each child.
- **Dynamic Elements**: Works for newly added elements without extra setup.
- **Cleaner Code**: Easier to maintain.

### How It Works
- Events bubble from the child to the parent.
- The parent’s listener checks `event.target` to identify which child triggered the event.

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
- Check `event.target.tagName`, `classList.contains()`, or `id` to identify the target.
- **Limitation**: Non-bubbling events (e.g., `focus`, `blur`) require capturing or direct listeners.
- Ideal for large lists or dynamic content.

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
These describe how events propagate through the DOM tree, with two main phases: bubbling and capturing.

### Propagation Phases
1. **Capturing Phase**: Event travels from `window` to the target element (top-down).
2. **Target Phase**: Event reaches the target element.
3. **Bubbling Phase**: Event travels back from the target to `window` (bottom-up).

### Event Bubbling
- Default: Events propagate from child to parent.
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

- **Stopping Bubbling**:
  - `event.stopPropagation()`: Stops bubbling.
  - `event.stopImmediatePropagation()`: Also stops other listeners on the same element.
  - Example:
    ```javascript
    document.getElementById("child").addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("Child clicked!");
    });
    ```

### Event Capturing
- Event travels from `window` to the target.
- Enabled by setting the third parameter of `addEventListener` to `true`.
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

### When to Use?
- **Bubbling**: Common for event delegation and general use.
- **Capturing**: Useful when you need to handle the event at the parent first (e.g., analytics, complex UI).
- Capturing listeners run before bubbling listeners.

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

## 4. Other Key Concepts

### Prevent Default Behavior
- Some events have default actions (e.g., form submit reloads the page, `<a>` click navigates).
- `event.preventDefault()` stops these actions.
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

- **Keyboard Events**: `keydown`, `keyup`, `keypress` (now deprecated).
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

### Debouncing and Throttling
- **Problem**: Frequent events (e.g., `scroll`, `resize`) can hurt performance.
- **Debouncing**: Waits after the last event and runs the callback once.
- **Throttling**: Runs the callback at fixed intervals.

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

### Event Loop and Event Handling
- **What is the Event Loop?**: JavaScript’s mechanism to handle asynchronous tasks (e.g., event listeners, `setTimeout`, promises). It manages the call stack, task queue, and microtask queue.
- **Connection to Event Handling**: When an event (e.g., click) occurs, its callback is added to the task queue. The event loop checks if the call stack is empty and, if so, pushes the callback to the stack for execution.
- **How It Works**:
  1. Synchronous code runs in the call stack.
  2. Async tasks (e.g., event callbacks) wait in the task queue.
  3. Microtasks (e.g., promises) are executed first from the microtask queue.
  4. The event loop moves callbacks from the task queue to the stack when the stack is empty.
- **Interview Question**: "How does a click event’s callback get executed?"
  - **Answer**: The click event’s callback is added to the task queue. The event loop executes it when the call stack is empty. If microtasks (e.g., promises) are present, they run first.
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
  - **Explanation**: Synchronous code (`console.log("Script running")`) runs first. On click, the callback goes to the task queue, the `Promise` goes to the microtask queue, and `setTimeout` goes to the task queue. The event loop prioritizes microtasks, then task queue callbacks.
- **Interview Tip**: Understand the difference between the microtask queue (promises) and task queue, and explain the event loop’s role in async event handling.

### Custom Events
- **What are Custom Events?**: You can create your own events using the `CustomEvent` constructor and trigger them with `dispatchEvent`.
- **Use Case**: For communication between components (e.g., notifying another component of a button click) or app-specific triggers.
- **How to Create?**:
  1. Use `CustomEvent` to create an event, optionally passing data via the `detail` object.
  2. Trigger the event with `dispatchEvent`.
  3. Listen for the event with `addEventListener`.
- **Example**:
  ```html
  <button id="myButton">Trigger Custom Event</button>

  <script>
      const button = document.getElementById("myButton");
      
      // Create custom event
      const myEvent = new CustomEvent("myCustomEvent", {
          detail: { message: "Hello from custom event!", timestamp: Date.now() }
      });

      // Listen for custom event
      document.addEventListener("myCustomEvent", (event) => {
          console.log(`Message: ${event.detail.message}, Time: ${event.detail.timestamp}`);
      });

      // Trigger event
      button.addEventListener("click", () => {
          document.dispatchEvent(myEvent);
      });
  </script>
  ```
- **Advanced Use Case**: In an app, when a user performs an action (e.g., adding an item), dispatch a custom event to track analytics or update the UI.
  ```javascript
  document.addEventListener("itemAdded", (event) => {
      console.log(`Item added: ${event.detail.itemName}`);
      // Send to analytics or update UI
  });
  ```
- **Interview Question**: "What’s the use case for custom events, and how do they differ from native events?"
  - **Answer**: Custom events are developer-defined for app-specific logic, while native events are browser-triggered (e.g., `click`). Custom events allow passing custom data via `detail` and are useful for inter-component communication, especially in frameworks.
- **Interview Tip**: Be ready to compare custom events with framework-specific event systems (e.g., React’s synthetic events).

### Event Listener Memory Management
- **Problem**: Unremoved listeners can cause memory leaks, especially in single-page apps (SPAs) or with dynamic elements.
- **How to Avoid?**:
  1. Use `removeEventListener` when an element is removed from the DOM or the listener is no longer needed.
  2. Create cleanup functions (e.g., in React’s `useEffect` cleanup).
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

  // Example: Cleanup on element removal
  setTimeout(cleanup, 5000);
  ```
- **Real-World Scenario**: In an SPA, when a component unmounts, remove all its listeners.
  ```javascript
  // React example
  useEffect(() => {
      const handleClick = () => console.log("Clicked!");
      button.addEventListener("click", handleClick);
      return () => button.removeEventListener("click", handleClick); // Cleanup
  }, []);
  ```
- **Interview Question**: "How do you prevent memory leaks with event listeners?"
  - **Answer**: Use `removeEventListener` to remove listeners when elements or components are destroyed. Create cleanup functions for dynamic elements, and avoid anonymous functions as they can’t be removed.
- **Interview Tip**: Discuss real-world SPA examples (e.g., React cleanup) to show practical knowledge.

### Touch Events
- **What are Touch Events?**: Events for mobile devices like `touchstart`, `touchmove`, `touchend`, which handle touch interactions.
- **Key Properties**:
  - `event.touches`: List of current touch points.
  - `event.targetTouches`: Touch points on a specific element.
  - `event.changedTouches`: Touch points changed in this event.
- **Example**:
  ```html
  <div id="touchArea" style="width: 200px; height: 200px; background: lightgray;"></div>

  <script>
      const touchArea = document.getElementById("touchArea");
      touchArea.addEventListener("touchstart", (event) => {
          console.log(`Touch started at: ${event.touches[0].clientX}, ${event.touches[0].clientY}`);
      });
      touchArea.addEventListener("touchmove", (event) => {
          event.preventDefault(); // Prevent default scrolling
          console.log(`Touch moved to: ${event.touches[0].clientX}, ${event.touches[0].clientY}`);
      });
      touchArea.addEventListener("touchend", (event) => {
          console.log("Touch ended");
      });
  </script>
  ```
- **Advanced Use Case**: Handle multi-touch gestures (e.g., pinch-to-zoom) using `event.touches`.
  ```javascript
  touchArea.addEventListener("touchmove", (event) => {
      if (event.touches.length > 1) {
          console.log(`Multi-touch: ${event.touches.length} fingers`);
      }
  });
  ```
- **Interview Question**: "What’s the difference between touch events and mouse events?"
  - **Answer**: Touch events support multi-touch and are for mobile devices, while mouse events are for single-pointer devices. Touch events provide a `touches` array to track multiple touch points, and `preventDefault` can stop defaults like scrolling.
- **Interview Tip**: Discuss performance considerations for touch events (e.g., `passive: true` for better scroll performance).

### Event Handling in Frameworks
- **How It Works in Frameworks?**: Frameworks like React use synthetic events instead of native DOM events for cross-browser consistency.
- **Key Differences**:
  - React uses camelCase for events (e.g., `onClick` instead of `onclick`).
  - Synthetic events are pooled, so the `event` object can’t be accessed asynchronously without `event.persist()`.
  - React handles event delegation internally, attaching listeners to the root element.
- **Example (React)**:
  ```jsx
  function MyComponent() {
      const handleClick = (event) => {
          console.log("Clicked!", event.target);
          // Use event.persist() for async access
      };
      return <button onClick={handleClick}>Click Me</button>;
  }
  ```
- **How It Works**:
  - React maintains a virtual DOM and delegates events to the root element.
  - Synthetic events wrap native events, handling browser differences.
  - Event pooling optimizes memory, but properties may become undefined in async code, requiring `event.persist()`.
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
- **Interview Question**: "How do React’s synthetic events differ from native JavaScript events?"
  - **Answer**: Synthetic events are React’s abstraction over native events, providing cross-browser consistency, internal event delegation, and memory optimization via pooling. Native events are attached directly to DOM elements and don’t have pooling.
- **Interview Tip**: Explain React’s internal event delegation (root listeners) and performance benefits.

---

## 6. Best Practices
1. Avoid inline handlers (e.g., `onclick`), use `addEventListener`.
2. Use event delegation for large lists or dynamic elements.
3. Stop unnecessary propagation with `event.stopPropagation()` or `event.stopImmediatePropagation()`.
4. Prevent memory leaks with `removeEventListener`.
5. Use debouncing/throttling for frequent events.
6. Test for cross-browser edge cases.
7. Use `passive: true` for touch events to improve scroll performance.
8. Pass data via the `detail` object in custom events.

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
        
        // Dispatch custom event
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

    // Listen for custom event
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