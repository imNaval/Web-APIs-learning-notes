# Canvas API Notes

## Canvas API Kya Hai Bhai?
Canvas API ek HTML5 ka JavaScript API hai jo tujhe `<canvas>` element ke through 2D graphics aur animations banane deta hai. Soch, ye ek blank khaali kagaz jaisa hai jisme tu kuch bhi draw kar sakta hai—lines, shapes, text, images, ya full-on games! Ye pixel-level control deta hai, matlab tu har chhote se chhota pixel pe kaam kar sakta hai. Web developers isse games, charts, image editing, ya fancy UI banane ke liye use karte hain.

### Kyun Seekhein Canvas API?
- **Bohot Scope Hai**: Shapes, text, images, animations—sab kuch bana sakta hai.
- **Speedy Hai**: Browser ke graphics engine se directly kaam karta hai, to fast hai.
- **Animations**: `requestAnimationFrame` se smooth animations banaye ja sakte hain.
- **Pixel Power**: Har pixel ko change kar sakta hai, jaise filters laga sakta hai.
- **Sab Browser Mein Chalega**: No plugins chahiye, modern browsers mein sab supported hai.

### Kahan Use Hota Hai?
- **Games**: Snake, Tetris, ya chhote 2D games.
- **Charts**: Bar graphs, line charts, ya data visualizations.
- **Image Editing**: Grayscale, blur, ya crop jaisa kaam.
- **Interactive UI**: Custom buttons, animations, ya drawing tools.

### Canvas vs SVG
- **Canvas**: Pixel-based hai (jaise photo), har baar redraw karna padta hai, animations ke liye fast hai.
- **SVG**: Vector-based hai (jaise drawing), DOM ka part hai, individual elements ko change kar sakte ho, scalable graphics ke liye better hai.

## Canvas Ka Setup Kaise Karein?
Canvas use karne ke liye pehle HTML mein `<canvas>` element add karna hai, fir JavaScript se uspe kaam shuru karenge.

### HTML Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Canvas API Demo</title>
</head>
<body>
    <canvas id="myCanvas" width="500" height="300"></canvas>
    <script src="script.js"></script>
</body>
</html>
```
- **Attributes**:
  - `id`: Taaki JavaScript mein canvas ko select kar sakein.
  - `width` aur `height`: Canvas ka size pixels mein set karte hain (jaise 500x300).
- **Dhyan Rakh**: Size ke liye `width` aur `height` attributes use karo, CSS se mat karo. CSS se size badalne se graphics stretch ya blurry ho sakte hain.

### JavaScript Mein Canvas Ko Access Karna
```javascript
// Canvas ko select karo
const canvas = document.getElementById('myCanvas');
// 2D context lo
const ctx = canvas.getContext('2d');
```
- `getContext('2d')` ek 2D context deta hai jisme saare drawing ke methods hote hain.
- Agar `getContext('2d')` `null` return kare, to ya browser Canvas support nahi karta, ya canvas ka ID galat hai.

### Pehla Drawing Example
Chalo, ek simple blue rectangle banate hain taaki flow samajh aaye:
```javascript
ctx.fillStyle = 'blue'; // Color set karo
ctx.fillRect(50, 50, 100, 60); // Rectangle at (50, 50), width 100, height 60
```
- `fillStyle`: Shape ke andar ka color set karta hai.
- `fillRect(x, y, width, height)`: Ek filled rectangle banata hai.

## Common Canvas API Methods Aur Properties

### 1. Shapes Draw Karna
Canvas API mein shapes banane ke bohot saare methods hain, rectangles se lekar complex paths tak.

#### Rectangles
- `fillRect(x, y, width, height)`: Bhara hua rectangle banata hai.
- `strokeRect(x, y, width, height)`: Rectangle ka outline draw karta hai.
- `clearRect(x, y, width, height)`: Canvas ke ek hisse ko erase karta hai (transparent ho jata hai).

**Example: Rectangle with Outline**
```javascript
ctx.fillStyle = 'lightblue';
ctx.fillRect(50, 50, 100, 60);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.strokeRect(50, 50, 100, 60);
```

#### Paths aur Lines
- `beginPath()`: Naya path shuru karta hai, purana path clear ho jata hai.
- `moveTo(x, y)`: Pen ko ek point pe le jata hai bina draw kiye.
- `lineTo(x, y)`: Current point se naye point tak line draw karta hai.
- `closePath()`: Path ko band karta hai (last point ko first se jodta hai, optional).
- `fill()`: Path ke andar color bhar deta hai.
- `stroke()`: Path ka outline draw karta hai.

**Example: Triangle Banayein**
```javascript
ctx.beginPath();
ctx.moveTo(100, 50); // Start at (100, 50)
ctx.lineTo(150, 150); // Line to (150, 150)
ctx.lineTo(50, 150); // Line to (50, 150)
ctx.closePath(); // Triangle band karo
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
```

#### Circles aur Arcs
- `arc(x, y, radius, startAngle, endAngle, anticlockwise)`: Circle ya arc banata hai.
  - `(x, y)`: Circle ka center.
  - `radius`: Circle ka size.
  - `startAngle` aur `endAngle`: Angles radians mein (0 se `2 * Math.PI` tak full circle ke liye).
  - `anticlockwise`: Agar `true`, to ulta direction mein draw karta hai.

**Example: Poora Circle**
```javascript
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI); // Full circle
ctx.fillStyle = 'red';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
```

### 2. Styling Kaise Karein?
Shapes, lines, aur text ko style karne ke liye yeh properties hain:

- `fillStyle`: Shape ke andar ka color, gradient, ya pattern (jaise `'blue'`, `'rgba(255, 0, 0, 0.5)'`).
- `strokeStyle`: Outline ka color, gradient, ya pattern.
- `lineWidth`: Line ki motai (pixels mein).
- `lineCap`: Line ke ends ka style (`butt`, `round`, `square`).
- `lineJoin`: Line ke corners ka style (`miter`, `round`, `bevel`).
- `font`: Text ke liye font (jaise `'20px Arial'`).
- `textAlign`: Text ka alignment (`left`, `center`, `right`).
- `textBaseline`: Text ka vertical alignment (`top`, `middle`, `bottom`).

**Example: Thoda Stylish Text**
```javascript
ctx.font = '24px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'center';
ctx.fillText('Hello, Canvas!', 250, 150); // Center mein at (250, 150)
```

**Example: Gradient Wala Rectangle**
```javascript
const gradient = ctx.createLinearGradient(50, 50, 150, 150);
gradient.addColorStop(0, 'blue');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(50, 50, 100, 60);
```

### 3. Transformations
Transformations se tu canvas ke coordinate system ko move, rotate, ya scale kar sakta hai.

- `translate(x, y)`: Canvas ke origin (0,0) ko `(x, y)` pe shift karta hai.
- `rotate(angle)`: Canvas ko origin ke around rotate karta hai (angle radians mein).
- `scale(x, y)`: Canvas ko x aur y direction mein zoom in/out karta hai.
- `save()`: Current state (styles, transformations) save karta hai.
- `restore()`: Last saved state wapas laata hai.

**Example: Rotate Karke Rectangle**
```javascript
ctx.save(); // State save karo
ctx.translate(100, 100); // Origin shift
ctx.rotate(Math.PI / 4); // 45 degree rotate
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 50, 50);
ctx.restore(); // Original state wapas
```

**Tip**: `save()` aur `restore()` use karo taaki transformations baaki drawings pe asar na karein.

### 4. Images Kaise Add Karein?
Canvas pe images `drawImage` method se draw kar sakte ho.

- `drawImage(image, x, y)`: Image ko `(x, y)` pe draw karta hai.
- `drawImage(image, x, y, width, height)`: Image ko scale karke draw karta hai.
- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`: Image ka ek part crop karke draw karta hai.

**Example: Image Draw Karna**
```javascript
const img = new Image();
img.src = 'example.jpg';
img.onload = () => {
    ctx.drawImage(img, 50, 50, 100, 100); // Draw at (50, 50), size 100x100
};
```

### 5. Animations Kaise Banayein?
Animations ke liye canvas ko bar-bar clear karke, state update karke, aur naye graphics draw karte hain.

- `requestAnimationFrame(callback)`: Next frame ko schedule karta hai, smooth animations ke liye (lagbhag 60 FPS).
- `clearRect(0, 0, canvas.width, canvas.height)`: Poora canvas clear karta hai.

**Example: Chalti Hui Rectangle**
```javascript
let x = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas clear
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, 50, 50, 50); // Rectangle draw
    x += 2; // Right move
    if (x > canvas.width) x = 0; // Reset position
    requestAnimationFrame(animate); // Loop
}
animate();
```

**Animations Ke Steps**:
1. Canvas clear karo taaki purani drawings overlap na karein.
2. Variables update karo (jaise position, color).
3. Updated graphics draw karo.
4. `requestAnimationFrame` se loop chalao.

## Interview Ke Liye Questions Aur Tips

1. **Canvas API Kya Hai Aur Iska Use Kya Hai?**
   - Canvas API HTML5 ka ek API hai jo `<canvas>` element ke through 2D graphics banata hai. Games, charts, image editing, aur interactive UIs ke liye use hota hai.

2. **Canvas Aur SVG Mein Kya Farak Hai?**
   - Canvas pixel-based hai, redraw karna padta hai, animations ke liye fast hai. SVG vector-based hai, DOM ka part hai, elements ko individually modify kar sakte ho, aur scalable hai.

3. **Canvas Mein Animation Kaise Banate Hain?**
   - `requestAnimationFrame` se loop chalate hain. Canvas ko `clearRect` se clear karte hain, state update karte hain, graphics redraw karte hain.

4. **Canvas API Ki Kami Kya Hai?**
   - Pixel-based hai, to high-res displays pe blurry ho sakta hai.
   - Accessibility kam hai (screen readers ke liye extra kaam chahiye).
   - 3D ke liye WebGL chahiye.
   - Har update ke liye poora canvas redraw karna padta hai.

5. **High-Resolution Displays (Retina) Ke Liye Kya Karna Chahiye?**
   - Device pixel ratio ke hisaab se canvas size set karo:
     ```javascript
     const dpr = window.devicePixelRatio;
     canvas.width = 500 * dpr;
     canvas.height = 300 * dpr;
     ctx.scale(dpr, dpr);
     canvas.style.width = '500px';
     canvas.style.height = '300px';
     ```

## Project Example: Simple Drawing App
Chalo, ek mast drawing app banate hain jisme tu mouse se draw kar sake, color change kar sake, aur canvas clear kar sake.

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Drawing App</title>
    <style>
        canvas { border: 1px solid black; }
        .controls { margin-top: 10px; }
    </style>
</head>
<body>
    <canvas id="myCanvas" width="500" height="300"></canvas>
    <div class="controls">
        <input type="color" id="colorPicker" value="#000000">
        <button onclick="clearCanvas()">Clear Canvas</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js)
```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
```

### Ye Kaise Kaam Karta Hai?
- **Mouse Events**: `mousedown` se drawing shuru, `mousemove` se lines draw hoti hain, `mouseup` ya `mouseout` se drawing rukti hai.
- **Color Picker**: Line ka color set karta hai.
- **Clear Button**: `clearRect` se poora canvas reset ho jata hai.
- **Styling**: `lineCap` aur `lineJoin` ko `round` kiya taaki lines smooth lagen.

### Aur Kya Add Kar Sakte Ho?
- Line ki thickness ke liye slider daalo (`ctx.lineWidth`).
- Shapes (jaise rectangle, circle) draw karne ka feature add karo.
- Undo feature ke liye drawing states ko array mein save karo.
- Drawing ko image ke roop mein save karo using `canvas.toDataURL()`.

## Practice Ke Liye Problems
1. **Bouncing Ball**: Ek ball banao jo canvas ke andar bounce kare.
2. **Bar Chart**: Ek array se dynamic bar chart banao, hover effect ke saath.
3. **Image Filter**: Ek image load karke uspe grayscale filter lagao (`ctx.getImageData` use karo).
4. **Simple Game**: Snake ya Pong jaisa chhota game banao.

## Mastery Ke Liye Tips
- **Practice Karo**: Alag-alag shapes, transformations, aur animations try karo.
- **Debugging**: Coordinates ya state check karne ke liye `console.log` use karo.
- **Performance**: Sirf zaroori area clear karo, poora canvas clear karne se bacho.
- **Accessibility**: Screen readers ke liye ARIA attributes ya fallback content add karo.
- **High-Res Displays**: `devicePixelRatio` ka dhyan rakho.

## Resources
- MDN Web Docs: [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- W3Schools: [HTML Canvas Tutorial](https://www.w3schools.com/html/html5_canvas.asp)
- Canvas Cheat Sheet: [HTML5 Canvas Cheat Sheet](https://www.html5canvastutorials.com/)

## SVG (Scalable Vector Graphics)

### SVG Kya Hai Bhai?
SVG (Scalable Vector Graphics) ek XML-based format hai jo 2D vector graphics banane ke liye use hota hai. Canvas ke ulat, SVG vector-based hai, matlab graphics mathematical coordinates se bante hain aur zoom karne pe bhi quality kharab nahi hoti. SVG elements DOM ka part hote hain, to tu inhe JavaScript se manipulate aur CSS se style kar sakta hai, bilkul HTML elements ki tarah.

### SVG Kyun Use Karein?
- **Scalable Hai**: Chahe kitna bhi zoom karo, graphics crisp rahenge, perfect for Retina displays.
- **DOM Mein Hai**: SVG elements ko JavaScript se change kar sakte ho, CSS se style kar sakte ho.
- **Interactive**: Click, hover jaise events easily add kar sakte ho.
- **Accessible**: Text descriptions aur ARIA attributes daal sakte ho screen readers ke liye.
- **Chhota Size**: Icons ya logos ke liye file size chhota hota hai.

### Kahan Use Hota Hai?
- **Icons aur Logos**: Scalable icons jo har device pe sharp dikhein.
- **Charts aur Graphs**: Interactive visualizations jisme hover effects ho.
- **Animations**: CSS ya JavaScript se animated infographics.
- **UI Elements**: Custom buttons, shapes, ya patterns.
- **Maps**: Clickable regions wale interactive maps.

### SVG vs Canvas
- **SVG**:
  - Vector-based, zoom karne pe quality waisi hi.
  - DOM ka part, to har element ko alag se style ya change kar sakte ho.
  - Static ya thodi interactive graphics (jaise icons, charts) ke liye best.
  - Complex animations ya bohot saare elements ho to thoda slow ho sakta hai DOM ki wajah se.
- **Canvas**:
  - Pixel-based, har baar redraw karna padta hai.
  - Real-time animations aur complex scenes (jaise games) ke liye fast.
  - Accessibility kam hai aur high-res displays pe thodi dikkat.
- **Kab Kya Use Karein**:
  - SVG for scalable, interactive, ya DOM-based graphics.
  - Canvas for high-performance animations ya pixel-level kaam.

### SVG Ka Basic Setup
SVG graphics `<svg>` element ke andar banaye jate hain. Isme shapes, paths, aur text daal sakte ho.

**Example: Simple Rectangle**
```html
<svg width="200" height="100">
    <rect x="10" y="10" width="100" height="50" fill="blue" stroke="black" stroke-width="2" />
</svg>
```
- `<svg>`: SVG graphics ka container, jisme `width` aur `height` set karte hain.
- `<rect>`: Rectangle banata hai, attributes:
  - `x`, `y`: Top-left corner ke coordinates.
  - `width`, `height`: Size.
  - `fill`: Andar ka color.
  - `stroke`, `stroke-width`: Outline ka color aur motai.

### Common SVG Elements
SVG mein alag-alag elements hote hain shapes, text, aur paths ke liye.

#### Shapes
- `<rect>`: Rectangle (attributes: `x`, `y`, `width`, `height`, `rx`, `ry` for rounded corners).
- `<circle>`: Circle (attributes: `cx`, `cy` for center, `r` for radius).
- `<ellipse>`: Ellipse (attributes: `cx`, `cy`, `rx`, `ry` for radii).
- `<line>`: Line (attributes: `x1`, `y1`, `x2`, `y2` for start aur end points).
- `<polyline>`: Kai lines ek saath (attribute: `points` for coordinates).
- `<polygon>`: Band shape with multiple points (attribute: `points`).

**Example: Circle**
```html
<svg width="200" height="200">
    <circle cx="100" cy="100" r="50" fill="red" stroke="black" stroke-width="2" />
</svg>
```

#### Paths
- `<path>`: Complex shapes banane ke liye, `d` attribute mein commands daalte hain (jaise `M` for move, `L` for line, `A` for arc).
- Example:
  ```html
  <svg width="200" height="200">
      <path d="M10 10 L100 100 L10 100 Z" fill="yellow" stroke="black" />
  </svg>
  ```
  - `M10 10`: (10, 10) pe jao.
  - `L100 100`: (100, 100) tak line draw karo.
  - `L10 100`: (10, 100) tak line.
  - `Z`: Path band karo (triangle bana).

#### Text
- `<text>`: Text draw karta hai (attributes: `x`, `y`, `font-size`, `fill`).
- Example:
  ```html
  <svg width="200" height="100">
      <text x="50" y="50" font-size="20" fill="black">Hello, SVG!</text>
  </svg>
  ```

### SVG Ko Style Kaise Karein?
SVG elements ko style karne ke teen tareeke:
- **Attributes**: `fill`, `stroke`, `stroke-width`, etc.
- **CSS**: Inline `<style>` ya external stylesheet.
- **Inline Styles**: Element pe `style` attribute.

**Example: CSS Styling**
```html
<svg width="200" height="100">
    <style>
        .my-rect { fill: lightblue; stroke: black; stroke-width: 2; }
    </style>
    <rect class="my-rect" x="10" y="10" width="100" height="50" />
</svg>
```

### JavaScript Se Interactivity
SVG elements DOM ka part hote hain, to JavaScript se inhe change kar sakte ho.

**Example: Circle Ka Color Change on Click**
```html
<svg width="200" height="200">
    <circle id="myCircle" cx="100" cy="100" r="50" fill="red" />
</svg>
<script>
    const circle = document.getElementById('myCircle');
    circle.addEventListener('click', () => {
        circle.setAttribute('fill', circle.getAttribute('fill') === 'red' ? 'blue' : 'red');
    });
</script>
```

### SVG Mein Animations
SVG animations ke teen tareeke:
- **CSS Animations**: `transform`, `fill`, ya `opacity` jaise properties animate karo.
- **SMIL**: SVG ke built-in animation elements jaise `<animate>`.
- **JavaScript**: Attributes ko dynamically change karo.

**Example: CSS Animation**
```html
<svg width="200" height="200">
    <style>
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
    </style>
    <circle class="pulse" cx="100" cy="100" r="50" fill="green" />
</svg>
```

### Interview Ke Liye Questions
1. **SVG Kya Hai Aur Canvas Se Kaise Alag Hai?**
   - SVG vector-based graphics hai jo DOM ka part hai, scalable aur manipulable. Canvas pixel-based hai, redraw chahiye, aur animations ke liye fast hai.
2. **SVG Kab Use Karna Chahiye?**
   - Scalable graphics, interactive elements, ya DOM integration ke liye SVG use karo (jaise charts, icons). Canvas high-performance tasks jaise games ke liye better hai.
3. **SVG Elements Ko Kaise Animate Karte Hain?**
   - CSS animations, SMIL, ya JavaScript se `transform`, `fill`, ya `opacity` jaise attributes change karo.
4. **SVG Ke Accessibility Benefits Kya Hain?**
   - SVG mein text content aur ARIA attributes daal sakte ho, jo screen readers ke liye Canvas se better hai.

### Practice Problems
1. Ek interactive SVG chart banao jisme bars pe hover effects ho.
2. Ek animated SVG logo banao jo click pe scale aur rotate kare.
3. `<path>` element se complex shape (jaise star) draw karo.
4. SVG aur Canvas ko combine karo ek project mein (jaise SVG for UI, Canvas for game).

### Mastery Ke Liye Tips
- **Tools**: Inkscape ya Adobe Illustrator se SVG banao, fir SVGO se optimize karo.
- **Performance**: SVG elements ki sankhya kam rakho taaki DOM overload na ho.
- **Accessibility**: SVG elements pe `<title>` aur `aria-label` daalo screen readers ke liye.
- **Testing**: Alag-alag browsers pe SVG test karo, rendering thoda vary kar sakta hai.

### Resources
- MDN Web Docs: [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)
- W3Schools: [SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp)
- SVGOMG: [SVG Optimization Tool](https://jakearchibald.github.io/svgomg/)