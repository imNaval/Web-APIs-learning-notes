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

### 1. What is CSS? *(Important)*
CSS (Cascading Style Sheets) is a language that styles and lays out HTML elements, controlling aspects like colors, fonts, spacing, and animations. It makes webpages visually appealing and enhances user experience.  
“Cascading” refers to the hierarchy of style precedence, where more specific rules (e.g., inline or ID-based) take priority. CSS separates content from presentation, improving code maintainability.

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
*Summary*: The paragraph has a navy blue color and 18px font size.

**Interview Tip**:
1. **Tip**: Explain CSS’s role and the concept of “cascading.”
   - **Explanation**: CSS styles HTML to create user-friendly webpages, and “cascading” resolves style conflicts based on specificity (e.g., ID over class) or source order (e.g., inline over external). In interviews, highlight practical uses like theming or responsive design.
2. **Question**: What does “cascading” mean in CSS?
   - **Answer**: Cascading refers to the hierarchy and precedence of styles. When multiple styles apply to an element, CSS uses specificity (inline > ID > class > element) or source order to determine which style wins. Example:
     ```html
     <p style="color: red" class="text">Text</p>
     <style>
     .text { color: blue; }
     </style>
     ```
     *The text is red because inline styles have higher priority.*

### 2. How to Add CSS to HTML? *(Important)*
CSS can be added to HTML in three ways: external file (`<link>`), internal `<style>` tag, or inline `style` attribute. External CSS is scalable and maintainable, while inline CSS is harder to manage.

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
*Summary*: External CSS applies via a separate file, internal via `<head>`, and inline directly on elements.

**Interview Tip**:
1. **Tip**: Explain the use cases and trade-offs of external, internal, and inline CSS.
   - **Explanation**: External CSS is ideal for large projects due to its reusability and ease of collaboration. Internal CSS suits small projects or testing but may lead to code duplication. Inline CSS is for quick fixes but makes maintenance difficult.
2. **Question**: Why prefer external CSS over inline CSS?
   - **Answer**: External CSS keeps styles in a central file, making them reusable, maintainable, and applicable across multiple pages. Inline CSS scatters styles, complicating updates. Example:
     ```html
     <p style="color: blue;">Inline</p>
     <link rel="stylesheet" href="styles.css">
     ```
     ```css
     /* styles.css */
     p { color: blue; }
     ```
     *External CSS applies one change to all paragraphs.*

### 3. What are CSS Selectors? *(Important)*
CSS selectors target HTML elements for styling, such as tags, classes, IDs, pseudo-classes, or attribute selectors. They enable precise and dynamic styling.  
Types like class, ID, or universal selectors offer flexibility, while pseudo-classes and pseudo-elements add interactivity and specific styling. Selectors resolve conflicts via specificity.

**Example**:
```html
<div class="box" id="unique">Selector Demo</div>
<style>
.box { background: lightblue; } /* Class selector */
#unique { border: 3px solid red; } /* ID selector */
.box:hover { background: lightgreen; } /* Pseudo-class */
</style>
```
*Summary*: Class adds a lightblue background, ID adds a red border, and hover changes the background to lightgreen.

**Interview Tip**:
1. **Tip**: Explain common selectors and their specificity impact.
   - **Explanation**: Class selectors are reusable, IDs target unique elements, and pseudo-classes handle dynamic states. Specificity (ID > class > element) resolves conflicts, which is key for debugging. In interviews, share examples like `:hover` or attribute selectors.
2. **Question**: What’s the difference between a pseudo-class and a pseudo-element?
   - **Answer**: A pseudo-class (e.g., `:hover`, `:first-child`) targets an element’s state or position, while a pseudo-element (e.g., `::before`, `::after`) styles a specific part of an element (like content). Example:
     ```html
     <p class="text">Text</p>
     <style>
     .text:hover { background: yellow; } /* Pseudo-class */
     .text::before { content: "★ "; } /* Pseudo-element */
     </style>
     ```
     *On hover, the background turns yellow, and a star is added before the text.*

### 4. What is the CSS Box Model? *(Important)*
The CSS Box Model treats every HTML element as a rectangular box with content, padding, border, and margin. It controls layout and spacing, forming the basis of design.  
`box-sizing: border-box` makes width/height predictable by including padding and border. The Box Model is critical for responsive designs and complex layouts, as it defines size calculations.

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
*Summary*: The div is 200px wide (including padding and border), with a blue border and 30px margin.

**Interview Tip**:
1. **Tip**: Explain the Box Model’s components and the role of `box-sizing`.
   - **Explanation**: The Box Model’s parts – content, padding, border, margin – determine an element’s total size. `box-sizing: border-box` includes padding and border in the width, simplifying responsive layouts. In interviews, focus on size calculations or debugging scenarios.
2. **Question**: What’s the role of `box-sizing: border-box`?
   - **Answer**: `box-sizing: border-box` includes padding and border in an element’s defined width/height, making layout calculations simpler and responsive designs consistent. Example:
     ```html
     <div class="box">Content</div>
     <style>
     .box { width: 200px; padding: 20px; box-sizing: border-box; }
     </style>
     ```
     *The div’s total width stays 200px, including padding.*

### 5. What is CSS Specificity? *(Important)*
CSS Specificity is a scoring system that determines which CSS rule applies when multiple rules conflict. Scores are based on inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), and elements/pseudo-elements (1).

**Example**:
```html
<p id="my-id" class="my-class">Text</p>
<style>
#my-id { color: red; } /* Specificity: 100 */
.my-class { color: blue; } /* Specificity: 10 */
p { color: green; } /* Specificity: 1 */
</style>
```
*Summary*: The text is red because the ID selector has the highest specificity score.

**Interview Tip**:
1. **Tip**: Explain specificity calculation and conflict resolution.
   - **Explanation**: Specificity weights (inline > ID > class > element) resolve conflicts. If specificity is equal, the last defined rule applies. In interviews, focus on debugging tips, like avoiding specificity issues.
2. **Question**: How do you resolve specificity conflicts?
   - **Answer**: To resolve specificity conflicts, use more specific selectors (e.g., classes), avoid IDs and inline styles, and minimize `!important` as it complicates debugging. Example:
     ```html
     <div class="card card--highlight">Content</div>
     <style>
     .card { background: white; }
     .card--highlight { background: yellow; }
     </style>
     ```
     *Class-based selectors create a clear hierarchy, reducing conflicts.*

### 6. What are Pseudo-Classes and Pseudo-Elements? *(Important)*
Pseudo-classes target an element’s specific state or position (e.g., `:hover`, `:first-child`), while pseudo-elements style a specific part of an element (e.g., `::before`, `::after`). They’re used for interactivity and decorative styling.

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
*Summary*: A red star is added before the text, and the background turns lightyellow on hover.

**Interview Tip**:
1. **Tip**: Explain common pseudo-classes and pseudo-elements with their use cases.
   - **Explanation**: Pseudo-classes like `:hover`, `:active`, `:nth-child` handle dynamic behavior, while pseudo-elements like `::before`, `::after` add decorative content. In interviews, share practical examples like hover effects or content injection.
2. **Question**: What are some common pseudo-classes?
   - **Answer**: Common pseudo-classes include `:hover` (mouse over), `:active` (click state), `:first-child` (first element), and `:nth-child(n)` (specific position). They enable interactivity and conditional styling. Example:
     ```html
     <li class="item">Item</li>
     <style>
     .item:hover { color: blue; }
     .item:first-child { font-weight: bold; }
     </style>
     ```
     *On hover, the item turns blue; the first item is bold.*

### 7. What is the Difference Between Inline, Block, and Inline-Block? *(Important)*
Block elements (e.g., `<div>`) take full width and start on a new line, inline elements (e.g., `<span>`) take content width and stay on the same line. Inline-block stays in the inline flow but allows width/height settings.  
These properties are foundational for layout control, and inline-block is critical for UI components like buttons or cards. They play a major role in alignment and sizing for responsive designs.

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
*Summary*: Inline-block span creates a sized box, inline span is content-sized, and block div is full-width on a new line.

**Interview Tip**:
1. **Tip**: Explain inline-block use cases and the layout impact of block vs. inline.
   - **Explanation**: Inline-block is ideal for buttons, cards, or inline-aligned components as it allows width/height control in the inline flow. Block is best for vertical stacking, and inline for text styling. In interviews, focus on practical examples like button alignment.
2. **Question**: Why use inline-block over inline?
   - **Answer**: Inline-block is preferred over inline because it maintains inline alignment but also allows setting width and height, which inline lacks. It’s essential for components like buttons or cards. Example:
     ```html
     <button class="inline-block">Button</button>
     <button class="inline">Inline</button>
     <style>
     .inline-block { display: inline-block; width: 100px; height: 40px; }
     .inline { display: inline; }
     </style>
     ```
     *The inline-block button has a fixed size, while the inline button depends on content size.*

### 8. What is the Float Property? *(Important)*
The `float` property aligns elements to the left or right, allowing text or inline elements to wrap around them. It was used for old-school layouts like image-text wrapping, but Flexbox/Grid are more common today.

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
*Summary*: The image floats left, and text wraps around it.

**Interview Tip**:
1. **Tip**: Explain `float` use cases and modern alternatives.
   - **Explanation**: `float` was used for image-text layouts or old column designs, but Flexbox/Grid are more flexible and issue-free. Float’s side effects, like parent collapse, require fixes like `clear` or `overflow`. In interviews, emphasize modern alternatives.
2. **Question**: What are the issues with using `float`?
   - **Answer**: `float` causes issues like parent container collapse and layout unpredictability, as floated elements exit the normal flow. Clearfix or modern layouts (Flexbox/Grid) resolve these. Example:
     ```html
     <div class="container">
       <div class="float">Float</div>
     </div>
     <style>
     .float { float: left; width: 100px; }
     </style>
     ```
     *The container may collapse unless a clearfix is used.*

### 9. What is Clearfix? *(Important)*
Clearfix fixes the layout collapse issue caused by `float` by ensuring the parent container encloses floated children. It’s common in old-school layouts, but modern alternatives are preferred.

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
*Summary*: The container properly encloses the floated div, preventing collapse.

**Interview Tip**:
1. **Tip**: Explain the purpose of clearfix and modern alternatives.
   - **Explanation**: Clearfix resolves parent collapse from floated elements by clearing floats. Modern layouts like Flexbox or Grid are simpler and avoid float-related issues. In interviews, discuss why clearfix is becoming outdated.
2. **Question**: What’s a modern alternative to clearfix?
   - **Answer**: Flexbox or Grid are better alternatives to clearfix, as they prevent layout collapse and offer direct control over alignment and spacing. Example:
     ```html
     <div class="flex">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .flex { display: flex; gap: 10px; }
     </style>
     ```
     *Flexbox prevents collapse and keeps the layout clean.*

### 10. What are CSS Colors? *(Important)*
CSS colors style text, backgrounds, or borders using formats like named colors (`red`), hex (`#FF0000`), RGB, RGBA, or HSL. They’re essential for UI aesthetics and accessibility.

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
*Summary*: The text is dark gray with a light green, semi-transparent background.

**Interview Tip**:
1. **Tip**: Explain color formats and accessibility considerations.
   - **Explanation**: Colors can be set in hex, RGB, RGBA, or HSL formats, with RGBA offering transparency. High contrast ratios (e.g., WCAG 4.5:1) are crucial for accessibility. In interviews, focus on practical uses like theming or contrast.
2. **Question**: What’s the use of RGBA?
   - **Answer**: RGBA provides transparency (via the alpha channel), ideal for UI effects like overlays, hover states, or subtle backgrounds. Example:
     ```html
     <div class="overlay">Overlay</div>
     <style>
     .overlay { background: rgba(0, 0, 0, 0.5); }
     </style>
     ```
     *The overlay has a semi-transparent black background.*

### 11. What is the `display` Property? *(Important)*
The `display` property controls an element’s layout behavior, such as `block`, `inline`, `inline-block`, or `none`. It determines how elements are rendered and positioned, enabling layouts like Flexbox or Grid.

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
*Summary*: The inline-block span creates a sized box, while the hidden div is removed from the DOM.

**Interview Tip**:
1. **Tip**: Explain common `display` values and their practical uses.
   - **Explanation**: `display: block` is for full-width elements (e.g., sections), `inline` for same-line text (e.g., links), `inline-block` for sized inline elements (e.g., buttons), and `none` for hiding elements. Mention modern values like `flex` or `grid` in interviews to show awareness of current trends.
2. **Question**: What’s the difference between `display: none` and `visibility: hidden`?
   - **Answer**: `display: none` removes the element from the DOM and takes no space, while `visibility: hidden` hides the element but reserves its space in the layout. Example:
     ```html
     <div class="none">None</div>
     <div class="hidden">Hidden</div>
     <style>
     .none { display: none; }
     .hidden { visibility: hidden; }
     </style>
     ```
     *The `none` div takes no space, while the `hidden` div reserves its space.*

### 12. What is the Difference Between Margin and Padding? *(Important)*
Margin is the space outside an element, creating distance between elements, while padding is the space inside, between the content and the border. Both are essential for controlling layout and spacing.

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
*Summary*: The box has 20px margin outside and 15px padding around the content.

**Interview Tip**:
1. **Tip**: Clarify the layout impact of margin and padding.
   - **Explanation**: Margin defines spacing between elements, shaping the overall layout, while padding enhances content presentation by adding internal space. Focus on concepts like margin collapse or negative margins in interviews to demonstrate deeper understanding.
2. **Question**: What is margin collapse?
   - **Answer**: Margin collapse occurs when vertical margins of adjacent block elements combine, applying the larger margin instead of adding them. This applies only to vertical margins, not horizontal ones. Example:
     ```html
     <div class="box1">Box 1</div>
     <div class="box2">Box 2</div>
     <style>
     .box1 { margin-bottom: 20px; }
     .box2 { margin-top: 30px; }
     </style>
     ```
     *The space between boxes is 30px, not 50px, due to collapse.*

### 13. What is CSS Inheritance? *(Important)*
CSS inheritance allows certain properties (e.g., `color`, `font-family`) to pass from parent elements to their children automatically. This reduces code repetition, but properties like `margin` or `padding` do not inherit.

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
*Summary*: The child paragraph inherits blue color and Arial font from the parent.

**Interview Tip**:
1. **Tip**: Explain the scope of inheritance and non-inheritable properties.
   - **Explanation**: Inheritable properties like `color` or `font` simplify styling by applying to descendants, while layout properties like `margin` or `border` don’t inherit to maintain independent control. Highlight explicit inheritance using the `inherit` keyword in interviews.
2. **Question**: Which properties don’t inherit by default?
   - **Answer**: Properties like `margin`, `padding`, `border`, and `width` don’t inherit by default because they’re layout-specific and designed for independent control of each element. Example:
     ```html
     <div class="parent">
       <p>Child</p>
     </div>
     <style>
     .parent { margin: 20px; color: blue; }
     </style>
     ```
     *The child inherits the color but not the margin.*

### 14. What is the `content` Property? *(Important)*
The `content` property is used with pseudo-elements (`::before`, `::after`) to add generated content like text, images, or counters. It’s ideal for decorative elements or dynamic styling.

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
*Summary*: The word “Hello” in red is added before the div’s content.

**Interview Tip**:
1. **Tip**: Highlight creative uses and limitations of the `content` property.
   - **Explanation**: `content` can add text, quotes, counters, or images but only works with pseudo-elements. It’s great for navigation markers, icons, or list counters. Discuss its role in enhancing UI without extra HTML in interviews.
2. **Question**: What are some practical uses of the `content` property?
   - **Answer**: The `content` property is used for adding decorative text (e.g., prefixes), counters (e.g., numbered lists), or icons, enhancing UI without additional HTML. Example:
     ```html
     <li class="item">Item</li>
     <style>
     .item::before { content: "✔ "; color: green; }
     </style>
     ```
     *A green checkmark is added before the list item.*

### 15. What are Vendor Prefixes? *(Important)*
Vendor prefixes (e.g., `-webkit-`, `-moz-`) are used for browser-specific CSS properties to support experimental or non-standard features. They ensure cross-browser compatibility when full standard support is lacking.

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
*Summary*: The box’s transitions work smoothly across all browsers.

**Interview Tip**:
1. **Tip**: Explain the purpose of vendor prefixes and their modern relevance.
   - **Explanation**: Vendor prefixes enable testing of experimental features, but modern CSS often uses standard properties as browsers have improved support. Mention tools like Autoprefixer or feature support checks in interviews to show practical knowledge.
2. **Question**: Why are vendor prefixes less common today?
   - **Answer**: Vendor prefixes are less common now because modern browsers (e.g., Chrome, Firefox) widely support standard CSS properties, and tools like Autoprefixer automatically add prefixes when needed. Example:
     ```html
     <div class="box">Transform</div>
     <style>
     .box { transform: rotate(45deg); } /* No prefix needed */
     </style>
     ```
     *Modern browsers support `transform` without prefixes.*


### 16. What is the Difference Between Relative, Absolute, Fixed, and Sticky Positioning? *(Important)*
The `position` property controls an element’s placement and layout behavior, such as `relative`, `absolute`, `fixed`, or `sticky`. It’s used for overlapping, offsets, and scroll-based effects.  
Each positioning type has distinct behavior: `relative` offsets from its original position, `absolute` is relative to the nearest positioned ancestor, `fixed` stays fixed to the viewport, and `sticky` toggles between relative and fixed based on scroll. These are critical for complex layouts and UI components.

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
*Summary*: The absolute box is positioned at the parent’s top-right corner.

**Interview Tip**:
1. **Tip**: Clarify the behaviors and parent dependencies of positioning types.
   - **Explanation**: `relative` shifts from its original spot, `absolute` depends on a positioned ancestor, `fixed` is tied to the viewport, and `sticky` toggles based on scroll. Discuss stacking context and debugging issues like misaligned elements in interviews.
2. **Question**: What’s the role of the parent in `absolute` positioning?
   - **Answer**: For `absolute` positioning, the parent must have a non-static position (e.g., `position: relative`) to serve as the reference point; otherwise, the element positions relative to the document body. Example:
     ```html
     <div class="parent">
       <div class="child">Child</div>
     </div>
     <style>
     .parent { position: relative; }
     .child { position: absolute; top: 10px; }
     </style>
     ```
     *The child is positioned 10px from the parent’s top.*

### 17. What is Flexbox? *(Important)*
Flexbox (Flexible Box Layout) is a modern CSS layout system designed to align, distribute, and space items along a single axis (row or column). It’s powerful for responsive layouts due to properties like `justify-content`, `align-items`, and `flex-wrap`, which offer precise control.  
Flexbox is ideal for navbars, centered content, or equal-width cards, serving as a simpler alternative to float-based layouts. It makes dynamic sizing and alignment easy, especially for mobile-first designs.

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
*Summary*: The navbar’s logo and menu items are evenly spaced and vertically centered.

**Interview Tip**:
1. **Tip**: Explain Flexbox’s core properties and real-world applications.
   - **Explanation**: Flexbox properties like `justify-content` (horizontal alignment), `align-items` (vertical alignment), and `flex-wrap` (wrapping control) create flexible, responsive layouts. It’s best for single-axis layouts and more intuitive than floats due to direct alignment control. Share practical examples like centering a div in interviews.
2. **Question**: What are the key properties of a Flexbox container?
   - **Answer**: Key Flexbox container properties include `display: flex`, `flex-direction` (row/column), `justify-content` (horizontal alignment), `align-items` (vertical alignment), `flex-wrap` (wrapping), and `gap` (spacing). Example:
     ```html
     <div class="container">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .container { display: flex; justify-content: center; gap: 10px; }
     </style>
     ```
     *Items are center-aligned with a 10px gap.*

### 18. What is CSS Grid? *(Important)*
CSS Grid is a 2D layout system for creating complex layouts with rows and columns, such as dashboards or photo galleries. It provides precise control over grid lines, areas, and spacing, making it ideal for responsive design.  
Grid container properties (e.g., `grid-template-columns`, `gap`) and item properties (e.g., `grid-column`) enable flexible, maintainable layouts. Compared to Flexbox, Grid is more versatile for controlling both axes simultaneously.

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
*Summary*: The grid creates a two-column layout with coral-colored items.

**Interview Tip**:
1. **Tip**: Highlight Grid’s core properties and comparison with Flexbox.
   - **Explanation**: Grid properties like `grid-template-columns`, `grid-template-rows`, and `gap` offer precise 2D layout control. Flexbox is simpler for 1D layouts (row or column), while Grid excels for dashboards or galleries. Focus on responsive grid examples in interviews to showcase practical skills.
2. **Question**: When should you use CSS Grid over Flexbox?
   - **Answer**: Use CSS Grid for 2D layouts where you need control over both rows and columns, such as dashboards or galleries. Flexbox is better for 1D layouts like navbars or linear lists. Example:
     ```html
     <div class="grid">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .grid { display: grid; grid-template-columns: 1fr 1fr; }
     </style>
     ```
     *Grid arranges items in a 2D layout.*

### 19. What are Media Queries? *(Important)*
Media queries apply CSS rules based on specific conditions, such as screen size, device type, or orientation, enabling responsive and adaptive designs. They define breakpoints (e.g., 320px for mobile, 768px for tablets) for tailored styling.  
Media queries ensure websites are cross-device compatible, optimizing user experience with approaches like mobile-first (`min-width`) or desktop-first (`max-width`). They’re essential for modern web development to handle diverse devices.

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
*Summary*: Text is 16px by default but increases to 20px on screens 768px or wider.

**Interview Tip**:
1. **Tip**: Explain media query breakpoints and the benefits of mobile-first design.
   - **Explanation**: Common breakpoints (320px for mobile, 768px for tablets, 1024px for desktops) are set based on project needs. Mobile-first (`min-width`) uses lightweight base styles and adds enhancements progressively, improving performance. Discuss optimization tips like minimizing queries in interviews.
2. **Question**: Why prefer mobile-first media queries over desktop-first?
   - **Answer**: Mobile-first (`min-width`) keeps base styles lightweight, ensuring fast loading and better performance on mobile devices, with cleaner code. Desktop-first (`max-width`) starts with heavier styles, which can harm mobile performance. Example:
     ```css
     .box { width: 100%; }
     @media (min-width: 768px) { .box { width: 50%; } }
     ```
     *The box is full-width on mobile and half-width on tablets/desktops, with minimal code.*

### 20. What is the Z-Index? *(Important)*
The `z-index` property controls the stacking order of overlapping elements, with higher values appearing above lower ones. It only works on positioned elements (`position: absolute`, `relative`, `fixed`, `sticky`) and is commonly used for modals or popups.

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
*Summary*: The red box (z-index: 2) appears above the blue box (z-index: 1).

**Interview Tip**:
1. **Tip**: Clarify z-index dependencies and stacking context.
   - **Explanation**: `z-index` requires a non-static `position` to work, and stacking context is affected by parent properties like `opacity` or `transform`. Discuss common issues, such as z-index not working due to stacking context, in interviews to show problem-solving skills.
2. **Question**: Why might z-index not work as expected?
   - **Answer**: `z-index` fails if the element’s `position` is static or if a parent creates a separate stacking context (e.g., with `transform` or `opacity < 1`). To fix, ensure the element is positioned and check the parent’s stacking context. Example:
     ```html
     <div class="parent">
       <div class="child">Child</div>
     </div>
     <style>
     .parent { transform: translateX(0); } /* Creates stacking context */
     .child { position: absolute; z-index: 10; } /* Limited by parent */
     </style>
     ```
     *The parent’s transform creates a stacking context, restricting the child’s z-index.*




## Intermediate Level

### 21. What are CSS Transitions? *(imp)*
CSS transitions enable smooth changes to properties like color, size, or position when an element’s state changes (e.g., on hover). They enhance user experience by adding fluid visual effects.  
Key components – `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay` – control what changes, how long it takes, and the easing curve. Transitions are ideal for lightweight animations on buttons or links.

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
*Summary*: On hover, the button smoothly changes to orange and scales up by 10%.

**Interview Tip**:
1. **Tip**: Explain transition components and their practical uses.
   - **Explanation**: Transitions use `transition-property` (what to animate), `duration` (how long), `timing-function` (e.g., ease, linear), and `delay` (wait time) to create smooth effects. They’re great for hover effects, UI feedback, or subtle animations. Focus on real-world examples like button hovers in interviews.
2. **Question**: What are the key properties of a CSS transition?
   - **Answer**: Key transition properties are `transition-property` (e.g., background, transform), `transition-duration` (e.g., 0.3s), `transition-timing-function` (e.g., ease, linear), and `transition-delay` (e.g., 0.1s). The shorthand `transition: all 0.3s ease` covers all. Example:
     ```html
     <div class="box">Hover</div>
     <style>
     .box { transition: background 0.3s ease; }
     .box:hover { background: yellow; }
     </style>
     ```
     *The box smoothly changes to a yellow background on hover.*

### 22. What are CSS Animations? *(imp)*
CSS animations create complex, keyframe-based effects that transition through multiple states, like sliding or fading. They’re more flexible than transitions because keyframes allow custom sequences.  
Animations use the `@keyframes` rule to define stages, with properties like `animation-name`, `duration`, and `iteration-count` controlling behavior. They’re used for interactive UI elements or attention-grabbing effects.

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
*Summary*: The box slides 150px right and back in 2 seconds, repeating infinitely.

**Interview Tip**:
1. **Tip**: Explain keyframes and animation properties.
   - **Explanation**: Animations use `@keyframes` to define stages, with properties like `animation-duration`, `animation-iteration-count`, and `animation-timing-function` controlling the effect. They’re ideal for complex effects like loaders or slideshows. Share creative examples in interviews.
2. **Question**: What’s the difference between transitions and animations?
   - **Answer**: Transitions smoothly handle state changes (e.g., hover), while animations use keyframes for complex, multi-stage effects that can run automatically or loop infinitely. Animations offer more control. Example:
     ```html
     <div class="anim">Animate</div>
     <style>
     .anim { animation: fade 1s infinite; }
     @keyframes fade { 0% { opacity: 1; } 100% { opacity: 0; } }
     </style>
     ```
     *The animation fades the div in and out, offering more flexibility than a transition.*

### 23. What is the Difference Between `em` and `rem` Units? *(imp)*
`em` units are relative to the parent element’s font-size, while `rem` units are relative to the root element’s (`html`) font-size. Both are used for responsive typography and spacing.

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
*Summary*: The child’s font-size is 30px (parent-based), and margin is 16px (root-based).

**Interview Tip**:
1. **Tip**: Explain the behavior and use cases of `em` and `rem`.
   - **Explanation**: `em` can cause compounding issues in nested elements due to parent dependency, while `rem` is consistent as it’s root-based, making it ideal for responsive designs. Highlight `rem`’s benefits for scalability in interviews.
2. **Question**: Why is `rem` preferred for responsive design?
   - **Answer**: `rem` is preferred because it’s relative to the root (`html`) font-size, ensuring consistent sizing across all elements, especially in responsive designs. `em` depends on parent font-size, which can be unpredictable in nested structures. Example:
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
     *The text’s font-size stays 16px, unaffected by the parent.*

### 24. What are CSS Variables? *(imp)*
CSS variables (custom properties) store reusable values, defined with `--name` syntax and accessed via `var()`. They’re powerful for theming, code maintenance, and dynamic styling.

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
*Summary*: The button’s background is tomato, defined by a variable.

**Interview Tip**:
1. **Tip**: Highlight the benefits and scope of CSS variables.
   - **Explanation**: CSS variables reduce code repetition and simplify theme updates, especially in large projects. Defined in `:root` for global scope, they can also be local. Focus on theming or dynamic updates in interviews.
2. **Question**: What are the benefits of CSS variables?
   - **Answer**: CSS variables minimize repetition, enable easy theme changes, and support dynamic styling (e.g., via JavaScript). A single variable update can affect multiple styles. Example:
     ```html
     <div class="card">Card</div>
     <style>
     :root { --primary: #3498db; }
     .card { background: var(--primary); }
     </style>
     ```
     *Changing the variable updates the card’s background.*

### 25. What is CSS Reset? *(imp)*
A CSS reset removes browser default styles (e.g., margins, paddings) to provide a consistent baseline across browsers. It ensures cross-browser compatibility.

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
*Summary*: Default margins/paddings are removed, content has a lightblue background.

**Interview Tip**:
1. **Tip**: Explain the difference between reset and normalize.
   - **Explanation**: A reset clears all browser defaults for a blank slate, while normalize ensures consistent defaults without removing useful styles. Discuss reset’s pros (consistency) and cons (extra styling effort) in interviews.
2. **Question**: What’s the difference between CSS reset and normalize?
   - **Answer**: A CSS reset removes all browser defaults (e.g., margins, paddings) for a clean slate, while normalize standardizes defaults across browsers, keeping useful styles. Example:
     ```css
     /* Reset */
     * { margin: 0; padding: 0; }
     /* Normalize (partial example) */
     h1 { margin: 0.67em 0; }
     ```
     *Reset clears everything, normalize retains useful defaults.*

### 26. What is the `box-shadow` Property? *(imp)*
The `box-shadow` property adds a shadow or glow effect around an element, enhancing depth and visual appeal. It’s commonly used for UI elements like cards or buttons.

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
*Summary*: The box has a subtle shadow, adding depth.

**Interview Tip**:
1. **Tip**: Explain `box-shadow` parameters and use cases.
   - **Explanation**: `box-shadow` uses x-offset, y-offset, blur-radius, spread-radius, and color to create effects. It’s ideal for cards, buttons, or hover states to make UIs pop. Discuss multiple shadows or inset shadows in interviews.
2. **Question**: What are the parameters of `box-shadow`?
   - **Answer**: `box-shadow` parameters are `x-offset` (horizontal shift), `y-offset` (vertical shift), `blur-radius` (shadow blur), `spread-radius` (shadow size), and `color` (e.g., rgba for transparency). `inset` creates an inner shadow. Example:
     ```html
     <div class="card">Card</div>
     <style>
     .card { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); }
     </style>
     ```
     *The card has a shadow below, adding depth.*

### 27. What is the `overflow` Property? *(imp)*
The `overflow` property controls what happens when content exceeds an element’s dimensions, such as clipping, scrolling, or showing it. It’s critical for layouts like modals or fixed-height containers.

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
*Summary*: The box shows a scrollbar for overflowing content.

**Interview Tip**:
1. **Tip**: Explain `overflow` values and their use cases.
   - **Explanation**: `overflow: visible` shows overflow, `hidden` clips it, `scroll` always adds scrollbars, and `auto` adds scrollbars only when needed. Highlight practical uses like scrollable containers or clipped modals in interviews.
2. **Question**: What’s the difference between `overflow: auto` and `overflow: scroll`?
   - **Answer**: `overflow: auto` shows scrollbars only when content overflows, while `overflow: scroll` always shows scrollbars (horizontal and vertical), even if content fits. Example:
     ```html
     <div class="container">Short text</div>
     <style>
     .container { width: 200px; height: 100px; overflow: scroll; }
     </style>
     ```
     *`scroll` always shows scrollbars, `auto` wouldn’t here.*

### 28. What is the `calc()` Function? *(imp)*
The `calc()` function performs mathematical calculations (addition, subtraction, multiplication, division) in CSS for dynamic sizing or spacing. It’s useful for responsive layouts.

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
*Summary*: The box’s width is 100% of the viewport minus 100px.

**Interview Tip**:
1. **Tip**: Explain `calc()` use cases and syntax.
   - **Explanation**: `calc()` works with units (px, %, vw, rem) for calculations, ideal for responsive designs, dynamic spacing, or complex layouts. Share real-world examples like centered containers or variable widths in interviews.
2. **Question**: What are some use cases for `calc()`?
   - **Answer**: `calc()` is used for responsive widths (e.g., 100% minus fixed margins), dynamic font sizes, or spacing calculations, making layouts flexible and maintainable. Example:
     ```html
     <div class="container">Content</div>
     <style>
     .container { width: calc(50vw - 2rem); }
     </style>
     ```
     *The container’s width is 50% of the viewport minus 2rem.*

### 29. What is the `transform` Property? *(imp)*
The `transform` property manipulates an element’s appearance, like rotating, scaling, translating, or skewing, without affecting layout flow. It’s used for animations, hover effects, or UI enhancements.  
Transforms are GPU-accelerated for better performance, and multiple transforms can be combined. They’re critical for dynamic visuals in modern web design.

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
*Summary*: The box shifts 50px right, 20px down, and rotates 30 degrees.

**Interview Tip**:
1. **Tip**: Explain `transform` types and performance benefits.
   - **Explanation**: `transform` functions like `translate`, `rotate`, `scale`, and `skew` alter visuals without triggering layout recalculations, improving performance. Discuss animation integration or transform chaining in interviews.
2. **Question**: What’s the difference between `transform` and `transition`?
   - **Answer**: `transform` changes an element’s visual properties (e.g., position, rotation), while `transition` smooths those changes over time. Together, they create animations. Example:
     ```html
     <div class="box">Hover</div>
     <style>
     .box { transform: scale(1); transition: transform 0.3s; }
     .box:hover { transform: scale(1.2); }
     </style>
     ```
     *`transform` scales the box, `transition` makes it smooth.*

### 30. What is the `opacity` Property? *(imp)*
The `opacity` property sets an element’s transparency, from 0 (fully transparent) to 1 (fully opaque). It’s used for visual effects like fades, overlays, or hover states.

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
*Summary*: The box is 50% transparent, showing the background through it.

**Interview Tip**:
1. **Tip**: Explain `opacity` use cases and performance considerations.
   - **Explanation**: `opacity` creates simple transparency effects for hover states or modals but affects the entire element, including children. Discuss alternatives like `rgba` for specific properties and performance in interviews.
2. **Question**: What’s the difference between `opacity` and `rgba`?
   - **Answer**: `opacity` sets transparency for an entire element (including children), while `rgba` applies transparency to specific properties (e.g., background, color). Example:
     ```html
     <div class="box">Content</div>
     <style>
     .box { background: rgba(0, 128, 128, 0.5); opacity: 1; }
     </style>
     ```
     *`rgba` makes only the background transparent, `opacity` would affect the whole box.*

### 30. What is the `opacity` Property? *(Important)*
The `opacity` property sets an element’s transparency, ranging from 0 (fully transparent) to 1 (fully opaque). It’s used for visual effects like fades, overlays, or hover states.

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
*Summary*: The box is 70% opaque, slightly showing the background through it.

**Interview Tip**:
1. **Tip**: Explain `opacity`’s use cases and limitations.
   - **Explanation**: `opacity` affects an entire element (including children), making it ideal for overlays, modals, or hover effects. Discuss alternatives like `rgba` for specific properties and performance considerations in interviews.
2. **Question**: What’s the difference between `opacity` and `rgba`?
   - **Answer**: `opacity` sets transparency for the entire element (including children), while `rgba` applies transparency only to specific properties like background or color. Example:
     ```html
     <div class="box">Content</div>
     <style>
     .box { background: rgba(0, 0, 255, 0.7); opacity: 1; }
     </style>
     ```
     *`rgba` makes only the background transparent, while `opacity` would affect the whole box.*

### 31. What is the `clip-path` Property? *(Important)*
The `clip-path` property clips an element’s visible portion into custom shapes like polygons or circles, enabling unique designs and creative layouts. It works on images, divs, or SVGs.  
It’s powerful for responsive designs, creating dynamic shapes or decorative elements, though complex shapes may require calculations or tools. It’s widely used in modern UI for visual flair.

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
*Summary*: The box is clipped into a triangular shape with an orange background.

**Interview Tip**:
1. **Tip**: Highlight `clip-path`’s use cases and shape creation methods.
   - **Explanation**: `clip-path` creates custom shapes (polygons, circles, SVGs) for hero sections, image masks, or unique layouts. Discuss tools like Clippy and responsive shape adjustments in interviews.
2. **Question**: What are some use cases for `clip-path`?
   - **Answer**: `clip-path` is used for unique UI elements (e.g., angled sections), image cropping, or decorative shapes, adding visual interest to modern designs. Example:
     ```html
     <img class="img" src="image.jpg" alt="Clipped">
     <style>
     .img { clip-path: circle(50% at 50% 50%); }
     </style>
     ```
     *The image is clipped into a circular shape.*

### 32. What is the `filter` Property? *(Important)*
The `filter` property applies visual effects like blur, grayscale, brightness, or contrast to elements, commonly used for images or UI components. It’s GPU-accelerated, ensuring good performance.

**Example**:
```html
<img class="img" src="image.jpg" alt="Filtered">
<style>
.img {
  filter: grayscale(100%) brightness(80%);
}
</style>
```
*Summary*: The image appears grayscale with 80% brightness.

**Interview Tip**:
1. **Tip**: Discuss common `filter` effects and their applications.
   - **Explanation**: `filter` effects like `blur`, `grayscale`, `sepia`, or `drop-shadow` enhance images, buttons, or hover states. Highlight performance benefits and creative uses like hover animations in interviews.
2. **Question**: What are common uses of the `filter` property?
   - **Answer**: `filter` is used for image effects (grayscale, sepia), hover animations (blur, brightness), or accessibility adjustments (high contrast), enriching UI visuals. Example:
     ```html
     <div class="box">Hover</div>
     <style>
     .box { filter: blur(0); transition: filter 0.3s; }
     .box:hover { filter: blur(2px); }
     </style>
     ```
     *The box blurs on hover, creating a subtle effect.*

### 33. What are `vh`, `vw`, `vmin`, `vmax` Units? *(Important)*
Viewport units are relative to the screen size: `vw` (1% of viewport width), `vh` (1% of viewport height), `vmin` (smaller of vw or vh), and `vmax` (larger of vw or vh). They’re ideal for responsive layouts.

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
*Summary*: The hero section spans the full viewport height and half its width.

**Interview Tip**:
1. **Tip**: Explain viewport units’ use cases and responsiveness.
   - **Explanation**: `vw` and `vh` are perfect for full-screen sections or hero banners, while `vmin`/`vmax` suit responsive typography or sizing. Focus on their role in responsive design during interviews.
2. **Question**: When should you use `vmin` or `vmax`?
   - **Answer**: Use `vmin` for sizing based on the smaller viewport dimension (e.g., mobile-first designs) and `vmax` for the larger one (e.g., desktop-focused layouts). Example:
     ```html
     <div class="box">Box</div>
     <style>
     .box { font-size: 5vmin; }
     </style>
     ```
     *The font size scales based on 5% of the viewport’s smaller dimension.*

### 34. What is a CSS Sprite? *(Important)*
A CSS sprite combines multiple images into a single image file, using `background-position` to display specific parts, reducing HTTP requests and improving performance. It’s common for icons or small graphics.

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
*Summary*: The icon displays a specific image from the spritesheet.

**Interview Tip**:
1. **Tip**: Highlight CSS sprites’ performance benefits and implementation.
   - **Explanation**: Sprites reduce HTTP requests by combining images, speeding up page loads, especially for icon-heavy UIs. Discuss modern alternatives like SVG sprites and sprite generation tools in interviews.
2. **Question**: Why are CSS sprites used for performance?
   - **Answer**: CSS sprites combine multiple images into one file, reducing HTTP requests, which decreases page load time and bandwidth usage, particularly for icons or UI elements. Example:
     ```html
     <div class="social-icon"></div>
     <style>
     .social-icon { background: url('social-sprite.png') -50px 0; width: 50px; height: 50px; }
     </style>
     ```
     *The social icon displays a specific icon from the spritesheet.*

### 35. What is the Difference Between `position: static` and `position: relative`? *(Important)*
`position: static` is the default, placing elements in the normal document flow with no effect from offset properties (top, left). `position: relative` follows the normal flow but allows offsets and serves as a reference for absolutely positioned children.

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
*Summary*: The relative div shifts 10px down and 20px left.

**Interview Tip**:
1. **Tip**: Explain the behaviors and use cases of `static` and `relative`.
   - **Explanation**: `static` suits simple layouts without positioning needs, while `relative` is used for minor adjustments or as a parent for absolute positioning. Highlight relative’s role as a container in interviews.
2. **Question**: When should you use `position: relative`?
   - **Answer**: Use `position: relative` for slight offsets within the normal flow or to act as a reference for absolutely positioned children. Example:
     ```html
     <div class="parent">
       <div class="child">Child</div>
     </div>
     <style>
     .parent { position: relative; }
     .child { position: absolute; top: 10px; }
     </style>
     ```
     *The relative parent positions the absolute child.*

### 36. What is the `font` Shorthand Property? *(Important)*
The `font` shorthand property sets font-related styles (e.g., style, weight, size, family) in a single line, making code concise and readable.

**Example**:
```html
<p class="text">Styled Text</p>
<style>
.text {
  font: italic 700 1.2em "Arial", sans-serif;
}
</style>
```
*Summary*: The text is italic, bold, 1.2em in size, and uses Arial font.

**Interview Tip**:
1. **Tip**: Explain the `font` shorthand’s components and order.
   - **Explanation**: `font` shorthand includes `font-style`, `font-weight`, `font-size`, `line-height` (optional), and `font-family`, in a specific order. Discuss required vs optional components and common errors in interviews.
2. **Question**: What are the components of the `font` shorthand?
   - **Answer**: The `font` shorthand includes `font-style` (e.g., italic), `font-variant` (optional), `font-weight` (e.g., 700), `font-size` (e.g., 1.2em), `line-height` (optional, e.g., 1.5), and `font-family` (e.g., Arial). `font-size` and `font-family` are mandatory. Example:
     ```html
     <p class="text">Text</p>
     <style>
     .text { font: 1em Arial; }
     </style>
     ```
     *The text is 1em in size and uses Arial font.*

### 37. What is the `background` Shorthand Property? *(Important)*
The `background` shorthand property sets background-related styles (e.g., image, color, position, repeat, size) in a single line, making code compact and maintainable.

**Example**:
```html
<div class="box">Background</div>
<style>
.box {
  background: url('image.jpg') no-repeat center / cover #333;
}
</style>
```
*Summary*: The box has a centered, non-repeating, cover-sized background image with a gray fallback.

**Interview Tip**:
1. **Tip**: Discuss the `background` shorthand’s components and flexibility.
   - **Explanation**: `background` includes `background-color`, `background-image`, `background-position`, `background-size`, `background-repeat`, and `background-attachment`, with flexible ordering. Highlight its benefits and common use cases in interviews.
2. **Question**: What are the components of the `background` shorthand?
   - **Answer**: The `background` shorthand includes `background-color`, `background-image`, `background-position`, `background-size`, `background-repeat`, `background-origin`, `background-clip`, and `background-attachment`. All are optional, and order can vary. Example:
     ```html
     <div class="section">Section</div>
     <style>
     .section { background: #f0f0f0 center / 50%; }
     </style>
     ```
     *The section has a light gray background with a centered, 50%-sized image.*

### 38. What is the `flex` Shorthand Property? *(Important)*
The `flex` shorthand property sets flex item behavior, combining `flex-grow`, `flex-shrink`, and `flex-basis`. It controls sizing and responsiveness in Flexbox layouts.

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
*Summary*: The item grows to fill available space in the container.

**Interview Tip**:
1. **Tip**: Explain the `flex` shorthand’s components and its role in Flexbox.
   - **Explanation**: `flex`’s parts – `flex-grow` (space-taking capacity), `flex-shrink` (shrinking capacity), and `flex-basis` (initial size) – control dynamic sizing of items. Focus on its use in responsive layouts during interviews.
2. **Question**: What are the components of the `flex` shorthand?
   - **Answer**: The `flex` shorthand includes `flex-grow` (ratio for taking available space), `flex-shrink` (ratio for shrinking), and `flex-basis` (initial size, e.g., auto, px). Example:
     ```html
     <div class="flex">
       <div class="item">Item</div>
     </div>
     <style>
     .flex { display: flex; }
     .item { flex: 2 1 200px; }
     </style>
     ```
     *The item starts at 200px, grows 2x, and shrinks 1x.*

### 39. What is the `grid-template` Property? *(Important)*
The `grid-template` shorthand property defines a CSS Grid layout, combining `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`. It provides precise control for complex 2D layouts.  
It’s ideal for dashboards, galleries, or responsive page structures, offering flexibility through `fr` units or named areas. It’s a core component of modern web design with CSS Grid.

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
*Summary*: The grid creates a 2x2 layout with a 100px first row, flexible second row, and equal columns.

**Interview Tip**:
1. **Tip**: Explain `grid-template`’s components and its role in Grid layouts.
   - **Explanation**: `grid-template` defines rows, columns, and areas in one line, making complex layouts concise. Named areas and `fr` units enhance responsiveness. Share practical examples like page layouts in interviews.
2. **Question**: How does `grid-template` simplify Grid layouts?
   - **Answer**: `grid-template` combines `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`, making code compact and readable while enabling complex layouts. Example:
     ```html
     <div class="grid">
       <div>Header</div>
       <div>Main</div>
     </div>
     <style>
     .grid { display: grid; grid-template: "header" 100px "main" 1fr / 1fr; }
     </style>
     ```
     *The grid creates a vertical layout with header and main areas.*

### 40. What is the `gap` Property? *(Important)*
The `gap` property sets consistent spacing between items in Flexbox or Grid layouts, offering a simpler and cleaner alternative to margins. It’s ideal for creating uniform gaps in responsive designs.

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
*Summary*: Flex items have a consistent 15px gap between them.

**Interview Tip**:
1. **Tip**: Explain the benefits and context of `gap` in Flexbox and Grid.
   - **Explanation**: `gap` eliminates the need for manual margin adjustments, making code cleaner and more maintainable. It works in both Flexbox and Grid, perfect for responsive layouts. Focus on its advantages over margins in interviews.
2. **Question**: Why is `gap` preferred over margins in modern layouts?
   - **Answer**: `gap` provides consistent spacing without complex margin calculations, applies directly in Flexbox and Grid, and simplifies responsive designs. Margins can cause overlapping or inconsistent spacing issues. Example:
     ```html
     <div class="grid">
       <div>Item 1</div>
       <div>Item 2</div>
     </div>
     <style>
     .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
     </style>
     ```
     *Grid items have a uniform 20px gap, applied automatically.*


## Advanced Level

### 41. What are CSS Preprocessors? *(Important)*
CSS preprocessors (like SASS, SCSS, LESS) enhance CSS with features such as variables, nesting, mixins, and functions, making code modular and reusable. They streamline development for large-scale projects.  
Preprocessors add advanced logic (e.g., loops, conditionals) and better organization (e.g., partials, imports). They compile into vanilla CSS, which browsers can interpret, ensuring compatibility.

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
*Summary*: Button has a blue background, darkening on hover.

**Interview Tip**:
1. **Tip**: Highlight core features and benefits of preprocessors.
   - **Explanation**: Variables, nesting, and mixins reduce code repetition, while imports and partials improve organization in large projects. In interviews, emphasize practical uses (e.g., theming) and setup (e.g., compilers).
2. **Question**: What are the benefits of using a CSS preprocessor like SASS?
   - **Answer**: SASS provides reusable, modular code through variables, nesting, mixins, and imports, speeding up development and simplifying maintenance in large projects. Example:
     ```scss
     $font-stack: Arial, sans-serif;
     @mixin border($size) { border: $size solid black; }
     .card { font-family: $font-stack; @include border(2px); }
     ```
     *Card uses reusable font and border styles efficiently.*

### 42. What is the Difference Between `visibility: hidden` and `display: none`? *(Important)*
`visibility: hidden` hides an element but reserves its layout space, while `display: none` removes the element from the DOM, freeing up its space. Both are used for toggling UI elements.

**Example**:
```html
<div class="hidden">Hidden</div>
<div class="gone">Gone</div>
<style>
.hidden { visibility: hidden; }
.gone { display: none; }
</style>
```
*Summary*: Hidden div takes up space, gone div is invisible and takes no space.

**Interview Tip**:
1. **Tip**: Clarify use cases for `visibility: hidden` and `display: none`.
   - **Explanation**: Use `visibility: hidden` for temporary hiding when layout needs to be preserved, and `display: none` for complete removal, like conditional UI elements. In interviews, discuss performance impacts (e.g., reflows) and accessibility.
2. **Question**: When should you use `visibility: hidden` over `display: none`?
   - **Answer**: Use `visibility: hidden` when you need to hide an element but preserve its layout space, such as for animations or toggle effects. Use `display: none` when space should also be removed, like for off-screen menus. Example:
     ```html
     <div class="toggle">Toggle</div>
     <style>
     .toggle { visibility: hidden; }
     </style>
     ```
     *Toggle div is hidden but reserves its layout space.*

### 43. What is the `will-change` Property? *(Important)*
The `will-change` property hints to the browser which element properties will change (e.g., transform, opacity), enabling rendering optimizations for smoother animations. Overuse can increase memory usage.

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
*Summary*: Browser optimizes the box’s transform animation.

**Interview Tip**:
1. **Tip**: Explain the purpose and cautious use of `will-change`.
   - **Explanation**: `will-change` boosts performance for animations by preparing the browser, but overuse (e.g., `will-change: all`) can cause memory and performance issues. In interviews, focus on specific use cases and debugging.
2. **Question**: What are the risks of misusing `will-change`?
   - **Answer**: Overusing `will-change` (e.g., on multiple elements or vague values like `all`) increases memory usage and can degrade performance. Limit it to specific properties like `transform` or `opacity`. Example:
     ```html
     <div class="card">Card</div>
     <style>
     .card { will-change: opacity; }
     </style>
     ```
     *Card is optimized for opacity changes, avoiding overuse.*

### 44. What is the `object-fit` Property? *(Important)*
The `object-fit` property controls how images or videos fit within their container, such as stretching, containing, or covering. It’s critical for responsive media handling.

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
*Summary*: Image fills the 200x200px container, cropped to maintain aspect ratio.

**Interview Tip**:
1. **Tip**: Describe `object-fit` values and their responsive applications.
   - **Explanation**: `object-fit: cover` maintains aspect ratio and crops, `contain` fits without cropping, and `fill` stretches. In interviews, highlight use cases like image galleries or video players.
2. **Question**: When should you use `object-fit: cover`?
   - **Answer**: Use `object-fit: cover` when an image or video needs to fully cover its container while preserving aspect ratio, like for thumbnails or hero images. It crops but avoids distortion. Example:
     ```html
     <img class="thumbnail" src="image.jpg" alt="Thumbnail">
     <style>
     .thumbnail { width: 100%; height: 150px; object-fit: cover; }
     </style>
     ```
     *Image fits the thumbnail, cropped with preserved aspect ratio.*

### 45. What is the `mix-blend-mode` Property? *(Important)*
The `mix-blend-mode` property controls how elements blend with their underlying content, such as through multiply, screen, or overlay modes. It’s used for creative visual effects.  
Blend modes create graphic design-inspired effects, applicable to images, text, or backgrounds. They’re popular in modern UI for artistic and dynamic visuals.

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
*Summary*: Red overlay blends with underlying content using multiply mode.

**Interview Tip**:
1. **Tip**: Highlight common blend modes and their creative applications.
   - **Explanation**: `multiply` darkens overlapping areas, `screen` lightens, and `overlay` adjusts contrast. These are used for photo effects, text overlays, or artistic backgrounds. In interviews, discuss browser support and practical uses.
2. **Question**: What are common `mix-blend-mode` values?
   - **Answer**: Common values include `multiply` (darkens overlaps), `screen` (lightens), `overlay` (contrast-based), and `difference` (color inversion). They’re used for creative visual effects. Example:
     ```html
     <div class="text">Text</div>
     <style>
     .text { mix-blend-mode: difference; color: white; }
     </style>
     ```
     *Text creates an inverted color effect with the background.*

### 46. What is the `shape-outside` Property? *(Important)*
The `shape-outside` property allows text to wrap around custom shapes (e.g., circles, polygons) on floated elements, ideal for magazine-style layouts or creative designs.  
It controls text flow around images or divs, enhancing visual hierarchy and readability. It’s float-based but well-supported in modern browsers.

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
*Summary*: Text wraps around the circular image.

**Interview Tip**:
1. **Tip**: Explain use cases and requirements for `shape-outside`.
   - **Explanation**: `shape-outside` works on floated elements, shaping text flow around circles or polygons, great for editorial layouts. In interviews, focus on creative uses (e.g., magazine designs) and limitations (float dependency).
2. **Question**: What are use cases for `shape-outside`?
   - **Answer**: `shape-outside` is used for magazine-style layouts, image-text wraps, or decorative text flows, improving visual appeal and readability. Example:
     ```html
     <div class="shape">Shape</div>
     <p>Text wraps...</p>
     <style>
     .shape { float: left; shape-outside: polygon(0 0, 100% 0, 0 100%); width: 150px; height: 150px; }
     </style>
     ```
     *Text wraps around a triangular shape.*

### 47. What is the `counter` Property? *(Important)*
The `counter` property enables automatic numbering for lists, headings, or tables of contents, using `counter-reset`, `counter-increment`, and `content`. It creates dynamic CSS-only numbering.  
It’s powerful for structured documents, supporting complex nested counters without JavaScript, making it flexible for outlines or multi-level lists.

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
*Summary*: List items display custom numbering (1., 2.).

**Interview Tip**:
1. **Tip**: Clarify the mechanics and use cases of `counter`.
   - **Explanation**: `counter-reset` sets the initial value, `counter-increment` advances the count, and `content` displays the counter. It’s used for tables of contents, outlines, or nested lists. In interviews, focus on nested counters and practical examples.
2. **Question**: How do you create a nested counter in CSS?
   - **Answer**: Nested counters use multiple `counter-reset` and `counter-increment` instances, defining separate counters for each level. Example:
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
     *Output: 1., 1.1., etc., for nested numbering.*

### 48. What is the `clip` Property? *(Important)*
The `clip` property clips an element’s visible area to a rectangular shape but is deprecated, with `clip-path` as the modern alternative. It only worked on `position: absolute` or `fixed` elements.

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
*Summary*: Box’s visible area is clipped to a 10px-100px rectangle.

**Interview Tip**:
1. **Tip**: Highlight limitations of `clip` and advantages of `clip-path`.
   - **Explanation**: `clip` is limited to rectangles and outdated, while `clip-path` supports complex shapes (polygons, circles) and all positioning types. In interviews, focus on modern alternatives and transitioning from `clip`.
2. **Question**: Why is `clip-path` preferred over `clip`?
   - **Answer**: `clip-path` is more flexible, supporting complex shapes (circles, polygons, SVGs) and working on all positioning types, unlike `clip`, which is limited and deprecated. Example:
     ```html
     <div class="box">Modern Clip</div>
     <style>
     .box { clip-path: inset(10px 10px 10px 10px); }
     </style>
     ```
     *`clip-path` performs rectangular clipping in a modern way.*

### 49. What is the `scroll-behavior` Property? *(Important)*
The `scroll-behavior` property enables smooth scrolling for navigation links or anchors, enhancing user experience without JavaScript. It improves navigation flow on websites.

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
*Summary*: Clicking the anchor smoothly scrolls to the section.

**Interview Tip**:
1. **Tip**: Discuss benefits and limitations of `scroll-behavior`.
   - **Explanation**: `scroll-behavior: smooth` provides native smooth scrolling, improving UX, but has limited support in older browsers. In interviews, discuss fallback options (e.g., JavaScript) and accessibility considerations.
2. **Question**: What are the limitations of `scroll-behavior`?
   - **Answer**: The main limitations are limited browser support (especially in older browsers) and lack of customization (e.g., scroll speed). JavaScript may be needed as a fallback. Example:
     ```html
     <a href="#bottom">Go to Bottom</a>
     <div id="bottom">Bottom</div>
     <style>
     html { scroll-behavior: smooth; }
     </style>
     ```
     *Smooth scrolling works in modern browsers.*

### 50. What is the `aspect-ratio` Property? *(Important)*
The `aspect-ratio` property sets an element’s width-to-height ratio, ensuring consistent proportions for responsive media containers like images or videos. It simplifies layout design.

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
*Summary*: Box is 200px wide with a 16:9 height ratio.

**Interview Tip**:
1. **Tip**: Explain use cases and fallbacks for `aspect-ratio`.
   - **Explanation**: `aspect-ratio` ensures consistent proportions for images, videos, or iframes, crucial for responsive designs. Older browsers may require the padding-bottom hack as a fallback. In interviews, focus on media containers and browser support.
2. **Question**: Why is `aspect-ratio` useful for responsive design?
   - **Answer**: `aspect-ratio` ensures consistent proportions for responsive media containers, eliminating manual calculations or hacks (like padding-bottom) and making layouts cleaner. Example:
     ```html
     <video class="video" src="video.mp4"></video>
     <style>
     .video { width: 100%; aspect-ratio: 4 / 3; }
     </style>
     ```
     *Video maintains a 4:3 ratio, scaling responsively.*


### 51. What is the `backdrop-filter` Property? *(imp)*
The `backdrop-filter` property applies visual effects like blur or grayscale to the content behind an element, commonly used for glassmorphism or frosted-glass effects. It enhances modern UI designs with depth and elegance.  
It works best on transparent or semi-transparent elements, but browser support (especially in older browsers) and performance considerations must be addressed.

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
*Summary*: The content behind the overlay appears with a 5px blur effect.

**Interview Tip**:
1. **Tip**: Explain `backdrop-filter` use cases and limitations.
   - **Explanation**: `backdrop-filter` is ideal for glassmorphism effects, modals, or navigation bars, but it’s GPU-intensive and may lack support in older browsers. In interviews, highlight fallback strategies (e.g., static backgrounds) and accessibility considerations.
2. **Question**: What are common use cases for `backdrop-filter`?
   - **Answer**: `backdrop-filter` is used for frosted-glass effects, blurred overlays, or modern UI elements like sidebars and popups, creating depth and visual hierarchy. Example:
     ```html
     <nav class="nav">Menu</nav>
     <style>
     .nav { background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); }
     </style>
     ```
     *The navigation bar’s background content appears blurred, giving a modern look.*

### 52. What is the `place-items` Property? *(imp)*
The `place-items` shorthand property aligns Flexbox or Grid items by combining `align-items` (vertical) and `justify-items` (horizontal). It simplifies centering and produces cleaner code.

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
*Summary*: The item is centered both horizontally and vertically in the grid.

**Interview Tip**:
1. **Tip**: Clarify the role and efficiency of `place-items`.
   - **Explanation**: `place-items` sets alignment in one line, reducing repetitive code in Flexbox or Grid layouts. In interviews, emphasize its use for quick centering and shorthand benefits.
2. **Question**: How does `place-items` simplify alignment in Grid?
   - **Answer**: `place-items` combines `align-items` and `justify-items`, aligning Grid items in one command, making code concise and readable. Example:
     ```html
     <div class="container">
       <div>Item</div>
     </div>
     <style>
     .container { display: grid; place-items: start end; }
     </style>
     ```
     *The item is aligned to the top-right corner of the grid.*

### 53. What is the `text-decoration` Property? *(imp)*
The `text-decoration` property applies styles like underline, overline, or strikethrough to text, or removes them (e.g., for links). It’s a simple and effective way to style text.

**Example**:
```html
<a href="#" class="link">Link</a>
<style>
.link {
  text-decoration: none;
}
</style>
```
*Summary*: The link’s default underline is removed.

**Interview Tip**:
1. **Tip**: Discuss `text-decoration` uses and alternatives.
   - **Explanation**: `text-decoration` is used for links, emphasis, or text effects, but `border-bottom` offers more customization. In interviews, focus on accessibility (e.g., ensuring links remain distinguishable) and modern styling approaches.
2. **Question**: What’s the difference between `text-decoration` and `border-bottom`?
   - **Answer**: `text-decoration` provides simple text styling (e.g., underline, strikethrough), while `border-bottom` is more customizable (color, thickness, spacing) but takes up layout space. Example:
     ```html
     <a href="#" class="custom">Custom</a>
     <style>
     .custom { text-decoration: none; border-bottom: 2px solid blue; }
     </style>
     ```
     *The link has a blue, thick underline via `border-bottom`.*

### 54. What is the `outline` Property? *(imp)*
The `outline` property creates a non-space-taking border around an element, often used for focus states or accessibility. Unlike `border`, it doesn’t affect the layout.

**Example**:
```html
<input type="text" class="input">
<style>
.input:focus {
  outline: 2px solid blue;
}
</style>
```
*Summary*: The input shows a blue outline on focus without taking extra space.

**Interview Tip**:
1. **Tip**: Highlight `outline`’s accessibility role and differences.
   - **Explanation**: `outline` is critical for focus indicators, especially for keyboard navigation, and differs from `border` by not occupying space. In interviews, emphasize accessibility best practices and custom outline styling.
2. **Question**: What’s the difference between `outline` and `border`?
   - **Answer**: `outline` draws a non-space-taking style around an element, while `border` takes up layout space and is part of the box model. `outline` is better for accessibility. Example:
     ```html
     <button class="btn">Button</button>
     <style>
     .btn:focus { outline: 3px dashed red; }
     </style>
     ```
     *The button shows a red dashed outline on focus, leaving layout unchanged.*

### 55. What is the `resize` Property? *(imp)*
The `resize` property makes elements like textareas user-resizable, controlling whether resizing is allowed horizontally, vertically, or both. It enhances UX, particularly in forms.

**Example**:
```html
<textarea class="textarea"></textarea>
<style>
.textarea {
  resize: vertical;
}
</style>
```
*Summary*: The textarea is resizable only vertically.

**Interview Tip**:
1. **Tip**: Explain `resize` options and their UX impact.
   - **Explanation**: `resize: both` allows full flexibility, `horizontal` or `vertical` restricts direction, and `none` disables resizing. In interviews, focus on form usability and constraints for better UX.
2. **Question**: What are the possible values for `resize`?
   - **Answer**: `resize` values are `both` (horizontal and vertical), `horizontal`, `vertical`, and `none` (no resizing). Example:
     ```html
     <div class="box" contenteditable></div>
     <style>
     .box { resize: both; width: 200px; height: 100px; }
     </style>
     ```
     *The box is resizable in both directions.*

### 56. What is the `cursor` Property? *(imp)*
The `cursor` property sets the mouse pointer’s style, such as `pointer`, `default`, or `not-allowed`, visually indicating user interactions. It’s critical for intuitive UX.

**Example**:
```html
<button class="btn">Click</button>
<style>
.btn {
  cursor: pointer;
}
</style>
```
*Summary*: Hovering over the button displays a pointer cursor.

**Interview Tip**:
1. **Tip**: Discuss common cursor types and their UX role.
   - **Explanation**: `cursor` signals actions (e.g., clickable, disabled, draggable) to users, with values like `pointer` for buttons or `not-allowed` for disabled states. In interviews, focus on accessibility and custom cursor designs.
2. **Question**: What are common `cursor` values?
   - **Answer**: Common values include `pointer` (for clickable elements), `default` (normal arrow), `not-allowed` (disabled), `grab` (draggable), and `text` (editable text). Example:
     ```html
     <div class="disabled">Disabled</div>
     <style>
     .disabled { cursor: not-allowed; }
     </style>
     ```
     *The disabled div shows a not-allowed cursor.*

### 57. What is the `user-select` Property? *(imp)*
The `user-select` property controls text selection behavior, enabling or preventing copying. It’s used for UI control or content protection.

**Example**:
```html
<div class="no-select">No Select</div>
<style>
.no-select {
  user-select: none;
}
</style>
```
*Summary*: The div’s text cannot be selected or copied.

**Interview Tip**:
1. **Tip**: Clarify `user-select` use cases and implications.
   - **Explanation**: `user-select: none` prevents content copying or accidental selection, while `auto` or `text` allows normal selection. In interviews, discuss UX trade-offs, like accessibility concerns.
2. **Question**: When to use `user-select: none`?
   - **Answer**: Use `user-select: none` to prevent text selection on buttons, UI controls, or sensitive content, but use cautiously to maintain accessibility. Example:
     ```html
     <button class="btn">Button</button>
     <style>
     .btn { user-select: none; }
     </style>
     ```
     *The button’s text cannot be selected, keeping the UX clean.*

### 58. What is the `pointer-events` Property? *(imp)*
The `pointer-events` property controls mouse interactions (clicks, hovers), enabling or disabling them. It’s useful for disabled buttons or overlays.

**Example**:
```html
<button class="disabled">Disabled</button>
<style>
.disabled {
  pointer-events: none;
}
</style>
```
*Summary*: The button ignores click or hover events.

**Interview Tip**:
1. **Tip**: Explain `pointer-events` practical uses and limitations.
   - **Explanation**: `pointer-events: none` blocks interactions, ideal for disabled states or overlays, but requires alternative cues for accessibility. In interviews, highlight UI state management and SVG applications.
2. **Question**: What are use cases for `pointer-events: none`?
   - **Answer**: `pointer-events: none` is used for disabled buttons, non-interactive overlays, or specific SVG parts, improving UI control. Example:
     ```html
     <div class="overlay">Overlay</div>
     <style>
     .overlay { pointer-events: none; }
     </style>
     ```
     *Clicks on the overlay pass through to the underlying content.*

### 59. What is the `writing-mode` Property? *(imp)*
The `writing-mode` property sets the text direction and flow, such as horizontal (default) or vertical (e.g., for Asian scripts). It’s used for multilingual layouts or creative typography.  
It controls text orientation and inline/block flow, making it essential for internationalization (i18n) and unique typographic designs.

**Example**:
```html
<div class="text">Vertical Text</div>
<style>
.text {
  writing-mode: vertical-rl;
}
</style>
```
*Summary*: The text flows vertically from right to left.

**Interview Tip**:
1. **Tip**: Discuss `writing-mode` use cases and its role in i18n.
   - **Explanation**: `writing-mode` supports scripts like Chinese or Japanese with vertical text flow and is used for vertical menus or creative typography. In interviews, focus on multilingual support and browser compatibility.
2. **Question**: Why is `writing-mode` important for multilingual websites?
   - **Answer**: `writing-mode` is crucial for multilingual websites as it supports vertical text flow for scripts like Chinese or Japanese, ensuring cultural accuracy and readability. Example:
     ```html
     <p class="japanese">日本語</p>
     <style>
     .japanese { writing-mode: vertical-rl; }
     </style>
     ```
     *Japanese text displays correctly in a vertical layout.*

### 60. What is the `text-overflow` Property? *(imp)*
The `text-overflow` property handles truncated text, applying effects like ellipsis (...) or clipping when text overflows its container. It ensures a clean UI appearance.

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
*Summary*: Long text truncates with an ellipsis in a 100px container.

**Interview Tip**:
1. **Tip**: Explain `text-overflow` requirements and UI impact.
   - **Explanation**: `text-overflow` requires `overflow: hidden` and `white-space: nowrap` to work, making it ideal for tooltips or table cells with long text. In interviews, focus on responsive design and accessibility.
2. **Question**: What are prerequisites for `text-overflow` to work?
   - **Answer**: `text-overflow` requires the container to have `overflow: hidden` and `white-space: nowrap` to truncate text properly. Example:
     ```html
     <div class="title">Long Title Text</div>
     <style>
     .title { width: 150px; white-space: nowrap; overflow: hidden; text-overflow: clip; }
     </style>
     ```
     *The text is clipped without an ellipsis.*

### 61. What is the `content-visibility` Property? *(imp)*
The `content-visibility` property optimizes rendering by allowing the browser to skip off-screen content (e.g., with `auto`), improving performance on long pages or complex DOMs. It’s ideal for performance-critical applications.  
It enables lazy rendering to reduce initial load times, but careful implementation is needed to avoid accessibility or visibility issues.

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
*Summary*: Off-screen sections skip rendering, boosting performance.

**Interview Tip**:
1. **Tip**: Highlight `content-visibility` performance benefits and trade-offs.
   - **Explanation**: `content-visibility: auto` skips rendering off-screen content, speeding up page loads, but `contain-intrinsic-size` is needed to prevent layout jumps. In interviews, emphasize performance optimization and edge cases.
2. **Question**: Why use `content-visibility` for performance?
   - **Answer**: `content-visibility: auto` allows browsers to skip unnecessary rendering, reducing load times on long pages or heavy DOMs. `contain-intrinsic-size` ensures layout stability. Example:
     ```html
     <div class="article">Long content...</div>
     <style>
     .article { content-visibility: auto; contain-intrinsic-size: 500px; }
     </style>
     ```
     *Off-screen articles aren’t rendered, improving performance.*


### 61. What is the `column-count` Property? *(Important)*
The `column-count` property divides content into a specified number of columns, creating newspaper-style layouts. It’s ideal for responsive multi-column designs, often paired with `column-gap` for spacing.

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
*Summary*: Content splits into 3 columns with 20px gaps.

**Interview Tip**:
1. **Tip**: Explain the use cases and responsiveness of `column-count`.
   - **Explanation**: `column-count` is great for articles, blogs, or galleries, creating organized, readable layouts. Combine with `column-gap` and media queries for responsive designs. In interviews, highlight its role in multi-column layouts and fallback strategies for smaller screens.
2. **Question**: What are the use cases for `column-count`?
   - **Answer**: `column-count` is used for newspaper-style articles, product listings, or text-heavy layouts, making content visually structured and easy to read. Example:
     ```html
     <article class="article">Article text...</article>
     <style>
     .article { column-count: 2; column-gap: 15px; }
     </style>
     ```
     *The article splits into 2 columns, creating a clean layout.*

### 62. What is the `appearance` Property? *(Important)*
The `appearance` property overrides the default look of native UI elements (e.g., buttons, inputs), enabling custom styling. It’s essential for creating consistent, branded form controls.

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
*Summary*: The checkbox’s native style is removed, replaced with a custom light blue square.

**Interview Tip**:
1. **Tip**: Discuss the customization role and browser support for `appearance`.
   - **Explanation**: `appearance: none` removes native styling, allowing full control over form elements, but browser-specific prefixes or inconsistencies may require testing. In interviews, emphasize accessibility and cross-browser compatibility when customizing controls.
2. **Question**: Why use `appearance: none` for form elements?
   - **Answer**: `appearance: none` removes native UI styling, enabling custom designs for inputs, buttons, or checkboxes, ensuring consistent branding across platforms. Example:
     ```html
     <button class="btn">Button</button>
     <style>
     .btn { appearance: none; background: purple; color: white; }
     </style>
     ```
     *The button’s native look is replaced with a custom purple style.*

### 63. What is the `contain` Property? *(Important)*
The `contain` property isolates an element’s rendering, limiting browser calculations to improve performance, especially in complex layouts. It restricts layout, paint, or style changes to the element.  
Values like `strict`, `content`, or `layout` define what’s contained, making it ideal for large DOMs or heavy animations. Careful use is needed to avoid unintended side effects.

**Example**:
```html
<div class="box">Content</div>
<style>
.box {
  contain: content;
}
</style>
```
*Summary*: The box’s rendering is isolated, boosting performance.

**Interview Tip**:
1. **Tip**: Highlight the performance benefits and use cases of `contain`.
   - **Explanation**: `contain` allows browsers to skip unnecessary rendering, optimizing lists, grids, or animated components. In interviews, focus on specific values (`layout`, `paint`, `strict`) and debugging potential issues like overflow or accessibility.
2. **Question**: How does `contain` improve performance?
   - **Answer**: `contain` isolates an element’s layout, paint, or style changes, reducing browser rendering calculations, which speeds up load times in complex pages. Example:
     ```html
     <li class="item">Item</li>
     <style>
     .item { contain: strict; }
     </style>
     ```
     *The list item’s rendering is fully isolated, optimizing performance.*

### 64. What is the `all` Property? *(Important)*
The `all` property resets all CSS properties of an element to `initial`, `inherit`, or `unset`, providing a clean slate. It’s rarely used but helpful for specific reset scenarios.

**Example**:
```html
<div class="reset">Reset</div>
<style>
.reset {
  all: initial;
}
</style>
```
*Summary*: All styles on the div reset to their initial values.

**Interview Tip**:
1. **Tip**: Explain the use cases and cautious use of `all`.
   - **Explanation**: `all: initial` resets styles to browser defaults, but it can be overkill as it affects inherited properties too. In interviews, discuss rare use cases (e.g., third-party widgets) and prefer targeted resets for most scenarios.
2. **Question**: When to use the `all` property?
   - **Answer**: Use `all` when an element needs a completely clean slate, such as for third-party widgets or isolated components, though specific resets are more common. Example:
     ```html
     <div class="widget">Widget</div>
     <style>
     .widget { all: unset; }
     </style>
     ```
     *The widget’s styles are unset, inheriting from its parent.*

### 65. What is the `isolation` Property? *(Important)*
The `isolation` property creates a new stacking context for an element, preventing z-index conflicts or blending issues. It’s useful in complex layouts with overlapping elements.

**Example**:
```html
<div class="box">Content</div>
<style>
.box {
  isolation: isolate;
}
</style>
```
*Summary*: The box’s stacking context is isolated, avoiding z-index issues.

**Interview Tip**:
1. **Tip**: Clarify the role of `isolation` in stacking contexts.
   - **Explanation**: `isolation: isolate` ensures predictable rendering order by creating a new stacking context, useful for modals or nested components. In interviews, focus on z-index debugging and practical applications like overlays.
2. **Question**: Why use `isolation` in complex layouts?
   - **Answer**: `isolation` resolves z-index and blending conflicts by creating a new stacking context, ensuring elements render in a predictable order, especially in overlays or nested components. Example:
     ```html
     <div class="modal">Modal</div>
     <style>
     .modal { isolation: isolate; z-index: 100; }
     </style>
     ```
     *The modal’s stacking context is isolated, controlling overlaps.*

### 66. What is the `clip-path` vs `mask`? *(Important)*
`clip-path` clips an element’s visible area to shapes like circles or polygons, while `mask` applies image-based transparency or gradients for complex effects.  
`clip-path` is suited for simple, sharp cuts, whereas `mask` excels at detailed, texture-based or gradual transparency. Both are popular for creative visuals in modern designs.

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
*Summary*: The box is clipped to a circle; the masked div has image-based transparency.

**Interview Tip**:
1. **Tip**: Differentiate `clip-path` and `mask` use cases and performance.
   - **Explanation**: `clip-path` is fast for geometric shapes, while `mask` is more flexible for complex, image-driven effects like gradients or textures. In interviews, highlight performance considerations and creative applications like image effects.
2. **Question**: When to use `mask` over `clip-path`?
   - **Answer**: Use `mask` for complex transparency or image-based effects, such as gradient fades or textured overlays. `clip-path` is better for simple shapes. Example:
     ```html
     <img class="img" src="image.jpg" alt="Masked">
     <style>
     .img { mask-image: linear-gradient(to bottom, black, transparent); }
     </style>
     ```
     *The image gradually becomes transparent at the bottom.*

### 67. What is the `text-shadow` Property? *(Important)*
The `text-shadow` property adds a shadow or glow effect behind text, enhancing readability or visual appeal. It supports multiple shadows for layered effects.

**Example**:
```html
<h1 class="text">Shadow</h1>
<style>
.text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
```
*Summary*: Text has a dark, blurred shadow behind it.

**Interview Tip**:
1. **Tip**: Discuss styling uses and accessibility for `text-shadow`.
   - **Explanation**: `text-shadow` enhances headings, buttons, or decorative text, but overuse can reduce readability. In interviews, focus on maintaining contrast ratios and creative effects like neon glows.
2. **Question**: What are use cases for `text-shadow`?
   - **Answer**: `text-shadow` is used for readability (e.g., light text on busy backgrounds), emphasis (e.g., headings), or aesthetic effects (e.g., neon glow). Example:
     ```html
     <span class="glow">Glow</span>
     <style>
     .glow { text-shadow: 0 0 10px blue; }
     </style>
     ```
     *Text displays a blue glow effect.*

### 68. What is the `filter` vs `backdrop-filter`? *(Important)*
The `filter` property applies visual effects (e.g., blur, grayscale) to an element’s content, while `backdrop-filter` applies effects to the content behind an element.  
`filter` is used for images or foreground elements, whereas `backdrop-filter` creates glassmorphism or overlay effects, popular in modern UI. Both can be GPU-intensive.

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
*Summary*: The box itself is blurred; the overlay blurs content behind it.

**Interview Tip**:
1. **Tip**: Explain use cases and performance for `filter` and `backdrop-filter`.
   - **Explanation**: `filter` is ideal for images, buttons, or hover effects, while `backdrop-filter` suits frosted-glass effects for modals or nav bars. Both are GPU-heavy, so use sparingly. In interviews, discuss fallbacks and browser support.
2. **Question**: When to use `backdrop-filter` over `filter`?
   - **Answer**: Use `backdrop-filter` when you need effects on content behind an element, like glassmorphism for modals or nav bars. `filter` is for the element’s own appearance. Example:
     ```html
     <div class="modal">Modal</div>
     <style>
     .modal { backdrop-filter: grayscale(50%); }
     </style>
     ```
     *Content behind the modal appears grayscale.*

### 69. What is the `shape-margin` Property? *(Important)*
The `shape-margin` property adds extra space around a `shape-outside` shape, fine-tuning text wrapping in creative layouts. It enhances the visual flow of text around floated elements.

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
*Summary*: Text wraps around the circular image with a 10px margin.

**Interview Tip**:
1. **Tip**: Clarify the role of `shape-margin` with `shape-outside`.
   - **Explanation**: `shape-margin` adds a buffer around `shape-outside` shapes, making text wrapping cleaner and more polished. In interviews, focus on magazine-style layouts and limitations like float dependency.
2. **Question**: How does `shape-margin` enhance `shape-outside`?
   - **Answer**: `shape-margin` adds extra space around a `shape-outside` shape, ensuring clean and readable text wrapping, especially for complex shapes. Example:
     ```html
     <div class="shape">Shape</div>
     <p>Text...</p>
     <style>
     .shape { float: left; shape-outside: polygon(0 0, 100% 0, 0 100%); shape-margin: 15px; }
     </style>
     ```
     *Text wraps around the triangular shape with a 15px margin.*

### 70. What is the `scroll-snap` Property? *(Important)*
The `scroll-snap` property enables scrolling to snap to predefined points, creating smooth, controlled navigation for carousels or full-screen sections. It enhances user experience.  
Properties like `scroll-snap-type` (defines snap behavior) and `scroll-snap-align` (sets snap points) provide precise control. It’s well-supported in modern browsers.

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
*Summary*: Scrolling snaps to the start of each section.

**Interview Tip**:
1. **Tip**: Explain the mechanics and UX benefits of `scroll-snap`.
   - **Explanation**: `scroll-snap-type` sets the snapping behavior (mandatory or proximity), and `scroll-snap-align` defines snap points. It’s ideal for carousels, galleries, or vertical navigation. In interviews, highlight accessibility and fallback options.
2. **Question**: What are use cases for `scroll-snap`?
   - **Answer**: `scroll-snap` is used for image carousels, full-screen sections, or mobile galleries, providing smooth and predictable scrolling. Example:
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
     *Images in the carousel snap to the center.*

### 71. What is the `accent-color` Property? *(Important)*
The `accent-color` property customizes the default highlight color of form elements (e.g., checkboxes, radio buttons), improving UI consistency and branding. It’s valuable for accessibility.

**Example**:
```html
<input type="checkbox" class="input">
<style>
.input {
  accent-color: purple;
}
</style>
```
*Summary*: The checkbox’s highlight color is purple.

**Interview Tip**:
1. **Tip**: Discuss the role of `accent-color` in accessibility and branding.
   - **Explanation**: `accent-color` aligns form control highlights with a site’s theme, reducing the need for complex CSS while maintaining accessibility. In interviews, focus on consistency across browsers and its impact on user experience.
2. **Question**: Why use `accent-color` for form elements?
   - **Answer**: `accent-color` easily customizes highlight colors for checkboxes, radio buttons, or range sliders, ensuring UI consistency and accessibility without heavy styling. Example:
     ```html
     <input type="radio" class="radio">
     <style>
     .radio { accent-color: teal; }
     </style>
     ```
     *The radio button’s highlight is teal, aligned with the theme.*


### 71. What is the `image-rendering` Property? *(Important)*
The `image-rendering` property controls the quality of image scaling, specifying how browsers handle resizing or rendering images, such as pixelated or smooth outputs.

**Example**:
```html
<img src="pixel-art.jpg" class="img">
<style>
.img {
  image-rendering: pixelated;
}
</style>
```
*Summary*: The image scales with a pixelated look, ideal for pixel art.

**Interview Tip**:
1. **Tip**: Explain the values and use cases of `image-rendering`.
   - **Explanation**: `image-rendering: pixelated` preserves crisp edges for low-resolution images or pixel art, while `auto` or `smooth` prioritizes high-quality scaling. In interviews, focus on image optimization and maintaining visual fidelity for specific use cases.
2. **Question**: When should you use `image-rendering: pixelated`?
   - **Answer**: Use `image-rendering: pixelated` for low-resolution images or pixel art, such as in retro games or pixelated icons, to maintain sharp, crisp edges during scaling. Example:
     ```html
     <img src="icon.png" class="icon">
     <style>
     .icon { image-rendering: pixelated; width: 100px; }
     </style>
     ```
     *The icon retains its pixelated appearance when scaled.*

### 72. What is the `touch-action` Property? *(Important)*
The `touch-action` property controls touch interactions, such as panning or zooming, optimizing mobile gestures and preventing unwanted browser behaviors. It’s crucial for enhancing mobile user experience.  
Values like `pan-x`, `pan-y`, or `none` allow or block specific touch actions, enabling smooth scrolling or custom gestures in applications like carousels or swipeable interfaces.

**Example**:
```html
<div class="element">Swipeable</div>
<style>
.element {
  touch-action: pan-y;
}
</style>
```
*Summary*: The element allows only vertical panning, blocking horizontal touch actions.

**Interview Tip**:
1. **Tip**: Explain the role of `touch-action` in mobile optimization.
   - **Explanation**: `touch-action` prevents unwanted browser behaviors (e.g., default zoom) and prioritizes custom gestures like swiping or scrolling. In interviews, emphasize its use in mobile apps and performance benefits.
2. **Question**: Why use `touch-action` in mobile applications?
   - **Answer**: `touch-action` improves mobile UX by controlling touch gestures, preventing default browser actions, and ensuring smooth interactions, such as in carousels or scrollable lists. Example:
     ```html
     <div class="carousel">Images...</div>
     <style>
     .carousel { touch-action: pan-x; }
     </style>
     ```
     *The carousel allows horizontal swiping while keeping vertical scrolling free.*

### 73. What is the `accent-color` Property? *(Important)*
The `accent-color` property customizes the default highlight color of form elements like checkboxes, radio buttons, and range sliders, ensuring UI consistency and branding alignment.

**Example**:
```html
<input type="checkbox" class="input">
<style>
.input {
  accent-color: purple;
}
</style>
```
*Summary*: The checkbox’s highlight appears in purple, matching the theme.

**Interview Tip**:
1. **Tip**: Explain the branding and accessibility benefits of `accent-color`.
   - **Explanation**: `accent-color` aligns form controls with a site’s theme, reducing the need for custom CSS, and ensures consistent visuals for accessibility. In interviews, focus on browser support and fallback strategies.
2. **Question**: How does `accent-color` improve form styling?
   - **Answer**: `accent-color` simplifies customization of form element highlight colors, ensuring UI consistency and accessibility without complex styling. Example:
     ```html
     <input type="range" class="slider">
     <style>
     .slider { accent-color: teal; }
     </style>
     ```
     *The range slider’s thumb and track align with a teal color scheme.*

### 74. What is the `caret-color` Property? *(Important)*
The `caret-color` property sets the color of the text cursor (caret) in input fields or editable elements, enhancing user experience and aligning with branding.

**Example**:
```html
<input type="text" class="input">
<style>
.input {
  caret-color: red;
}
</style>
```
*Summary*: The input field’s cursor appears in red, improving visibility.

**Interview Tip**:
1. **Tip**: Explain the UX and accessibility benefits of `caret-color`.
   - **Explanation**: `caret-color` improves cursor visibility and supports branding, especially in low-contrast themes, while providing clear visual cues for accessibility. In interviews, highlight its role in form UX and edge cases.
2. **Question**: Why use `caret-color` in forms?
   - **Answer**: `caret-color` makes the cursor visually distinct, improving readability and branding consistency, particularly in dark themes or custom forms. Example:
     ```html
     <div contenteditable class="editor">Edit me</div>
     <style>
     .editor { caret-color: blue; }
     </style>
     ```
     *The editable div’s cursor is highlighted in blue.*

### 75. What is the `overscroll-behavior` Property? *(Important)*
The `overscroll-behavior` property controls browser behavior at scroll boundaries, such as preventing pull-to-refresh or scroll chaining. It refines the user experience in scrollable areas.  
Values like `contain`, `none`, or `auto` allow or block specific scroll effects, making it ideal for modals or nested scroll areas where precise control is needed.

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
*Summary*: Scroll ends in the container don’t trigger parent scrolling.

**Interview Tip**:
1. **Tip**: Explain the UX benefits and use cases of `overscroll-behavior`.
   - **Explanation**: `overscroll-behavior: contain` prevents unwanted scroll effects like browser bounce, ideal for modals or nested scrollbars. In interviews, focus on mobile UX and handling edge cases.
2. **Question**: When should you use `overscroll-behavior: contain`?
   - **Answer**: Use `overscroll-behavior: contain` to limit scroll effects to a container, such as in modals, sidebars, or nested lists, preventing parent or browser scrolling. Example:
     ```html
     <div class="modal">Modal content...</div>
     <style>
     .modal { overscroll-behavior: contain; overflow-y: auto; }
     </style>
     ```
     *The modal’s scroll doesn’t affect the parent page.*

### 76. What is the `place-content` Property? *(Important)*
The `place-content` shorthand property aligns and justifies content in Flexbox or Grid layouts, combining `align-content` and `justify-content`. It simplifies layout code for centering or spacing.

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
*Summary*: Grid items are centered both vertically and horizontally.

**Interview Tip**:
1. **Tip**: Explain the efficiency and use cases of `place-content`.
   - **Explanation**: `place-content` sets content alignment in one line, reducing code verbosity, and is perfect for centering or spacing in Flexbox or Grid layouts. In interviews, highlight its shorthand benefits.
2. **Question**: How does `place-content` simplify Flexbox layouts?
   - **Answer**: `place-content` combines `align-content` and `justify-content`, enabling quick alignment (e.g., centering) in Flexbox or Grid, making code cleaner and more maintainable. Example:
     ```html
     <div class="flex">
       <div>Item</div>
     </div>
     <style>
     .flex { display: flex; place-content: space-between center; }
     </style>
     ```
     *Items are spaced horizontally and centered vertically.*

### 77. What is the `text-align-last` Property? *(Important)*
The `text-align-last` property aligns the last line of justified text, such as to the left, right, or center, providing refined control over typography.

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
*Summary*: The text is justified, but its last line is centered.

**Interview Tip**:
1. **Tip**: Explain the typography role and edge cases of `text-align-last`.
   - **Explanation**: `text-align-last` refines the last line of justified text, useful for articles or books, though browser support may vary. In interviews, focus on typography best practices and compatibility.
2. **Question**: When should you use `text-align-last`?
   - **Answer**: Use `text-align-last` when you need specific alignment for the last line of justified text, such as in articles or long-form content, to enhance readability and aesthetics. Example:
     ```html
     <article class="article">Article text...</article>
     <style>
     .article { text-align: justify; text-align-last: left; }
     </style>
     ```
     *The article’s last line is left-aligned, giving a clean look.*

### 78. What is CSS Performance Optimization? *(Important)*
CSS performance optimization improves browser rendering and load times through techniques like minifying CSS, avoiding complex selectors, using `will-change` for animations, and lazy-loading non-critical CSS.  
It’s critical for large-scale websites to ensure fast page loads and smooth interactions, but over-optimization can increase code complexity. Tools like Lighthouse are valuable for analysis.

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
*Summary*: The box’s animation is optimized using `will-change`.

**Interview Tip**:
1. **Tip**: Explain CSS optimization techniques and their trade-offs.
   - **Explanation**: Minification reduces file size, simple selectors minimize reflows, and `will-change` smooths animations. In interviews, discuss tools like Lighthouse or PurifyCSS and real-world optimization scenarios.
2. **Question**: What are key techniques for CSS performance optimization?
   - **Answer**: Key techniques include: 1) Minifying CSS to reduce file size, 2) Avoiding complex selectors (e.g., nested pseudo-classes) to lower specificity, 3) Using `will-change` for animations, 4) Lazy-loading non-critical CSS via media queries or dynamic imports. Example:
     ```html
     <div class="card">Card</div>
     <style>
     .card { all: unset; } /* Reset styles */
     @media (min-width: 768px) { .card { background: blue; } } /* Lazy-load */
     </style>
     ```
     *The card’s CSS is optimized and responsive.*

### 79. What is the `line-clamp` Property? *(Important)*
The `line-clamp` property truncates text to a specified number of lines, adding an ellipsis (...) for overflow, making it ideal for compact UI designs.

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
*Summary*: Text is limited to two lines with an ellipsis for overflow.

**Interview Tip**:
1. **Tip**: Explain the setup and use cases of `line-clamp`.
   - **Explanation**: `line-clamp` controls long text in cards, previews, or tooltips, but requires WebKit-specific properties (`-webkit-box`) in some browsers. In interviews, discuss cross-browser support and alternatives like `text-overflow`.
2. **Question**: When should you use `line-clamp`?
   - **Answer**: Use `line-clamp` to limit text to a fixed number of lines, such as in article previews, product descriptions, or compact UIs, providing a clean look with an ellipsis. Example:
     ```html
     <p class="preview">Short preview text...</p>
     <style>
     .preview { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
     </style>
     ```
     *The preview text is truncated to three lines.*

### 80. What is the `forced-color-adjust` Property? *(Important)*
The `forced-color-adjust` property controls an element’s color behavior in forced color modes (e.g., Windows High Contrast Mode), ensuring accessibility compliance.

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
*Summary*: The button’s custom blue background persists in forced color mode.

**Interview Tip**:
1. **Tip**: Explain the accessibility role of `forced-color-adjust`.
   - **Explanation**: `forced-color-adjust: none` preserves custom colors, while `auto` prioritizes system colors, ensuring readability in high-contrast modes. In interviews, emphasize accessibility standards and testing.
2. **Question**: Why use `forced-color-adjust`?
   - **Answer**: `forced-color-adjust` ensures UI elements remain readable and consistent in high-contrast modes, supporting accessibility for users with visual impairments. Example:
     ```html
     <div class="highlight">Highlight</div>
     <style>
     .highlight { forced-color-adjust: auto; }
     </style>
     ```
     *The div adapts to system high-contrast colors.*

### 81. What is the `hyphens` Property? *(Important)*
The `hyphens` property controls automatic hyphenation of text, breaking words at line ends for better justification, particularly in narrow containers.

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
*Summary*: Long words are automatically hyphenated for clean line breaks.

**Interview Tip**:
1. **Tip**: Explain the typography benefits and limitations of `hyphens`.
   - **Explanation**: `hyphens: auto` improves text flow and readability, but support varies by browser and language. In interviews, focus on typography refinement and fallback strategies for unsupported cases.
2. **Question**: When should you use `hyphens` in typography?
   - **Answer**: Use `hyphens` for narrow columns or justified text to cleanly break words, such as in articles or mobile layouts, enhancing readability. Example:
     ```html
     <article class="article">Long content...</article>
     <style>
     .article { hyphens: auto; text-align: justify; }
     </style>
     ```
     *The article’s words are hyphenated, making justified text look clean.*