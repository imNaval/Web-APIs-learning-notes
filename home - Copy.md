# Less Important Questions (25)
What are CSS Colors?
What is Clearfix?
What is the Difference Between Margin and Padding?
What is CSS Inheritance?
What is the content Property?
What are Vendor Prefixes?
What is the Z-Index?
What are CSS Variables?
What is CSS Reset?
What is the overflow Property?
What is the calc() Function?
What is the opacity Property?
What is a CSS Sprite?
What is the Difference Between position: static and position: relative?
What is the font Shorthand Property?
What is the background Shorthand Property?
What is the flex Shorthand Property?
What is the grid-template Property?
What is the gap Property?
What is the Difference Between visibility: hidden and display: none?
What is the counter Property?
What is the clip Property?
What is the text-decoration Property?
What is the outline Property?
What is the cursor Property?


# CSS Interview Notes - Missing Topics

Bhai, yeh ek new set hai, jisme maine tere 78 questions wali list review karke missing topics ke **5 new questions** banaye hain! Tune kaha tha ki sirf new questions ki file do, isliye yeh ek alag Markdown file hai, aur 78 questions wali list isme nahi add ki. Maine important CSS topics jo miss ho gaye the, unko cover kiya – `line-clamp`, `forced-color-adjust`, `hyphens`, `content-visibility`, aur `logical properties`. Har question Advanced level ka hai, tere format mein (Hinglish, beginner-friendly, practical examples, aur interview tips). Explanations flexible hain – simple topics ke liye 2-4 lines, complex ke liye 4-5 ya zyada, bade explanations do parts mein. Yeh notes interview-ready hain, aur teri website ke liye perfect!

## Advanced Level

### 1. What is the `line-clamp` Property? *(imp)*
`line-clamp` property text ko specified number of lines tak truncate karta hai, adding ellipsis (...) for overflow, jo compact UI ke liye useful hai.

**Example**:
```html
<div class="text">Long text that needs truncation...</div>
<style>
.text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
```
*Summary*: Text 2 lines tak limited, ellipsis ke saath.

**Interview Tip**:
1. **Tip**: `line-clamp` ke setup aur use cases samjhao.
   - **Explanation**: `line-clamp` cards, previews, ya tooltips mein long text ko control karta hai, lekin WebKit-based browsers mein specific setup (`-webkit-box`) chahiye. Interview mein cross-browser support aur alternatives (jaise max-height) pe focus karo.
2. **Question**: When to use `line-clamp` in UI design?
   - **Answer**: `line-clamp` tab use karo jab text ko fixed lines tak limit karna ho, jaise article previews, product descriptions, ya compact UIs mein, ellipsis ke saath clean look deta hai. Example:
     ```html
     <p class="preview">Short preview text...</p>
     <style>
     .preview { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
     </style>
     ```
     *Preview text 3 lines tak truncate hota hai.*

### 2. What is the `forced-color-adjust` Property? *(imp)*
`forced-color-adjust` property forced color modes (jaise Windows High Contrast Mode) mein element ke color behavior ko control karta hai, accessibility ke liye useful.

**Example**:
```html
<button class="btn">Button</button>
<style>
.btn {
  forced-color-adjust: none;
  background: blue;
}
</style>
```
*Summary*: Button ka custom blue color forced color mode mein bhi dikhta hai.

**Interview Tip**:
1. **Tip**: `forced-color-adjust` ke accessibility role samjhao.
   - **Explanation**: `forced-color-adjust: none` custom colors ko preserve karta hai, jabki `auto` system colors ko prioritize karta hai, ensuring accessibility in high-contrast modes. Interview mein a11y standards aur testing pe focus karo.
2. **Question**: Why is `forced-color-adjust` important for accessibility?
   - **Answer**: `forced-color-adjust` high-contrast modes mein colors ko control karta hai, ensuring UI readable aur consistent rahe for users with visual impairments. Example:
     ```html
     <div class="highlight">Highlight</div>
     <style>
     .highlight { forced-color-adjust: auto; }
     </style>
     ```
     *Div system high-contrast colors ke saath adjust hota hai.*

### 3. What is the `hyphens` Property? *(imp)*
`hyphens` property text ke automatic hyphenation ko control karta hai, breaking words at line ends for better justification, especially in narrow containers.

**Example**:
```html
<p class="text">Supercalifragilisticexpialidocious</p>
<style>
.text {
  hyphens: auto;
  width: 100px;
}
</style>
```
*Summary*: Long words automatically hyphenate ho jate hain.

**Interview Tip**:
1. **Tip**: `hyphens` ke typography benefits aur limitations samjhao.
   - **Explanation**: `hyphens: auto` text flow aur readability improve karta hai, lekin browser aur language support vary karta hai. Interview mein typography refinement aur fallback strategies (jaise manual breaks) pe focus karo.
2. **Question**: How does `hyphens` enhance typography?
   - **Answer**: `hyphens` narrow columns ya justified text mein words ko cleanly break karta hai, improving readability in articles ya mobile layouts. Example:
     ```html
     <article class="article">Long content...</article>
     <style>
     .article { hyphens: auto; text-align: justify; }
     </style>
     ```
     *Article ke words hyphenated, justified text clean dikhta hai.*

### 4. What is the `content-visibility` Property? *(imp)*
`content-visibility` property rendering ko optimize karta hai by controlling jab element ka content render hoga, improving initial page load speed. Yeh large pages ke liye ideal hai.  
Values jaise `visible`, `hidden`, ya `auto` decide karte hain ki content kaise handle hoga, especially off-screen elements ke liye.

**Example**:
```html
<section class="section">Large content...</section>
<style>
.section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
</style>
```
*Summary*: Section off-screen hone pe rendering skip karta hai.

**Interview Tip**:
1. **Tip**: `content-visibility` ke performance benefits samjhao.
   - **Explanation**: `content-visibility: auto` browser ko off-screen content skip karne deta hai, reducing load time, lekin `contain-intrinsic-size` set karna zaroori hai for layout stability. Interview mein large-scale apps aur debugging pe focus karo.
2. **Question**: How does `content-visibility` improve page performance?
   - **Answer**: `content-visibility` off-screen elements ke rendering ko delay karta hai, reducing initial load time aur improving scroll performance, especially long pages ya lists mein. Example:
     ```html
     <div class="list-item">Item content...</div>
     <style>
     .list-item { content-visibility: auto; contain-intrinsic-size: 200px; }
     </style>
     ```
     *List items off-screen hone pe render nahi hote, speed badhti hai.*

### 5. What are Logical Properties in CSS? *(imp)*
Logical properties direction-agnostic styling ke liye hain, jo text direction (LTR/RTL) ke hisaab se adjust hote hain, useful for internationalization. Yeh physical properties (jaise `margin-left`) ki jagah `margin-inline-start` jaise properties use karte hain.  
Yeh multilingual websites ke liye critical hain, ensuring consistent layouts across languages like Arabic ya Hebrew.

**Example**:
```html
<div class="box">Content</div>
<style>
.box {
  margin-inline-start: 20px;
  padding-block: 10px;
}
</style>
```
*Summary*: Margin aur padding text direction ke hisaab se adjust hote hain.

**Interview Tip**:
1. **Tip**: Logical properties ke internationalization role samjhao.
   - **Explanation**: Logical properties `inline` aur `block` dimensions use karte hain, jo LTR/RTL layouts mein automatically adapt hote hain, reducing direction-specific CSS. Interview mein multilingual apps aur accessibility pe focus karo.
2. **Question**: Why use logical properties over physical properties?
   - **Answer**: Logical properties multilingual websites ke liye flexible hain kyunki yeh text direction ke hisaab se adjust hote hain, ensuring consistent styling without extra media queries. Example:
     ```html
     <article class="article">Text...</article>
     <style>
     .article { padding-inline: 15px; border-block-end: 2px solid blue; }
     </style>
     ```
     *Padding aur border RTL/LTR mein correctly align hote hain.*