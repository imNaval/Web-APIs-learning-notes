# DOM API Notes (Hinglish)

## DOM Kya Hai?
DOM (Document Object Model) ek programming interface hai jo HTML aur XML documents ke liye use hota hai. Ye document ko ek tree structure ke form me represent karta hai, jisme har ek node document ka ek part hota hai.

## DOM Ke Basic Methods
1. **`document.getElementById()`**  
    Ek element ko uske unique `id` se access karne ke liye use hota hai.  
    ```javascript
    let element = document.getElementById("myId");
    ```

2. **`document.querySelector()`**  
    CSS selector ke basis par pehla matching element return karta hai.  
    ```javascript
    let element = document.querySelector(".myClass");
    ```

3. **`document.querySelectorAll()`**  
    CSS selector ke basis par saare matching elements ka NodeList return karta hai.  
    ```javascript
    let elements = document.querySelectorAll("div");
    ```

4. **`document.createElement()`**  
    Naya HTML element create karne ke liye use hota hai.  
    ```javascript
    let newElement = document.createElement("p");
    ```

5. **`element.appendChild()`**  
    Ek element ko kisi parent element ke andar add karne ke liye use hota hai.  
    ```javascript
    parentElement.appendChild(newElement);
    ```

## DOM Ke Events
1. **`onclick`**  
    Jab user kisi element par click kare, tab ye event trigger hota hai.  
    ```javascript
    button.onclick = function() {
         alert("Button clicked!");
    };
    ```

2. **`onmouseover`**  
    Jab mouse kisi element ke upar aaye, tab ye event trigger hota hai.  
    ```javascript
    element.onmouseover = function() {
         console.log("Mouse over the element!");
    };
    ```

3. **`onchange`**  
    Form inputs ke value change hone par trigger hota hai.  
    ```javascript
    input.onchange = function() {
         console.log("Input value changed!");
    };
    ```

## DOM Ke Attributes
1. **`getAttribute()`**  
    Kisi element ka attribute value retrieve karne ke liye.  
    ```javascript
    let value = element.getAttribute("class");
    ```

2. **`setAttribute()`**  
    Kisi element ka attribute value set karne ke liye.  
    ```javascript
    element.setAttribute("id", "newId");
    ```

3. **`removeAttribute()`**  
    Kisi element ka attribute remove karne ke liye.  
    ```javascript
    element.removeAttribute("class");
    ```

## DOM Traversal
1. **`parentNode`**  
    Parent node ko access karne ke liye.  
    ```javascript
    let parent = element.parentNode;
    ```

2. **`childNodes`**  
    Saare child nodes ko access karne ke liye.  
    ```javascript
    let children = element.childNodes;
    ```

3. **`nextSibling`**  
    Next sibling node ko access karne ke liye.  
    ```javascript
    let next = element.nextSibling;
    ```

4. **`previousSibling`**  
    Previous sibling node ko access karne ke liye.  
    ```javascript
    let previous = element.previousSibling;
    ```

## DOM Manipulation Example
```javascript
let div = document.createElement("div");
div.textContent = "Hello, DOM!";
document.body.appendChild(div);
```

Yeh basic DOM API ke notes hain jo aapko DOM ke saath kaam karne me madad karenge.