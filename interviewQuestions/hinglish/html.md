# Consolidated HTML Interview Questions with Detailed Answers

Yeh hai **98 unique HTML interview questions** ka artifact, jo interviews mostly asked sab topics cover karta hai. Isme **35 important questions** ko **<i style="color: #0000FF">(imp)</i>** ke saath underline kiya hai, jisme 5-7 sentences aur code snippets hain. Normal questions mein 3-5 sentences, aur hard questions mein code snippets. Har question ke saath **Practical Use** section (2-3 lines) hai. **Interview Tips** bhi diya hai taaki aap interview mein ekdum faad de. Yeh notes apni prep ke liye perfect hain!

## Interview Tips
- **Short aur Sweet**: `(imp)` questions jaise semantic HTML ko 30 second mein explain kar – focus on benefits (jaise SEO, accessibility).
- **Examples De**: Real-world examples bol, jaise `<table>` e-commerce ke product comparison ke liye.
- **Thodi Depth**: Advanced topics (jaise Web Workers) pe trade-offs ya alternatives bhi mention kar taaki interviewer impress ho.
- **Code Practice Kar**: Forms, tables, ya APIs ke snippets whiteboard ya editor pe likhne ki practice kar.

---

## Beginner Questions (30)
Yeh basic HTML concepts hain, freshers ke liye perfect.

1. **_HTML kya hota hai? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: HTML (HyperText Markup Language) web pages banane ka standard language hai, jo tags se content jaise text, images, aur links banata hai. Yeh web development ka backbone hai, CSS ke saath style aur JavaScript ke saath interactivity deta hai. HTML5 latest version hai, jisme semantic tags (`<header>`, `<article>`), multimedia (`<video>`, `<audio>`), aur APIs (jaise Geolocation) hain. Jaise `<h1>Hello</h1>` heading banata hai, aur `<a href="https://example.com">Link</a>` hyperlink. Accessible aur SEO-friendly sites ke liye zaroori hai.  
   - **Practical Use**: Blogs ya e-commerce sites ke liye headers, paragraphs, aur menus banane mein use hota hai.  
   - **Code Snippet**:  
     ```html
     <h1>Welcome Bhai</h1>
     <p>Yeh ek paragraph hai.</p>
     ```

2. **Tags aur attributes kya hote hain?**  
   - **Explanation**: Tags HTML ke building blocks hain, jaise `<p>` paragraph ke liye ya `<img>` image ke liye. Attributes extra info dete hain, jaise `<img src="image.jpg">` mein `src` ya `<a href="page.html">` mein `href`. Jaise `<p align="center">Text</p>` text ko center karta hai. Attributes opening tags mein aate hain aur functionality ya look control karte hain.  
   - **Practical Use**: Navigation bars ya product images ke layouts banane mein use hota hai.  
   - **Code Snippet**:  
     ```html
     <a href="https://example.com" title="Click Kar">Click</a>
     ```

3. **HTML elements aur tags mein kya farak hai?**  
   - **Explanation**: Tags markup hote hain jo elements banate hain, jaise `<div>` ya `</div>` start ya end ke liye. Element mein opening tag, closing tag (agar hai), aur content aata hai, jaise `<div>Content</div>`. Void elements jaise `<img>` ke closing tag nahi hote. Jaise `<p>Hello</p>` ek element hai, jisme `<p>` aur `</p>` tags hain. Yeh DOM manipulation ke liye important hai.  
   - **Practical Use**: JavaScript mein elements target hote hain (jaise `document.querySelector('div')`) menus ke liye.

4. **_`<!DOCTYPE html>` declaration ka kya kaam hai? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: `<!DOCTYPE html>` document ke shuru mein aata hai, browsers ko bolta hai ki HTML5 standards use karo, taaki **standards mode** mein render ho, na ki purana **quirks mode**. Iske bina CSS ya JavaScript mein rendering issues ho sakte hain, jaise box model galat dikhna. Jaise `<!DOCTYPE html><html><p>Hello</p></html>` consistent rendering deta hai. Yeh case-insensitive hai aur `<html>` se pehle aata hai. Cross-browser compatibility ke liye must hai.  
   - **Practical Use**: Har webpage mein use hota hai taaki blogs, portfolios, ya e-commerce mein styling errors na ho.  
   - **Code Snippet**:  
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head><title>Meri Page</title></head>
       <body><p>Hello Bhai</p></body>
     </html>
     ```

5. **Block-level aur inline elements mein kya farak hai?**  
   - **Explanation**: Block-level elements poora width lete hain aur nayi line se shuru hote hain, jaise `<div>`, `<p>`, ya `<h1>`, sections ke liye best. Inline elements sirf apne content ka width lete hain aur text ke saath flow mein rehte hain, jaise `<span>`, `<a>`, ya `<img>`. Jaise `<p>Text</p>` full width lega, lekin `<a href="#">Link</a>` inline rahega. CSS se behavior change ho sakta hai (jaise `display: inline-block`).  
   - **Practical Use**: Block elements page sections jaise headers banate hain, inline elements articles mein links ke liye.

6. **_HTML mein `id` attribute kya hai? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: `id` attribute ek unique identifier deta hai element ko, taaki CSS, JavaScript, ya anchor linking ke liye target kar sake. Har `id` unique hona chahiye, warna conflicts hote hain, browser pehla instance hi leta hai. Jaise `<div id="main">Content</div>` ko `#main { color: blue; }` se style ya `document.getElementById('main')` se access kar sakte hain. Headers ya modals jaise single elements ke liye best hai. Galat use se functionality ya accessibility kharab ho sakti hai.  
   - **Practical Use**: Page navigation, unique banners style karne, ya JavaScript interactions ke liye use hota hai.  
   - **Code Snippet**:  
     ```html
     <div id="main">Welcome</div>
     <style>#main { background: lightblue; }</style>
     ```

7. **_HTML mein `class` attribute kya hai? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: `class` attribute reusable identifiers deta hai, taaki ek hi style ya JavaScript behavior multiple elements pe apply ho. `id` ke ulat, classes reuse ho sakte hain, jaise `class="box highlight"`. Jaise `<div class="box">Item</div>` ko `.box { border: 1px solid; }` se style kiya jata hai. CSS frameworks jaise Bootstrap aur group selections (jaise `querySelectorAll('.box')`) ke liye zaroori hai. Scalable designs ke liye must hai.  
   - **Practical Use**: Buttons ya cards style karne aur menus ke event handling ke liye use hota hai.  
   - **Code Snippet**:  
     ```html
     <div class="box highlight">Item</div>
     <style>
       .box { padding: 10px; }
       .highlight { background: yellow; }
     </style>
     ```

8. **_HTML mein meta tags kya hote hain? <i style="color: #0000FF">(imp)</i>_**  
   - **Explanation**: Meta tags `<head>` mein aate hain, jo metadata dete hain jaise character encoding, page description, ya viewport settings, page pe visible nahi hote. Jaise `<meta charset="UTF-8">` text encoding set karta hai, `<meta name="description" content="Meri site">` SEO ke liye, aur `<meta name="viewport" content="width=device-width, initial-scale=1.0">` mobile-friendly design ke liye. Yeh browsers, search engines, aur social media platforms ko guide karte hain. Key meta tags na hone se accessibility, SEO, ya mobile rendering kharab hota hai.  
   - **Practical Use**: Blogs mein SEO optimize karne, mobile responsiveness, aur social media sharing ke liye use hota hai.  
   - **Code Snippet**:  
     ```html
     <head>
       <meta charset="UTF-8">
       <meta name="description" content="Web development seekho">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
     </head>
     ```

9. **HTML entities kya hote hain?**  
   - **Explanation**: HTML entities special characters ke codes hote hain, jaise `&` ke liye `&` ya `<` ke liye `<`, taaki rendering sahi ho. Jaise `©` se © dikhta hai, aur ` ` non-breaking space banata hai. Forms ya CMS outputs mein parsing errors rokne ke liye use hote hain.  
   - **Practical Use**: Footers mein © dikhane ya navigation mein text wrapping rokne ke liye use hota hai.

10. **_`<img>` tag ke key attributes kya hain? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<img>` tag ke attributes jaise `src` (image URL, jaise `<img src="image.jpg">`), `alt` (accessibility text), `width`/`height` (dimensions), aur `loading` (jaise `lazy`) hote hain. `alt` (jaise `alt="Product photo"`) screen readers, SEO, aur image fail hone pe zaroori hai. `width` aur `height` layout shifts rokte hain, performance badhate hain. Jaise `<img src="photo.jpg" alt="Shoes" width="100">` accessibility aur speed deta hai. `alt` na likhna WCAG standards violate karta hai.  
    - **Practical Use**: E-commerce mein product images ya blog photos ke liye, accessibility aur fast loading ke saath.  
    - **Code Snippet**:  
      ```html
      <img src="product.jpg" alt="Blue joota" width="100" height="100" loading="lazy">
      ```

11. **_HTML mein hyperlinks kaise banate hain? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Hyperlinks `<a>` tag se bante hain, `href` se URL specify hota hai, jaise `<a href="https://example.com">Link</a>`. Attributes jaise `target="_blank"` new tab mein kholta hai, `title` tooltip deta hai, aur `rel="nofollow"` SEO ya security ke liye. Relative URLs (jaise `href="page.html"`) internal linking, absolute URLs external ke liye. Jaise `<a href="#section">Go</a>` page sections pe le jata hai.  
    - **Practical Use**: Menus, footer links, ya blogs ke CTAs ke liye use hota hai.  
    - **Code Snippet**:  
      ```html
      <a href="https://example.com" target="_blank" rel="noopener">Jao</a>
      ```

12. **_HTML mein tables kaise banate hain? <i style="color: #0000FF">(imp)</i>_**   
    - **Explanation**: HTML tables `<table>` se bante hain, `<tr>` rows ke liye, `<td>` cells ke liye, aur `<th>` headers ke liye. `border` attribute ya CSS se style hota hai, aur `<caption>` accessible title deta hai. Jaise `<table><tr><th>Name</th><td>John</td></tr></table>` table banata hai. Tables sirf tabular data ke liye hote hain, layouts ke liye nahi, modern standards ke hisaab se. Accessibility ke liye headers aur captions zaroori hain.  
    - **Practical Use**: E-commerce mein product comparisons ya educational platforms mein schedules ke liye use hota hai.  
    - **Code Snippet**:  
      ```html
      <table border="1">
        <caption>User Data</caption>
        <tr>
          <th>Naam</th>
          <th>Umar</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
      </table>
      ```

13. **_HTML tables mein `rowspan` aur `colspan` mein kya farak hai? <i style="color: #0000FF">(imp)</i>_**   
    - **Explanation**: `rowspan` ek cell ko multiple rows tak extend karta hai, aur `colspan` multiple columns tak. Jaise `<td rowspan="2">Data</td>` do rows merge karta hai, aur `<td colspan="2">Data</td>` do columns. `<td>` ya `<th>` mein use hote hain, complex layouts ke liye. Zyada use se accessibility kharab ho sakti hai, toh headers clear hone chahiye. Interviews mein structured data ke liye pucha jata hai.  
    - **Practical Use**: Financial reports ya timetables mein headers merge karne ke liye, readability ke liye.  
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
          <td>Aur Data</td>
        </tr>
      </table>
      ```

14. **`<blockquote>` tag ka kya kaam hai?**   
    - **Explanation**: `<blockquote>` kisi aur source se quoted content dikhata hai, jaise `<blockquote cite="https://example.com">Quote</blockquote>`. `cite` attribute source URL deta hai (visible nahi hota). Yeh semantic hai, screen readers ke liye helpful, aur CSS se indentation milta hai. Long quotations ke liye, `<q>` se alag jo short quotes ke liye hai.  
    - **Practical Use**: Articles ya blogs mein interviews ya books ke quotes highlight karne ke liye.

15. **_`<strong>` aur `<b>` tags mein kya farak hai? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<strong>` semantic hai, strong importance ya urgency dikhata hai, jaise `<strong>Warning!</strong>`, screen readers isko emphasize karte hain accessibility ke liye. `<b>` sirf visual bold styling ke liye, koi meaning nahi. `<strong>` SEO aur accessibility ke liye better hai, `<b>` style ke liye. Modern standards mein `<strong>` prefer hota hai. Jaise `<strong>Deadline</strong>` urgency dikhata hai.  
    - **Practical Use**: `<strong>` forms mein alerts ke liye, `<b>` legacy designs mein bolding ke liye.  
    - **Code Snippet**:  
      ```html
      <p><strong>Warning:</strong> Abhi submit karo.</p>
      <p><b>Bold text</b> style ke liye.</p>
      ```

16. **`<em>` aur `<i>` tags mein kya farak hai?**  
    - **Explanation**: `<em>` semantic hai, emphasized text dikhata hai stress ke saath, jaise `<em>Urgent</em>`, screen readers isko stress dete hain. `<i>` sirf italic styling ke liye, jaise `<i>Book title</i>`. `<em>` accessibility aur SEO ke liye better, `<i>` style ke liye. Modern standards `<em>` prefer karte hain.  
    - **Practical Use**: `<em>` tutorials mein key phrases ke liye, `<i>` blogs mein book titles ke liye.

17. **HTML ke void elements kya hote hain?**  
    - **Explanation**: Void elements khud complete hote hain, inke closing tags ya content nahi hota, jaise `<br>`, `<img>`, ya `<hr>`. HTML5 mein trailing slash nahi chahiye (jaise `<img src="image.jpg">`). Yeh single tasks jaise images ya line breaks ke liye use hote hain.  
    - **Practical Use**: Product listings mein images ya forms mein line breaks ke liye.

18. **HTML mein white spaces collapse karne ka kya fayda hai?**  
    - **Explanation**: HTML multiple spaces, tabs, ya line breaks ko ek space mein collapse karta hai, taaki text consistent dikhe. Jaise `<p>Text    with   spaces</p>` “Text with spaces” dikhega. CSS (jaise `white-space: pre`) ya entities (` `) spacing control karte hain.  
    - **Practical Use**: Blogs ya CMS outputs mein clean text ke liye, formatting errors se bachata hai.

19. **HTML4 aur HTML5 mein kya farak hai?**  
    - **Explanation**: HTML5 mein semantic tags (`<header>`, `<article>`), multimedia (`<video>`, `<audio>`), aur APIs (Geolocation, Web Storage) hain, jo HTML4 mein nahi the. HTML4 Flash plugins aur generic `<div>`s pe depend karta tha. HTML5 form validation aur mobile-friendly design deta hai.  
    - **Practical Use**: HTML5 modern sites banata hai video players, responsive forms, aur semantic layouts ke saath.

20. **Iframe kya hai aur kahan use hota hai?**  
    - **Explanation**: `<iframe>` dusri webpage ya content embed karta hai, jaise `<iframe src="https://example.com"></iframe>`, alag context banata hai. Attributes jaise `width` ya `allow` appearance aur permissions control karte hain. Videos, maps, ya ads ke liye use hota hai, security (jaise sandboxing) ke saath.  
    - **Practical Use**: Blogs mein YouTube videos ya contact pages mein Google Maps embed karne ke liye.  
    - **Code Snippet**:  
      ```html
      <iframe src="https://www.youtube.com/embed/video_id" width="560" height="315"></iframe>
      ```

21. **`<title>` tag ka kya kaam hai?**  
    - **Explanation**: `<title>` tag `<head>` mein page ka title set karta hai, jo browser tabs aur search results mein dikhta hai, jaise `<title>Meri Site</title>`. Yeh SEO aur navigation ke liye zaroori hai. Short, descriptive titles rankings improve karte hain.  
    - **Practical Use**: Blogs ya product pages ke titles set karne ke liye, SEO ke liye.

22. **`<br>` tag ka kya kaam hai?**  
    - **Explanation**: `<br>` tag text mein line break deta hai, jaise `<p>Hello<br>World</p>`, content ko next line pe le jata hai. Yeh void element hai, sparingly use hota hai kyunki CSS spacing ke liye better hai. Zyada use se accessibility kharab hoti hai.  
    - **Practical Use**: Forms mein addresses ya blogs mein poems ke formatting ke liye.

23. **`<hr>` tag ka kya kaam hai?**  
    - **Explanation**: `<hr>` tag horizontal rule banata hai, jaise `<hr>`, content sections ko visually alag karta hai. Yeh void element hai, CSS se width ya color style hota hai. Semantic hai, thematic break dikhata hai.  
    - **Practical Use**: Articles ya forms mein sections alag karne ke liye portfolios mein.

24. **_`<a>` tag ke key attributes kya hain? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<a>` tag ke attributes jaise `href` (URL), `target` (jaise `_blank` new tab ke liye), `rel` (jaise `nofollow` SEO ke liye), `title` (tooltip), aur `download` (file downloads) hote hain. Jaise `<a href="file.pdf" download>Download</a>` file download karta hai. Yeh navigation, accessibility, aur security control karte hain. `rel="noopener"` new tabs mein security risks rokta hai. Interviews mein navigation design ke liye pucha jata hai.  
    - **Practical Use**: Navigation menus ya downloadable resources ke liye e-commerce ya blogs mein.  
    - **Code Snippet**:  
      ```html
      <a href="page.html" target="_blank" rel="noopener" title="Jao">Link</a>
      ```

25. **`<label>` tag ka kya kaam hai?**  
    - **Explanation**: `<label>` tag form controls ke saath text associate karta hai, jaise `<label for="name">Naam:</label><input id="name">`, accessibility badhata hai. `for` attribute input ke `id` se match karta hai. Label click karne se input focus hota hai, screen readers ke liye helpful.  
    - **Practical Use**: Registration pages mein user-friendly input fields ke liye forms mein.

26. **_Form elements ke key attributes kya hain? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Form elements jaise `<input>`, `<textarea>`, aur `<select>` ke attributes hote hain `type` (jaise `text`, `email`), `name` (form data key), `value` (default value), `required`, `disabled`, aur `placeholder`. Jaise `<input type="email" name="email" required>` valid input ensure karta hai. Yeh validation, accessibility, aur submission control karte hain. `name` server-side processing ke liye zaroori hai. Interviews mein form design ke liye key hai.  
    - **Practical Use**: Login ya checkout forms mein user data securely collect karne ke liye.  
    - **Code Snippet**:  
      ```html
      <form>
        <input type="text" name="username" placeholder="Naam daalo" required>
        <textarea name="comment"></textarea>
      </form>
      ```

27. **`<input>` tag ka kya kaam hai?**  
    - **Explanation**: `<input>` tag interactive form controls banata hai, jaise text fields ya checkboxes, `type` attributes se (jaise `text`, `radio`, `file`). Jaise `<input type="checkbox" name="agree">` checkbox banata hai. Yeh void element hai, user input ke liye zaroori.  
    - **Practical Use**: Sign-up pages mein emails ya passwords ke liye forms mein.

28. **`<textarea>` tag ka kya kaam hai?**  
    - **Explanation**: `<textarea>` tag multi-line text input deta hai, jaise `<textarea name="comment"></textarea>`, lambi user input ke liye. Attributes jaise `rows`, `cols`, ya `placeholder` size aur behavior control karte hain. Detailed input ke forms mein zaroori hai.  
    - **Practical Use**: Contact forms ya blogs ke comment sections mein.

29. **`<select>` tag ka kya kaam hai?**  
    - **Explanation**: `<select>` tag dropdown menu banata hai, `<option>` tags ke saath choices ke liye, jaise `<select><option>Item</option></select>`. Attributes jaise `name` aur `multiple` form submission aur selection control karte hain. User choices ke liye use hota hai.  
    - **Practical Use**: E-commerce mein countries ya categories select karne ke liye forms mein.

30. **`<button>` tag ka kya kaam hai?**  
    - **Explanation**: `<button>` tag clickable buttons banata hai, jaise `<button type="submit">Submit</button>`, form submission ya actions ke liye. Attributes jaise `type` (`submit`, `button`, `reset`) aur `disabled` behavior control karte hain. Yeh `<input type="submit">` se zyada flexible hai.  
    - **Practical Use**: Form submissions ya interactive CTAs ke liye web apps mein.

---

## Intermediate Questions (30)
Yeh semantic HTML, forms, accessibility, aur responsive design cover karte hain.

31. **_Semantic HTML kya hota hai? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Semantic HTML tags use karta hai jo content ka meaning batate hain, jaise `<header>`, `<article>`, ya `<nav>`, generic `<div>`s ke bajaye. Yeh accessibility ke liye screen readers help karta hai, SEO ke liye crawlers ko structure samajhne mein madad deta hai, aur maintenance aasan karta hai. Jaise `<nav><a href="#home">Home</a></nav>` navigation batata hai. HTML5 mein `<main>` jaise tags `<div>`s replace karte hain. Non-semantic code assistive tech ko confuse karta hai aur rankings kharab karta hai.  
    - **Practical Use**: Blogs mein `<article>` posts ke liye, `<nav>` menus ke liye, SEO aur accessibility ke liye.  
    - **Code Snippet**:  
      ```html
      <header>
        <h1>Mera Blog</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>
      ```

32. **`<header>` tag ka kya kaam hai?**  
    - **Explanation**: `<header>` page ya section ka introductory content dikhata hai, jaise logos ya navigation, jaise `<header><h1>Welcome</h1></header>`. Yeh semantic hai, accessibility aur SEO ke liye helpful. `<head>` se alag, yeh visible hai aur multiple times use ho sakta hai.  
    - **Practical Use**: Website headers mein logos ya news sites mein article headers ke liye.

33. **`<footer>` tag ka kya kaam hai?**  
    - **Explanation**: `<footer>` bottom ka content dikhata hai, jaise contact info ya copyright, jaise `<footer><p>© 2025</p></footer>`. Yeh semantic hai, screen readers aur SEO ke liye helpful. `<article>`s ya pages mein use ho sakta hai.  
    - **Practical Use**: Site footers mein links ya blogs mein author credits ke liye.

34. **`<nav>` tag ka kya kaam hai?**  
    - **Explanation**: `<nav>` navigation links define karta hai, jaise menus, jaise `<nav><a href="#home">Home</a></nav>`. Yeh semantic hai, screen readers ko navigation samajhne mein help karta hai. Har link ke liye nahi, major navigation blocks ke liye use hota hai.  
    - **Practical Use**: E-commerce mein main menus ya pagination ke liye.

35. **`<article>` tag ka kya kaam hai?**  
    - **Explanation**: `<article>` independent content dikhata hai, jaise blog post, jaise `<article><h2>Title</h2><p>Content</p></article>`. Yeh semantic hai, SEO aur screen readers ke liye helpful. Syndicated content ke liye best hai.  
    - **Practical Use**: Blog posts ya reviews ke liye SEO ke liye.

36. **`<section>` tag ka kya kaam hai?**  
    - **Explanation**: `<section>` related content ko group karta hai, jaise ek chapter, jaise `<section><h2>Intro</h2><p>Details</p></section>`. Yeh semantic hai, accessibility ke liye content organize karta hai. Usually heading ke saath use hota hai, `<div>` se alag.  
    - **Practical Use**: Landing pages pe “Features” jaise sections organize karne ke liye.

37. **`<aside>` tag ka kya kaam hai?**  
    - **Explanation**: `<aside>` tangential content dikhata hai, jaise sidebars ya ads, jaise `<aside><p>Related</p></aside>`. Yeh semantic hai, secondary content ko alag karta hai. `<article>`s mein bhi use ho sakta hai.  
    - **Practical Use**: Blogs mein sidebars ads ya bios ke liye.

38. **`<main>` tag ka kya kaam hai?**  
    - **Explanation**: `<main>` primary content dikhata hai, headers ya sidebars ko chhod ke, jaise `<main><h1>Content</h1></main>`. Yeh semantic hai, screen readers ko core content pe focus karne deta hai. Ek page mein sirf ek visible `<main>` hota hai.  
    - **Practical Use**: Blogs ya product pages ke primary content wrap karne ke liye.

39. **_`<header>` aur `<head>` tags mein kya farak hai? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<head>` metadata rakhta hai, jaise `<title>` ya `<meta>`, jo browsers ke liye hai lekin visible nahi. `<header>` semantic, visible element hai introductory content ke liye, jaise `<header><h1>Welcome</h1></header>`. `<head>` mandatory hai, `<header>` optional. Inko confuse karna semantic knowledge ki kami dikhata hai. Jaise `<head><title>Site</title></head>` metadata set karta hai, `<header>` content structure karta hai.  
    - **Practical Use**: `<head>` SEO ke liye, `<header>` blogs mein navigation bars ke liye.  
    - **Code Snippet**:  
      ```html
      <head>
        <title>Meri Site</title>
      </head>
      <body>
        <header>
          <h1>Welcome</h1>
        </header>
      </body>
      ```

40. **`<figure>` tag ka kya kaam hai?**  
    - **Explanation**: `<figure>` images ya code jaise content ko group karta hai, optional `<figcaption>` ke saath, jaise `<figure><img src="chart.jpg"><figcaption>Data</figcaption></figure>`. Yeh semantic hai, captions ko content se link karke accessibility deta hai. Movable content ke liye use hota hai.  
    - **Practical Use**: Articles mein images ya reports mein charts ke captions ke liye.  
    - **Code Snippet**:  
      ```html
      <figure>
        <img src="photo.jpg" alt="Landscape">
        <figcaption>Scenic view</figcaption>
      </figure>
      ```

41. **`<figcaption>` tag ka kya kaam hai?**  
    - **Explanation**: `<figcaption>`, `<figure>` ke andar, content ke liye caption deta hai, jaise `<figcaption>Chart</figcaption>`. Yeh semantic hai, screen readers aur SEO ke liye helpful. Figure ke content se pehle ya baad mein aa sakta hai.  
    - **Practical Use**: Educational content mein image ya chart captions ke liye.

42. **_`<form>` tag aur uske key attributes kya hain? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<form>` tag interactive forms banata hai user input ke liye, jaise `<form action="/submit" method="POST">`. Key attributes hain `action` (submission URL), `method` (`GET` ya `POST`), `enctype` (jaise `multipart/form-data` files ke liye), aur `novalidate`. Jaise `<form action="/submit" method="POST" enctype="multipart/form-data">` file uploads handle karta hai. Yeh data submission aur validation ke liye zaroori hain. Interviews mein form-based questions ke liye key hai.  
    - **Practical Use**: Login, registration, ya checkout forms mein web apps ke liye.  
    - **Code Snippet**:  
      ```html
      <form action="/submit" method="POST">
        <input type="text" name="name">
        <button type="submit">Submit</button>
      </form>
      ```

43. **Forms mein `enctype` attribute kya hai?**   
    - **Explanation**: `<form>` ka `enctype` attribute batata hai ki form data kaise encode hoga submission ke liye. Common values hain `application/x-www-form-urlencoded` (default, text data), `multipart/form-data` (files), aur `text/plain` (raw text). Jaise `<form enctype="multipart/form-data">` file uploads ke liye. Complex form data handle karne ke liye zaroori hai.  
    - **Practical Use**: Profile pictures ya documents upload ke forms mein apps ke liye.  
    - **Code Snippet**:  
      ```html
      <form enctype="multipart/form-data" method="POST">
        <input type="file" name="file">
        <button type="submit">Upload</button>
      </form>
      ```

44. **`<fieldset>` tag ka kya kaam hai?**  
    - **Explanation**: `<fieldset>` related form elements ko group karta hai, jaise `<fieldset><legend>Details</legend><input></fieldset>`, accessibility badhata hai. `<legend>` tag caption deta hai. Yeh semantic hai, screen readers ke liye helpful, aur style ho sakta hai.  
    - **Practical Use**: Complex forms mein user info ya preferences group karne ke liye.

45. **`<legend>` tag ka kya kaam hai?**  
    - **Explanation**: `<legend>`, `<fieldset>` ke andar, grouped form elements ke liye caption deta hai, jaise `<legend>Personal Info</legend>`. Yeh semantic hai, screen readers ke liye accessibility deta hai. Usually `<fieldset>` ka pehla child hota hai.  
    - **Practical Use**: Surveys mein sections jaise “Contact Details” label karne ke liye.

46. **_HTML5 form validation attributes kya hain? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: HTML5 form validation attributes mein `required`, `pattern`, `min`, `max`, `minlength`, `maxlength`, aur `type` (jaise `email`, `number`) hote hain. Jaise `<input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">` valid email ensure karta hai. Yeh JavaScript validation kam karte hain, UX badhate hain. Browser ke error messages accessibility dete hain. Form-focused interviews ke liye key hai.  
    - **Practical Use**: Registration forms mein emails ya passwords validate karne ke liye bina extra code ke.  
    - **Code Snippet**:  
      ```html
      <input type="number" min="1" max="10" required>
      ```

47. **`<datalist>` tag ka kya kaam hai?**  
    - **Explanation**: `<datalist>` `<input>` ke liye predefined options ki list deta hai, jaise `<input list="options"><datalist id="options"><option>Item</option></datalist>`. Yeh autocompletion ke liye use hota hai, UX badhata hai. Semantic aur accessible hai.  
    - **Practical Use**: Search bars ya forms mein cities ya products suggest karne ke liye.  
    - **Code Snippet**:  
      ```html
      <input list="colors">
      <datalist id="colors">
        <option>Red</option>
        <option>Blue</option>
      </datalist>
      ```

48. **`<progress>` tag ka kya kaam hai?**  
    - **Explanation**: `<progress>` task completion dikhata hai, jaise `<progress value="50" max="100">50%</progress>`. Attributes `value` aur `max` progress define karte hain. Yeh semantic hai, accessibility ke liye, aur CSS se style hota hai.  
    - **Practical Use**: File uploads ya quizzes mein completion status dikhane ke liye.

49. **`<meter>` tag ka kya kaam hai?**  
    - **Explanation**: `<meter>` scalar value dikhata hai ek range mein, jaise `<meter value="75" min="0" max="100">75%</meter>`. Attributes mein `min`, `max`, `low`, `high`, aur `optimum` hote hain. Yeh semantic hai, `<progress>` se alag static measurements ke liye.  
    - **Practical Use**: Dashboards mein battery levels ya ratings dikhane ke liye.

50. **_HTML mein accessibility kya hai? <i style="color: #0000FF">(imp)</i>_** (New, Conceptual)  
    - **Explanation**: Accessibility matlab webpage sab ke liye usable ho, including disabilities wale log. Semantic tags jaise `<nav>` screen readers ko help karte hain, attributes jaise `alt`, `for`, aur `tabindex` context ya navigation dete hain. ARIA roles complex UI ke liye use hote hain. Jaise `<img alt="Photo">` images describe karta hai, aur `<label for="id">` inputs link karta hai. WCAG compliance UX, SEO, aur legal adherence ke liye zaroori hai.  
    - **Practical Use**: Public sites pe forms aur menus ke liye inclusivity ke liye.  
    - **Code Snippet**:  
      ```html
      <img src="product.jpg" alt="Blue joota">
      <label for="name">Naam:</label>
      <input id="name" type="text" tabindex="0">
      ```

51. **`tabindex` attribute kya hai?**  
    - **Explanation**: `tabindex` attribute keyboard navigation ka order control karta hai, jaise `<div tabindex="0">Content</div>`. Values hain `0` (natural order), positive numbers (custom order), ya `-1` (non-focusable). Accessibility ke liye zaroori hai, interactive elements reachable banata hai.  
    - **Practical Use**: Custom buttons ya modals mein keyboard accessibility ke liye.

52. **ARIA mein `role` attribute kya hai?**  
    - **Explanation**: `role` attribute, ARIA ka part, element ka purpose define karta hai assistive technologies ke liye, jaise `<div role="button">Click</div>`. Yeh non-semantic elements ke liye accessibility badhata hai. Jaise `role="navigation"` `<div>`s ko menus batata hai.  
    - **Practical Use**: Complex UI jaise accordions ya custom widgets mein.

53. **`<abbr>` tag ka kya kaam hai?**  
    - **Explanation**: `<abbr>` abbreviations mark karta hai, jaise `<abbr title="HyperText Markup Language">HTML</abbr>`, `title` full form deta hai. Yeh semantic hai, screen readers aur SEO ke liye helpful. CSS se underlines style hote hain.  
    - **Practical Use**: Technical docs ya blogs mein acronyms jaise CSS ya HTML ke liye.

54. **`<mark>` tag ka kya kaam hai?**  
    - **Explanation**: `<mark>` text highlight karta hai emphasis ke liye, jaise `<mark>Important</mark>`, usually yellow background se. Yeh semantic hai, relevance dikhata hai, search results ya notes mein use hota hai. CSS se appearance customize hota hai.  
    - **Practical Use**: Search pages ya tutorials mein key terms highlight karne ke liye.

55. **`<time>` tag ka kya kaam hai?**  
    - **Explanation**: `<time>` dates ya times dikhata hai, jaise `<time datetime="2025-05-18">May 18, 2025</time>`. `datetime` attribute machine-readable format deta hai. Yeh semantic hai, SEO aur screen readers ke liye helpful.  
    - **Practical Use**: Event listings ya blogs mein publish dates ke liye.

56. **`<details>` tag ka kya kaam hai?**  
    - **Explanation**: `<details>` collapsible section banata hai, jaise `<details><summary>More</summary><p>Info</p></details>`, `<summary>` toggle ke liye. Yeh semantic, accessible hai, aur JavaScript ke bina kaam karta hai.  
    - **Practical Use**: FAQs ya accordions ke liye documentation sites mein.  
    - **Code Snippet**:  
      ```html
      <details>
        <summary>Aur Padho</summary>
        <p>Extra content yahan.</p>
      </details>
      ```

57. **`<summary>` tag ka kya kaam hai?**  
    - **Explanation**: `<summary>`, `<details>` ke andar, visible toggle text deta hai, jaise `<summary>Click</summary>`. Yeh semantic hai, screen readers ke liye accessibility deta hai. CSS se style hota hai.  
    - **Practical Use**: Collapsible menus ya FAQs mein interactive content ke liye.

58. **`<output>` tag ka kya kaam hai?**  
    - **Explanation**: `<output>` form calculation results dikhata hai, jaise `<output name="result">0</output>`, `for` se inputs se link hota hai. Yeh semantic hai, accessibility ke liye, JavaScript ke saath use hota hai.  
    - **Practical Use**: Calculators ya dynamic forms mein live results ke liye.

59. **`<dialog>` tag ka kya kaam hai?**  
    - **Explanation**: `<dialog>` modal ya non-modal dialogs banata hai, jaise `<dialog open><p>Alert</p></dialog>`. `open` attribute dikhata hai, aur JavaScript (`showModal()`) behavior control karta hai. ARIA ke saath accessible hai.  
    - **Practical Use**: Pop-ups ya alerts ke liye web apps mein.  
    - **Code Snippet**:  
      ```html
      <dialog id="modal">
        <p>Action confirm karo?</p>
        <button onclick="modal.close()">Bandh</button>
      </dialog>
      ```

60. **`<address>` tag ka kya kaam hai?**  
    - **Explanation**: `<address>` contact info dikhata hai, jaise `<address>123 Street</address>`. Yeh semantic hai, screen readers aur SEO ke liye helpful, usually italics mein style hota hai. Physical ya email addresses ke liye use hota hai.  
    - **Practical Use**: Footers ya contact pages mein business details ke liye.

---

## Advanced Questions (38)
Yeh HTML5 APIs, performance, aur advanced attributes cover karte hain.

61. **_`<picture>` element HTML mein kya hai? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<picture>` responsive design ke liye multiple image sources deta hai, `<source>` tags ke saath conditions jaise screen size ya format ke liye. Jaise `<source srcset="image.webp" type="image/webp">` WebP serve karta hai, `<source media="(max-width: 600px)" srcset="small.jpg">` chhoti images load karta hai. `<img>` fallback ke liye hota hai. Yeh performance badhata hai bandwidth kam karke. Optimization ke liye interviews mein pucha jata hai.  
    - **Practical Use**: E-commerce mein adaptive product images ya portfolios mein optimized photos ke liye.  
    - **Code Snippet**:  
      ```html
      <picture>
        <source srcset="image.webp" type="image/webp">
        <source media="(max-width: 600px)" srcset="small.jpg">
        <img src="default.jpg" alt="Product">
      </picture>
      ```

62. **_Web development mein CDN ka kya role hai? <i style="color: #0000FF">(imp)</i>_**   
    - **Explanation**: Content Delivery Network (CDN) static resources (CSS, JS, images) ko distributed servers pe host karta hai taaki latency kam ho. Jaise `<script src="https://cdn.jsdelivr.net/jquery.js">` nearest server se fetch hota hai. CDNs performance, scalability, aur reliability badhate hain caching se. Security bhi dete hain (jaise DDoS protection), lekin fallback chahiye failures ke liye. Interviews mein performance optimization ke liye pucha jata hai.  
    - **Practical Use**: E-commerce mein scripts jaldi deliver karne ke liye, load times kam karne ke liye.  
    - **Code Snippet**:  
      ```html
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
      ```

63. **Web development mein file compression kya hai?**   
    - **Explanation**: File compression assets (images, CSS, JS) ka size kam karta hai faster load times ke liye. Image formats jaise WebP ya tools jaise TinyPNG quality kharabe bina compress karte hain, jaise 1MB JPEG to 200KB. Minification CSS/JS ko whitespace hata ke compress karta hai. Yeh mobile UX aur SEO improve karta hai.  
    - **Practical Use**: E-commerce mein product images ya scripts compress karne ke liye fast loading ke liye.

64. **_HTML5 APIs kya hain aur unke use? <i style="color: #0000FF">(imp)</i>_** (New, Conceptual)  
    - **Explanation**: HTML5 APIs browser ki capabilities badhate hain, app-like features dete hain. Geolocation location data fetch karta hai, Web Storage (`localStorage`, `sessionStorage`) data store karta hai, Web Workers background tasks chalate hain, aur Canvas/WebGL graphics render karte hain. Jaise `navigator.geolocation.getCurrentPosition()` coordinates deta hai. Yeh interactivity aur offline capabilities badhate hain, lekin HTTPS chahiye security ke liye. Interviews mein modern web dev knowledge ke liye pucha jata hai.  
    - **Practical Use**: Mapping apps (Geolocation), note-taking (Web Storage), ya visualizations (Canvas) ke liye.  
    - **Code Snippet**:  
      ```html
      <script>
        navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords.latitude));
        localStorage.setItem('theme', 'dark');
      </script>
      ```

65. **Web Storage API kya hai?**  
    - **Explanation**: Web Storage API (`localStorage`, `sessionStorage`) browser mein key-value pairs store karta hai, 5-10MB tak. `localStorage` tab tak rehta hai jab tak clear na ho, `sessionStorage` session tak. Jaise `localStorage.setItem('key', 'value')` data save karta hai. Cookies se simple, offline apps ke liye use hota hai.  
    - **Practical Use**: E-commerce mein cart items ya user preferences locally save karne ke liye.  
    - **Code Snippet**:  
      ```html
      <script>
        sessionStorage.setItem('user', 'John');
        console.log(sessionStorage.getItem('user')); // John
      </script>
      ```

66. **Geolocation API kya hai?**  
    - **Explanation**: Geolocation API user ka location fetch karta hai `navigator.geolocation` se, jaise `getCurrentPosition()` coordinates ke liye. User permission aur HTTPS chahiye. Jaise maps ya location-based services mein use hota hai. Accuracy GPS ya IP pe depend karta hai.  
    - **Practical Use**: Ride-sharing apps ya store locators mein user positioning ke liye.  
    - **Code Snippet**:  
      ```html
      <script>
        navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords));
      </script>
      ```

67. **Canvas API kya hai?**  
    - **Explanation**: Canvas API `<canvas>` se dynamic 2D graphics banata hai JavaScript ke saath, jaise `<canvas id="myCanvas"></canvas>`. Methods jaise `fillRect()` shapes draw karte hain. Games, charts, ya animations ke liye use hota hai, WebGL 3D ke liye.  
    - **Practical Use**: Data visualization dashboards ya simple browser games mein.  
    - **Code Snippet**:  
      ```html
      <canvas id="myCanvas"></canvas>
      <script>
        let ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.fillRect(10, 10, 100, 100);
      </script>
      ```

68. **_HTML5 mein Web Worker kya hai? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: Web Workers JavaScript ko background threads mein chalate hain, taaki UI block na ho, heavy tasks jaise data processing ke liye. `new Worker('script.js')` se banate hain, `postMessage()` se communicate karte hain. Jaise `<script>let w = new Worker('worker.js');</script>` computations offload karta hai. Yeh DOM access nahi karte, thread safety ke liye. Interviews mein performance optimization ke liye pucha jata hai.  
    - **Practical Use**: Analytics dashboards ya image processing apps mein smooth UX ke liye.  
    - **Code Snippet**:  
      ```html
      <script>
        let worker = new Worker('worker.js');
        worker.postMessage('Shuru');
        worker.onmessage = (e) => console.log(e.data);
      </script>
      ```

69. **`<video>` tag ka kya kaam hai?** (New, Conceptual)  
    - **Explanation**: `<video>` tag video content embed karta hai, jaise `<video src="movie.mp4" controls>`, attributes jaise `controls`, `autoplay`, `loop`, aur `poster` ke saath. Multiple `<source>` tags formats support karte hain (jaise MP4, WebM). `<track>` se captions accessible hain.  
    - **Practical Use**: E-learning mein video tutorials ya e-commerce mein product demos ke liye.  
    - **Code Snippet**:  
      ```html
      <video controls>
        <source src="movie.mp4" type="video/mp4">
        <track src="subtitles.vtt" kind="subtitles" srclang="en">
      </video>
      ```

70. **`<audio>` tag ka kya kaam hai?** (New, Conceptual)  
    - **Explanation**: `<audio>` tag audio embed karta hai, jaise `<audio src="song.mp3" controls>`, attributes jaise `controls`, `autoplay`, aur `loop` ke saath. Multiple `<source>` tags formats support karte hain (jaise MP3, WAV). Yeh accessible aur plugin-free hai.  
    - **Practical Use**: Podcasts ya portfolios mein background music ke liye.  
    - **Code Snippet**:  
      ```html
      <audio controls>
        <source src="song.mp3" type="audio/mpeg">
      </audio>
      ```

71. **`<track>` tag ka kya kaam hai?**  
    - **Explanation**: `<track>`, `<video>` ya `<audio>` mein, captions ya subtitles add karta hai, jaise `<track src="subtitles.vtt" kind="subtitles" srclang="en">`. Attributes jaise `kind` (jaise `subtitles`, `captions`) aur `srclang` hote hain. Yeh accessibility badhata hai.  
    - **Practical Use**: Video players mein multilingual subtitles ke liye e-learning mein.

72. **Images mein `srcset` attribute kya hai?**  
    - **Explanation**: `<img>` ka `srcset` attribute responsive design ke liye multiple image sources deta hai, jaise `<img srcset="small.jpg 320w, large.jpg 800w" sizes="(max-width: 600px) 320px, 800px">`. Yeh screen size ke hisaab se optimize loading karta hai. `sizes` ke saath layout ke liye use hota hai.  
    - **Practical Use**: Galleries ya product pages mein faster image loading ke liye.

73. **Images mein `loading` attribute kya hai?**  
    - **Explanation**: `<img>` ka `loading` attribute image loading control karta hai, jaise `<img src="image.jpg" loading="lazy">`. Values hain `lazy` (off-screen images defer) aur `eager` (turant load). Yeh page speed aur bandwidth improve karta hai.  
    - **Practical Use**: Lambi blog pages mein visible images prioritize karne ke liye.

74. **_HTML mein `data-` attribute kya hai? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `data-` attributes custom data store karte hain elements pe, jaise `<div data-id="123">Content</div>`, JavaScript (`dataset.id`) ya CSS (`[data-id]`) se accessible. Yeh dynamic apps ke liye flexible hain, non-standard attributes se bachate hain. Jaise `data-theme="dark"` themes toggle karta hai. Frameworks mein common, interviews mein JavaScript integration ke liye pucha jata hai.  
    - **Practical Use**: E-commerce mein product IDs ya settings store karne ke liye dynamic UI ke liye.  
    - **Code Snippet**:  
      ```html
      <div data-product="shirt">Item</div>
      <script>
        console.log(document.querySelector('div').dataset.product); // shirt
      </script>
      ```

75. **`contenteditable` attribute kya hai?**  
    - **Explanation**: `contenteditable` attribute elements ko editable banata hai, jaise `<div contenteditable="true">Yahan likho</div>`. Values `true` ya `false` hote hain. Rich text editors ke liye use hota hai, lekin changes save karne ke liye JavaScript chahiye.  
    - **Practical Use**: Note-taking apps ya CMS mein inline editing ke liye.  
    - **Code Snippet**:  
      ```html
      <div contenteditable="true">Yahan type karo</div>
      ```

76. **`draggable` attribute kya hai?**  
    - **Explanation**: `draggable` attribute drag-and-drop enable karta hai, jaise `<div draggable="true">Drag</div>`. Values `true` ya `false` hote hain. Drag and Drop API events (jaise `dragstart`) ke saath kaam karta hai. Keyboard alternatives ke saath accessible hai.  
    - **Practical Use**: Task boards ya file uploaders mein interactive UX ke liye.  
    - **Code Snippet**:  
      ```html
      <div draggable="true" ondragstart="event.dataTransfer.setData('text', 'data')">Drag</div>
      ```

77. **`<template>` tag ka kya kaam hai?**  
    - **Explanation**: `<template>` reusable HTML content store karta hai, jaise `<template><div>Content</div></template>`, jo render nahi hota jab tak JavaScript (`content.cloneNode()`) se activate na ho. Dynamic UI ke liye efficient, DOM manipulation kam karta hai. Interviews mein common topic hai.  
    - **Practical Use**: Web apps mein lists ya modals dynamically render karne ke liye.  
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

78. **`<slot>` tag ka kya kaam hai?**  
    - **Explanation**: `<slot>`, Web Components mein, custom content ke liye placeholders deta hai, jaise `<slot name="header"></slot>`. Yeh Shadow DOM ka part hai, flexible component design deta hai. Jaise `<my-component><h1 slot="header">Title</h1></my-component>` content insert karta hai.  
    - **Practical Use**: Reusable UI components jaise cards ya modals mein.

79. **`<base>` tag ka kya kaam hai?**  
    - **Explanation**: `<base>`, `<head>` mein, relative links ke liye base URL set karta hai, jaise `<base href="https://example.com/">`. Sab relative URLs (jaise `<a href="page.html">`) iske against resolve hote hain. Ek document mein ek baar use hota hai.  
    - **Practical Use**: Multi-page sites mein relative URLs simplify karne ke liye.

80. **HTML mein URL encoding kya hai?**  
    - **Explanation**: URL encoding special characters ko percent-encoded formats mein convert karta hai, jaise `space` to `%20`, safe URLs ke liye. Jaise `<a href="search?q=hello%20world">Search</a>` spaces encode karta hai. JavaScript ka `encodeURIComponent()` isko handle karta hai. Form submissions ke liye zaroori hai.  
    - **Practical Use**: Search forms ya APIs mein query parameters handle karne ke liye.

81. **`<link>` tag ka kya kaam hai?**  
    - **Explanation**: `<link>` `<head>` mein external resources connect karta hai, jaise `<link rel="stylesheet" href="style.css">` CSS ke liye. Attributes jaise `rel` (jaise `icon`), `href`, aur `type` hote hain. Yeh void element hai, styles ya favicons ke liye zaroori.  
    - **Practical Use**: Websites mein CSS ya favicons link karne ke liye branding ke liye.

82. **_`<script>` ke `defer` aur `async` attributes mein kya farak hai? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: `<script>` tag ke `defer` aur `async` attributes JavaScript loading control karte hain. `defer` scripts ko order mein load karta hai, DOM parsing ke baad execute hota hai, jaise `<script defer src="app.js">`. `async` scripts jaldi load aur execute hote hain, shayad out of order. `defer` DOM-dependent scripts ke liye, `async` independent (jaise analytics) ke liye. Interviews mein performance optimization ke liye pucha jata hai.  
    - **Practical Use**: Web apps mein script loading optimize karne ke liye speed aur functionality ke liye.  
    - **Code Snippet**:  
      ```html
      <script defer src="main.js"></script>
      <script async src="analytics.js"></script>
      ```

83. **`<noscript>` tag ka kya kaam hai?**  
    - **Explanation**: `<noscript>` content dikhata hai jab JavaScript disabled ho, jaise `<noscript>JS enable karo</noscript>`. Yeh `<body>` ya `<head>` mein aata hai. JS-heavy sites mein accessibility aur SEO ke liye zaroori hai.  
    - **Practical Use**: Web apps mein no-JS users ke liye fallback content dikhane ke liye.

84. **`<optgroup>` tag ka kya kaam hai?**  
    - **Explanation**: `<optgroup>` `<select>` mein options group karta hai, jaise `<optgroup label="Colors"><option>Red</option></optgroup>`. `label` attribute group ka naam deta hai. Yeh semantic hai, form accessibility badhata hai.  
    - **Practical Use**: Dropdowns mein products ya cities categorize karne ke liye.

85. **`<bdi>` tag ka kya kaam hai?**  
    - **Explanation**: `<bdi>` bidirectional text isolate karta hai, jaise `<bdi>عربي</bdi>`, mixed-language contexts mein sahi rendering ke liye. Yeh semantic hai, RTL languages ke liye accessibility deta hai. Western sites mein kam use hota hai lekin i18n ke liye important.  
    - **Practical Use**: Multilingual sites mein Arabic ya Hebrew text ke liye.

86. **`<wbr>` tag ka kya kaam hai?**  
    - **Explanation**: `<wbr>` word-break opportunity suggest karta hai, jaise `longtext<wbr>here`, browsers ko wahan text break karne deta hai. Yeh semantic hai, narrow layouts mein readability badhata hai. Void element hai.  
    - **Practical Use**: Responsive designs mein lambi URLs ya words break karne ke liye.

87. **`<rp>` tag ka kya kaam hai?**  
    - **Explanation**: `<rp>`, `<ruby>` mein, ruby annotations ke liye fallback parentheses deta hai, jaise `<ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp></ruby>`. Yeh semantic hai, East Asian text ke liye accessibility deta hai. Western sites mein kam use hota hai.  
    - **Practical Use**: Educational sites mein Chinese ya Japanese pronunciation ke liye.

88. **`<ruby>` tag ka kya kaam hai?**  
    - **Explanation**: `<ruby>` East Asian characters ke annotations dikhata hai, jaise `<ruby>漢<rt>kan</rt></ruby>`, pronunciation ke liye. Yeh semantic hai, `<rt>` annotations aur `<rp>` fallbacks ke liye. Language learning ke liye accessibility deta hai.  
    - **Practical Use**: Language apps mein Japanese ya Chinese text ke liye.

89. **`<keygen>` tag kya hai aur yeh deprecated kyun hai?**  
    - **Explanation**: `<keygen>` form authentication ke liye key pairs generate karta tha, jaise `<keygen name="key">`. HTML5 mein security concerns aur browser support na hone se deprecated hai. Web Crypto API jaise alternatives use hote hain.  
    - **Practical Use**: Ab kam use hota hai; interviews mein historical context ke liye pucha jata hai.

90. **`<area>` tag ka kya kaam hai?**  
    - **Explanation**: `<area>`, `<map>` mein, images mein clickable regions define karta hai, jaise `<area shape="rect" coords="0,0,100,100" href="page.html">`. Attributes jaise `shape`, `coords`, aur `href` hote hain. Yeh void element hai, interactivity badhata hai.  
    - **Practical Use**: Interactive diagrams ya navigation ke liye image maps mein.

91. **`<map>` tag ka kya kaam hai?**  
    - **Explanation**: `<map>` image map define karta hai, `<img>` ko clickable areas se link karta hai `<area>` ke saath, jaise `<map name="map"><area href="page.html"></map>`. `name` attribute `usemap` se connect hota hai `<img>` mein. Yeh semantic aur accessible hai.  
    - **Practical Use**: Interactive infographics ya legacy navigation menus mein.

92. **_ARIA attributes kya hain aur unki importance? <i style="color: #0000FF">(imp)</i>_**  
    - **Explanation**: ARIA (Accessible Rich Internet Applications) attributes, jaise `role`, `aria-label`, aur `aria-hidden`, dynamic content ke liye accessibility badhate hain. Jaise `<div role="button" aria-label="Close">X</div>` custom controls describe karta hai. Yeh non-semantic HTML ke gaps fill karte hain, screen reader compatibility ke liye. WCAG compliance ke liye zaroori, accessibility-focused interviews mein pucha jata hai. Zyada use se code clutter ho sakta hai, toh native HTML prefer karo.  
    - **Practical Use**: Custom UI components jaise modals ya tabs mein accessibility ke liye.  
    - **Code Snippet**:  
      ```html
      <div role="alert" aria-live="assertive">Error hua</div>
      ```

93. **HTML mein `rel` attribute kya hai?**  
    - **Explanation**: `rel` attribute current document aur linked resources ke relation define karta hai, jaise `<a rel="nofollow" href="link">` ya `<link rel="icon" href="favicon.ico">`. Common values hain `nofollow`, `noopener`, `alternate`, aur `stylesheet`. Yeh SEO aur security ke liye zaroori hai.  
    - **Practical Use**: External links ya favicons mein security aur branding ke liye.

94. **HTML mein `lang` attribute kya hai?**  
    - **Explanation**: `lang` attribute element ka language specify karta hai, jaise `<html lang="en">` ya `<span lang="fr">Bonjour</span>`. Yeh screen readers, SEO, aur multilingual sites ke styling ke liye helpful hai. Subtags jaise `en-US` specificity dete hain.  
    - **Practical Use**: Global websites mein accessibility aur localization ke liye.

95. **`<meta>` mein `charset` attribute kya hai?**  
    - **Explanation**: `<meta>` ka `charset` attribute document ka character encoding define karta hai, jaise `<meta charset="UTF-8">`. UTF-8 zyadatar characters support karta hai, text rendering sahi rakhta hai. `<head>` ke shuru mein aata hai parsing ke liye.  
    - **Practical Use**: Har webpage mein text display issues se bachne ke liye.

96. **Forms mein `autocomplete` attribute kya hai?**  
    - **Explanation**: `autocomplete` attribute form elements mein browser autofill control karta hai, jaise `<input autocomplete="on">`. Values hain `on`, `off`, ya specific fields (jaise `email`). Yeh UX badhata hai lekin sensitive data ke liye disable ho sakta hai.  
    - **Practical Use**: Login forms mein emails ya names suggest karne ke liye.

97. **`<input>` mein `accept` attribute kya hai?**  
    - **Explanation**: `<input type="file">` ka `accept` attribute upload file types restrict karta hai, jaise `<input type="file" accept=".pdf,.jpg">`. Values mein file extensions ya MIME types (jaise `image/*`) hote hain. Yeh UX aur validation badhata hai.  
    - **Practical Use**: File upload forms mein resumes ya images ke liye.

98. **`<q>` tag ka kya kaam hai?**  
    - **Explanation**: `<q>` short inline quotations dikhata hai, jaise `<q>Quote</q>`, usually quotes ke saath style hota hai. Yeh semantic hai, `<blockquote>` se alag jo lambi quotes ke liye, aur `cite` source ke liye support karta hai. Accessibility aur SEO ke liye helpful.  
    - **Practical Use**: Articles mein chhoti quotes ya citations ke liye.

---

## FAQs for Advanced Topics
- **Web Workers kab use karna?** CPU-heavy tasks jaise data processing ke liye, DOM manipulation ke liye nahi, taaki UI block na ho. Alternatives jaise `setTimeout` simpler tasks ke liye.
- **`<picture>` `<img>` se kyun better hai?** `<picture>` responsive images multiple formats (jaise WebP) aur sizes ke saath deta hai, bandwidth kam karta hai `<img>` ke muqable.
- **Interviews mein accessibility kaise explain karna?** Semantic HTML, ARIA, aur attributes jaise `alt` ya `tabindex` pe focus karo, WCAG compliance aur inclusive UX batate hue.