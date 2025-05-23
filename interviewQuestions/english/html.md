# Consolidated HTML Interview Questions with Detailed Answers

This artifact contains **98 unique HTML interview questions**, consolidating all mostly asked topics in interviews. It includes **35 high-impact questions** are marked with **<i style="color: #0000FF">(imp)</i>** and **underlined**, with 5-7 sentences and code snippets. Normal questions have 3-5 sentences, and hard questions include code snippets. Each question has a **Practical Use** section (2-3 lines). An **Interview Tips** section provides strategies for answering effectively. Use this for comprehensive interview preparation.

## Interview Tips
- **Be Concise**: For `(imp)` questions like semantic HTML, explain the concept in 30 seconds, focusing on benefits (e.g., SEO, accessibility).
- **Use Examples**: Relate answers to real-world scenarios (e.g., `<table>` for e-commerce product comparisons).
- **Show Depth**: For advanced topics (e.g., Web Workers), mention trade-offs or alternatives to impress interviewers.
- **Practice Code**: Be ready to write snippets for forms, tables, or APIs on a whiteboard or editor.

---

## Beginner Questions (30)
These cover basic HTML concepts, ideal for freshers.

1. **_What is HTML? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: HTML (HyperText Markup Language) is the standard language for structuring web pages, using tags to define content like text, images, and links. It forms the backbone of web development, working with CSS for styling and JavaScript for interactivity. HTML5, the latest version, introduced semantic tags (`<header>`, `<article>`), multimedia support (`<video>`, `<audio>`), and APIs (e.g., Geolocation). For example, `<h1>Hello</h1>` creates a heading, and `<a href="https://example.com">Link</a>` makes a hyperlink. It’s essential for building accessible, SEO-friendly websites.  
   - **Practical Use**: HTML structures websites like blogs or e-commerce platforms, creating headers, paragraphs, and navigation menus.  
   - **Code Snippet**:  
     ```html
     <h1>Welcome</h1>
     <p>This is a paragraph.</p>
     ```

2. **What are tags and attributes in HTML?**  
   - **Explanation**: Tags are HTML’s building blocks, defining elements like `<p>` for paragraphs or `<img>` for images. Attributes provide additional properties, like `src` in `<img src="image.jpg">` or `href` in `<a href="page.html">`, controlling behavior or appearance. For example, `<p align="center">Text</p>` centers text. Attributes are written in opening tags and are key for functionality and styling.  
   - **Practical Use**: Tags and attributes create layouts like navigation bars or product images in e-commerce sites.  
   - **Code Snippet**:  
     ```html
     <a href="https://example.com" title="Visit">Click</a>
     ```

3. **What is the difference between HTML elements and tags?**  
   - **Explanation**: Tags are the markup defining elements, like `<div>` or `</div>`, marking the start or end. An element includes the opening tag, closing tag (if applicable), and content, e.g., `<div>Content</div>`. Void elements like `<img>` don’t have closing tags. For example, `<p>Hello</p>` is an element, with `<p>` and `</p>` as tags. This distinction is crucial for DOM manipulation.  
   - **Practical Use**: Elements are targeted in JavaScript (e.g., `document.querySelector('div')`) for dynamic features like menus.

4. **_What is the purpose of the `<!DOCTYPE html>` declaration? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: The `<!DOCTYPE html>` declaration, placed at the document’s start, tells browsers to use HTML5 standards, ensuring rendering in **standards mode** rather than **quirks mode**, which mimics outdated behaviors. Without it, CSS or JavaScript may render inconsistently, causing layout issues like incorrect box models. For example, `<!DOCTYPE html><html><p>Hello</p></html>` ensures consistent rendering. It’s case-insensitive and precedes `<html>`. It’s critical for cross-browser compatibility and modern web standards.  
   - **Practical Use**: Used in every webpage to prevent styling errors in blogs, portfolios, or e-commerce sites.  
   - **Code Snippet**:  
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head><title>My Page</title></head>
       <body><p>Hello</p></body>
     </html>
     ```

5. **What is the difference between block-level and inline elements?**  
   - **Explanation**: Block-level elements occupy the full width of their parent and start on a new line, like `<div>`, `<p>`, or `<h1>`, ideal for sections. Inline elements take only their content’s width and stay in the text flow, like `<span>`, `<a>`, or `<img>`. For example, `<p>Text</p>` takes full width, while `<a href="#">Link</a>` stays inline. CSS can override behaviors (e.g., `display: inline-block`).  
   - **Practical Use**: Block elements create page sections like headers, inline elements style links in articles.

6. **_What is the `id` attribute in HTML? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: The `id` attribute assigns a unique identifier to an element, enabling specific targeting for CSS, JavaScript, or anchor linking. Each `id` must be unique to avoid conflicts, as browsers prioritize the first instance of duplicates. For example, `<div id="main">Content</div>` is styled with `#main { color: blue; }` or accessed via `document.getElementById('main')`. It’s ideal for single-instance elements like headers or modals. Misusing `id` can break functionality or accessibility.  
   - **Practical Use**: Used for in-page navigation, styling unique banners, or JavaScript interactions in apps.  
   - **Code Snippet**:  
     ```html
     <div id="main">Welcome</div>
     <style>#main { background: lightblue; }</style>
     ```

7. **_What is the `class` attribute in HTML? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: The `class` attribute assigns reusable identifiers to elements, allowing shared styling or JavaScript behavior across multiple elements. Unlike `id`, classes can be reused, e.g., `class="box highlight"`. For example, `<div class="box">Item</div>` is styled with `.box { border: 1px solid; }`. Classes are key for CSS frameworks like Bootstrap and JavaScript group selections (e.g., `querySelectorAll('.box')`). They’re essential for scalable designs.  
   - **Practical Use**: Classes style buttons or cards in e-commerce and enable event handling for menus.  
   - **Code Snippet**:  
     ```html
     <div class="box highlight">Item</div>
     <style>
       .box { padding: 10px; }
       .highlight { background: yellow; }
     </style>
     ```

8. **_What are meta tags in HTML? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: Meta tags, in the `<head>` section, provide metadata like character encoding, page description, or viewport settings, invisible on the page. For example, `<meta charset="UTF-8">` ensures proper text encoding, `<meta name="description" content="My site">` aids SEO, and `<meta name="viewport" content="width=device-width, initial-scale=1.0">` enables responsive design. They guide browsers, search engines, and social media platforms. Omitting key meta tags harms accessibility, SEO, or mobile rendering. They’re critical for web standards compliance.  
   - **Practical Use**: Used to optimize SEO, ensure mobile responsiveness, and support social media sharing in blogs.  
   - **Code Snippet**:  
     ```html
     <head>
       <meta charset="UTF-8">
       <meta name="description" content="Learn web development">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
     </head>
     ```

9. **What are HTML entities?**  
   - **Explanation**: HTML entities are codes for reserved or special characters, like `&` for `&` or `<` for `<`, ensuring proper rendering. For example, `©` displays ©, and ` ` creates a non-breaking space. They prevent parsing errors and are used in forms or CMS outputs.  
   - **Practical Use**: Used to display © in footers or prevent text wrapping in navigation with ` `.

10. **_What are the key attributes of the `<img>` tag? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: The `<img>` tag uses attributes like `src` (image URL, e.g., `<img src="image.jpg">`), `alt` (accessibility text), `width`/`height` (dimensions), and `loading` (e.g., `lazy`). The `alt` attribute (e.g., `alt="Product photo"`) is vital for screen readers, SEO, and fallback if images fail. `width` and `height` prevent layout shifts, improving performance. For example, `<img src="photo.jpg" alt="Shoes" width="100">` ensures accessibility and speed. Omitting `alt` violates WCAG standards.  
    - **Practical Use**: Used for product images in e-commerce or blog photos, ensuring accessibility and fast loading.  
    - **Code Snippet**:  
      ```html
      <img src="product.jpg" alt="Blue shoes" width="100" height="100" loading="lazy">
      ```

11. **_How do you create hyperlinks in HTML? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Hyperlinks use the `<a>` tag with `href` specifying the URL, e.g., `<a href="https://example.com">Link</a>`. Attributes like `target="_blank"` open links in new tabs, `title` adds tooltips, and `rel="nofollow"` defines SEO or security relationships. Relative URLs (e.g., `href="page.html"`) link internally, absolute URLs externally. Proper use ensures navigation and accessibility. For example, `<a href="#section">Go</a>` links to page sections.  
    - **Practical Use**: Used in menus, footer links, or CTAs on blogs or e-commerce sites.  
    - **Code Snippet**:  
      ```html
      <a href="https://example.com" target="_blank" rel="noopener">Visit</a>
      ```

12. **_How do you create tables in HTML? <i style="color: #0000FF">(imp)</i>_**   
    - **Explanation**: HTML tables use `<table>`, with `<tr>` for rows, `<td>` for cells, and `<th>` for headers. The `border` attribute or CSS styles appearance, and `<caption>` adds an accessible title. For example, `<table><tr><th>Name</th><td>John</td></tr></table>` creates a table. Tables are for tabular data, not layouts, per modern standards. Accessibility requires headers and captions for screen readers.  
    - **Practical Use**: Used for product comparisons in e-commerce or schedules in educational platforms.  
    - **Code Snippet**:  
      ```html
      <table border="1">
        <caption>User Data</caption>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
      </table>
      ```

13. **_What is the difference between `rowspan` and `colspan` in HTML tables? <i style="color: #0000FF">(imp)</i>_**   
    - **Explanation**: `rowspan` allows a cell to span multiple rows, while `colspan` spans multiple columns. For example, `<td rowspan="2">Data</td>` merges two rows, and `<td colspan="2">Data</td>` merges two columns. Used in `<td>` or `<th>`, they create complex layouts. Overuse can harm accessibility, so headers must be clear. They’re key for structured data presentation in interviews.  
    - **Practical Use**: Used in financial reports or timetables to merge cells for headers, improving readability.  
    - **Code Snippet**:  
      ```html
      <table border="1">
        <tr>
          <th colspan="2">Header</th>
        </tr>
        <tr>
          <td rowspan="2">Merged</td>
          <td>Data</td>
        </tr>
        <tr>
          <td>More Data</td>
        </tr>
      </table>
      ```

14. **What is the `<blockquote>` tag used for?**   
    - **Explanation**: The `<blockquote>` tag represents quoted content from another source, e.g., `<blockquote cite="https://example.com">Quote</blockquote>`. The `cite` attribute specifies the source URL (not visible). It’s semantic, aiding screen readers, and styled with indentation via CSS. Used for long quotations, unlike `<q>` for short quotes.  
    - **Practical Use**: Used in articles or blogs to highlight quotes from interviews or books.

15. **_What is the difference between `<strong>` and `<b>` tags? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<strong>` is semantic, indicating strong importance or urgency, like `<strong>Warning!</strong>`, emphasized by screen readers for accessibility. `<b>` is presentational, applying bold styling without meaning, used for visual emphasis. `<strong>` improves SEO and accessibility, while `<b>` is stylistic. Modern standards favor `<strong>` for meaningful markup. For example, `<strong>Deadline</strong>` conveys urgency.  
    - **Practical Use**: `<strong>` for alerts in forms, `<b>` for stylistic bolding in legacy designs.  
    - **Code Snippet**:  
      ```html
      <p><strong>Warning:</strong> Submit now.</p>
      <p><b>Bold text</b> for style.</p>
      ```

16. **What is the difference between `<em>` and `<i>` tags?**  
    - **Explanation**: `<em>` is semantic, indicating emphasized text with stress, like `<em>Urgent</em>`, read with emphasis by screen readers. `<i>` is presentational, applying italic styling, like `<i>Book title</i>`. `<em>` enhances accessibility and SEO, while `<i>` is stylistic. Modern standards prefer `<em>`.  
    - **Practical Use**: `<em>` for key phrases in tutorials, `<i>` for book titles in blogs.

17. **What are void elements in HTML?**  
    - **Explanation**: Void elements are self-contained, lacking closing tags or content, like `<br>`, `<img>`, or `<hr>`. In HTML5, they don’t need a trailing slash (e.g., `<img src="image.jpg">`). They’re used for single-purpose tasks like embedding images or line breaks.  
    - **Practical Use**: Used for images in product listings or line breaks in forms.

18. **What is the advantage of collapsing white spaces in HTML?**  
    - **Explanation**: HTML collapses multiple spaces, tabs, or line breaks into one space, ensuring consistent text display. For example, `<p>Text    with   spaces</p>` renders as “Text with spaces”. CSS (e.g., `white-space: pre`) or entities (` `) control spacing.  
    - **Practical Use**: Ensures clean text in blogs or CMS outputs, avoiding formatting errors.

19. **What is the difference between HTML4 and HTML5?**  
    - **Explanation**: HTML5 introduces semantic tags (`<header>`, `<article>`), multimedia (`<video>`, `<audio>`), and APIs (Geolocation, Web Storage) compared to HTML4. HTML4 relied on plugins like Flash and generic `<div>`s. HTML5 supports form validation and mobile-friendly design.  
    - **Practical Use**: HTML5 builds modern sites with video players, responsive forms, and semantic layouts.

20. **What is an iframe and where is it used?**  
    - **Explanation**: `<iframe>` embeds another webpage or content, like `<iframe src="https://example.com"></iframe>`, creating a separate context. Attributes like `width` or `allow` control appearance and permissions. It’s used for videos, maps, or ads, with security (e.g., sandboxing) considerations.  
    - **Practical Use**: Embeds YouTube videos in blogs or Google Maps in contact pages.  
    - **Code Snippet**:  
      ```html
      <iframe src="https://www.youtube.com/embed/video_id" width="560" height="315"></iframe>
      ```

21. **What is the `<title>` tag used for?**  
    - **Explanation**: The `<title>` tag, in `<head>`, defines the webpage’s title, displayed in browser tabs and search results. For example, `<title>My Site</title>` sets the tab name. It’s critical for SEO and user navigation. Short, descriptive titles improve rankings.  
    - **Practical Use**: Used to set page titles for blogs or product pages, aiding SEO.

22. **What is the `<br>` tag used for?**  
    - **Explanation**: The `<br>` tag inserts a line break within text, like `<p>Hello<br>World</p>`, moving content to the next line. It’s a void element, used sparingly as CSS is preferred for spacing. Overuse harms accessibility.  
    - **Practical Use**: Used in addresses or poems for formatting in forms or blogs.

23. **What is the `<hr>` tag used for?**  
    - **Explanation**: The `<hr>` tag creates a horizontal rule, like `<hr>`, visually separating content sections. It’s a void element, styled via CSS for width or color. It’s semantic, indicating a thematic break.  
    - **Practical Use**: Used to separate sections in articles or forms on portfolios.

24. **_What are the key attributes of the `<a>` tag? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: The `<a>` tag’s key attributes include `href` (URL), `target` (e.g., `_blank` for new tab), `rel` (e.g., `nofollow` for SEO), `title` (tooltip), and `download` (file downloads). For example, `<a href="file.pdf" download>Download</a>` triggers a download. These attributes control navigation, accessibility, and security. `rel="noopener"` prevents security risks in new tabs. They’re frequently asked in interviews for navigation design.  
    - **Practical Use**: Used in navigation menus or downloadable resources in e-commerce or blogs.  
    - **Code Snippet**:  
      ```html
      <a href="page.html" target="_blank" rel="noopener" title="Go">Link</a>
      ```

25. **What is the `<label>` tag used for?**  
    - **Explanation**: The `<label>` tag associates text with form controls, like `<label for="name">Name:</label><input id="name">`, improving accessibility. The `for` attribute matches the input’s `id`. Clicking the label focuses the input, aiding screen readers.  
    - **Practical Use**: Used in forms for user-friendly input fields in registration pages.

26. **_What are the key attributes of form elements? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Form elements like `<input>`, `<textarea>`, and `<select>` use attributes such as `type` (e.g., `text`, `email`), `name` (form data key), `value` (default value), `required`, `disabled`, and `placeholder`. For example, `<input type="email" name="email" required>` ensures valid input. These attributes control validation, accessibility, and submission. `name` is critical for server-side processing. They’re key for form design in interviews.  
    - **Practical Use**: Used in login or checkout forms to collect user data securely.  
    - **Code Snippet**:  
      ```html
      <form>
        <input type="text" name="username" placeholder="Enter name" required>
        <textarea name="comment"></textarea>
      </form>
      ```

27. **What is the `<input>` tag used for?**  
    - **Explanation**: The `<input>` tag creates interactive form controls, like text fields or checkboxes, using `type` attributes (e.g., `text`, `radio`, `file`). For example, `<input type="checkbox" name="agree">` creates a checkbox. It’s a void element, critical for user input.  
    - **Practical Use**: Used in forms for user data like emails or passwords in sign-up pages.

28. **What is the `<textarea>` tag used for?**  
    - **Explanation**: The `<textarea>` tag creates a multi-line text input, like `<textarea name="comment"></textarea>`, for longer user input. Attributes like `rows`, `cols`, or `placeholder` control size and behavior. It’s essential for forms needing detailed input.  
    - **Practical Use**: Used in contact forms or comment sections on blogs.

29. **What is the `<select>` tag used for?**  
    - **Explanation**: The `<select>` tag creates a dropdown menu, with `<option>` tags for choices, like `<select><option>Item</option></select>`. Attributes like `name` and `multiple` control form submission and selection. It’s used for user choices.  
    - **Practical Use**: Used in forms for selecting countries or categories in e-commerce.

30. **What is the `<button>` tag used for?**  
    - **Explanation**: The `<button>` tag creates clickable buttons, like `<button type="submit">Submit</button>`, for form submission or actions. Attributes like `type` (`submit`, `button`, `reset`) and `disabled` control behavior. It’s more flexible than `<input type="submit">`.  
    - **Practical Use**: Used for form submissions or interactive CTAs in web apps.

---

## Intermediate Questions (30)
These cover semantic HTML, forms, accessibility, and responsive design.

31. **_What is semantic HTML? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Semantic HTML uses tags that describe content meaning, like `<header>`, `<article>`, or `<nav>`, instead of generic `<div>`s. It improves accessibility for screen readers, enhances SEO by helping crawlers understand structure, and simplifies maintenance. For example, `<nav><a href="#home">Home</a></nav>` indicates navigation. Semantic tags like `<main>` replace `<div>`s in HTML5. Non-semantic code confuses assistive technologies and hurts rankings.  
    - **Practical Use**: Structures blogs with `<article>` for posts, `<nav>` for menus, boosting SEO and accessibility.  
    - **Code Snippet**:  
      ```html
      <header>
        <h1>My Blog</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>
      ```

32. **What is the `<header>` tag used for?**  
    - **Explanation**: `<header>` represents introductory content for a page or section, like logos or navigation, e.g., `<header><h1>Welcome</h1></header>`. It’s semantic, improving accessibility and SEO. Unlike `<head>`, it’s visible and can appear multiple times.  
    - **Practical Use**: Creates website headers with logos or article headers in news sites.

33. **What is the `<footer>` tag used for?**  
    - **Explanation**: `<footer>` represents content at the bottom, like contact info or copyright, e.g., `<footer><p>© 2025</p></footer>`. It’s semantic, aiding screen readers and SEO. It can appear in `<article>`s or pages.  
    - **Practical Use**: Used for site footers with links or author credits in blogs.

34. **What is the `<nav>` tag used for?**  
    - **Explanation**: `<nav>` defines navigation links, like menus, e.g., `<nav><a href="#home">Home</a></nav>`. It’s semantic, helping screen readers identify navigation. Used for major navigation blocks, not every link.  
    - **Practical Use**: Creates main menus or pagination in e-commerce.

35. **What is the `<article>` tag used for?**  
    - **Explanation**: `<article>` represents independent content, like a blog post, e.g., `<article><h2>Title</h2><p>Content</p></article>`. It’s semantic, improving SEO and aiding screen readers. Ideal for syndicated content.  
    - **Practical Use**: Used for blog posts or reviews to enhance SEO.

36. **What is the `<section>` tag used for?**  
    - **Explanation**: `<section>` groups related content, like a chapter, e.g., `<section><h2>Intro</h2><p>Details</p></section>`. It’s semantic, organizing content for accessibility. Typically has a heading, unlike `<div>`.  
    - **Practical Use**: Organizes content into sections like “Features” on landing pages.

37. **What is the `<aside>` tag used for?**  
    - **Explanation**: `<aside>` represents tangential content, like sidebars or ads, e.g., `<aside><p>Related</p></aside>`. It’s semantic, distinguishing secondary content. Can appear in `<article>`s.  
    - **Practical Use**: Used for sidebars with ads or bios in blogs.

38. **What is the `<main>` tag used for?**  
    - **Explanation**: `<main>` represents primary content, excluding headers or sidebars, e.g., `<main><h1>Content</h1></main>`. It’s semantic, helping screen readers focus on core content. Only one visible `<main>` per page.  
    - **Practical Use**: Wraps primary content of blogs or product pages.

39. **_What is the difference between `<header>` and `<head>` tags? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<head>` contains metadata, like `<title>` or `<meta>`, guiding browsers but not visible. `<header>` is a semantic, visible element for introductory content, like `<header><h1>Welcome</h1></header>`. `<head>` is mandatory, `<header>` optional. Confusing them shows poor semantic understanding. For example, `<head><title>Site</title></head>` sets metadata, while `<header>` structures content.  
    - **Practical Use**: `<head>` configures SEO, `<header>` creates navigation bars in blogs.  
    - **Code Snippet**:  
      ```html
      <head>
        <title>My Site</title>
      </head>
      <body>
        <header>
          <h1>Welcome</h1>
        </header>
      </body>
      ```

40. **What is the `<figure>` tag used for?**  
    - **Explanation**: `<figure>` groups content like images or code with an optional `<figcaption>`, e.g., `<figure><img src="chart.jpg"><figcaption>Data</figcaption></figure>`. It’s semantic, linking captions to content for accessibility. Used for movable content.  
    - **Practical Use**: Displays images with captions in articles or charts in reports.  
    - **Code Snippet**:  
      ```html
      <figure>
        <img src="photo.jpg" alt="Landscape">
        <figcaption>Scenic view</figcaption>
      </figure>
      ```

41. **What is the `<figcaption>` tag used for?**  
    - **Explanation**: `<figcaption>`, used inside `<figure>`, provides a caption for content, like `<figcaption>Chart</figcaption>`. It’s semantic, aiding screen readers and SEO. It can appear before or after the figure’s content.  
    - **Practical Use**: Used for image or chart captions in educational content.

42. **_What is the `<form>` tag and its key attributes? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: The `<form>` tag creates interactive forms for user input, like `<form action="/submit" method="POST">`. Key attributes include `action` (submission URL), `method` (`GET` or `POST`), `enctype` (e.g., `multipart/form-data` for files), and `novalidate`. For example, `<form action="/submit" method="POST" enctype="multipart/form-data">` handles file uploads. These attributes control data submission and validation. They’re critical for form-based interviews.  
    - **Practical Use**: Used in login, registration, or checkout forms in web apps.  
    - **Code Snippet**:  
      ```html
      <form action="/submit" method="POST">
        <input type="text" name="name">
        <button type="submit">Submit</button>
      </form>
      ```

43. **What is the `enctype` attribute in forms?**   
    - **Explanation**: The `enctype` attribute in `<form>` specifies how form data is encoded for submission. Common values are `application/x-www-form-urlencoded` (default, text data), `multipart/form-data` (files), and `text/plain` (raw text). For example, `<form enctype="multipart/form-data">` is used for file uploads. It’s critical for handling complex form data.  
    - **Practical Use**: Used in file upload forms for profile pictures or documents in apps.  
    - **Code Snippet**:  
      ```html
      <form enctype="multipart/form-data" method="POST">
        <input type="file" name="file">
        <button type="submit">Upload</button>
      </form>
      ```

44. **What is the `<fieldset>` tag used for?**  
    - **Explanation**: `<fieldset>` groups related form elements, like `<fieldset><legend>Details</legend><input></fieldset>`, improving accessibility. The `<legend>` tag provides a caption. It’s semantic, aiding screen readers, and can be styled.  
    - **Practical Use**: Used in complex forms to group user info or preferences.

45. **What is the `<legend>` tag used for?**  
    - **Explanation**: `<legend>`, used inside `<fieldset>`, provides a caption for grouped form elements, like `<legend>Personal Info</legend>`. It’s semantic, enhancing accessibility for screen readers. It’s typically the first child of `<fieldset>`.  
    - **Practical Use**: Used in forms to label sections like “Contact Details” in surveys.

46. **_What are HTML5 form validation attributes? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: HTML5 form validation attributes include `required`, `pattern`, `min`, `max`, `minlength`, `maxlength`, and `type` (e.g., `email`, `number`). For example, `<input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">` ensures valid email input. These attributes reduce JavaScript validation, improving UX. Browser-native error messages enhance accessibility. They’re key for form-focused interviews.  
    - **Practical Use**: Used in registration forms to validate emails or passwords without extra code.  
    - **Code Snippet**:  
      ```html
      <input type="number" min="1" max="10" required>
      ```

47. **What is the `<datalist>` tag used for?**  
    - **Explanation**: `<datalist>` provides a predefined list of options for an `<input>` tag, like `<input list="options"><datalist id="options"><option>Item</option></datalist>`. It’s used for autocompletion, enhancing UX. It’s semantic and accessible.  
    - **Practical Use**: Used in search bars or forms for suggesting cities or products.  
    - **Code Snippet**:  
      ```html
      <input list="colors">
      <datalist id="colors">
        <option>Red</option>
        <option>Blue</option>
      </datalist>
      ```

48. **What is the `<progress>` tag used for?**  
    - **Explanation**: `<progress>` displays task completion, like `<progress value="50" max="100">50%</progress>`. Attributes `value` and `max` define progress. It’s semantic, aiding accessibility, and styled via CSS.  
    - **Practical Use**: Used in file uploads or quizzes to show completion status.

49. **What is the `<meter>` tag used for?**  
    - **Explanation**: `<meter>` represents a scalar value within a range, like `<meter value="75" min="0" max="100">75%</meter>`. Attributes include `min`, `max`, `low`, `high`, and `optimum`. It’s semantic, unlike `<progress>`, for static measurements.  
    - **Practical Use**: Used in dashboards to show battery levels or ratings.

50. **_What is accessibility in HTML? <i style="color: #0000FF">(imp)</i>_** (New, Conceptual)  
    - **Explanation**: Accessibility ensures webpages are usable by all, including those with disabilities, using semantic tags and attributes. Tags like `<nav>` aid screen readers, attributes like `alt`, `for`, and `tabindex` provide context or navigation. ARIA roles enhance complex UI. For example, `<img alt="Photo">` describes images, and `<label for="id">` links inputs. WCAG compliance improves UX, SEO, and legal adherence.  
    - **Practical Use**: Used in forms and menus on public sites to ensure inclusivity.  
    - **Code Snippet**:  
      ```html
      <img src="product.jpg" alt="Blue shoes">
      <label for="name">Name:</label>
      <input id="name" type="text" tabindex="0">
      ```

51. **What is the `tabindex` attribute?**  
    - **Explanation**: The `tabindex` attribute controls keyboard navigation order, like `<div tabindex="0">Content</div>`. Values include `0` (natural order), positive numbers (custom order), or `-1` (non-focusable). It’s critical for accessibility, ensuring interactive elements are reachable.  
    - **Practical Use**: Used in custom buttons or modals for keyboard accessibility.

52. **What is the `role` attribute in ARIA?**  
    - **Explanation**: The `role` attribute, part of ARIA, defines an element’s purpose for assistive technologies, like `<div role="button">Click</div>`. It enhances accessibility for non-semantic elements. For example, `role="navigation"` clarifies `<div>`s as menus.  
    - **Practical Use**: Used in complex UI like accordions or custom widgets.

53. **What is the `<abbr>` tag used for?**  
    - **Explanation**: `<abbr>` marks abbreviations, like `<abbr title="HyperText Markup Language">HTML</abbr>`, with `title` providing the full form. It’s semantic, aiding screen readers and SEO. Styled with underlines via CSS.  
    - **Practical Use**: Used in technical docs or blogs for acronyms like CSS or HTML.

54. **What is the `<mark>` tag used for?**  
    - **Explanation**: `<mark>` highlights text for emphasis, like `<mark>Important</mark>`, typically styled with a yellow background. It’s semantic, indicating relevance, and used in search results or notes. CSS can customize appearance.  
    - **Practical Use**: Used in search pages or tutorials to highlight key terms.

55. **What is the `<time>` tag used for?**  
    - **Explanation**: `<time>` represents dates or times, like `<time datetime="2025-05-18">May 18, 2025</time>`. The `datetime` attribute provides machine-readable formats. It’s semantic, aiding SEO and screen readers.  
    - **Practical Use**: Used in event listings or blogs for publish dates.

56. **What is the `<details>` tag used for?**  
    - **Explanation**: `<details>` creates a collapsible section, like `<details><summary>More</summary><p>Info</p></details>`, with `<summary>` as the toggle. It’s semantic, accessible, and requires no JavaScript.  
    - **Practical Use**: Used in FAQs or accordions on documentation sites.  
    - **Code Snippet**:  
      ```html
      <details>
        <summary>Read More</summary>
        <p>Additional content here.</p>
      </details>
      ```

57. **What is the `<summary>` tag used for?**  
    - **Explanation**: `<summary>`, used inside `<details>`, provides the visible toggle text, like `<summary>Click</summary>`. It’s semantic, ensuring accessibility for screen readers. Styled via CSS for appearance.  
    - **Practical Use**: Used in collapsible menus or FAQs for interactive content.

58. **What is the `<output>` tag used for?**  
    - **Explanation**: `<output>` displays form calculation results, like `<output name="result">0</output>`, linked via `for` to inputs. It’s semantic, aiding accessibility, and used with JavaScript.  
    - **Practical Use**: Used in calculators or dynamic forms for live results.

59. **What is the `<dialog>` tag used for?**  
    - **Explanation**: `<dialog>` creates modal or non-modal dialogs, like `<dialog open><p>Alert</p></dialog>`. The `open` attribute shows it, and JavaScript (`showModal()`) controls behavior. It’s accessible with ARIA.  
    - **Practical Use**: Used for pop-ups or alerts in web apps.  
    - **Code Snippet**:  
      ```html
      <dialog id="modal">
        <p>Confirm action?</p>
        <button onclick="modal.close()">Close</button>
      </dialog>
      ```

60. **What is the `<address>` tag used for?**  
    - **Explanation**: `<address>` represents contact information, like `<address>123 Street</address>`. It’s semantic, aiding screen readers and SEO, typically styled in italics. Used for physical or email addresses.  
    - **Practical Use**: Used in footers or contact pages for business details.

---

## Advanced Questions (38)
These cover HTML5 APIs, performance, and advanced attributes.

61. **_What is the `<picture>` element in HTML? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<picture>` provides multiple image sources for responsive design, using `<source>` tags for conditions like screen size or format. For example, `<source srcset="image.webp" type="image/webp">` serves WebP, `<source media="(max-width: 600px)" srcset="small.jpg">` loads smaller images. `<img>` inside is a fallback. It improves performance by reducing bandwidth. It’s a common interview topic for optimization.  
    - **Practical Use**: Used in e-commerce for adaptive product images or portfolios for optimized photos.  
    - **Code Snippet**:  
      ```html
      <picture>
        <source srcset="image.webp" type="image/webp">
        <source media="(max-width: 600px)" srcset="small.jpg">
        <img src="default.jpg" alt="Product">
      </picture>
      ```

62. **_What is the role of CDN in web development? <i style="color: #0000FF">(imp)</i>_**   
    - **Explanation**: A Content Delivery Network (CDN) hosts static resources (CSS, JS, images) on distributed servers to reduce latency. For example, `<script src="https://cdn.jsdelivr.net/jquery.js">` fetches from the nearest server. CDNs improve performance, scalability, and reliability via caching. They offer security (e.g., DDoS protection) but need fallbacks for failures. Interviewers ask this for performance optimization strategies.  
    - **Practical Use**: Used in e-commerce to deliver scripts quickly, reducing load times.  
    - **Code Snippet**:  
      ```html
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
      ```

63. **What is file compression in web development?**   
    - **Explanation**: File compression reduces asset sizes (images, CSS, JS) for faster load times. Image formats like WebP or tools like TinyPNG compress without quality loss, e.g., 1MB JPEG to 200KB. Minification compresses CSS/JS by removing whitespace. It improves mobile UX and SEO.  
    - **Practical Use**: Compresses product images or scripts in e-commerce for fast loading.

64. **_What are HTML5 APIs and their uses? <i style="color: #0000FF">(imp)</i>_** (New, Conceptual)  
    - **Explanation**: HTML5 APIs extend browser capabilities, enabling app-like features. Geolocation fetches location data, Web Storage (`localStorage`, `sessionStorage`) stores data, Web Workers run background tasks, and Canvas/WebGL render graphics. For example, `navigator.geolocation.getCurrentPosition()` gets coordinates. They enhance interactivity and offline capabilities but require HTTPS for security. Interviewers test these for modern web development knowledge.  
    - **Practical Use**: Used in mapping apps (Geolocation), note-taking (Web Storage), or visualizations (Canvas).  
    - **Code Snippet**:  
      ```html
      <script>
        navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords.latitude));
        localStorage.setItem('theme', 'dark');
      </script>
      ```

65. **What is the Web Storage API?**  
    - **Explanation**: Web Storage API (`localStorage`, `sessionStorage`) stores key-value pairs in the browser, up to 5-10MB. `localStorage` persists until cleared, `sessionStorage` lasts per session. For example, `localStorage.setItem('key', 'value')` saves data. It’s simpler than cookies, used for offline apps.  
    - **Practical Use**: Used in e-commerce to save cart items or user preferences locally.  
    - **Code Snippet**:  
      ```html
      <script>
        sessionStorage.setItem('user', 'John');
        console.log(sessionStorage.getItem('user')); // John
      </script>
      ```

66. **What is the Geolocation API?**  
    - **Explanation**: The Geolocation API retrieves user location via `navigator.geolocation`, like `getCurrentPosition()` for coordinates. It requires user permission and HTTPS. For example, it’s used in maps or location-based services. Accuracy depends on GPS or IP.  
    - **Practical Use**: Used in ride-sharing apps or store locators for user positioning.  
    - **Code Snippet**:  
      ```html
      <script>
        navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords));
      </script>
      ```

67. **What is the Canvas API?**  
    - **Explanation**: The Canvas API, using `<canvas>`, enables dynamic 2D graphics via JavaScript, like `<canvas id="myCanvas"></canvas>`. Methods like `fillRect()` draw shapes. It’s used for games, charts, or animations, with WebGL for 3D.  
    - **Practical Use**: Used in data visualization dashboards or simple browser games.  
    - **Code Snippet**:  
      ```html
      <canvas id="myCanvas"></canvas>
      <script>
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.fillRect(10, 10, 100, 100);
      </script>
      ```

68. **_What is a Web Worker in HTML5? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Web Workers run JavaScript in background threads, preventing UI blocking for heavy tasks like data processing. Created via `new Worker('script.js')`, they communicate via `postMessage()`. For example, `<script>let w = new Worker('worker.js');</script>` offloads computations. They don’t access DOM, ensuring thread safety. Interviewers ask this for performance optimization knowledge.  
    - **Practical Use**: Used in analytics dashboards or image processing apps for smooth UX.  
    - **Code Snippet**:  
      ```html
      <script>
        let worker = new Worker('worker.js');
        worker.postMessage('Start');
        worker.onmessage = (e) => console.log(e.data);
      </script>
      ```

69. **What is the `<video>` tag used for?** (New, Conceptual)  
    - **Explanation**: The `<video>` tag embeds video content, like `<video src="movie.mp4" controls>`, with attributes like `controls`, `autoplay`, `loop`, and `poster`. Multiple `<source>` tags support formats (e.g., MP4, WebM). It’s accessible with `<track>` for captions.  
    - **Practical Use**: Used for video tutorials or product demos in e-learning or e-commerce.  
    - **Code Snippet**:  
      ```html
      <video controls>
        <source src="movie.mp4" type="video/mp4">
        <track src="subtitles.vtt" kind="subtitles" srclang="en">
      </video>
      ```

70. **What is the `<audio>` tag used for?** (New, Conceptual)  
    - **Explanation**: The `<audio>` tag embeds audio, like `<audio src="song.mp3" controls>`, with attributes like `controls`, `autoplay`, and `loop`. Multiple `<source>` tags support formats (e.g., MP3, WAV). It’s accessible and plugin-free.  
    - **Practical Use**: Used for podcasts or background music in portfolios.  
    - **Code Snippet**:  
      ```html
      <audio controls>
        <source src="song.mp3" type="audio/mpeg">
      </audio>
      ```

71. **What is the `<track>` tag used for?**  
    - **Explanation**: `<track>`, used in `<video>` or `<audio>`, adds captions or subtitles, like `<track src="subtitles.vtt" kind="subtitles" srclang="en">`. Attributes include `kind` (e.g., `subtitles`, `captions`) and `srclang`. It enhances accessibility.  
    - **Practical Use**: Used in video players for multilingual subtitles in e-learning.

72. **What is the `srcset` attribute in images?**  
    - **Explanation**: The `srcset` attribute in `<img>` provides multiple image sources for responsive design, like `<img srcset="small.jpg 320w, large.jpg 800w" sizes="(max-width: 600px) 320px, 800px">`. It optimizes loading based on screen size. Used with `sizes` for layout.  
    - **Practical Use**: Used in galleries or product pages for faster image loading.

73. **What is the `loading` attribute in images?**  
    - **Explanation**: The `loading` attribute in `<img>` controls image loading, like `<img src="image.jpg" loading="lazy">`. Values include `lazy` (defer off-screen images) and `eager` (load immediately). It improves page speed and bandwidth.  
    - **Practical Use**: Used in long blog pages to prioritize visible images.

74. **_What is the `data-` attribute in HTML? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `data-` attributes store custom data on elements, like `<div data-id="123">Content</div>`, accessible via JavaScript (`dataset.id`) or CSS (`[data-id]`). They’re flexible for dynamic apps, avoiding non-standard attributes. For example, `data-theme="dark"` toggles themes. They’re secure and widely used in frameworks. Interviewers ask this for JavaScript integration.  
    - **Practical Use**: Used in e-commerce to store product IDs or settings for dynamic UI.  
    - **Code Snippet**:  
      ```html
      <div data-product="shirt">Item</div>
      <script>
        console.log(document.querySelector('div').dataset.product); // shirt
      </script>
      ```

75. **What is the `contenteditable` attribute?**  
    - **Explanation**: The `contenteditable` attribute makes elements editable, like `<div contenteditable="true">Edit me</div>`. Values are `true` or `false`. It’s used for rich text editors but needs JavaScript for saving changes.  
    - **Practical Use**: Used in note-taking apps or CMS for inline editing.  
    - **Code Snippet**:  
      ```html
      <div contenteditable="true">Type here</div>
      ```

76. **What is the `draggable` attribute?**  
    - **Explanation**: The `draggable` attribute enables drag-and-drop, like `<div draggable="true">Drag</div>`. Values are `true` or `false`. It works with Drag and Drop API events (e.g., `dragstart`). It’s accessible with keyboard alternatives.  
    - **Practical Use**: Used in task boards or file uploaders for interactive UX.  
    - **Code Snippet**:  
      ```html
      <div draggable="true" ondragstart="event.dataTransfer.setData('text', 'data')">Drag</div>
      ```

77. **What is the `<template>` tag used for?**  
    - **Explanation**: `<template>` stores reusable HTML content, like `<template><div>Content</div></template>`, not rendered until activated via JavaScript (`content.cloneNode()`). It’s efficient for dynamic UI, reducing DOM manipulation. It’s a common interview topic.  
    - **Practical Use**: Used in web apps for rendering lists or modals dynamically.  
    - **Code Snippet**:  
      ```html
      <template id="temp">
        <div>Item</div>
      </template>
      <script>
        let temp = document.getElementById('temp').content.cloneNode(true);
        document.body.appendChild(temp);
      </script>
      ```

78. **What is the `<slot>` tag used for?**  
    - **Explanation**: `<slot>`, used in Web Components, defines placeholders for custom content, like `<slot name="header"></slot>`. It’s part of Shadow DOM, allowing flexible component design. For example, `<my-component><h1 slot="header">Title</h1></my-component>` inserts content.  
    - **Practical Use**: Used in reusable UI components like cards or modals.

79. **What is the `<base>` tag used for?**  
    - **Explanation**: `<base>`, in `<head>`, sets the base URL for relative links, like `<base href="https://example.com/">`. All relative URLs (e.g., `<a href="page.html">`) resolve against it. It’s used once per document.  
    - **Practical Use**: Used in multi-page sites to simplify relative URLs.

80. **What is URL encoding in HTML?**  
    - **Explanation**: URL encoding converts special characters into percent-encoded formats, like `space` to `%20`, for safe URLs. For example, `<a href="search?q=hello%20world">Search</a>` encodes spaces. JavaScript’s `encodeURIComponent()` handles it. It’s critical for form submissions.  
    - **Practical Use**: Used in search forms or APIs to handle query parameters.

81. **What is the `<link>` tag used for?**  
    - **Explanation**: `<link>` in `<head>` connects external resources, like `<link rel="stylesheet" href="style.css">` for CSS. Attributes include `rel` (e.g., `icon`), `href`, and `type`. It’s a void element, critical for styles or favicons.  
    - **Practical Use**: Used to link CSS or favicons in websites for branding.

82. **_What is the difference between `<script>` defer and async attributes? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: The `<script>` tag’s `defer` and `async` attributes control JavaScript loading. `defer` loads scripts in order, executing after DOM parsing, like `<script defer src="app.js">`. `async` loads and executes scripts as soon as ready, potentially out of order. `defer` is ideal for DOM-dependent scripts, `async` for independent ones (e.g., analytics). Interviewers ask this for performance optimization.  
    - **Practical Use**: Used in web apps to optimize script loading for speed and functionality.  
    - **Code Snippet**:  
      ```html
      <script defer src="main.js"></script>
      <script async src="analytics.js"></script>
      ```

83. **What is the `<noscript>` tag used for?**  
    - **Explanation**: `<noscript>` displays content when JavaScript is disabled, like `<noscript>Please enable JS</noscript>`. It’s placed in `<body>` or `<head>`. It’s critical for accessibility and SEO in JS-heavy sites.  
    - **Practical Use**: Used in web apps to show fallback content for no-JS users.

84. **What is the `<optgroup>` tag used for?**  
    - **Explanation**: `<optgroup>` groups options in `<select>`, like `<optgroup label="Colors"><option>Red</option></optgroup>`. The `label` attribute names the group. It’s semantic, improving form accessibility.  
    - **Practical Use**: Used in dropdowns for categorizing options like products or cities.

85. **What is the `<bdi>` tag used for?**  
    - **Explanation**: `<bdi>` isolates bidirectional text, like `<bdi>عربي</bdi>`, ensuring correct rendering in mixed-language contexts. It’s semantic, aiding accessibility for RTL languages. Rarely used but important for i18n.  
    - **Practical Use**: Used in multilingual sites for Arabic or Hebrew text.

86. **What is the `<wbr>` tag used for?**  
    - **Explanation**: `<wbr>` suggests a word-break opportunity, like `longtext<wbr>here`, allowing browsers to break text at that point. It’s semantic, improving readability in narrow layouts. It’s a void element.  
    - **Practical Use**: Used in responsive designs to break long URLs or words.

87. **What is the `<rp>` tag used for?**  
    - **Explanation**: `<rp>`, used in `<ruby>`, provides fallback parentheses for ruby annotations, like `<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>`. It’s semantic, aiding accessibility for East Asian text. Rarely used in Western sites.  
    - **Practical Use**: Used in educational sites for Chinese or Japanese pronunciation.

88. **What is the `<ruby>` tag used for?**  
    - **Explanation**: `<ruby>` displays annotations for East Asian characters, like `<ruby>漢<rt>kan</rt></ruby>`, showing pronunciation. It’s semantic, with `<rt>` for annotations and `<rp>` for fallbacks. Enhances accessibility for language learning.  
    - **Practical Use**: Used in language apps for Japanese or Chinese text.

89. **What is the `<keygen>` tag and why is it deprecated?**  
    - **Explanation**: `<keygen>` generated key pairs for form authentication, like `<keygen name="key">`. It’s deprecated in HTML5 due to security concerns and lack of browser support. Alternatives like Web Crypto API are used.  
    - **Practical Use**: Rarely used; mentioned in interviews for historical context.

90. **What is the `<area>` tag used for?**  
    - **Explanation**: `<area>`, used in `<map>`, defines clickable regions in images, like `<area shape="rect" coords="0,0,100,100" href="page.html">`. Attributes include `shape`, `coords`, and `href`. It’s a void element, enhancing interactivity.  
    - **Practical Use**: Used in image maps for interactive diagrams or navigation.

91. **What is the `<map>` tag used for?**  
    - **Explanation**: `<map>` defines an image map, linking `<img>` to clickable areas via `<area>`, like `<map name="map"><area href="page.html"></map>`. The `name` attribute connects to `usemap` in `<img>`. It’s semantic and accessible.  
    - **Practical Use**: Used in interactive infographics or legacy navigation menus.

92. **_What are ARIA attributes and their importance? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: ARIA (Accessible Rich Internet Applications) attributes, like `role`, `aria-label`, and `aria-hidden`, enhance accessibility for dynamic content. For example, `<div role="button" aria-label="Close">X</div>` describes custom controls. They bridge gaps in non-semantic HTML, ensuring screen reader compatibility. They’re critical for WCAG compliance and often asked in accessibility-focused interviews. Overuse can clutter code, so use native HTML where possible.  
    - **Practical Use**: Used in custom UI components like modals or tabs for accessibility.  
    - **Code Snippet**:  
      ```html
      <div role="alert" aria-live="assertive">Error occurred</div>
      ```

93. **What is the `rel` attribute in HTML?**  
    - **Explanation**: The `rel` attribute defines relationships between the current document and linked resources, like `<a rel="nofollow" href="link">` or `<link rel="icon" href="favicon.ico">`. Common values include `nofollow`, `noopener`, `alternate`, and `stylesheet`. It’s critical for SEO and security.  
    - **Practical Use**: Used in external links or favicons for security and branding.

94. **What is the `lang` attribute in HTML?**  
    - **Explanation**: The `lang` attribute specifies the language of an element, like `<html lang="en">` or `<span lang="fr">Bonjour</span>`. It aids screen readers, SEO, and styling for multilingual sites. Subtags like `en-US` add specificity.  
    - **Practical Use**: Used in global websites for accessibility and localization.

95. **What is the `charset` attribute in `<meta>`?**  
    - **Explanation**: The `charset` attribute in `<meta>`, like `<meta charset="UTF-8">`, defines the character encoding for the document. UTF-8 supports most characters, ensuring proper text rendering. It’s placed early in `<head>` for parsing.  
    - **Practical Use**: Used in all webpages to prevent text display issues.

96. **What is the `autocomplete` attribute in forms?**  
    - **Explanation**: The `autocomplete` attribute in form elements, like `<input autocomplete="on">`, controls browser autofill. Values include `on`, `off`, or specific fields (e.g., `email`). It improves UX but can be disabled for sensitive data.  
    - **Practical Use**: Used in login forms to suggest emails or names.

97. **What is the `accept` attribute in `<input>`?**  
    - **Explanation**: The `accept` attribute in `<input type="file">`, like `<input type="file" accept=".pdf,.jpg">`, restricts file types for uploads. Values include file extensions or MIME types (e.g., `image/*`). It enhances UX and validation.  
    - **Practical Use**: Used in file upload forms for resumes or images.

98. **What is the `<q>` tag used for?**  
    - **Explanation**: `<q>` represents short inline quotations, like `<q>Quote</q>`, typically styled with quotes. It’s semantic, unlike `<blockquote>` for longer quotes, and supports `cite` for sources. It aids accessibility and SEO.  
    - **Practical Use**: Used in articles for brief quotes or citations.

---

## FAQs for Advanced Topics
- **When to use Web Workers?** Use for CPU-intensive tasks like data processing, not DOM manipulation, to avoid UI blocking. Alternatives include `setTimeout` for simpler tasks.
- **Why use `<picture>` over `<img>`?** `<picture>` supports responsive images with multiple formats (e.g., WebP) and sizes, reducing bandwidth compared to `<img>` alone.
- **How to explain accessibility in interviews?** Focus on semantic HTML, ARIA, and attributes like `alt` or `tabindex`, emphasizing WCAG compliance and inclusive UX.