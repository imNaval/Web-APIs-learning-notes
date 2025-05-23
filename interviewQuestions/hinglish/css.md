# CSS (Cascading Style Sheets) Interview Notes

CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of HTML or XML documents. It controls the layout, colors, fonts, and overall visual appearance of web pages, separating content from design for better maintainability and flexibility.CSS works by applying rules to HTML elements. Each rule consists of a selector (which targets HTML elements) and a declaration block (which contains property-value pairs). For example:

```css
p {
   color: blue;
   font-size: 16px;
}
```

This rule sets all `<p>` elements to have blue text and a font size of 16 pixels.

One of the core features of CSS is the "cascading" aspect, where multiple styles can apply to the same element. The browser determines which style takes precedence based on specificity, importance, and source order. This allows developers to create complex designs while maintaining control over which styles are applied.CSS supports responsive design through media queries, enabling web pages to adapt to different screen sizes and devices. It also offers advanced features like Flexbox and Grid for layout, transitions and animations for interactivity, and custom properties (variables) for reusable values.

Modern CSS is essential for creating visually appealing, accessible, and user-friendly web experiences. By keeping style separate from content, CSS makes it easier to update and maintain websites, promotes code reusability, and enhances collaboration between designers and developers.


## Beginner Level

### 1. What is CSS? *(imp)*
CSS (Cascading Style Sheets) ek language hai jo HTML elements ko style aur layout deta hai, jaise colors, fonts, spacing, aur animations. Yeh webpages ko visually appealing banata hai aur user experience enhance karta hai.  
“Cascading” ka matlab hai styles ka precedence order, jahan specific rules (jaise inline ya ID-based) zyada priority lete hain. CSS content aur presentation ko alag rakhta hai, jo code maintainability ke liye zaroori hai.

**Example**:
```html
<p class="intro">Hello, CSS!</p>
<style>
.intro {
  color: navy;
  font-size: 18px;
}
</style>
```
*Summary*: Paragraph navy blue color aur 18px font-size ka hai.

**Interview Tip**:
1. **Tip**: CSS ka role aur “cascading” ka concept samjhao.
   - **Explanation**: CSS HTML ke content ko style karke webpages ko user-friendly banata hai, aur “cascading” style conflicts ko resolve karta hai based on specificity (e.g., ID > class) ya source order (e.g., inline > external). Interview mein practical uses, jaise theming ya responsive design, pe focus karo.
2. **Question**: What does “cascading” mean in CSS?
   - **Answer**: Cascading ka matlab hai styles ka hierarchy aur precedence order. Jab multiple styles ek element pe apply hote hain, CSS specificity (inline > ID > class > element) ya source order ke hisaab se decide karta hai kaunsa style apply hoga. Example:
     ```html
     <p style="color: red" class="text">Text</p>
     <style>
     .text { color: blue; }
     </style>
     ```
     *Text red hoga kyunki inline style ki priority zyada hai.*

### 2. How to Add CSS to HTML? *(imp)*
CSS ko HTML mein teen tarike se add karte hain: external file (`<link>`), internal `<style>` tag, ya inline `style` attribute. External CSS scalable aur maintainable hota hai, jabki inline scalability ke liye bura hai.

**Example**:
```html
<!-- External CSS -->
<link rel="stylesheet" href="styles.css">
<!-- Internal CSS -->
<style>
  h1 { color: green; }
</style>
<!-- Inline CSS -->
<p style="color: red;">Inline Text</p>
```
```css
/* styles.css */
body { background: #f0f0f0; }
```
*Summary*: External CSS separate file se, internal `<head>` mein, aur inline direct element pe apply hota hai.

**Interview Tip**:
1. **Tip**: External, internal, aur inline CSS ke use cases aur trade-offs samjhao.
   - **Explanation**: External CSS large projects ke liye best kyunki yeh reusable aur team collaboration ke liye easy hai. Internal CSS small projects ya testing ke liye, lekin code duplication badha sakta hai. Inline CSS quick fixes ke liye hai, lekin maintenance mushkil karta hai.
2. **Question**: Why prefer external CSS over inline CSS?
   - **Answer**: External CSS styles ko ek central file mein rakhta hai, jo reusable, maintainable, aur multiple pages pe apply hota hai. Inline CSS code ko scattered aur updates ko mushkil banata hai. Example:
     ```html
     <p style="color: blue;">Inline</p>
     <link rel="stylesheet" href="styles.css">
     ```
     ```css
     /* styles.css */
     p { color: blue; }
     ```
     *External CSS se ek change sab paragraphs pe apply ho jata hai.*

### 3. What are CSS Selectors? *(imp)*
CSS selectors HTML elements ko target karte hain jinko style karna hai, jaise element tags, classes, IDs, pseudo-classes, ya attribute selectors. Yeh precise styling aur dynamic behavior ke liye zaroori hain.  
Selectors ke types (e.g., class, ID, universal) flexibility dete hain, aur pseudo-classes/pseudo-elements interactivity aur specific styling enable karte hain. Specificity ke through selectors conflicts resolve karte hain.

**Example**:
```html
<div class="box" id="unique">Selector Demo</div>
<style>
.box { background: lightblue; } /* Class selector */
#unique { border: 3px solid red; } /* ID selector */
.box:hover { background: lightgreen; } /* Pseudo-class */
</style>
```
*Summary*: Class lightblue background, ID red border, aur hover pe green background deta hai.

**Interview Tip**:
1. **Tip**: Common selectors aur unke specificity impact samjhao.
   - **Explanation**: Class selectors reusable, IDs unique elements, aur pseudo-classes dynamic states ke liye hain. Specificity (ID > class > element) conflicts ko resolve karta hai, jo debugging ke liye critical hai. Interview mein practical examples, jaise `:hover` ya attribute selectors, pe focus karo.
2. **Question**: What’s the difference between pseudo-class and pseudo-element?
   - **Answer**: Pseudo-class (e.g., `:hover`, `:first-child`) element ke state ya position target karta hai, jabki pseudo-element (e.g., `::before`, `::after`) element ke specific part (jaise content) ko style karta hai. Example:
     ```html
     <p class="text">Text</p>
     <style>
     .text:hover { background: yellow; } /* Pseudo-class */
     .text::before { content: "★ "; } /* Pseudo-element */
     </style>
     ```
     *Hover pe background yellow, text ke pehle star add hota hai.*

### 4. What is the CSS Box Model? *(imp)*
CSS Box Model har HTML element ko ek rectangular box ke roop mein dekhta hai, jisme content, padding, border, aur margin hote hain. Yeh layout aur spacing control karta hai, aur design ke liye foundational hai.  
`box-sizing: border-box` width/height ko predictable banata hai by including padding aur border. Box Model responsive designs aur complex layouts ke liye critical hai, kyunki yeh size calculations ko define karta hai.

**Example**:
```html
<div class="box">Box Model</div>
<style>
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid blue;
  margin: 30px;
  box-sizing: border-box;
  background: lightyellow;
}
</style>
```
*Summary*: Div 200px wide (padding aur border include), blue border, aur 30px margin ke saath.

**Interview Tip**:
1. **Tip**: Box Model ke components aur `box-sizing` ka role samjhao.
   - **Explanation**: Box Model ke parts – content, padding, border, margin – total size define karte hain. `box-sizing: border-box` padding aur border ko width ke andar rakhta hai, jo responsive layouts ke liye predictable banata hai. Interview mein size calculations ya debugging pe focus karo.
2. **Question**: What’s the role of `box-sizing: border-box`?
   - **Answer**: `box-sizing: border-box` padding aur border ko element ki defined width/height ke andar include karta hai, jo layout calculations ko simpler aur responsive designs ko consistent banata hai. Example:
     ```html
     <div class="box">Content</div>
     <style>
     .box { width: 200px; padding: 20px; box-sizing: border-box; }
     </style>
     ```
     *Div ka total width 200px rahega, padding include karke.*

### 5. What is CSS Specificity? *(imp)*
CSS Specificity ek scoring system hai jo decide karta hai kaunsa CSS rule apply hoga jab multiple rules conflict karte hain. Inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), aur elements/pseudo-elements (1) ke scores se calculate hoti hai.

**Example**:
```html
<p id="my-id" class="my-class">Text</p>
<style>
#my-id { color: red; } /* Specificity: 100 */
.my-class { color: blue; } /* Specificity: 10 */
p { color: green; } /* Specificity: 1 */
</style>
```
*Summary*: Text red hoga kyunki ID selector ka specificity score sabse zyada hai.

**Interview Tip**:
1. **Tip**: Specificity calculation aur conflict resolution samjhao.
   - **Explanation**: Specificity weights (inline > ID > class > element) conflicts ko solve karta hai. Equal specificity mein last defined rule apply hota hai. Interview mein debugging tips, jaise specificity issues kaise avoid karna, pe focus karo.
2. **Question**: How to resolve specificity conflicts?
   - **Answer**: Specificity conflicts ko solve karne ke liye specific selectors (jaise classes) use karo, IDs aur inline styles avoid karo, aur `!important` minimize karo kyunki yeh debugging ko mushkil karta hai. Example:
     ```html
     <div class="card card--highlight">Content</div>
     <style>
     .card { background: white; }
     .card--highlight { background: yellow; }
     </style>
     ```
     *Class-based selectors clear hierarchy banate hain, conflicts kam hote hain.*

### 6. What are Pseudo-Classes and Pseudo-Elements? *(imp)*
Pseudo-classes element ke specific state ya position target karte hain (e.g., `:hover`, `:first-child`), jabki pseudo-elements element ke part ko style karte hain (e.g., `::before`, `::after`). Yeh interactivity aur decorative styling ke liye use hote hain.

**Example**:
```html
<p class="text">Paragraph</p>
<style>
.text::before {
  content: "★ ";
  color: red;
}
.text:hover {
  background: lightyellow;
}
</style>
```
*Summary*: Text ke pehle red star add hota hai, hover pe background lightyellow hota hai.

**Interview Tip**:
1. **Tip**: Common pseudo-classes aur pseudo-elements ke use cases samjhao.
   - **Explanation**: Pseudo-classes jaise `:hover`, `:active`, `:nth-child` dynamic behavior ke liye, aur pseudo-elements jaise `::before`, `::after` decorative content ke liye use hote hain. Interview mein practical examples, jaise hover effects ya content injection, pe focus karo.
2. **Question**: What are some common pseudo-classes?
   - **Answer**: Common pseudo-classes hain `:hover` (mouse over), `:active` (click state), `:first-child` (first element), aur `:nth-child(n)` (specific position). Yeh interactivity aur conditional styling ke liye use hote hain. Example:
     ```html
     <li class="item">Item</li>
     <style>
     .item:hover { color: blue; }
     .item:first-child { font-weight: bold; }
     </style>
     ```
     *Hover pe item blue hota hai, first item bold hota hai.*

### 7. What is the Difference Between Inline, Block, and Inline-Block? *(imp)*
Block elements (e.g., `<div>`) full width lete hain aur new line pe shuru hote hain, inline elements (e.g., `<span>`) content ka width lete hain aur same line pe rehte hain. Inline-block inline flow mein rehta hai lekin width/height set kar sakta hai.  
Yeh properties layout control ke liye foundational hain, aur buttons, cards, ya nav menus jaise UI components ke liye inline-block critical hai. Responsive designs mein alignment aur sizing ke liye inka role bada hai.

**Example**:
```html
<span class="inline-block">Inline-Block</span>
<span>Inline</span>
<div class="block">Block</div>
<style>
.inline-block { display: inline-block; width: 100px; height: 50px; background: coral; }
.block { background: lightgreen; }
</style>
```
*Summary*: Inline-block span sized box banata hai, inline span content-size ka, aur block div full-width new line pe.

**Interview Tip**:
1. **Tip**: Inline-block ke use cases aur block vs inline ka layout impact samjhao.
   - **Explanation**: Inline-block buttons, cards, ya inline-aligned components ke liye ideal hai kyunki yeh inline flow mein width/height control deta hai. Block vertical stacking ke liye, aur inline text styling ke liye best hai. Interview mein practical examples, jaise button alignment, pe focus karo.
2. **Question**: Why use inline-block over inline?
   - **Answer**: Inline-block inline se better hai kyunki yeh same-line alignment deta hai lekin width aur height set karne ki flexibility bhi deta hai, jo inline mein nahi hoti. Example, buttons ya cards ke liye inline-block zaroori hai. Code:
     ```html
     <button class="inline-block">Button</button>
     <button class="inline">Inline</button>
     <style>
     .inline-block { display: inline-block; width: 100px; height: 40px; }
     .inline { display: inline; }
     </style>
     ```
     *Inline-block button fixed size ka hai, inline button content-size pe depend karta hai.*

### 8. What is the Float Property? *(imp)*
`float` property elements ko left ya right side pe align karta hai, aur text ya inline elements uske around wrap hote hain. Yeh old-school layouts, jaise image-text wrapping, ke liye use hota hai, lekin modern layouts mein Flexbox/Grid zyada common hain.

**Example**:
```html
<img class="float" src="image.jpg" alt="Image">
<p>Text wraps around the floated image.</p>
<style>
.float {
  float: left;
  width: 100px;
  margin-right: 15px;
}
</style>
```
*Summary*: Image left pe float karta hai, text uske around wrap hota hai.

**Interview Tip**:
1. **Tip**: `float` ke use cases aur modern alternatives samjhao.
   - **Explanation**: `float` image-text layouts ya old column designs ke liye tha, lekin Flexbox/Grid zyada flexible aur issue-free hain. Float ke side effects, jaise parent collapse, ko `clear` ya `overflow` se fix karna padta hai. Interview mein alternatives pe focus karo.
2. **Question**: What are the issues with using `float`?
   - **Answer**: `float` ke issues hain parent container ka collapse hona aur layout unpredictability, kyunki floated elements normal flow se bahar nikal jate hain. Clearfix ya modern layouts (Flexbox/Grid) inko fix karte hain. Example:
     ```html
     <div class="container">
       <div class="float">Float</div>
     </div>
     <style>
     .float { float: left; width: 100px; }
     </style>
     ```
     *Container collapse ho sakta hai jab tak clearfix nahi use hota.*

### 9. What is Clearfix? *(imp)*
Clearfix `float` ke layout collapse issue ko fix karta hai by ensuring parent container floated children ko contain kare. Yeh old-school layouts mein common hai, lekin modern alternatives zyada use hote hain.

**Example**:
```html
<div class="container">
  <div class="float">Float</div>
</div>
<style>
.container::after {
  content: "";
  display: block;
  clear: both;
}
.float {
  float: left;
  width: 100px;
  background: pink;
}
</style>
```
*Summary*: Container floated div ko properly contain karta hai, collapse nahi hota.

**Interview Tip**:
1. **Tip**: Clearfix ka purpose aur modern alternatives samjhao.
   - **Explanation**: Clearfix floated elements ke parent collapse ko fix karta hai by clearing floats. Modern layouts mein Flexbox ya Grid use karo, kyunki yeh simpler aur float ke issues se free hain. Interview mein why clearfix outdated hai, ispe focus karo.
2. **Question**: What’s a modern alternative to clearfix?
   - **Answer**: Flexbox ya Grid clearfix ka better alternative hain kyunki yeh layout collapse issues se bachate hain aur alignment/spacing ke liye direct control dete hain. Example:
     ```html
     <div class="flex">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .flex { display: flex; gap: 10px; }
     </style>
     ```
     *Flexbox se container collapse nahi hota, aur layout clean rahta hai.*

### 10. What are CSS Colors? *(imp)*
CSS colors text, background, ya borders ke liye set karte hain using formats jaise named colors (`red`), hex (`#FF0000`), RGB, RGBA, ya HSL. Yeh UI ke visual appeal aur accessibility ke liye zaroori hain.

**Example**:
```html
<p class="text">Colored Text</p>
<style>
.text {
  color: #333;
  background-color: rgba(0, 255, 0, 0.3);
}
</style>
```
*Summary*: Text dark gray hai, background light green with transparency.

**Interview Tip**:
1. **Tip**: Color formats aur accessibility considerations samjhao.
   - **Explanation**: Colors hex, RGB, RGBA, ya HSL formats mein set hote hain, aur RGBA transparency deta hai. Accessibility ke liye high contrast ratios (e.g., WCAG 4.5:1) zaroori hain. Interview mein practical uses, jaise theming ya contrast, pe focus karo.
2. **Question**: What’s the use of RGBA?
   - **Answer**: RGBA transparency (alpha channel) deta hai, jo UI effects jaise overlays, hover states, ya subtle backgrounds ke liye use hota hai. Example:
     ```html
     <div class="overlay">Overlay</div>
     <style>
     .overlay { background: rgba(0, 0, 0, 0.5); }
     </style>
     ```
     *Overlay semi-transparent black background deta hai.*



### 11. What is the `display` Property? *(imp)*
`display` property element ka layout behavior control karta hai, jaise `block`, `inline`, `inline-block`, ya `none`. Yeh elements ke rendering aur positioning ko define karta hai, aur layouts jaise Flexbox/Grid ko enable karta hai.

**Example**:
```html
<span class="custom">Inline Block</span>
<div class="hidden">Hidden</div>
<style>
.custom {
  display: inline-block;
  width: 100px;
  height: 50px;
  background: coral;
}
.hidden {
  display: none;
}
</style>
```
*Summary*: Inline-block span sized box banata hai, hidden div DOM se gayab hai.

**Interview Tip**:
1. **Tip**: Common `display` values aur unke use cases samjhao.
   - **Explanation**: `display: block` full-width elements ke liye (jaise sections), `inline` same-line text ke liye (jaise links), `inline-block` sized inline elements ke liye (jaise buttons), aur `none` hiding ke liye use hota hai. Interview mein modern values jaise `flex` ya `grid` bhi mention karo.
2. **Question**: What’s the difference between `display: none` and `visibility: hidden`?
   - **Answer**: `display: none` element ko DOM se remove karta hai aur space nahi leta, jabki `visibility: hidden` element ko hide karta hai lekin uska space reserve rakhta hai. Example:
     ```html
     <div class="none">None</div>
     <div class="hidden">Hidden</div>
     <style>
     .none { display: none; }
     .hidden { visibility: hidden; }
     </style>
     ```
     *`none` wala div space nahi lega, `hidden` wala space reserve karega.*

### 12. What is the Difference Between Margin and Padding? *(imp)*
Margin element ke bahar ka space hai jo elements ke beech distance banata hai, jabki padding element ke content aur border ke beech ka space hai jo content presentation ko enhance karta hai. Yeh layout aur spacing ke liye critical hain.

**Example**:
```html
<div class="box">Content</div>
<style>
.box {
  margin: 20px;
  padding: 15px;
  border: 2px solid black;
  background: lightgray;
}
</style>
```
*Summary*: Box ke bahar 20px margin aur content ke around 15px padding hai.

**Interview Tip**:
1. **Tip**: Margin aur padding ke layout impact samjhao.
   - **Explanation**: Margin elements ke beech spacing banata hai aur layout structure define karta hai, jabki padding content ko element ke borders se door rakhta hai, improving readability. Interview mein margin collapse ya negative margins ke use cases pe focus karo.
2. **Question**: What is margin collapse?
   - **Answer**: Margin collapse tab hota hai jab do adjacent block elements ke vertical margins combine ho jate hain, aur dono mein se bada margin apply hota hai. Yeh sirf vertical margins pe hota hai, horizontal pe nahi. Example:
     ```html
     <div class="box1">Box 1</div>
     <div class="box2">Box 2</div>
     <style>
     .box1 { margin-bottom: 20px; }
     .box2 { margin-top: 30px; }
     </style>
     ```
     *Dono boxes ke beech 30px space hoga, 20px nahi.*

### 13. What is CSS Inheritance? *(imp)*
CSS inheritance parent element ke kuch properties (jaise `color`, `font-family`) ko child elements tak automatically pass karta hai. Yeh code repetition kam karta hai, lekin properties jaise `margin`, `padding` inherit nahi hote.

**Example**:
```html
<div class="parent">
  <p>Child Text</p>
</div>
<style>
.parent {
  color: blue;
  font-family: Arial;
}
</style>
```
*Summary*: Child paragraph blue color aur Arial font inherit karta hai.

**Interview Tip**:
1. **Tip**: Inheritance ke scope aur non-inheritable properties samjhao.
   - **Explanation**: Inheritable properties (jaise `color`, `font`) code ko concise rakhte hain, lekin layout properties (jaise `margin`, `border`) inherit nahi hote taaki layouts predictable rahen. Interview mein common inherited properties aur explicit inheritance (`inherit` keyword) pe focus karo.
2. **Question**: Which properties don’t inherit by default?
   - **Answer**: Properties jaise `margin`, `padding`, `border`, aur `width` by default inherit nahi hote kyunki yeh layout-specific hain aur child elements ke independent control ke liye designed hain. Example:
     ```html
     <div class="parent">
       <p>Child</p>
     </div>
     <style>
     .parent { margin: 20px; color: blue; }
     </style>
     ```
     *Child paragraph blue color inherit karega, lekin margin nahi.*

### 14. What is the `content` Property? *(imp)*
`content` property pseudo-elements (`::before`, `::after`) ke saath use hoti hai taaki generated content (text, images, ya counters) add kiya ja sake. Yeh decorative elements ya dynamic styling ke liye useful hai.

**Example**:
```html
<div class="box">World</div>
<style>
.box::before {
  content: "Hello ";
  color: red;
}
</style>
```
*Summary*: Div ke content ke pehle “Hello” red color mein add hota hai.

**Interview Tip**:
1. **Tip**: `content` property ke creative uses aur limitations samjhao.
   - **Explanation**: `content` text, quotes, counters, ya images add kar sakta hai, lekin sirf pseudo-elements ke saath kaam karta hai. Yeh navigation markers, decorative icons, ya list counters ke liye ideal hai. Interview mein practical applications pe focus karo.
2. **Question**: What are some uses of the `content` property?
   - **Answer**: `content` property decorative text (jaise prefixes), counters (jaise numbered lists), ya icons add karne ke liye use hoti hai, jo UI ko enhance karta hai without extra HTML. Example:
     ```html
     <li class="item">Item</li>
     <style>
     .item::before { content: "✔ "; color: green; }
     </style>
     ```
     *List item ke pehle green checkmark add hota hai.*

### 15. What are Vendor Prefixes? *(imp)*
Vendor prefixes (jaise `-webkit-`, `-moz-`) browser-specific CSS properties ke liye use hote hain taaki experimental ya non-standard features support kiye ja sakein. Yeh cross-browser compatibility ke liye zaroori hote hain jab full standard support nahi hota.

**Example**:
```html
<div class="box">Transition</div>
<style>
.box {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
</style>
```
*Summary*: Box ke transitions sab browsers mein smooth kaam karte hain.

**Interview Tip**:
1. **Tip**: Vendor prefixes ke purpose aur modern relevance samjhao.
   - **Explanation**: Vendor prefixes experimental features ko test karne dete hain, lekin modern CSS mein zyadatar standard properties hi use hoti hain kyunki browsers ne support improve kiya hai. Interview mein tools jaise Autoprefixer ya feature support checking pe focus karo.
2. **Question**: Why are vendor prefixes less common now?
   - **Answer**: Vendor prefixes ab kam use hote hain kyunki modern browsers (jaise Chrome, Firefox) standard CSS properties ko widely support karte hain, aur tools jaise Autoprefixer automatically prefixes add kar dete hain. Example:
     ```html
     <div class="box">Transform</div>
     <style>
     .box { transform: rotate(45deg); } /* No prefix needed */
     </style>
     ```
     *Modern browsers transform ko bina prefixes ke support karte hain.*


### 16. What is the Difference Between Relative, Absolute, Fixed, and Sticky Positioning? *(imp)*
`position` property element ka placement aur layout behavior control karta hai, jaise `relative`, `absolute`, `fixed`, ya `sticky`. Yeh overlapping, offsets, aur scroll-based effects ke liye use hota hai.  
Har positioning type ka alag behavior hai – `relative` original position se offset hota hai, `absolute` ancestor ke relative, `fixed` viewport ke relative, aur `sticky` scroll ke hisaab se toggle karta hai. Yeh complex layouts aur UI components ke liye critical hain.

**Example**:
```html
<div class="parent">
  <div class="child">Absolute Box</div>
</div>
<style>
.parent {
  position: relative;
  height: 200px;
  background: lightgray;
}
.child {
  position: absolute;
  top: 10px;
  right: 10px;
  background: orange;
}
</style>
```
*Summary*: Absolute box parent ke top-right corner pe positioned hai.

**Interview Tip**:
1. **Tip**: Positioning types ke behaviors aur parent dependencies samjhao.
   - **Explanation**: `relative` original position se shift hota hai, `absolute` nearest positioned ancestor pe depend karta hai, `fixed` viewport ke saath fixed rehta hai, aur `sticky` scroll ke basis pe relative ya fixed hota hai. Interview mein stacking context aur debugging issues pe focus karo.
2. **Question**: What’s the role of the parent in `absolute` positioning?
   - **Answer**: `absolute` positioning ke liye parent ko `position: relative` (ya koi non-static position) set karna padta hai, warna element document body ke relative position lega. Example:
     ```html
     <div class="parent">
       <div class="child">Child</div>
     </div>
     <style>
     .parent { position: relative; }
     .child { position: absolute; top: 10px; }
     </style>
     ```
     *Child parent ke top se 10px neeche position hota hai.*

### 17. What is Flexbox? *(imp)*
Flexbox (Flexible Box Layout) ek modern CSS layout system hai jo items ko ek single axis (row ya column) mein align, distribute, aur space karne ke liye design kiya gaya hai. Yeh responsive layouts ke liye powerful hai, kyunki properties jaise `justify-content`, `align-items`, aur `flex-wrap` precise control dete hain.  
Flexbox navbars, centered content, ya equal-width cards ke liye ideal hai, aur float-based layouts ka simpler alternative hai. Yeh dynamic sizing aur alignment ko asaan banata hai, especially mobile-first designs mein.

**Example**:
```html
<nav class="navbar">
  <div>Logo</div>
  <div>Home</div>
  <div>About</div>
</nav>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: white;
  padding: 10px;
}
.navbar div {
  padding: 10px;
}
</style>
```
*Summary*: Navbar mein logo aur menu items evenly spaced aur vertically centered hain.

**Interview Tip**:
1. **Tip**: Flexbox ke core properties aur real-world use cases samjhao.
   - **Explanation**: Flexbox ke key properties (`justify-content`, `align-items`, `flex-wrap`) flexible aur responsive layouts banate hain, jaise navbars ya centered divs. Yeh single-axis layouts ke liye best hai, aur float se zyada intuitive kyunki alignment direct control hota hai. Interview mein practical examples share karo, jaise ek div ko center karna.
2. **Question**: What are the key properties of a Flexbox container?
   - **Answer**: Key Flexbox container properties hain `display: flex`, `flex-direction` (row/column), `justify-content` (horizontal alignment), `align-items` (vertical alignment), `flex-wrap` (wrapping), aur `gap` (spacing). Example:
     ```html
     <div class="container">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .container { display: flex; justify-content: center; gap: 10px; }
     </style>
     ```
     *Items center-aligned hain with 10px gap.*

### 18. What is CSS Grid? *(imp)*
CSS Grid ek 2D layout system hai jo rows aur columns ke saath complex layouts banata hai, jaise dashboards ya photo galleries. Yeh precise control deta hai grid lines, areas, aur spacing ke through, aur responsive design ke liye powerful hai.  
Grid container properties (jaise `grid-template-columns`, `gap`) aur item properties (jaise `grid-column`) flexible aur maintainable layouts enable karte hain. Flexbox se zyada versatile hai jab dono axes pe control chahiye.

**Example**:
```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.grid-item {
  background: coral;
  padding: 20px;
  text-align: center;
}
</style>
```
*Summary*: Grid two-column layout banata hai, items coral background ke saath.

**Interview Tip**:
1. **Tip**: Grid ke core properties aur Flexbox se comparison samjhao.
   - **Explanation**: Grid ke properties jaise `grid-template-columns`, `grid-template-rows`, aur `gap` 2D layouts ke liye precise control dete hain. Flexbox 1D layouts (row ya column) ke liye simpler hai, jabki Grid dashboards ya galleries ke liye better hai. Interview mein responsive grid examples pe focus karo.
2. **Question**: When to use CSS Grid over Flexbox?
   - **Answer**: CSS Grid tab use karo jab 2D layouts chahiye, jaise rows aur columns dono control karne hon (e.g., dashboards, galleries). Flexbox 1D layouts ke liye better hai, jaise navbars ya linear lists. Example:
     ```html
     <div class="grid">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .grid { display: grid; grid-template-columns: 1fr 1fr; }
     </style>
     ```
     *Grid items ko 2D layout mein arrange karta hai.*

### 19. What are Media Queries? *(imp)*
Media queries CSS rules ko specific conditions, jaise screen size, device type, ya orientation ke basis pe apply karte hain, jo responsive aur adaptive designs banane ke liye zaroori hain. Yeh breakpoints define karte hain (e.g., 320px mobile, 768px tablet).  
Media queries websites ko cross-device compatible banate hain, user experience ko optimize karte hain, aur mobile-first (`min-width`) ya desktop-first (`max-width`) approach mein kaam aate hain. Modern web development mein must-have hain.

**Example**:
```html
<div class="responsive">Responsive Text</div>
<style>
.responsive {
  font-size: 16px;
}
@media (min-width: 768px) {
  .responsive {
    font-size: 20px;
  }
}
</style>
```
*Summary*: Text 16px ka hai, lekin 768px ya badi screens pe 20px ho jata hai.

**Interview Tip**:
1. **Tip**: Media queries ke breakpoints aur mobile-first approach ke benefits samjhao.
   - **Explanation**: Common breakpoints (320px mobile, 768px tablet, 1024px desktop) project requirements ke hisaab se set hote hain. Mobile-first (`min-width`) lightweight base styles aur progressive enhancements deta hai, jo performance ke liye better hai. Interview mein optimization tips, jaise minimal queries, pe focus karo.
2. **Question**: Why prefer mobile-first media queries?
   - **Answer**: Mobile-first (`min-width`) base styles ko lightweight rakhta hai, jo mobile devices ke liye fast loading aur better performance deta hai, aur code cleaner hota hai. Desktop-first (`max-width`) heavy base styles se shuru hota hai, jo mobile performance ko hurt kar sakta hai. Example:
     ```css
     .box { width: 100%; }
     @media (min-width: 768px) { .box { width: 50%; } }
     ```
     *Mobile pe full-width, tablet/desktop pe half-width, code minimal.*

### 20. What is the Z-Index? *(imp)*
`z-index` overlapping elements ka stacking order control karta hai – higher value wala element upar dikhta hai. Yeh sirf positioned elements (`position: absolute`, `relative`, `fixed`, `sticky`) pe kaam karta hai, aur modals ya popups ke liye common hai.

**Example**:
```html
<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
<style>
.box1 {
  position: absolute;
  top: 20px;
  left: 20px;
  background: red;
  z-index: 2;
}
.box2 {
  position: absolute;
  top: 40px;
  left: 40px;
  background: blue;
  z-index: 1;
}
</style>
```
*Summary*: Red box (z-index: 2) blue box (z-index: 1) ke upar dikhega.

**Interview Tip**:
1. **Tip**: Z-index ke dependencies aur stacking context samjhao.
   - **Explanation**: Z-index ke liye element ka `position` non-static hona zaroori hai, warna kaam nahi karega. Stacking context parent elements ke properties (e.g., `opacity`, `transform`) se bhi affect hota hai. Interview mein common issues, jaise z-index not working, pe focus karo.
2. **Question**: Why might z-index not work as expected?
   - **Answer**: Z-index tab nahi kaam karta jab element ka `position` static hai ya parent element ek alag stacking context banata hai (e.g., `transform`, `opacity < 1`). Isse bachne ke liye parent ka stacking context check karo aur ensure karo element positioned hai. Example:
     ```html
     <div class="parent">
       <div class="child">Child</div>
     </div>
     <style>
     .parent { transform: translateX(0); } /* New stacking context */
     .child { position: absolute; z-index: 10; } /* Limited by parent */
     </style>
     ```
     *Parent ka transform stacking context banata hai, child ka z-index parent ke andar hi kaam karega.*






## Intermediate Level

### 21. What are CSS Transitions? *(imp)*
CSS transitions properties ke smooth changes enable karte hain, jaise color, size, ya position, jab state change hota hai (e.g., hover). Yeh user experience ko enhance karte hain by adding fluid visual effects.  
Transition ke components – `transition-property`, `transition-duration`, `transition-timing-function`, aur `transition-delay` – control dete hain kaise aur kab change hoga. Yeh lightweight animations ke liye ideal hain, especially buttons ya links pe.

**Example**:
```html
<button class="btn">Hover Me</button>
<style>
.btn {
  padding: 10px 20px;
  background: purple;
  color: white;
  transition: all 0.3s ease;
}
.btn:hover {
  background: orange;
  transform: scale(1.1);
}
</style>
```
*Summary*: Button hover pe smoothly orange hota hai aur 10% zoom karta hai.

**Interview Tip**:
1. **Tip**: Transition ke components aur use cases samjhao.
   - **Explanation**: Transitions `transition-property` (kya change hoga), `duration` (kitni der), `timing-function` (speed curve), aur `delay` (wait time) ke through smooth effects dete hain. Yeh hover effects, UI feedback, ya subtle animations ke liye best hain. Interview mein practical examples, jaise button hover, pe focus karo.
2. **Question**: What are the key properties of a CSS transition?
   - **Answer**: Key transition properties hain `transition-property` (e.g., background, transform), `transition-duration` (e.g., 0.3s), `transition-timing-function` (e.g., ease, linear), aur `transition-delay` (e.g., 0.1s). Shorthand `transition: all 0.3s ease` sab cover karta hai. Example:
     ```html
     <div class="box">Hover</div>
     <style>
     .box { transition: background 0.3s ease; }
     .box:hover { background: yellow; }
     </style>
     ```
     *Box hover pe smoothly yellow background hota hai.*

### 22. What are CSS Animations? *(imp)*
CSS animations complex, keyframe-based effects create karte hain jo multiple states ke beech interpolate karte hain, jaise sliding ya fading. Yeh transitions se zyada flexible hain kyunki keyframes custom sequences define karte hain.  
Animations `@keyframes` rule ke through stages set karte hain, aur properties jaise `animation-name`, `duration`, aur `iteration-count` control dete hain. Yeh interactive UI elements ya attention-grabbing effects ke liye use hote hain.

**Example**:
```html
<div class="box">Sliding Box</div>
<style>
.box {
  width: 100px;
  height: 100px;
  background: teal;
  animation: slide 2s infinite;
}
@keyframes slide {
  0% { transform: translateX(0); }
  50% { transform: translateX(150px); }
  100% { transform: translateX(0); }
}
</style>
```
*Summary*: Box 150px slide karta hai aur 2 seconds mein wapas aata hai, infinitely.

**Interview Tip**:
1. **Tip**: Animations ke keyframes aur properties samjhao.
   - **Explanation**: Animations `@keyframes` se stages define karte hain, aur properties jaise `animation-duration`, `animation-iteration-count`, aur `animation-timing-function` behavior control karte hain. Yeh complex effects jaise loaders ya slideshows ke liye best hain. Interview mein creative examples pe focus karo.
2. **Question**: What’s the difference between transitions and animations?
   - **Answer**: Transitions sirf state changes (e.g., hover) ke liye smooth effects dete hain, jabki animations keyframes ke through complex, multi-stage effects create karte hain jo automatically ya infinitely chal sakte hain. Example:
     ```html
     <div class="anim">Animate</div>
     <style>
     .anim { animation: fade 1s infinite; }
     @keyframes fade { 0% { opacity: 1; } 100% { opacity: 0; } }
     </style>
     ```
     *Animation div ko fade in-out karta hai, transition se zyada control deta hai.*

### 23. What is the Difference Between `em` and `rem` Units? *(imp)*
`em` units parent element ke font-size ke relative hote hain, jabki `rem` units root element (`html`) ke font-size ke relative hote hain. Yeh responsive typography aur spacing ke liye use hote hain.

**Example**:
```html
<div class="parent">
  <div class="child">Child</div>
</div>
<style>
html { font-size: 16px; }
.parent { font-size: 20px; }
.child {
  font-size: 1.5em; /* 30px (1.5 * 20px) */
  margin: 1rem; /* 16px (1 * 16px) */
}
</style>
```
*Summary*: Child ka font-size 30px (parent-based), margin 16px (root-based).

**Interview Tip**:
1. **Tip**: `em` aur `rem` ke behavior aur use cases samjhao.
   - **Explanation**: `em` nested elements mein compounding issues de sakta hai kyunki parent ke font-size pe depend karta hai, jabki `rem` root-based hone se consistent aur predictable hai. Interview mein responsive design ke liye `rem` ke benefits pe focus karo.
2. **Question**: Why is `rem` preferred over `em` for responsive design?
   - **Answer**: `rem` root (`html`) ke font-size pe depend karta hai, jo consistent sizing deta hai across all elements, especially responsive designs mein. `em` parent ke font-size pe depend karta hai, jo nested structures mein unpredictable ho sakta hai. Example:
     ```html
     <div class="wrapper">
       <p class="text">Text</p>
     </div>
     <style>
     html { font-size: 16px; }
     .wrapper { font-size: 20px; }
     .text { font-size: 1rem; } /* Always 16px */
     </style>
     ```
     *Text ka font-size 16px rahta hai, parent se affect nahi hota.*

### 24. What are CSS Variables? *(imp)*
CSS variables (custom properties) reusable values store karte hain, jo `--name` syntax se define hote hain aur `var()` se use hote hain. Yeh theming, code maintenance, aur dynamic styling ke liye powerful hain.

**Example**:
```html
<button class="button">Click Me</button>
<style>
:root {
  --main-bg: #ff6347;
}
.button {
  background: var(--main-bg);
  padding: 10px;
}
</style>
```
*Summary*: Button ka background tomato color hai, variable se defined.

**Interview Tip**:
1. **Tip**: CSS variables ke benefits aur scope samjhao.
   - **Explanation**: CSS variables reusability aur easy updates dete hain, especially themes ya large projects mein. `:root` global scope deta hai, lekin local scopes (e.g., specific classes) bhi possible hain. Interview mein theming ya dynamic updates pe focus karo.
2. **Question**: What are the benefits of CSS variables?
   - **Answer**: CSS variables code repetition kam karte hain, theme changes ko asaan banate hain, aur dynamic styling (e.g., via JavaScript) ko enable karte hain. Ek variable change se multiple styles update ho sakte hain. Example:
     ```html
     <div class="card">Card</div>
     <style>
     :root { --primary: #3498db; }
     .card { background: var(--primary); }
     </style>
     ```
     *Variable change se card ka background update ho jata hai.*

### 25. What is CSS Reset? *(imp)*
CSS reset browser ke default styles (jaise margins, paddings) ko remove karta hai taaki consistent base styles milein across browsers. Yeh cross-browser compatibility ke liye zaroori hai.

**Example**:
```html
<div class="content">Content</div>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content {
  background: lightblue;
}
</style>
```
*Summary*: Default margins/paddings remove hote hain, content ka background lightblue.

**Interview Tip**:
1. **Tip**: CSS reset aur normalize ke differences samjhao.
   - **Explanation**: CSS reset sab default styles remove karta hai taaki zero-base se shuru ho, jabki normalize consistent defaults banata hai without removing everything. Interview mein reset ke pros (consistency) aur cons (extra styling effort) pe focus karo.
2. **Question**: What’s the difference between CSS reset and normalize?
   - **Answer**: CSS reset browser defaults (jaise margins, paddings) ko completely remove karta hai taaki blank slate mile, jabki normalize defaults ko consistent banata hai across browsers without removing useful styles. Example:
     ```css
     /* Reset */
     * { margin: 0; padding: 0; }
     /* Normalize (partial example) */
     h1 { margin: 0.67em 0; }
     ```
     *Reset sab clear karta hai, normalize useful defaults rakhta hai.*

### 26. What is the `box-shadow` Property? *(imp)*
`box-shadow` property element ke around visual shadow ya glow effect add karta hai, jo depth aur emphasis ke liye use hota hai. Yeh UI elements jaise cards ya buttons ko enhance karta hai.

**Example**:
```html
<div class="box">Shadow</div>
<style>
.box {
  width: 100px;
  height: 100px;
  background: white;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
}
</style>
```
*Summary*: Box ke around subtle shadow dikhta hai, depth deta hai.

**Interview Tip**:
1. **Tip**: `box-shadow` ke parameters aur use cases samjhao.
   - **Explanation**: `box-shadow` ke parameters hain x-offset, y-offset, blur-radius, spread-radius, aur color. Yeh cards, buttons, ya hover effects ke liye use hota hai taaki UI visually appealing lage. Interview mein multiple shadows ya inset shadows pe focus karo.
2. **Question**: What are the parameters of `box-shadow`?
   - **Answer**: `box-shadow` ke parameters hain `x-offset` (horizontal shift), `y-offset` (vertical shift), `blur-radius` (shadow blur), `spread-radius` (shadow size), aur `color` (e.g., rgba for transparency). Optional `inset` shadow andar deta hai. Example:
     ```html
     <div class="card">Card</div>
     <style>
     .card { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); }
     </style>
     ```
     *Card ke neeche subtle shadow depth deta hai.*

### 27. What is the `overflow` Property? *(imp)*
`overflow` property control karta hai jab content element ke dimensions se bada hota hai, jaise clipping, scrolling, ya visibility. Yeh layouts jaise modals ya fixed-height containers ke liye critical hai.

**Example**:
```html
<div class="box">Long content that exceeds the box dimensions...</div>
<style>
.box {
  width: 200px;
  height: 100px;
  overflow: auto;
  background: lightblue;
}
</style>
```
*Summary*: Box mein extra content ke liye scrollbar dikhta hai.

**Interview Tip**:
1. **Tip**: `overflow` ke values aur use cases samjhao.
   - **Explanation**: `overflow: visible` content ko dikhta hai, `hidden` clips karta hai, `scroll` hamesha scrollbar deta hai, aur `auto` zarurat pe scrollbar add karta hai. Interview mein practical uses, jaise scrollable containers ya clipped modals, pe focus karo.
2. **Question**: What’s the difference between `overflow: auto` and `overflow: scroll`?
   - **Answer**: `overflow: auto` sirf jab content overflow karta hai tab scrollbar dikhata hai, jabki `overflow: scroll` hamesha scrollbars (horizontal aur vertical) dikhata hai, even if content fit karta ho. Example:
     ```html
     <div class="container">Short text</div>
     <style>
     .container { width: 200px; height: 100px; overflow: scroll; }
     </style>
     ```
     *`scroll` hamesha scrollbars dikhayega, `auto` nahi.*

### 28. What is the `calc()` Function? *(imp)*
`calc()` function CSS mein mathematical calculations karta hai, jaise addition, subtraction, multiplication, ya division, taaki dynamic sizing ya spacing create ho. Yeh responsive layouts ke liye useful hai.

**Example**:
```html
<div class="box">Calculated Width</div>
<style>
.box {
  width: calc(100% - 100px);
  background: lightgreen;
  padding: 10px;
}
</style>
```
*Summary*: Box ka width viewport ke 100% se 100px kam hai.

**Interview Tip**:
1. **Tip**: `calc()` ke use cases aur syntax samjhao.
   - **Explanation**: `calc()` units (px, %, vw, rem) ke saath calculations karta hai, jo responsive designs, dynamic spacing, ya complex layouts ke liye ideal hai. Interview mein real-world examples, jaise centered containers ya variable widths, pe focus karo.
2. **Question**: What are some use cases for `calc()`?
   - **Answer**: `calc()` responsive widths (e.g., 100% minus fixed margin), dynamic font sizes, ya spacing calculations ke liye use hota hai. Yeh layouts ko flexible aur maintainable banata hai. Example:
     ```html
     <div class="container">Content</div>
     <style>
     .container { width: calc(50vw - 2rem); }
     </style>
     ```
     *Container ka width viewport ke 50% se 2rem kam hota hai.*

### 29. What is the `transform` Property? *(imp)*
`transform` property elements ko visually manipulate karta hai, jaise rotate, scale, translate, ya skew, without affecting layout flow. Yeh animations, hover effects, ya UI enhancements ke liye use hota hai.  
Transforms GPU-accelerated hote hain, jo performance ke liye better hai, aur multiple transforms combine kiye ja sakte hain. Yeh modern web design mein dynamic visuals ke liye critical hai.

**Example**:
```html
<div class="box">Transformed</div>
<style>
.box {
  width: 100px;
  height: 100px;
  background: purple;
  transform: translate(50px, 20px) rotate(30deg);
}
</style>
```
*Summary*: Box 50px right, 20px down shift hota hai aur 30-degree rotate karta hai.

**Interview Tip**:
1. **Tip**: `transform` ke types aur performance benefits samjhao.
   - **Explanation**: `transform` ke functions jaise `translate`, `rotate`, `scale`, aur `skew` visual changes dete hain without layout recalculation, jo performance ke liye good hai. Interview mein animation integration ya transform chaining pe focus karo.
2. **Question**: What’s the difference between `transform` and `transition`?
   - **Answer**: `transform` element ke visual properties (jaise position, rotation) ko change karta hai, jabki `transition` in changes ko smooth karta hai over time. Dono saath mein animations banate hain. Example:
     ```html
     <div class="box">Hover</div>
     <style>
     .box { transform: scale(1); transition: transform 0.3s; }
     .box:hover { transform: scale(1.2); }
     </style>
     ```
     *Transform scale change karta hai, transition usko smooth karta hai.*

### 30. What is the `opacity` Property? *(imp)*
`opacity` property element ki transparency set karta hai, 0 (fully transparent) se 1 (fully opaque) tak. Yeh visual effects jaise fades, overlays, ya hover states ke liye use hota hai.

**Example**:
```html
<div class="box">Faded Box</div>
<style>
.box {
  width: 100px;
  height: 100px;
  background: teal;
  opacity: 0.5;
}
</style>
```
*Summary*: Box 50% transparent hai, background ke through dikhta hai.

**Interview Tip**:
1. **Tip**: `opacity` ke use cases aur performance impact samjhao.
   - **Explanation**: `opacity` simple transparency effects ke liye use hota hai, jaise hover states ya modals, lekin poore element (children sahit) ko affect karta hai. Interview mein alternatives (jaise `rgba` for specific parts) aur performance pe focus karo.
2. **Question**: What’s the difference between `opacity` and `rgba`?
   - **Answer**: `opacity` poore element (children sahit) ki transparency set karta hai, jabki `rgba` sirf specific properties (jaise background, color) ke liye transparency deta hai. Example:
     ```html
     <div class="box">Content</div>
     <style>
     .box { background: rgba(0, 128, 128, 0.5); opacity: 1; }
     </style>
     ```
     *`rgba` sirf background ko transparent karta hai, `opacity` poore box ko.*

### 30. What is the `opacity` Property? *(imp)*
`opacity` property element ki transparency set karta hai, 0 (fully transparent) se 1 (fully opaque) tak. Yeh visual effects jaise fades, overlays, ya hover states ke liye use hota hai.

**Example**:
```html
<div class="box">Semi-Transparent</div>
<style>
.box {
  background: blue;
  color: white;
  padding: 20px;
  opacity: 0.7;
}
</style>
```
*Summary*: Box 70% opaque hai, background ke through thoda dikhta hai.

**Interview Tip**:
1. **Tip**: `opacity` ke use cases aur limitations samjhao.
   - **Explanation**: `opacity` poore element (children sahit) ko transparent karta hai, jo overlays, modals, ya hover effects ke liye ideal hai. Interview mein alternatives (jaise `rgba`) aur performance implications pe focus karo.
2. **Question**: What’s the difference between `opacity` and `rgba`?
   - **Answer**: `opacity` poore element (children sahit) ki transparency set karta hai, jabki `rgba` sirf specific properties (jaise background, color) ke liye transparency deta hai. Example:
     ```html
     <div class="box">Content</div>
     <style>
     .box { background: rgba(0, 0, 255, 0.7); opacity: 1; }
     </style>
     ```
     *`rgba` sirf background ko transparent karta hai, `opacity` poore box ko.*

### 31. What is the `clip-path` Property? *(imp)*
`clip-path` property element ke visible portion ko custom shapes (jaise polygons, circles) mein clip karta hai, jo unique designs aur creative layouts ke liye use hota hai. Yeh images, divs, ya SVGs pe apply ho sakta hai.  
Yeh property responsive designs mein dynamic shapes ya decorative elements banane ke liye powerful hai, lekin complex shapes ke liye calculations ya tools zaroori hote hain. Modern UI effects ke liye bohot popular hai.

**Example**:
```html
<div class="box">Clipped</div>
<style>
.box {
  width: 200px;
  height: 200px;
  background: orange;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}
</style>
```
*Summary*: Box triangular shape mein clipped hai, orange background ke saath.

**Interview Tip**:
1. **Tip**: `clip-path` ke use cases aur shape creation samjhao.
   - **Explanation**: `clip-path` custom shapes (polygons, circles, ellipses) ya SVG paths ke through creative designs banata hai, jaise hero sections ya image masks. Interview mein tools (jaise Clippy) aur responsive shape adjustments pe focus karo.
2. **Question**: What are some use cases for `clip-path`?
   - **Answer**: `clip-path` unique UI elements (jaise angled sections), image cropping, ya decorative shapes banane ke liye use hota hai. Yeh modern designs mein visual interest add karta hai. Example:
     ```html
     <img class="img" src="image.jpg" alt="Clipped">
     <style>
     .img { clip-path: circle(50% at 50% 50%); }
     </style>
     ```
     *Image circular shape mein clipped hota hai.*

### 32. What is the `filter` Property? *(imp)*
`filter` property visual effects jaise blur, grayscale, brightness, ya contrast element pe apply karta hai, jo images ya UI components ke liye use hota hai. Yeh GPU-accelerated hota hai, performance ke liye good.

**Example**:
```html
<img class="img" src="image.jpg" alt="Filtered">
<style>
.img {
  filter: grayscale(100%) brightness(80%);
}
</style>
```
*Summary*: Image grayscale aur 80% brightness ke saath dikhta hai.

**Interview Tip**:
1. **Tip**: `filter` ke common effects aur use cases samjhao.
   - **Explanation**: `filter` ke effects jaise `blur`, `grayscale`, `sepia`, ya `drop-shadow` images, buttons, ya hover states ko enhance karte hain. Interview mein performance benefits aur creative applications (jaise hover animations) pe focus karo.
2. **Question**: What are common uses of the `filter` property?
   - **Answer**: `filter` image effects (grayscale, sepia), hover animations (blur, brightness), ya accessibility adjustments (high contrast) ke liye use hota hai. Yeh UI ko visually rich banata hai. Example:
     ```html
     <div class="box">Hover</div>
     <style>
     .box { filter: blur(0); transition: filter 0.3s; }
     .box:hover { filter: blur(2px); }
     </style>
     ```
     *Box hover pe blurred effect deta hai.*

### 33. What are `vh`, `vw`, `vmin`, `vmax` Units? *(imp)*
Viewport units screen size ke relative hote hain: `vw` (1% viewport width), `vh` (1% viewport height), `vmin` (smaller of vw/vh), aur `vmax` (larger of vw/vh). Yeh responsive layouts ke liye ideal hain.

**Example**:
```html
<div class="hero">Hero Section</div>
<style>
.hero {
  height: 100vh;
  width: 50vw;
  background: lightblue;
}
</style>
```
*Summary*: Hero section full viewport height aur half viewport width ka hai.

**Interview Tip**:
1. **Tip**: Viewport units ke use cases aur responsiveness samjhao.
   - **Explanation**: `vw` aur `vh` full-screen sections ya hero banners ke liye perfect hain, jabki `vmin`/`vmax` responsive typography ya sizing ke liye use hote hain. Interview mein responsive design applications pe focus karo.
2. **Question**: When to use `vmin` or `vmax`?
   - **Answer**: `vmin` tab use karo jab smaller dimension (width ya height) ke basis pe sizing chahiye, jaise mobile-first designs mein. `vmax` larger dimension ke liye, jaise desktop-focused layouts. Example:
     ```html
     <div class="box">Box</div>
     <style>
     .box { font-size: 5vmin; }
     </style>
     ```
     *Font-size viewport ke smaller dimension ke 5% ke basis pe scale karta hai.*

### 34. What is a CSS Sprite? *(imp)*
CSS sprite multiple images ko ek single image mein combine karta hai, jo background-position ke through select kiye jate hain, taaki HTTP requests kam hon aur performance improve ho. Yeh icons ya small graphics ke liye common hai.

**Example**:
```html
<div class="icon"></div>
<style>
.icon {
  background: url('sprites.png') 0 0;
  width: 50px;
  height: 50px;
}
</style>
```
*Summary*: Icon spritesheet se specific image dikhata hai.

**Interview Tip**:
1. **Tip**: CSS sprites ke performance benefits aur implementation samjhao.
   - **Explanation**: Sprites HTTP requests reduce karte hain by combining images, jo page load speed badhata hai, especially icon-heavy UIs mein. Interview mein modern alternatives (jaise SVG sprites) aur sprite generation tools pe focus karo.
2. **Question**: Why are CSS sprites used for performance?
   - **Answer**: CSS sprites multiple images ko ek file mein combine karke HTTP requests kam karte hain, jo page load time aur bandwidth usage reduce karta hai. Yeh icons ya UI elements ke liye efficient hai. Example:
     ```html
     <div class="social-icon"></div>
     <style>
     .social-icon { background: url('social-sprite.png') -50px 0; width: 50px; height: 50px; }
     </style>
     ```
     *Social icon spritesheet se specific icon dikhata hai.*

### 35. What is the Difference Between `position: static` and `position: relative`? *(imp)*
`position: static` default hai, element normal document flow mein rehta hai, aur offset properties (top, left) kaam nahi karte. `position: relative` bhi normal flow mein rehta hai, lekin offset properties se shift ho sakta hai aur absolute children ke liye reference ban sakta hai.

**Example**:
```html
<div class="relative">Relative</div>
<style>
.relative {
  position: relative;
  top: 10px;
  left: 20px;
  background: lightgreen;
}
</style>
```
*Summary*: Relative div 10px down aur 20px left shift hota hai.

**Interview Tip**:
1. **Tip**: `static` aur `relative` ke behaviors aur use cases samjhao.
   - **Explanation**: `static` simple layouts ke liye hai jahan positioning ki zarurat nahi, jabki `relative` minor adjustments ya absolute positioning ke parent ke liye use hota hai. Interview mein relative ka role as a container pe focus karo.
2. **Question**: When to use `position: relative`?
   - **Answer**: `position: relative` tab use karo jab element ko normal flow mein rakhte hue thoda offset chahiye ya absolute positioned children ke liye parent reference banana ho. Example:
     ```html
     <div class="parent">
       <div class="child">Child</div>
     </div>
     <style>
     .parent { position: relative; }
     .child { position: absolute; top: 10px; }
     </style>
     ```
     *Relative parent absolute child ko position karta hai.*

### 36. What is the `font` Shorthand Property? *(imp)*
`font` shorthand property font-related styles (jaise style, weight, size, family) ko ek line mein set karta hai. Yeh code ko concise aur readable banata hai.

**Example**:
```html
<p class="text">Styled Text</p>
<style>
.text {
  font: italic 700 1.2em "Arial", sans-serif;
}
</style>
```
*Summary*: Text italic, bold, 1.2em size, aur Arial font mein hai.

**Interview Tip**:
1. **Tip**: `font` shorthand ke components aur order samjhao.
   - **Explanation**: `font` shorthand mein `font-style`, `font-weight`, `font-size`, `line-height` (optional), aur `font-family` include hote hain, specific order mein. Interview mein required vs optional components aur common mistakes pe focus karo.
2. **Question**: What are the components of the `font` shorthand?
   - **Answer**: `font` shorthand ke components hain `font-style` (e.g., italic), `font-variant` (optional), `font-weight` (e.g., 700), `font-size` (e.g., 1.2em), `line-height` (optional, e.g., 1.5), aur `font-family` (e.g., Arial). `font-size` aur `font-family` mandatory hain. Example:
     ```html
     <p class="text">Text</p>
     <style>
     .text { font: 1em Arial; }
     </style>
     ```
     *Text 1em size aur Arial font mein hai.*

### 37. What is the `background` Shorthand Property? *(imp)*
`background` shorthand property background-related styles (jaise image, color, position, repeat, size) ko ek line mein set karta hai. Yeh code ko compact aur maintainable banata hai.

**Example**:
```html
<div class="box">Background</div>
<style>
.box {
  background: url('image.jpg') no-repeat center / cover #333;
}
</style>
```
*Summary*: Box ka background image centered, non-repeating, cover-sized, aur fallback gray hai.

**Interview Tip**:
1. **Tip**: `background` shorthand ke components aur flexibility samjhao.
   - **Explanation**: `background` mein `background-color`, `background-image`, `background-position`, `background-size`, `background-repeat`, aur `background-attachment` include hote hain, order flexible hai. Interview mein shorthand ke benefits aur common use cases pe focus karo.
2. **Question**: What are the components of the `background` shorthand?
   - **Answer**: `background` shorthand ke components hain `background-color`, `background-image`, `background-position`, `background-size`, `background-repeat`, `background-origin`, `background-clip`, aur `background-attachment`. Sab optional hain, order vary kar sakta hai. Example:
     ```html
     <div class="section">Section</div>
     <style>
     .section { background: #f0f0f0 center / 50%; }
     </style>
     ```
     *Section ka background light gray hai, image centered aur 50% sized.*

### 38. What is the `flex` Shorthand Property? *(imp)*
`flex` shorthand property flex items ke behavior ko set karta hai, combining `flex-grow`, `flex-shrink`, aur `flex-basis`. Yeh Flexbox layouts mein item sizing aur responsiveness control karta hai.

**Example**:
```html
<div class="container">
  <div class="item">Item</div>
</div>
<style>
.container {
  display: flex;
}
.item {
  flex: 1 0 auto;
}
</style>
```
*Summary*: Item container ke available space ke hisaab se grow karta hai.

**Interview Tip**:
1. **Tip**: `flex` shorthand ke components aur Flexbox role samjhao.
   - **Explanation**: `flex` ke parts – `flex-grow` (space lene ki capacity), `flex-shrink` (shrink hone ki capacity), aur `flex-basis` (initial size) – items ke dynamic sizing ko control karte hain. Interview mein responsive layouts mein flex ke use pe focus karo.
2. **Question**: What are the components of the `flex` shorthand?
   - **Answer**: `flex` shorthand ke components hain `flex-grow` (available space lene ka ratio), `flex-shrink` (space kam hone pe shrink ratio), aur `flex-basis` (initial size, e.g., auto, px). Example:
     ```html
     <div class="flex">
       <div class="item">Item</div>
     </div>
     <style>
     .flex { display: flex; }
     .item { flex: 2 1 200px; }
     </style>
     ```
     *Item 200px base size se shuru hota hai, 2x grow aur 1x shrink karta hai.*

### 39. What is the `grid-template` Property? *(imp)*
`grid-template` shorthand property CSS Grid ke layout ko define karta hai, combining `grid-template-rows`, `grid-template-columns`, aur `grid-template-areas`. Yeh complex 2D layouts ke liye precise control deta hai.  
Yeh dashboards, galleries, ya responsive page structures banane ke liye ideal hai, aur `fr` units ya named areas ke through flexibility deta hai. Modern web design mein Grid ke core components mein se ek hai.

**Example**:
```html
<div class="grid">
  <div>1</div>
  <div>2</div>
</div>
<style>
.grid {
  display: grid;
  grid-template: 100px 1fr / 1fr 1fr;
}
</style>
```
*Summary*: Grid 2x2 layout banata hai, pehli row 100px, doosri flexible, columns equal.

**Interview Tip**:
1. **Tip**: `grid-template` ke components aur Grid layouts samjhao.
   - **Explanation**: `grid-template` rows, columns, aur areas ko ek line mein define karta hai, jo complex layouts ko concise banata hai. Named areas aur `fr` units responsive designs ke liye powerful hain. Interview mein practical examples, jaise page layouts, pe focus karo.
2. **Question**: How does `grid-template` simplify Grid layouts?
   - **Answer**: `grid-template` `grid-template-rows`, `grid-template-columns`, aur `grid-template-areas` ko combine karta hai, jo code ko compact aur readable banata hai. Yeh complex layouts ko easily define karta hai. Example:
     ```html
     <div class="grid">
       <div>Header</div>
       <div>Main</div>
     </div>
     <style>
     .grid { display: grid; grid-template: "header" 100px "main" 1fr / 1fr; }
     </style>
     ```
     *Grid header aur main areas ke saath vertical layout banata hai.*


### 40. What is the `gap` Property? *(imp)*
`gap` property Flexbox ya Grid layouts mein items ke beech consistent spacing set karta hai, margin se simpler aur cleaner approach deta hai. Yeh responsive designs mein uniform gaps ke liye ideal hai.

**Example**:
```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
<style>
.container {
  display: flex;
  gap: 15px;
}
</style>
```
*Summary*: Flex items ke beech 15px ka consistent gap hai.

**Interview Tip**:
1. **Tip**: `gap` ke benefits aur Flex/Grid context samjhao.
   - **Explanation**: `gap` margin ke manual adjustments ko replace karta hai, code ko cleaner aur maintainable banata hai. Yeh Flexbox aur Grid dono mein kaam karta hai, responsive layouts ke liye perfect. Interview mein gap vs margin ke advantages pe focus karo.
2. **Question**: Why is `gap` preferred over margins in modern layouts?
   - **Answer**: `gap` consistent spacing deta hai without extra margin calculations, Flexbox aur Grid mein directly apply hota hai, aur responsive designs mein simpler hai. Margin se overlapping ya inconsistent spacing issues ho sakte hain. Example:
     ```html
     <div class="grid">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
     </style>
     ```
     *Grid items ke beech 20px gap automatic aur uniform hai.*


## Advanced Level


### 41. What are CSS Preprocessors? *(imp)*
CSS preprocessors (jaise SASS, SCSS, LESS) CSS ko enhance karte hain by adding features jaise variables, nesting, mixins, aur functions, jo code ko modular aur reusable banate hain. Yeh large-scale projects mein development ko faster aur maintainable karte hain.  
Preprocessors CSS mein advanced logic (jaise loops, conditionals) aur better organization (jaise partials, imports) dete hain. Yeh compile hoke vanilla CSS ban jate hain, jo browsers run karte hain.

**Example**:
```scss
$primary: #3498db;
.button {
  background: $primary;
  padding: 10px;
  &:hover {
    background: darken($primary, 10%);
  }
}
```
*Summary*: Button blue background ke saath, hover pe darker shade.

**Interview Tip**:
1. **Tip**: Preprocessors ke core features aur benefits samjhao.
   - **Explanation**: Variables, nesting, aur mixins code repetition kam karte hain, jabki imports aur partials large projects mein organization improve karte hain. Interview mein SASS/SCSS ke practical uses (jaise theming) aur setup (compilers) pe focus karo.
2. **Question**: What are the benefits of using a CSS preprocessor like SASS?
   - **Answer**: SASS variables, nesting, mixins, aur imports ke through reusable aur modular code deta hai, development speed badhata hai, aur large-scale projects mein maintenance asaan karta hai. Example:
     ```scss
     $font-stack: Arial, sans-serif;
     @mixin border($size) { border: $size solid black; }
     .card { font-family: $font-stack; @include border(2px); }
     ```
     *Card reusable font aur border styles ke saath ban jata hai.*

### 42. What is the Difference Between `visibility: hidden` and `display: none`? *(imp)*
`visibility: hidden` element ko hide karta hai lekin uska layout space reserve rakhta hai, jabki `display: none` element ko DOM se remove karta hai aur space nahi leta. Yeh UI toggling ke liye use hote hain.

**Example**:
```html
<div class="hidden">Hidden</div>
<div class="gone">Gone</div>
<style>
.hidden { visibility: hidden; }
.gone { display: none; }
</style>
```
*Summary*: Hidden div space leta hai, gone div nahi dikhta aur space nahi leta.

**Interview Tip**:
1. **Tip**: `visibility: hidden` aur `display: none` ke use cases samjhao.
   - **Explanation**: `visibility: hidden` temporary hiding ke liye jab layout maintain karna ho, jabki `display: none` complete removal ke liye, jaise conditional UI elements. Interview mein performance impact (e.g., reflows) aur accessibility pe focus karo.
2. **Question**: When to use `visibility: hidden` over `display: none`?
   - **Answer**: `visibility: hidden` tab use karo jab element hide karna ho lekin uska layout space preserve karna ho, jaise animations ya toggle effects mein. `display: none` tab jab space bhi remove karna ho, jaise off-screen menus. Example:
     ```html
     <div class="toggle">Toggle</div>
     <style>
     .toggle { visibility: hidden; }
     </style>
     ```
     *Toggle div hide hai lekin space reserve karta hai.*

### 43. What is the `will-change` Property? *(imp)*
`will-change` property browser ko hint deta hai ki element ka kaunsa property change hoga (e.g., transform, opacity), taaki rendering optimizations apply ho aur animations smoother hon. Overuse se memory issues ho sakte hain.

**Example**:
```html
<div class="box">Animated</div>
<style>
.box {
  will-change: transform;
  transition: transform 0.3s;
}
.box:hover {
  transform: scale(1.1);
}
</style>
```
*Summary*: Box ke transform animation ke liye browser optimize karta hai.

**Interview Tip**:
1. **Tip**: `will-change` ke purpose aur cautious use samjhao.
   - **Explanation**: `will-change` animations ya transitions ke liye performance boost deta hai by preparing browser, lekin unnecessary ya broad use (e.g., `will-change: all`) memory aur performance issues de sakta hai. Interview mein specific use aur debugging pe focus karo.
2. **Question**: What are the risks of misusing `will-change`?
   - **Answer**: `will-change` ka overuse (e.g., multiple elements pe ya vague values jaise `all`) memory consumption badhata hai aur performance degrade kar sakta hai. Specific properties (jaise `transform`, `opacity`) pe limit karo. Example:
     ```html
     <div class="card">Card</div>
     <style>
     .card { will-change: opacity; }
     </style>
     ```
     *Card ke opacity changes ke liye optimized hai, lekin overused nahi.*

### 44. What is the `object-fit` Property? *(imp)*
`object-fit` property images ya videos ke contentcompressor ko kaise fit karna hai container mein specify karta hai, jaise stretch, contain, ya cover. Yeh responsive media ke liye critical hai.

**Example**:
```html
<img class="media" src="image.jpg" alt="Media">
<style>
.media {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
```
*Summary*: Image 200x200px container mein aspect ratio maintain karke crop hoti hai.

**Interview Tip**:
1. **Tip**: `object-fit` ke values aur responsive use samjhao.
   - **Explanation**: `object-fit: cover` aspect ratio rakhta hai aur crops karta hai, `contain` fit karta hai without cropping, `fill` stretch karta hai. Interview mein image galleries ya video players ke use cases pe focus karo.
2. **Question**: When to use `object-fit: cover`?
   - **Answer**: `object-fit: cover` tab use karo jab image ya video ko container mein fully cover karna ho while maintaining aspect ratio, jaise thumbnails ya hero images mein. Cropping hota hai, lekin distortion nahi. Example:
     ```html
     <img class="thumbnail" src="image.jpg" alt="Thumbnail">
     <style>
     .thumbnail { width: 100%; height: 150px; object-fit: cover; }
     </style>
     ```
     *Image thumbnail ke liye cropped aur aspect ratio ke saath fit hoti hai.*

### 45. What is the `mix-blend-mode` Property? *(imp)*
`mix-blend-mode` property elements ke blending behavior ko control karta hai, jaise colors ya images kaise overlap hote hain (e.g., multiply, screen, overlay). Yeh creative visual effects ke liye use hota hai.  
Blend modes graphic design-inspired effects dete hain, jo images, text, ya backgrounds pe apply ho sakte hain. Yeh modern UI designs mein artistic aur dynamic visuals ke liye popular hai.

**Example**:
```html
<div class="overlay">Overlay</div>
<style>
.overlay {
  background: red;
  mix-blend-mode: multiply;
  position: absolute;
  top: 0;
}
</style>
```
*Summary*: Red overlay underlying content ke saath multiply blend karta hai.

**Interview Tip**:
1. **Tip**: Common blend modes aur creative uses samjhao.
   - **Explanation**: `multiply` darkens, `screen` lightens, `overlay` contrast adjust karta hai. Yeh photo effects, text overlays, ya artistic backgrounds ke liye use hote hain. Interview mein browser support aur practical applications pe focus karo.
2. **Question**: What are common `mix-blend-mode` values?
   - **Answer**: Common values hain `multiply` (darkens overlapping areas), `screen` (lightens), `overlay` (contrast-based), aur `difference` (inverts colors). Yeh creative effects ke liye use hote hain. Example:
     ```html
     <div class="text">Text</div>
     <style>
     .text { mix-blend-mode: difference; color: white; }
     </style>
     ```
     *Text background ke saath inverted color effect deta hai.*

### 46. What is the `shape-outside` Property? *(imp)*
`shape-outside` property text ko custom shapes (jaise circle, polygon) ke around wrap karne ke liye use hota hai, jo floated elements pe apply hoti hai. Yeh magazine-style layouts ya creative designs ke liye ideal hai.  
Yeh property images ya divs ke saath text flow ko control karta hai, visual hierarchy aur readability improve karta hai. Modern browsers mein support strong hai, lekin float-based hai.

**Example**:
```html
<img class="shape" src="image.jpg" alt="Shape">
<p>Text wraps around the image...</p>
<style>
.shape {
  float: left;
  shape-outside: circle(50%);
  width: 200px;
  height: 200px;
}
</style>
```
*Summary*: Text circular image ke around wrap karta hai.

**Interview Tip**:
1. **Tip**: `shape-outside` ke use cases aur requirements samjhao.
   - **Explanation**: `shape-outside` floated elements pe kaam karta hai aur text ko shapes ke around flow karta hai, jaise circular images ya angled divs. Interview mein creative layouts (e.g., editorial designs) aur limitations (float dependency) pe focus karo.
2. **Question**: What are use cases for `shape-outside`?
   - **Answer**: `shape-outside` magazine-style layouts, image-text wraps, ya decorative text flows ke liye use hota hai, jo visual appeal aur readability badhata hai. Example:
     ```html
     <div class="shape">Shape</div>
     <p>Text wraps...</p>
     <style>
     .shape { float: left; shape-outside: polygon(0 0, 100% 0, 0 100%); width: 150px; height: 150px; }
     </style>
     ```
     *Text triangular shape ke around wrap karta hai.*

### 47. What is the `counter` Property? *(imp)*
`counter` property automatic numbering ke liye use hota hai, jaise ordered lists, headings, ya table of contents mein. Yeh `counter-reset`, `counter-increment`, aur `content` ke saath custom counters banata hai.  
Yeh structured documents mein dynamic numbering ke liye powerful hai, aur CSS-only solutions deta hai without JavaScript. Complex nesting ke liye flexible hai.

**Example**:
```html
<ol>
  <li>Item</li>
  <li>Item</li>
</ol>
<style>
ol {
  counter-reset: my-counter;
  list-style: none;
}
li::before {
  content: counter(my-counter) ". ";
  counter-increment: my-counter;
}
</style>
```
*Summary*: List items custom numbering (1., 2.) ke saath dikhte hain.

**Interview Tip**:
1. **Tip**: `counter` ke mechanics aur use cases samjhao.
   - **Explanation**: `counter-reset` initial value set karta hai, `counter-increment` count badhata hai, aur `content` counter display karta hai. Yeh TOC, outlines, ya multi-level lists ke liye use hota hai. Interview mein nested counters aur practical examples pe focus karo.
2. **Question**: How to create a nested counter in CSS?
   - **Answer**: Nested counters multiple counter-reset aur counter-increment ke saath banaye jate hain, har level ke liye alag counter use karke. Example:
     ```html
     <ol>
       <li>Section
         <ol>
           <li>Subsection</li>
         </ol>
       </li>
     </ol>
     <style>
     ol { counter-reset: section; }
     li { counter-reset: subsection; }
     li::before { content: counter(section) ". "; counter-increment: section; }
     ol ol li::before { content: counter(section) "." counter(subsection) " "; counter-increment: subsection; }
     </style>
     ```
     *Output: 1., 1.1., etc., nested numbering ke liye.*

### 48. What is the `clip` Property? *(imp)*
`clip` property element ke visible area ko rectangular shape mein clip karta hai, lekin yeh deprecated hai aur `clip-path` modern alternative hai. Yeh sirf `position: absolute` ya `fixed` elements pe kaam karta tha.

**Example**:
```html
<div class="box">Clipped</div>
<style>
.box {
  position: absolute;
  clip: rect(10px, 100px, 100px, 10px);
}
</style>
```
*Summary*: Box ka 10px-100px area visible hai.

**Interview Tip**:
1. **Tip**: `clip` ke limitations aur `clip-path` ka advantage samjhao.
   - **Explanation**: `clip` sirf rectangular clipping karta hai aur outdated hai, jabki `clip-path` complex shapes (polygons, circles) aur better browser support deta hai. Interview mein modern alternatives aur migration pe focus karo.
2. **Question**: Why is `clip-path` preferred over `clip`?
   - **Answer**: `clip-path` `clip` se zyada flexible hai kyunki yeh complex shapes (circles, polygons, SVGs) support karta hai, aur sab positioning types pe kaam karta hai, unlike `clip` jo limited aur deprecated hai. Example:
     ```html
     <div class="box">Modern Clip</div>
     <style>
     .box { clip-path: inset(10px 10px 10px 10px); }
     </style>
     ```
     *`clip-path` rectangular clipping modern tareeke se karta hai.*

### 49. What is the `scroll-behavior` Property? *(imp)*
`scroll-behavior` property smooth scrolling enable karta hai jab navigation links ya anchors pe click hota hai. Yeh user experience ko enhance karta hai without JavaScript.

**Example**:
```html
<a href="#section">Go to Section</a>
<div id="section">Section</div>
<style>
html {
  scroll-behavior: smooth;
}
</style>
```
*Summary*: Anchor click pe page smoothly section tak scroll karta hai.

**Interview Tip**:
1. **Tip**: `scroll-behavior` ke benefits aur limitations samjhao.
   - **Explanation**: `scroll-behavior: smooth` native smooth scrolling deta hai, jo UX improve karta hai, lekin older browsers mein support limited hai. Interview mein fallback options (e.g., JavaScript) aur accessibility pe focus karo.
2. **Question**: What are limitations of `scroll-behavior`?
   - **Answer**: `scroll-behavior` ka main limitation hai limited browser support (especially older browsers) aur customization options ka kami (e.g., speed control). Fallback ke liye JavaScript use karna pad sakta hai. Example:
     ```html
     <a href="#bottom">Go to Bottom</a>
     <div id="bottom">Bottom</div>
     <style>
     html { scroll-behavior: smooth; }
     </style>
     ```
     *Smooth scrolling kaam karta hai modern browsers mein.*

### 50. What is the `aspect-ratio` Property? *(imp)*
`aspect-ratio` property element ka width-to-height ratio set karta hai, taaki responsive media containers (jaise images, videos) consistent proportions rakhein. Yeh modern layouts ke liye useful hai.

**Example**:
```html
<div class="box">Media</div>
<style>
.box {
  width: 200px;
  aspect-ratio: 16 / 9;
  background: lightblue;
}
</style>
```
*Summary*: Box 200px wide aur 16:9 ratio ke hisaab se height rakhta hai.

**Interview Tip**:
1. **Tip**: `aspect-ratio` ke use cases aur fallback samjhao.
   - **Explanation**: `aspect-ratio` images, videos, ya iframes ke liye consistent proportions deta hai, jo responsive designs mein critical hai. Older browsers ke liye padding-bottom hack fallback hai. Interview mein media containers aur browser support pe focus karo.
2. **Question**: Why is `aspect-ratio` useful for responsive design?
   - **Answer**: `aspect-ratio` responsive media containers ke liye consistent proportions ensure karta hai, manual calculations ya hacks (jaise padding-bottom) ko eliminate karta hai, aur layouts ko cleaner banata hai. Example:
     ```html
     <video class="video" src="video.mp4"></video>
     <style>
     .video { width: 100%; aspect-ratio: 4 / 3; }
     </style>
     ```
     *Video 4:3 ratio maintain karta hai, width responsive.*


### 51. What is the `backdrop-filter` Property? *(imp)*
`backdrop-filter` property element ke piche wale content pe visual effects (jaise blur, grayscale) apply karta hai, jo glassmorphism ya frosted-glass effects ke liye use hota hai. Yeh modern UI designs mein depth aur elegance add karta hai.  
Yeh property transparent ya semi-transparent elements pe best kaam karta hai, lekin browser support (especially older browsers) aur performance considerations dhyan rakhne padte hain.

**Example**:
```html
<div class="overlay">Overlay</div>
<style>
.overlay {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  padding: 20px;
}
</style>
```
*Summary*: Overlay ke piche content 5px blur effect ke saath dikhta hai.

**Interview Tip**:
1. **Tip**: `backdrop-filter` ke use cases aur limitations samjhao.
   - **Explanation**: `backdrop-filter` glassmorphism effects, modals, ya navigation bars ke liye ideal hai, lekin GPU-heavy hai aur older browsers mein support limited ho sakta hai. Interview mein fallback strategies (jaise static backgrounds) aur accessibility pe focus karo.
2. **Question**: What are common use cases for `backdrop-filter`?
   - **Answer**: `backdrop-filter` frosted-glass effects, blurred overlays, ya modern UI elements (jaise sidebars, popups) ke liye use hota hai, jo depth aur visual hierarchy banata hai. Example:
     ```html
     <nav class="nav">Menu</nav>
     <style>
     .nav { background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); }
     </style>
     ```
     *Nav bar ke piche content blurred dikhta hai, modern look deta hai.*

### 52. What is the `place-items` Property? *(imp)*
`place-items` shorthand property Flexbox ya Grid mein items ko align karta hai, `align-items` (vertical) aur `justify-items` (horizontal) ko combine karke. Yeh quick centering aur clean code ke liye useful hai.

**Example**:
```html
<div class="grid">
  <div>Item</div>
</div>
<style>
.grid {
  display: grid;
  place-items: center;
  height: 200px;
}
</style>
```
*Summary*: Item grid ke center mein horizontally aur vertically aligned hai.

**Interview Tip**:
1. **Tip**: `place-items` ke role aur efficiency samjhao.
   - **Explanation**: `place-items` ek line mein alignment set karta hai, jo Flexbox aur Grid layouts mein repetitive code kam karta hai. Interview mein centering use cases aur shorthand benefits pe focus karo.
2. **Question**: How does `place-items` simplify alignment in Grid?
   - **Answer**: `place-items` `align-items` aur `justify-items` ko combine karta hai, jo Grid items ko ek command mein center ya align karta hai, code ko concise banata hai. Example:
     ```html
     <div class="container">
       <div>Item</div>
     </div>
     <style>
     .container { display: grid; place-items: start end; }
     </style>
     ```
     *Item top-right corner mein aligned hota hai.*

### 53. What is the `text-decoration` Property? *(imp)*
`text-decoration` property text ko underline, overline, ya strikethrough styles deta hai, ya inko remove karta hai (e.g., links ke underlines). Yeh text styling ke liye simple aur effective hai.

**Example**:
```html
<a href="#" class="link">Link</a>
<style>
.link {
  text-decoration: none;
}
</style>
```
*Summary*: Link ka default underline remove ho jata hai.

**Interview Tip**:
1. **Tip**: `text-decoration` ke uses aur alternatives samjhao.
   - **Explanation**: `text-decoration` links, emphasis, ya text effects ke liye use hota hai, lekin `border-bottom` zyada customizable alternative hai. Interview mein accessibility (e.g., link visibility) aur modern styling pe focus karo.
2. **Question**: What’s the difference between `text-decoration` and `border-bottom`?
   - **Answer**: `text-decoration` text ke liye simple styling (underline, strikethrough) deta hai, jabki `border-bottom` customizable hai (color, thickness, spacing) lekin space leta hai. Example:
     ```html
     <a href="#" class="custom">Custom</a>
     <style>
     .custom { text-decoration: none; border-bottom: 2px solid blue; }
     </style>
     ```
     *Link ka underline border-bottom se blue aur thick dikhta hai.*

### 54. What is the `outline` Property? *(imp)*
`outline` property element ke bahar non-space-taking border banata hai, jo focus states ya accessibility ke liye use hota hai. Yeh layout ko affect nahi karta, unlike `border`.

**Example**:
```html
<input type="text" class="input">
<style>
.input:focus {
  outline: 2px solid blue;
}
</style>
```
*Summary*: Input focus hone pe blue outline dikhta hai, space nahi leta.

**Interview Tip**:
1. **Tip**: `outline` ke accessibility role aur differences samjhao.
   - **Explanation**: `outline` focus indicators ke liye critical hai, especially keyboard navigation mein, aur `border` se alag hai kyunki space nahi leta. Interview mein accessibility best practices aur custom outlines pe focus karo.
2. **Question**: What’s the difference between `outline` and `border`?
   - **Answer**: `outline` element ke bahar non-space-taking style deta hai, jabki `border` layout space leta hai aur box model ka part hai. `outline` accessibility ke liye better hai. Example:
     ```html
     <button class="btn">Button</button>
     <style>
     .btn:focus { outline: 3px dashed red; }
     </style>
     ```
     *Button focus pe red dashed outline dikhta hai, layout unchanged.*

### 55. What is the `resize` Property? *(imp)*
`resize` property textarea ya elements ko user-resizable banata hai, allowing control over horizontal, vertical, ya both directions. Yeh UX ke liye useful hai, especially forms mein.

**Example**:
```html
<textarea class="textarea"></textarea>
<style>
.textarea {
  resize: vertical;
}
</style>
```
*Summary*: Textarea sirf vertically resizable hai.

**Interview Tip**:
1. **Tip**: `resize` ke options aur UX impact samjhao.
   - **Explanation**: `resize: both` full flexibility deta hai, `horizontal` ya `vertical` specific control, aur `none` resizing band karta hai. Interview mein form usability aur constraints pe focus karo.
2. **Question**: What are the possible values for `resize`?
   - **Answer**: `resize` ke values hain `both` (horizontal + vertical), `horizontal`, `vertical`, aur `none` (no resizing). Example:
     ```html
     <div class="box" contenteditable></div>
     <style>
     .box { resize: both; width: 200px; height: 100px; }
     </style>
     ```
     *Box dono directions mein resizable hai.*

### 56. What is the `cursor` Property? *(imp)*
`cursor` property mouse pointer ka style set karta hai, jaise `pointer`, `default`, ya `not-allowed`, jo user interaction ko visually indicate karta hai. Yeh UX ke liye critical hai.

**Example**:
```html
<button class="btn">Click</button>
<style>
.btn {
  cursor: pointer;
}
</style>
```
*Summary*: Button pe hover karne se pointer cursor dikhta hai.

**Interview Tip**:
1. **Tip**: Common cursor types aur UX role samjhao.
   - **Explanation**: `cursor` user ko actions (clickable, disabled, drag) visually batata hai, jaise `pointer` buttons ke liye, `not-allowed` disabled states ke liye. Interview mein accessibility aur custom cursors pe focus karo.
2. **Question**: What are common `cursor` values?
   - **Answer**: Common values hain `pointer` (clickable elements), `default` (normal arrow), `not-allowed` (disabled), `grab` (draggable), aur `text` (editable text). Example:
     ```html
     <div class="disabled">Disabled</div>
     <style>
     .disabled { cursor: not-allowed; }
     </style>
     ```
     *Disabled div pe not-allowed cursor dikhta hai.*

### 57. What is the `user-select` Property? *(imp)*
`user-select` property text selection behavior ko control karta hai, allowing ya preventing text copying. Yeh UI control ya content protection ke liye use hota hai.

**Example**:
```html
<div class="no-select">No Select</div>
<style>
.no-select {
  user-select: none;
}
</style>
```
*Summary*: Div ka text select ya copy nahi ho sakta.

**Interview Tip**:
1. **Tip**: `user-select` ke use cases aur implications samjhao.
   - **Explanation**: `user-select: none` content protection ya accidental selection prevention ke liye hai, jabki `auto` ya `text` normal selection allow karta hai. Interview mein UX trade-offs (e.g., accessibility) pe focus karo.
2. **Question**: When to use `user-select: none`?
   - **Answer**: `user-select: none` tab use karo jab text selection prevent karna ho, jaise buttons, UI controls, ya sensitive content pe. Accessibility ke liye cautious use zaroori hai. Example:
     ```html
     <button class="btn">Button</button>
     <style>
     .btn { user-select: none; }
     </style>
     ```
     *Button ka text select nahi ho sakta, UX clean rakhta hai.*

### 58. What is the `pointer-events` Property? *(imp)*
`pointer-events` property mouse interactions (clicks, hovers) ko control karta hai, jaise enabling ya disabling events. Yeh disabled buttons ya overlays ke liye useful hai.

**Example**:
```html
<button class="disabled">Disabled</button>
<style>
.disabled {
  pointer-events: none;
}
</style>
```
*Summary*: Button click ya hover events ko ignore karta hai.

**Interview Tip**:
1. **Tip**: `pointer-events` ke practical uses aur limitations samjhao.
   - **Explanation**: `pointer-events: none` interactions block karta hai, jo disabled states ya overlays ke liye ideal hai, lekin accessibility ke liye alternative cues chahiye. Interview mein UI states aur SVG use cases pe focus karo.
2. **Question**: What are use cases for `pointer-events: none`?
   - **Answer**: `pointer-events: none` disabled buttons, non-interactive overlays, ya SVGs ke specific parts ko block karne ke liye use hota hai. Yeh UI control improve karta hai. Example:
     ```html
     <div class="overlay">Overlay</div>
     <style>
     .overlay { pointer-events: none; }
     </style>
     ```
     *Overlay pe clicks underlying content tak jate hain.*

### 59. What is the `writing-mode` Property? *(imp)*
`writing-mode` property text direction aur flow ko set karta hai, jaise horizontal (default) ya vertical (e.g., for Asian scripts). Yeh multilingual layouts ya creative designs ke liye use hota hai.  
Yeh property text orientation aur inline/block flow ko control karta hai, jo internationalization (i18n) aur unique typographic layouts ke liye critical hai.

**Example**:
```html
<div class="text">Vertical Text</div>
<style>
.text {
  writing-mode: vertical-rl;
}
</style>
```
*Summary*: Text vertically right-to-left flow karta hai.

**Interview Tip**:
1. **Tip**: `writing-mode` ke use cases aur i18n role samjhao.
   - **Explanation**: `writing-mode` Asian scripts (Chinese, Japanese), vertical menus, ya creative typography ke liye use hota hai. Yeh text direction aur layout flow ko fundamentally change karta hai. Interview mein multilingual support aur browser compatibility pe focus karo.
2. **Question**: Why is `writing-mode` important for multilingual websites?
   - **Answer**: `writing-mode` multilingual websites ke liye zaroori hai kyunki yeh scripts jaise Chinese ya Japanese ke vertical text flow ko support karta hai, ensuring cultural accuracy aur readability. Example:
     ```html
     <p class="japanese">日本語</p>
     <style>
     .japanese { writing-mode: vertical-rl; }
     </style>
     ```
     *Japanese text vertical layout mein sahi dikhta hai.*

### 60. What is the `text-overflow` Property? *(imp)*
`text-overflow` property truncated text ko handle karta hai, jaise ellipsis (...) ya clipping, jab text container se overflow karta hai. Yeh UI ke liye clean look deta hai.

**Example**:
```html
<div class="text">Very long text that overflows...</div>
<style>
.text {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
```
*Summary*: Long text 100px container mein ellipsis ke saath truncate hota hai.

**Interview Tip**:
1. **Tip**: `text-overflow` ke requirements aur UI impact samjhao.
   - **Explanation**: `text-overflow` ke liye `overflow: hidden` aur `white-space: nowrap` zaroori hain, jo long text ko clean dikhata hai, jaise tooltips ya table cells mein. Interview mein responsive design aur accessibility pe focus karo.
2. **Question**: What are prerequisites for `text-overflow` to work?
   - **Answer**: `text-overflow` ke liye container ka `overflow: hidden` aur `white-space: nowrap` set hona zaroori hai, taaki text truncate ho sake. Example:
     ```html
     <div class="title">Long Title Text</div>
     <style>
     .title { width: 150px; white-space: nowrap; overflow: hidden; text-overflow: clip; }
     </style>
     ```
     *Text clip ho jata hai without ellipsis.*

### 61. What is the `content-visibility` Property? *(imp)*
`content-visibility` property browser ko content rendering control deta hai, jaise `auto` se off-screen content skip karta hai, improving performance. Yeh long pages ya complex DOMs ke liye useful hai.  
Yeh property lazy rendering enable karta hai, reducing initial load time, lekin careful use zaroori hai taaki content accessibility aur visibility affect na ho.

**Example**:
```html
<section class="section">Content</section>
<style>
.section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
</style>
```
*Summary*: Section off-screen hone pe rendering skip karta hai, performance badhata hai.

**Interview Tip**:
1. **Tip**: `content-visibility` ke performance benefits aur trade-offs samjhao.
   - **Explanation**: `content-visibility: auto` off-screen content ko skip karke page load speed badhata hai, lekin `contain-intrinsic-size` set karna zaroori hai taaki layout jumps na hon. Interview mein performance optimization aur edge cases pe focus karo.
2. **Question**: Why use `content-visibility` for performance?
   - **Answer**: `content-visibility: auto` browser ko unnecessary rendering skip karne deta hai, jo long pages ya heavy DOMs mein initial load time kam karta hai. `contain-intrinsic-size` layout stability ke liye zaroori hai. Example:
     ```html
     <div class="article">Long content...</div>
     <style>
     .article { content-visibility: auto; contain-intrinsic-size: 500px; }
     </style>
     ```
     *Article off-screen hone pe render nahi hota, performance improve hota hai.*


### 61. What is the `column-count` Property? *(imp)*
`column-count` property content ko specified number ke columns mein divide karta hai, creating newspaper-style layouts. Yeh responsive multi-column designs ke liye useful hai.

**Example**:
```html
<div class="container">Long content...</div>
<style>
.container {
  column-count: 3;
  column-gap: 20px;
}
</style>
```
*Summary*: Content 3 columns mein split hota hai, 20px gap ke saath.

**Interview Tip**:
1. **Tip**: `column-count` ke use cases aur responsiveness samjhao.
   - **Explanation**: `column-count` articles, blogs, ya galleries ke liye multi-column layouts banata hai, aur `column-gap` spacing control karta hai. Interview mein responsive breakpoints aur fallback layouts pe focus karo.
2. **Question**: What are use cases for `column-count`?
   - **Answer**: `column-count` newspaper-style articles, product listings, ya text-heavy layouts ke liye use hota hai, jo content ko visually organized aur readable banata hai. Example:
     ```html
     <article class="article">Article text...</article>
     <style>
     .article { column-count: 2; column-gap: 15px; }
     </style>
     ```
     *Article 2 columns mein split hota hai, clean layout deta hai.*

### 62. What is the `appearance` Property? *(imp)*
`appearance` property native UI elements (jaise buttons, inputs) ke default look ko override karta hai, allowing custom styling. Yeh form controls ke liye useful hai.

**Example**:
```html
<input type="checkbox" class="custom">
<style>
.custom {
  appearance: none;
  width: 20px;
  height: 20px;
  background: lightblue;
}
</style>
```
*Summary*: Checkbox ka native look remove ho jata hai, custom style apply hota hai.

**Interview Tip**:
1. **Tip**: `appearance` ke customization role aur browser support samjhao.
   - **Explanation**: `appearance: none` native styling hata deta hai, jo custom form controls ke liye zaroori hai, lekin browser-specific prefixes ya inconsistencies dhyan rakhne padte hain. Interview mein accessibility aur cross-browser testing pe focus karo.
2. **Question**: Why use `appearance: none` for form elements?
   - **Answer**: `appearance: none` native UI styling remove karta hai, allowing fully custom designs for inputs, buttons, ya checkboxes, jo consistent branding ke liye useful hai. Example:
     ```html
     <button class="btn">Button</button>
     <style>
     .btn { appearance: none; background: purple; color: white; }
     </style>
     ```
     *Button ka native look gayab, custom purple style apply hota hai.*

### 63. What is the `contain` Property? *(imp)*
`contain` property element ke rendering ko isolate karta hai, limiting browser ke calculations taaki performance improve ho, especially complex layouts mein. Yeh layout, paint, ya style changes ko contain karta hai.  
Values jaise `strict`, `content`, ya `layout` specify karte hain kya contain hoga, jo large DOMs ya heavy animations ke liye ideal hai. Careful use zaroori hai taaki unintended side effects na hon.

**Example**:
```html
<div class="box">Content</div>
<style>
.box {
  contain: content;
}
</style>
```
*Summary*: Box ka rendering isolated hai, performance boost deta hai.

**Interview Tip**:
1. **Tip**: `contain` ke performance benefits aur use cases samjhao.
   - **Explanation**: `contain` browser ko unnecessary rendering skip karne deta hai, jo lists, grids, ya animated components mein helpful hai. Interview mein specific values (`layout`, `paint`, `strict`) aur debugging pe focus karo.
2. **Question**: How does `contain` improve performance?
   - **Answer**: `contain` element ke layout, paint, ya style changes ko isolate karta hai, reducing browser ke rendering calculations, jo complex pages mein load time kam karta hai. Example:
     ```html
     <li class="item">Item</li>
     <style>
     .item { contain: strict; }
     </style>
     ```
     *List item ka rendering fully isolated, performance optimized.*

### 64. What is the `all` Property? *(imp)*
`all` property ek element ki saari CSS properties ko reset karta hai to `initial`, `inherit`, ya `unset`, providing clean slate. Yeh rare cases mein use hota hai.

**Example**:
```html
<div class="reset">Reset</div>
<style>
.reset {
  all: initial;
}
</style>
```
*Summary*: Div ki saari styles initial values pe reset ho jati hain.

**Interview Tip**:
1. **Tip**: `all` ke use cases aur cautious use samjhao.
   - **Explanation**: `all: initial` styles ko browser defaults pe le jata hai, lekin overkill ho sakta hai kyunki inherited properties bhi reset hoti hain. Interview mein edge cases aur alternatives (jaise specific resets) pe focus karo.
2. **Question**: When to use the `all` property?
   - **Answer**: `all` tab use karo jab ek element ko completely clean slate chahiye, jaise third-party widgets ya isolated components mein, lekin specific resets zyada common hain. Example:
     ```html
     <div class="widget">Widget</div>
     <style>
     .widget { all: unset; }
     </style>
     ```
     *Widget ki saari styles unset, parent se inherit hoti hain.*

### 65. What is the `isolation` Property? *(imp)*
`isolation` property ek element ko new stacking context mein isolate karta hai, z-index conflicts aur blending issues ko prevent karta hai. Yeh complex layouts mein useful hai.

**Example**:
```html
<div class="box">Content</div>
<style>
.box {
  isolation: isolate;
}
</style>
```
*Summary*: Box ka stacking context isolated, z-index issues avoid karta hai.

**Interview Tip**:
1. **Tip**: `isolation` ke role aur stacking context samjhao.
   - **Explanation**: `isolation: isolate` new stacking context banata hai, jo overlapping elements ya blend modes ke conflicts ko rokta hai. Interview mein z-index debugging aur practical uses pe focus karo.
2. **Question**: Why use `isolation` in complex layouts?
   - **Answer**: `isolation` z-index aur blending issues ko solve karta hai by creating new stacking context, ensuring elements predictable order mein render hon, especially overlays ya nested components mein. Example:
     ```html
     <div class="modal">Modal</div>
     <style>
     .modal { isolation: isolate; z-index: 100; }
     </style>
     ```
     *Modal ka stacking context isolated, overlaps control mein.*

### 66. What is the `clip-path` vs `mask`? *(imp)*
`clip-path` element ke visible area ko shapes (jaise circle, polygon) mein clip karta hai, jabki `mask` image-based transparency ya gradients apply karta hai for complex effects.  
`clip-path` simple, sharp cuts ke liye hai, aur `mask` detailed, texture-based ya gradual transparency ke liye. Dono modern designs mein creative visuals ke liye popular hain.

**Example**:
```html
<div class="box">Clipped</div>
<div class="masked">Masked</div>
<style>
.box {
  clip-path: circle(50%);
}
.masked {
  mask-image: url('mask.png');
}
</style>
```
*Summary*: Box circular clip hota hai, masked div image-based transparency deta hai.

**Interview Tip**:
1. **Tip**: `clip-path` aur `mask` ke differences aur use cases samjhao.
   - **Explanation**: `clip-path` geometric shapes ke liye fast aur simple hai, jabki `mask` complex, image-driven effects (jaise gradients, textures) ke liye flexible hai. Interview mein performance aur creative applications pe focus karo.
2. **Question**: When to use `mask` over `clip-path`?
   - **Answer**: `mask` tab use karo jab complex transparency ya image-based effects chahiye, jaise gradient fades ya textured overlays. `clip-path` simple shapes ke liye better hai. Example:
     ```html
     <img class="img" src="image.jpg" alt="Masked">
     <style>
     .img { mask-image: linear-gradient(to bottom, black, transparent); }
     </style>
     ```
     *Image bottom pe gradually transparent hoti hai.*

### 67. What is the `text-shadow` Property? *(imp)*
`text-shadow` property text ke piche shadow ya glow effect add karta hai, jo readability ya visual appeal ke liye use hota hai. Yeh multiple shadows stack kar sakta hai.

**Example**:
```html
<h1 class="text">Shadow</h1>
<style>
.text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
```
*Summary*: Text ke piche dark, blurred shadow dikhta hai.

**Interview Tip**:
1. **Tip**: `text-shadow` ke styling uses aur accessibility samjhao.
   - **Explanation**: `text-shadow` headings, buttons, ya decorative text ko enhance karta hai, lekin overuse se readability kam ho sakti hai. Interview mein contrast ratios aur creative effects pe focus karo.
2. **Question**: What are use cases for `text-shadow`?
   - **Answer**: `text-shadow` readability (light text on busy backgrounds), emphasis (headings), ya aesthetic effects (neon glow) ke liye use hota hai. Example:
     ```html
     <span class="glow">Glow</span>
     <style>
     .glow { text-shadow: 0 0 10px blue; }
     </style>
     ```
     *Text blue glow effect ke saath dikhta hai.*

### 68. What is the `filter` vs `backdrop-filter`? *(imp)*
`filter` property element ke content pe visual effects (jaise blur, grayscale) apply karta hai, jabki `backdrop-filter` element ke piche wale content pe effects apply karta hai.  
`filter` images ya foreground elements ke liye hai, aur `backdrop-filter` glassmorphism ya overlay effects ke liye, jo modern UI mein popular hai. Dono GPU-heavy ho sakte hain.

**Example**:
```html
<div class="box">Filtered</div>
<div class="overlay">Backdrop</div>
<style>
.box {
  filter: blur(5px);
}
.overlay {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}
</style>
```
*Summary*: Box khud blurred hai, overlay ke piche content blurred dikhta hai.

**Interview Tip**:
1. **Tip**: `filter` aur `backdrop-filter` ke use cases aur performance samjhao.
   - **Explanation**: `filter` images, buttons, ya hover effects ke liye hai, jabki `backdrop-filter` frosted-glass effects ke liye. Dono GPU-intensive hain, isliye sparingly use karo. Interview mein fallback aur browser support pe focus karo.
2. **Question**: When to use `backdrop-filter` over `filter`?
   - **Answer**: `backdrop-filter` tab use karo jab piche ke content pe effect chahiye, jaise glassmorphism modals ya nav bars. `filter` element ke khud ke appearance ke liye hai. Example:
     ```html
     <div class="modal">Modal</div>
     <style>
     .modal { backdrop-filter: grayscale(50%); }
     </style>
     ```
     *Modal ke piche content grayscale dikhta hai.*

### 69. What is the `shape-margin` Property? *(imp)*
`shape-margin` property `shape-outside` ke around extra space add karta hai, jo text wrapping ko fine-tune karta hai. Yeh creative layouts mein text flow ko control karta hai.

**Example**:
```html
<img class="shape" src="image.jpg" alt="Shape">
<p>Text wraps around...</p>
<style>
.shape {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 10px;
}
</style>
```
*Summary*: Text circular image se 10px door wrap karta hai.

**Interview Tip**:
1. **Tip**: `shape-margin` ke role aur `shape-outside` dependency samjhao.
   - **Explanation**: `shape-margin` `shape-outside` ke effect ko enhance karta hai by adding buffer space, jo text wrapping ko polished banata hai. Interview mein magazine-style layouts aur limitations pe focus karo.
2. **Question**: How does `shape-margin` enhance `shape-outside`?
   - **Answer**: `shape-margin` `shape-outside` ke shape ke around extra space deta hai, ensuring text wrapping clean aur readable ho, especially complex shapes mein. Example:
     ```html
     <div class="shape">Shape</div>
     <p>Text...</p>
     <style>
     .shape { float: left; shape-outside: polygon(0 0, 100% 0, 0 100%); shape-margin: 15px; }
     </style>
     ```
     *Text triangular shape se 15px door wrap karta hai.*

### 70. What is the `scroll-snap` Property? *(imp)*
`scroll-snap` property scrolling ko predefined points pe snap karta hai, creating smooth, controlled navigation jaise carousels ya full-screen sections mein. Yeh UX ko enhance karta hai.  
Properties jaise `scroll-snap-type` (snap behavior) aur `scroll-snap-align` (snap points) precise control dete hain. Modern browsers mein strong support hai.

**Example**:
```html
<div class="container">
  <div class="section">Section 1</div>
  <div class="section">Section 2</div>
</div>
<style>
.container {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
}
.section {
  scroll-snap-align: start;
  height: 100vh;
}
</style>
```
*Summary*: Scroll sections ke start pe snap karta hai.

**Interview Tip**:
1. **Tip**: `scroll-snap` ke mechanics aur UX benefits samjhao.
   - **Explanation**: `scroll-snap-type` snapping behavior set karta hai (mandatory ya proximity), aur `scroll-snap-align` snap points define karta hai. Yeh carousels, galleries, ya vertical navigation ke liye ideal hai. Interview mein accessibility aur fallback pe focus karo.
2. **Question**: What are use cases for `scroll-snap`?
   - **Answer**: `scroll-snap` image carousels, full-screen sections, ya mobile galleries ke liye use hota hai, jo smooth aur predictable scrolling deta hai. Example:
     ```html
     <div class="carousel">
       <img src="img1.jpg" alt="Image 1">
       <img src="img2.jpg" alt="Image 2">
     </div>
     <style>
     .carousel { scroll-snap-type: x mandatory; overflow-x: auto; }
     img { scroll-snap-align: center; }
     </style>
     ```
     *Images carousel mein center pe snap karte hain.*

### 71. What is the `accent-color` Property? *(imp)*
`accent-color` property form elements (jaise checkboxes, radio buttons) ke default highlight color ko customize karta hai, improving UI consistency. Yeh accessibility aur branding ke liye useful hai.

**Example**:
```html
<input type="checkbox" class="input">
<style>
.input {
  accent-color: purple;
}
</style>
```
*Summary*: Checkbox ka highlight color purple ho jata hai.

**Interview Tip**:
1. **Tip**: `accent-color` ke role aur accessibility samjhao.
   - **Explanation**: `accent-color` form controls ke default colors ko theme ke hisaab se align karta hai, reducing custom CSS ki zarurat. Interview mein branding consistency aur browser support pe focus karo.
2. **Question**: Why use `accent-color` for form elements?
   - **Answer**: `accent-color` form elements ke highlight colors (checkboxes, radio buttons, range sliders) ko easily customize karta hai, ensuring UI consistency aur accessibility without complex styling. Example:
     ```html
     <input type="radio" class="radio">
     <style>
     .radio { accent-color: teal; }
     </style>
     ```
     *Radio button ka highlight teal ho jata hai, theme ke saath aligned.*



### 71. What is the `image-rendering` Property? *(imp)*
`image-rendering` property image scaling ki quality control karta hai, specifying kaise browser images ko resize ya render karega, jaise pixelated ya smooth.

**Example**:
```html
<img src="pixel-art.jpg" class="img">
<style>
.img {
  image-rendering: pixelated;
}
</style>
```
*Summary*: Image pixelated look ke saath scaled hoti hai, ideal for pixel art.

**Interview Tip**:
1. **Tip**: `image-rendering` ke values aur use cases samjhao.
   - **Explanation**: `image-rendering: pixelated` low-res images ya pixel art ke liye crisp edges deta hai, jabki `auto` ya `smooth` high-quality scaling ke liye hai. Interview mein image optimization aur visual fidelity pe focus karo.
2. **Question**: When to use `image-rendering: pixelated`?
   - **Answer**: `image-rendering: pixelated` tab use karo jab low-resolution images ya pixel art ko crisp rakha ho, jaise retro games ya pixelated icons mein. Example:
     ```html
     <img src="icon.png" class="icon">
     <style>
     .icon { image-rendering: pixelated; width: 100px; }
     </style>
     ```
     *Icon pixelated look maintain karta hai scaling pe.*

### 72. What is the `touch-action` Property? *(imp)*
`touch-action` property touch interactions (jaise panning, zooming) ko control karta hai, optimizing mobile gestures aur preventing unwanted browser behaviors. Yeh mobile UX ke liye critical hai.  
Values jaise `pan-x`, `pan-y`, ya `none` specific touch actions ko allow ya block karte hain, jo smooth scrolling ya custom gestures ke liye useful hai.

**Example**:
```html
<div class="element">Swipeable</div>
<style>
.element {
  touch-action: pan-y;
}
</style>
```
*Summary*: Element sirf vertical panning allow karta hai, horizontal block hota hai.

**Interview Tip**:
1. **Tip**: `touch-action` ke role aur mobile optimization samjhao.
   - **Explanation**: `touch-action` unwanted touch behaviors (jaise browser zoom) ko rokta hai aur custom gestures (swipe, scroll) ko prioritize karta hai. Interview mein mobile apps aur performance pe focus karo.
2. **Question**: Why use `touch-action` in mobile applications?
   - **Answer**: `touch-action` mobile UX improve karta hai by controlling touch gestures, preventing default browser actions, aur ensuring smooth interactions, jaise carousels ya scrollable lists mein. Example:
     ```html
     <div class="carousel">Images...</div>
     <style>
     .carousel { touch-action: pan-x; }
     </style>
     ```
     *Carousel horizontal swiping allow karta hai, vertical scroll free.*

### 73. What is the `accent-color` Property? *(imp)*
`accent-color` property form elements (checkboxes, radio buttons, range sliders) ke default highlight color ko customize karta hai, UI consistency aur branding ke liye useful.

**Example**:
```html
<input type="checkbox" class="input">
<style>
.input {
  accent-color: purple;
}
</style>
```
*Summary*: Checkbox ka highlight purple color mein dikhta hai.

**Interview Tip**:
1. **Tip**: `accent-color` ke branding aur accessibility role samjhao.
   - **Explanation**: `accent-color` form controls ko theme ke saath align karta hai, reducing custom CSS ki zarurat, aur accessibility ke liye consistent visuals deta hai. Interview mein browser support aur fallback pe focus karo.
2. **Question**: How does `accent-color` improve form styling?
   - **Answer**: `accent-color` form elements ke default colors ko easily customize karta hai, ensuring UI consistency aur accessibility without complex styling. Example:
     ```html
     <input type="range" class="slider">
     <style>
     .slider { accent-color: teal; }
     </style>
     ```
     *Range slider ka thumb aur track teal color mein aligned.*

### 74. What is the `caret-color` Property? *(imp)*
`caret-color` property text input ya editable elements ke cursor (caret) ka color set karta hai, enhancing UX aur branding.

**Example**:
```html
<input type="text" class="input">
<style>
.input {
  caret-color: red;
}
</style>
```
*Summary*: Input field ka cursor red color mein dikhta hai.

**Interview Tip**:
1. **Tip**: `caret-color` ke UX aur accessibility benefits samjhao.
   - **Explanation**: `caret-color` cursor visibility aur branding ke liye useful hai, especially low-contrast themes mein, aur accessibility ke liye clear visual cues deta hai. Interview mein form UX aur edge cases pe focus karo.
2. **Question**: Why use `caret-color` in forms?
   - **Answer**: `caret-color` cursor ko visually distinct banata hai, improving readability aur branding consistency, especially dark themes ya custom forms mein. Example:
     ```html
     <div contenteditable class="editor">Edit me</div>
     <style>
     .editor { caret-color: blue; }
     </style>
     ```
     *Editable div ka cursor blue mein highlighted.*

### 75. What is the `overscroll-behavior` Property? *(imp)*
`overscroll-behavior` property scroll boundaries pe browser behavior ko control karta hai, jaise pull-to-refresh ya scroll chaining ko prevent karna. Yeh UX ko refined karta hai.  
Values jaise `contain`, `none`, ya `auto` specific scroll effects ko allow ya block karte hain, jo modals ya nested scroll areas ke liye useful hai.

**Example**:
```html
<div class="container">Scrollable content...</div>
<style>
.container {
  overscroll-behavior: contain;
  overflow: auto;
}
</style>
```
*Summary*: Container ke scroll end pe parent scrolling nahi hota.

**Interview Tip**:
1. **Tip**: `overscroll-behavior` ke UX benefits aur use cases samjhao.
   - **Explanation**: `overscroll-behavior: contain` unwanted scroll effects (jaise browser bounce) ko rokta hai, jo nested scrollbars ya modals ke liye ideal hai. Interview mein mobile UX aur edge cases pe focus karo.
2. **Question**: When to use `overscroll-behavior: contain`?
   - **Answer**: `overscroll-behavior: contain` tab use karo jab scroll effects ko container tak limit karna ho, jaise modals, sidebars, ya nested lists mein, preventing parent ya browser scrolling. Example:
     ```html
     <div class="modal">Modal content...</div>
     <style>
     .modal { overscroll-behavior: contain; overflow-y: auto; }
     </style>
     ```
     *Modal ka scroll parent page ko affect nahi karta.*

### 76. What is the `place-content` Property? *(imp)*
`place-content` shorthand property Flexbox ya Grid mein content ko align aur justify karta hai, combining `align-content` aur `justify-content`. Yeh layouts ko compact banata hai.

**Example**:
```html
<div class="grid">
  <div>Item</div>
</div>
<style>
.grid {
  display: grid;
  place-content: center;
  height: 200px;
}
</style>
```
*Summary*: Grid items center mein vertically aur horizontally aligned.

**Interview Tip**:
1. **Tip**: `place-content` ke efficiency aur use cases samjhao.
   - **Explanation**: `place-content` ek line mein content alignment set karta hai, reducing code verbosity, aur Flex/Grid layouts mein centering ya spacing ke liye perfect hai. Interview mein shorthand benefits pe focus karo.
2. **Question**: How does `place-content` simplify Flexbox layouts?
   - **Answer**: `place-content` `align-content` aur `justify-content` ko combine karta hai, allowing quick alignment (jaise centering) in Flexbox ya Grid, code ko cleaner banata hai. Example:
     ```html
     <div class="flex">
       <div>Item</div>
     </div>
     <style>
     .flex { display: flex; place-content: space-between center; }
     </style>
     ```
     *Items horizontally spaced aur vertically centered.*

### 77. What is the `text-align-last` Property? *(imp)*
`text-align-last` property justified text ki last line ko align karta hai, jaise left, right, ya center, improving typography control.

**Example**:
```html
<p class="text">Long justified text...</p>
<style>
.text {
  text-align: justify;
  text-align-last: center;
}
</style>
```
*Summary*: Text justified hai, lekin last line centered.

**Interview Tip**:
1. **Tip**: `text-align-last` ke typography role aur edge cases samjhao.
   - **Explanation**: `text-align-last` justified text ke last line ko refine karta hai, jo articles ya books ke liye useful hai, lekin browser support vary kar sakta hai. Interview mein typography best practices pe focus karo.
2. **Question**: When to use `text-align-last`?
   - **Answer**: `text-align-last` tab use karo jab justified text ki last line ko specific alignment (jaise center ya left) chahiye, enhancing readability in long-form content. Example:
     ```html
     <article class="article">Article text...</article>
     <style>
     .article { text-align: justify; text-align-last: left; }
     </style>
     ```
     *Article ki last line left-aligned, clean look deta hai.*

### 78. What is CSS Performance Optimization? *(imp)*
CSS performance optimization browser rendering aur load times ko improve karta hai using techniques jaise minifying CSS, avoiding complex selectors, using `will-change` for animations, aur lazy-loading non-critical CSS.  
Yeh large-scale websites ke liye critical hai, ensuring fast page loads aur smooth interactions, lekin over-optimization se code complexity badh sakti hai. Tools jaise Lighthouse helpful hain.

**Example**:
```html
<div class="box">Animated</div>
<style>
.box {
  will-change: transform;
  transition: transform 0.3s;
}
.box:hover {
  transform: scale(1.1);
}
</style>
```
*Summary*: Box ka animation optimized hai `will-change` se.

**Interview Tip**:
1. **Tip**: CSS optimization techniques aur trade-offs samjhao.
   - **Explanation**: Minification file size kam karta hai, simple selectors reflows reduce karte hain, aur `will-change` animations ko smooth karta hai. Interview mein tools (Lighthouse, PurifyCSS) aur real-world scenarios pe focus karo.
2. **Question**: What are key techniques for CSS performance optimization?
   - **Answer**: Key techniques hain: 1) Minify CSS to reduce file size, 2) Avoid complex selectors (jaise nested pseudo-classes) to minimize specificity, 3) Use `will-change` for animations, 4) Lazy-load non-critical CSS via media queries ya dynamic imports. Example:
     ```html
     <div class="card">Card</div>
     <style>
     .card { all: unset; } /* Reset styles */
     @media (min-width: 768px) { .card { background: blue; } } /* Lazy-load */
     </style>
     ```
     *Card ka CSS optimized aur responsive hai.*

### 79. What is the `line-clamp` Property? *(imp)*
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
   - **Explanation**: `line-clamp` cards, previews, ya tooltips mein long text ko control karta hai, lekin WebKit-based browsers mein specific setup (`-webkit-box`) chahiye. Interview mein cross-browser support aur alternatives pe focus karo.
2. **Question**: When to use `line-clamp`?
   - **Answer**: `line-clamp` tab use karo jab text ko fixed lines tak limit karna ho, jaise article previews, product descriptions, ya compact UIs mein, ellipsis ke saath clean look deta hai. Example:
     ```html
     <p class="preview">Short preview text...</p>
     <style>
     .preview { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
     </style>
     ```
     *Preview text 3 lines tak truncate hota hai.*

### 80. What is the `forced-color-adjust` Property? *(imp)*
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
   - **Explanation**: `forced-color-adjust: none` custom colors ko preserve karta hai, jabki `auto` system colors ko prioritize karta hai, ensuring accessibility in high-contrast modes. Interview mein a11y standards pe focus karo.
2. **Question**: Why use `forced-color-adjust`?
   - **Answer**: `forced-color-adjust` accessibility ke liye zaroori hai kyunki yeh high-contrast modes mein colors ko control karta hai, ensuring UI readable aur consistent rahe. Example:
     ```html
     <div class="highlight">Highlight</div>
     <style>
     .highlight { forced-color-adjust: auto; }
     </style>
     ```
     *Div system high-contrast colors ke saath adjust hota hai.*

### 81. What is the `hyphens` Property? *(imp)*
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
   - **Explanation**: `hyphens: auto` text flow aur readability improve karta hai, lekin browser aur language support vary karta hai. Interview mein typography refinement aur fallback strategies pe focus karo.
2. **Question**: When to use `hyphens` in typography?
   - **Answer**: `hyphens` tab use karo jab narrow columns ya justified text mein words ko cleanly break karna ho, jaise articles ya mobile layouts mein, readability ke liye. Example:
     ```html
     <article class="article">Long content...</article>
     <style>
     .article { hyphens: auto; text-align: justify; }
     </style>
     ```
     *Article ke words hyphenated, justified text clean dikhta hai.*