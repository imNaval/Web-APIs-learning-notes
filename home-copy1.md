# HTML Interview Notes - Set 1

Bhai, yeh tera pehla HTML sample set hai, Advanced level se, 11 questions (1-11) ke saath, tere CSS notes ke format mein! Tune abhi specific HTML questions nahi diye, toh maine ek sample set banaya with common Advanced HTML topics jo interviews mein aate hain. Jab tu 10-10 ke sets dega, toh unko exactly isi tarah rework karunga – 11 questions (10 diye + 1 bonus ya 11 directly), flexible explanations, practical examples, aur interview tips ke saath. Har question ka explanation jitni lines zaroori hain, utni mein – simple topics ke liye 2-4 lines, complex ke liye 4-5 ya zyada, bade explanations ko do meaningful parts mein break kiya. Hinglish mein engaging, beginner-friendly vibe rakha. Tune jo CSS sets ke liye feedback diya, usko 100% follow kiya!

## Advanced Level

### 1. What is Semantic HTML? *(imp)*
Semantic HTML meaningful tags (jaise `<article>`, `<nav>`, `<footer>`) use karta hai jo content ka purpose batate hain, improving accessibility aur SEO. Yeh code ko readable aur maintainable banata hai.  
Non-semantic tags (jaise `<div>`, `<span>`) ke mukable semantic tags browsers, screen readers, aur search engines ko content structure samajhne mein madad karte hain.

**Example**:
```html
<article>
  <header>
    <h1>Blog Title</h1>
  </header>
  <p>Content...</p>
</article>
```
*Summary*: Blog post semantic tags ke saath structured hai.

**Interview Tip**:
1. **Tip**: Semantic HTML ke benefits aur accessibility role samjhao.
   - **Explanation**: Semantic tags content hierarchy define karte hain, jo screen readers ke liye zaroori hai aur SEO boost deta hai. Interview mein real-world examples (jaise blog layouts) aur ARIA integration pe focus karo.
2. **Question**: Why use semantic HTML over non-semantic tags?
   - **Answer**: Semantic HTML content ka meaning clear karta hai, improving accessibility (screen readers), SEO (search engine crawling), aur code maintainability. Non-semantic tags (divs) generic hote hain aur context nahi dete. Example:
     ```html
     <nav>
       <ul>
         <li><a href="#">Home</a></li>
       </ul>
     </nav>
     ```
     *Nav tag navigation structure ko clearly define karta hai.*

### 2. What are Meta Tags? *(imp)*
Meta tags `<head>` mein use hote hain to provide metadata about the document, jaise charset, viewport, aur SEO details, jo browsers aur search engines ke liye critical hain.

**Example**:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="A sample website">
```
*Summary*: Page UTF-8 encoding, responsive viewport, aur SEO description ke saath set hai.

**Interview Tip**:
1. **Tip**: Common meta tags aur unke uses samjhao.
   - **Explanation**: Meta tags jaise `charset` encoding set karte hain, `viewport` responsive design ke liye hai, aur `name="description"` SEO ke liye. Interview mein Open Graph meta tags aur performance impact pe focus karo.
2. **Question**: What meta tags are essential for a modern website?
   - **Answer**: Essential meta tags hain `charset` (encoding), `viewport` (responsiveness), `description` (SEO), aur Open Graph tags (social sharing). Example:
     ```html
     <meta property="og:title" content="My Website">
     ```
     *OG tag social media sharing ke liye title set karta hai.*

### 3. What is the `data-*` Attribute? *(imp)*
`data-*` attributes custom data store karne ke liye use hote hain HTML elements mein, jo JavaScript ke through access kiye ja sakte hain, enhancing interactivity.

**Example**:
```html
<div data-id="123" data-name="Product">Item</div>
<script>
  const item = document.querySelector('div');
  console.log(item.dataset.id); // 123
</script>
```
*Summary*: Div ka custom data JavaScript se accessible hai.

**Interview Tip**:
1. **Tip**: `data-*` attributes ke use cases aur JavaScript integration samjhao.
   - **Explanation**: `data-*` attributes dynamic apps mein custom metadata store karte hain, jaise IDs, states, ya configs, aur `dataset` API se easily accessible hote hain. Interview mein performance aur naming conventions pe focus karo.
2. **Question**: How to use `data-*` attributes in dynamic web apps?
   - **Answer**: `data-*` attributes custom data store karte hain jo JavaScript ke through manipulate kiya ja sakta hai, jaise filtering, sorting, ya state management mein. Example:
     ```html
     <button data-action="delete">Delete</button>
     <script>
       document.querySelector('button').addEventListener('click', (e) => {
         console.log(e.target.dataset.action); // delete
       });
     </script>
     ```
     *Button ka action data dynamically handle hota hai.*

### 4. What is ARIA (Accessible Rich Internet Applications)? *(imp)*
ARIA attributes dynamic web content ko accessible banate hain by adding roles, states, aur properties jo screen readers samajh sakein, especially for disabled users. Yeh non-semantic elements ko meaningful banata hai.  
Common ARIA attributes jaise `role`, `aria-label`, aur `aria-hidden` complex UI components (jaise modals, tabs) ko accessible karte hain, lekin overuse se confusion ho sakta hai.

**Example**:
```html
<button aria-label="Close modal" onclick="closeModal()">X</button>
```
*Summary*: Button ka purpose screen readers ke liye clear hai.

**Interview Tip**:
1. **Tip**: ARIA ke role aur cautious use samjhao.
   - **Explanation**: ARIA semantic gaps ko fill karta hai, lekin native semantic HTML prefer karna chahiye jab possible. Interview mein common attributes, testing tools (jaise WAVE), aur accessibility standards pe focus karo.
2. **Question**: When to use ARIA attributes?
   - **Answer**: ARIA tab use karo jab native HTML accessibility provide na kare, jaise custom components (modals, accordions) mein roles aur states define karne ke liye. Example:
     ```html
     <div role="dialog" aria-labelledby="title">
       <h2 id="title">Modal</h2>
     </div>
     ```
     *Div modal ke roop mein screen readers ke liye accessible hai.*

### 5. What is the `iframe` Element? *(imp)*
`iframe` element external content (jaise videos, maps) ko webpage mein embed karta hai, creating isolated frame with its own DOM, useful for third-party integrations.

**Example**:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video"></iframe>
```
*Summary*: YouTube video page mein embedded hai.

**Interview Tip**:
1. **Tip**: `iframe` ke use cases aur limitations samjhao.
   - **Explanation**: `iframe` third-party content ya sandboxed apps ke liye hai, lekin performance issues aur accessibility concerns (jaise screen reader support) dhyan rakhne padte hain. Interview mein security (sandbox) aur alternatives pe focus karo.
2. **Question**: What are the challenges of using `iframe`?
   - **Answer**: `iframe` performance impact (slow loading), accessibility issues, aur security risks (XSS) create kar sakta hai. `sandbox` attribute aur lazy-loading mitigate karte hain. Example:
     ```html
     <iframe src="map.html" sandbox="allow-scripts" loading="lazy"></iframe>
     ```
     *Iframe restricted permissions aur lazy-loaded hai.*

### 6. What is the `picture` Element? *(imp)*
`picture` element responsive images ke liye use hota hai, allowing multiple image sources based on device conditions (jaise screen size, resolution) via `<source>` tags.

**Example**:
```html
<picture>
  <source media="(min-width: 768px)" srcset="large.jpg">
  <img src="small.jpg" alt="Image">
</picture>
```
*Summary*: Large screens pe large.jpg, small screens pe small.jpg load hota hai.

**Interview Tip**:
1. **Tip**: `picture` ke responsive use aur benefits samjhao.
   - **Explanation**: `picture` bandwidth save karta hai by serving optimized images, aur art direction (cropping) ke liye flexible hai. Interview mein `srcset` vs `picture` aur performance pe focus karo.
2. **Question**: How does `picture` differ from `img` with `srcset`?
   - **Answer**: `picture` multiple sources aur media queries ke saath art direction allow karta hai, jabki `img` with `srcset` sirf resolution-based image switching karta hai. Example:
     ```html
     <picture>
       <source media="(orientation: portrait)" srcset="portrait.jpg">
       <img src="default.jpg" alt="Image">
     </picture>
     ```
     *Portrait mode mein different image load hota hai.*

### 7. What is Microdata? *(imp)*
Microdata HTML attributes (jaise `itemscope`, `itemtype`, `itemprop`) use karta hai to structured data add kare, jo search engines ko rich snippets generate karne mein madad karta hai. Yeh SEO ke liye powerful hai.  
Schema.org vocabularies ke saath microdata products, events, ya reviews jaise content ko annotate karta hai, lekin complex syntax maintenance challenging ho sakta hai.

**Example**:
```html
<div itemscope itemtype="http://schema.org/Product">
  <h1 itemprop="name">Phone</h1>
  <span itemprop="price">$500</span>
</div>
```
*Summary*: Product details search engines ke liye structured hai.

**Interview Tip**:
1. **Tip**: Microdata ke SEO benefits aur implementation samjhao.
   - **Explanation**: Microdata rich snippets enable karta hai, jo click-through rates badhata hai, lekin JSON-LD modern alternative hai. Interview mein Schema.org, testing tools (Google Structured Data Testing Tool), aur errors pe focus karo.
2. **Question**: Why use microdata for SEO?
   - **Answer**: Microdata structured data provide karta hai jo search engines rich snippets (jaise product prices, ratings) ke liye use karte hain, improving visibility aur SEO. Example:
     ```html
     <div itemscope itemtype="http://schema.org/Event">
       <h2 itemprop="name">Concert</h2>
       <time itemprop="startDate">2025-06-01</time>
     </div>
     ```
     *Event details search results mein enhanced dikhte hain.*

### 8. What is the `contenteditable` Attribute? *(imp)*
`contenteditable` attribute elements ko user-editable banata hai, allowing inline text editing without complex JavaScript, useful for rich text editors.

**Example**:
```html
<div contenteditable="true">Edit me!</div>
```
*Summary*: Div ka text directly editable hai.

**Interview Tip**:
1. **Tip**: `contenteditable` ke use cases aur challenges samjhao.
   - **Explanation**: `contenteditable` simple text editors ya comments ke liye hai, lekin sanitization (XSS prevention) aur accessibility issues dhyan rakhne padte hain. Interview mein security aur UI consistency pe focus karo.
2. **Question**: What are the risks of using `contenteditable`?
   - **Answer**: `contenteditable` XSS attacks ka risk create kar sakta hai agar user input sanitized na ho, aur inconsistent editing behavior across browsers ho sakta hai. Example:
     ```html
     <div contenteditable="true" oninput="sanitizeInput(this)">Edit</div>
     <script>
       function sanitizeInput(el) { el.innerHTML = el.innerHTML.replace(/script/g, ''); }
     </script>
     ```
     *Script tags sanitized hote hain security ke liye.*

### 9. What is the `loading` Attribute for Images? *(imp)*
`loading` attribute images aur iframes ke loading behavior ko control karta hai, jaise `lazy` ya `eager`, improving page load performance.

**Example**:
```html
<img src="image.jpg" alt="Image" loading="lazy">
```
*Summary*: Image off-screen hone pe lazily load hoti hai.

**Interview Tip**:
1. **Tip**: `loading` ke performance benefits samjhao.
   - **Explanation**: `loading="lazy"` bandwidth save karta hai by deferring off-screen image loading, lekin critical images ke liye `eager` use karo. Interview mein performance metrics aur browser support pe focus karo.
2. **Question**: When to use `loading="lazy"`?
   - **Answer**: `loading="lazy"` below-the-fold images ya non-critical content ke liye use karo to reduce initial page load time, lekin hero images ke liye avoid karo. Example:
     ```html
     <img src="footer.jpg" alt="Footer" loading="lazy">
     ```
     *Footer image lazily load hoti hai, performance improve karta hai.*

### 10. What is the `form` Attribute? *(imp)*
`form` attribute input elements ko specific `<form>` se associate karta hai, even if they’re outside the form tag, improving form flexibility.

**Example**:
```html
<form id="myForm"></form>
<input type="text" form="myForm">
```
*Summary*: Input form ke saath linked hai, despite being outside.

**Interview Tip**:
1. **Tip**: `form` attribute ke flexibility aur use cases samjhao.
   - **Explanation**: `form` attribute complex layouts mein inputs ko form se connect karta hai, reducing nesting needs. Interview mein accessibility (labels) aur validation pe focus karo.
2. **Question**: How does the `form` attribute enhance form layouts?
   - **Answer**: `form` attribute inputs ko form ke bahar bhi associate karta hai, allowing flexible layouts without compromising functionality. Example:
     ```html
     <form id="signup"></form>
     <button type="submit" form="signup">Submit</button>
     ```
     *Button form ke bahar se submit karta hai.*

### 11. What is the `details` and `summary` Element? *(imp)*
`details` aur `summary` elements collapsible content banate hain, jisme `<summary>` clickable heading hota hai, aur `<details>` content toggle karta hai, no JavaScript needed.

**Example**:
```html
<details>
  <summary>More Info</summary>
  <p>Hidden content...</p>
</details>
```
*Summary*: Click karne pe content toggle hota hai.

**Interview Tip**:
1. **Tip**: `details` aur `summary` ke UX benefits samjhao.
   - **Explanation**: `details` native accordion functionality deta hai, jo FAQs ya expandable sections ke liye ideal hai, lekin styling aur accessibility limitations hote hain. Interview mein customization aur ARIA pe focus karo.
2. **Question**: Why use `details` and `summary` for collapsible content?
   - **Answer**: `details` aur `summary` JavaScript-free collapsible content provide karte hain, jo lightweight aur accessible hai, especially FAQs ya help sections ke liye. Example:
     ```html
     <details>
       <summary>FAQ</summary>
       <p>Answer...</p>
     </details>
     ```
     *FAQ section native toggle ke saath accessible hai.*


