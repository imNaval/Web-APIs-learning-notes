# Canvas API Notes (Detailed)

## Introduction to Canvas API
The Canvas API is a powerful HTML5 JavaScript API that allows developers to draw 2D graphics and animations directly on a web page using the `<canvas>` element. It provides a pixel-based drawing surface, giving you fine-grained control over every pixel. This makes it ideal for creating dynamic visualizations, games, charts, image manipulations, and interactive user interfaces.

### Why Use Canvas API?
- **Versatility**: Draw shapes, text, images, and complex paths.
- **Performance**: Fast rendering due to direct access to the browser's graphics engine.
- **Animations**: Smooth animations using `requestAnimationFrame`.
- **Pixel Manipulation**: Access and modify pixel data for effects like filters or image processing.
- **Cross-Platform**: Works on all modern browsers without plugins.

### Common Use Cases
- **Games**: 2D games like Snake, Tetris, or platformers.
- **Data Visualizations**: Bar charts, line graphs, or heatmaps.
- **Image Editing**: Apply filters (e.g., grayscale, blur) or crop images.
- **Interactive UI**: Custom buttons, animations, or drawing tools.

### Canvas vs. SVG
- **Canvas**: Pixel-based (raster), requires redrawing for updates, faster for complex animations.
- **SVG**: Vector-based, part of the DOM, allows manipulation of individual elements, better for scalable graphics.

## Setting Up Canvas
To use the Canvas API, you need an HTML `<canvas>` element and JavaScript to interact with its 2D rendering context.

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
  - `id`: To select the canvas in JavaScript.
  - `width` and `height`: Define the canvas size in pixels (e.g., 500x300).
- **Important**: Use `width` and `height` attributes, not CSS, to avoid stretching or blurry graphics. CSS sizing affects the display size, not the drawing resolution.

### Accessing the Canvas in JavaScript
```javascript
// Select the canvas element
const canvas = document.getElementById('myCanvas');
// Get the 2D rendering context
const ctx = canvas.getContext('2d');
```
- `getContext('2d')` returns the 2D context object, which contains all the methods for drawing.
- If `getContext('2d')` returns `null`, the browser doesn't support Canvas or the canvas ID is incorrect.

### Basic Drawing Example
Let’s draw a simple blue rectangle to understand the workflow:
```javascript
ctx.fillStyle = 'blue'; // Set fill color
ctx.fillRect(50, 50, 100, 60); // Draw rectangle at (50, 50) with width 100, height 60
```
- `fillStyle`: Sets the color for filling shapes.
- `fillRect(x, y, width, height)`: Draws a filled rectangle at position `(x, y)`.

## Common Canvas API Methods and Properties

### 1. Drawing Shapes
The Canvas API provides methods to draw various shapes, from rectangles to complex paths.

#### Rectangles
- `fillRect(x, y, width, height)`: Draws a filled rectangle.
- `strokeRect(x, y, width, height)`: Draws a rectangle outline.
- `clearRect(x, y, width, height)`: Erases a rectangular area, making it transparent.

**Example: Rectangle with Outline**
```javascript
ctx.fillStyle = 'lightblue';
ctx.fillRect(50, 50, 100, 60);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.strokeRect(50, 50, 100, 60);
```

#### Paths and Lines
- `beginPath()`: Starts a new path, clearing the previous path.
- `moveTo(x, y)`: Moves the pen to a point without drawing.
- `lineTo(x, y)`: Draws a line from the current point to `(x, y)`.
- `closePath()`: Closes the path by connecting the last point to the first (optional).
- `fill()`: Fills the path with the current `fillStyle`.
- `stroke()`: Draws the path outline with the current `strokeStyle`.

**Example: Drawing a Triangle**
```javascript
ctx.beginPath();
ctx.moveTo(100, 50); // Start at (100, 50)
ctx.lineTo(150, 150); // Line to (150, 150)
ctx.lineTo(50, 150); // Line to (50, 150)
ctx.closePath(); // Close the triangle
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
```

#### Circles and Arcs
- `arc(x, y, radius, startAngle, endAngle, anticlockwise)`: Draws a circle or arc.
  - `(x, y)`: Center of the circle.
  - `radius`: Size of the circle.
  - `startAngle` and `endAngle`: Angles in radians (0 to `2 * Math.PI` for a full circle).
  - `anticlockwise`: Optional, draws counterclockwise if `true`.

**Example: Full Circle**
```javascript
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI); // Full circle
ctx.fillStyle = 'red';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
```

### 2. Styling
You can customize the appearance of shapes, lines, and text using styling properties.

- `fillStyle`: Sets the fill color, gradient, or pattern (e.g., `'blue'`, `'rgba(255, 0, 0, 0.5)'`).
- `strokeStyle`: Sets the outline color, gradient, or pattern.
- `lineWidth`: Sets the thickness of lines (in pixels).
- `lineCap`: Sets the style of line ends (`butt`, `round`, `square`).
- `lineJoin`: Sets the style of line corners (`miter`, `round`, `bevel`).
- `font`: Sets the font for text (e.g., `'20px Arial'`).
- `textAlign`: Aligns text (`left`, `center`, `right`).
- `textBaseline`: Sets the vertical alignment of text (`top`, `middle`, `bottom`).

**Example: Styled Text**
```javascript
ctx.font = '24px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'center';
ctx.fillText('Hello, Canvas!', 250, 150); // Centered at (250, 150)
```

**Example: Gradient Fill**
```javascript
const gradient = ctx.createLinearGradient(50, 50, 150, 150);
gradient.addColorStop(0, 'blue');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(50, 50, 100, 60);
```

### 3. Transformations
Transformations allow you to move, rotate, or scale the canvas coordinate system.

- `translate(x, y)`: Moves the canvas origin (0,0) to `(x, y)`.
- `rotate(angle)`: Rotates the canvas around the origin (angle in radians).
- `scale(x, y)`: Scales the canvas in the x and y directions (e.g., `2` doubles the size).
- `save()`: Saves the current state (styles, transformations).
- `restore()`: Restores the last saved state.

**Example: Rotated Rectangle**
```javascript
ctx.save(); // Save current state
ctx.translate(100, 100); // Move origin
ctx.rotate(Math.PI / 4); // Rotate 45 degrees
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 50, 50);
ctx.restore(); // Restore original state
```

**Tip**: Use `save()` and `restore()` to avoid affecting subsequent drawings with transformations.

### 4. Images
You can draw images on the canvas using the `drawImage` method.

- `drawImage(image, x, y)`: Draws an image at `(x, y)`.
- `drawImage(image, x, y, width, height)`: Draws a scaled image.
- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`: Draws a cropped portion of the image.

**Example: Drawing an Image**
```javascript
const img = new Image();
img.src = 'example.jpg';
img.onload = () => {
    ctx.drawImage(img, 50, 50, 100, 100); // Draw at (50, 50), size 100x100
};
```

### 5. Animations
Animations are created by repeatedly clearing the canvas, updating the state, and redrawing.

- `requestAnimationFrame(callback)`: Schedules the next frame, ensuring smooth animations (typically 60 FPS).
- `clearRect(0, 0, canvas.width, canvas.height)`: Clears the entire canvas.

**Example: Moving Rectangle**
```javascript
let x = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.fillenuationStyle = 'purple';
    ctx.fillRect(x, 50, 50, 50); // Draw rectangle
    x += 2; // Move right
    if (x > canvas.width) x = 0; // Reset position
    requestAnimationFrame(animate); // Loop
}
animate();
```

**Steps for Animations**:
1. Clear the canvas to prevent overlap.
2. Update variables (e.g., position, color).
3. Draw the updated graphics.
4. Call `requestAnimationFrame` to repeat.

## Interview Questions and Answers

1. **What is the Canvas API, and what are its primary use cases?**
   - The Canvas API is an HTML5 API for rendering 2D graphics on a `<canvas>` element using JavaScript. It’s used for games, data visualizations, image editing, and interactive interfaces.

2. **How does Canvas differ from SVG?**
   - Canvas is raster-based, requiring redraws for updates, and is faster for animations and complex scenes. SVG is vector-based, part of the DOM, and allows manipulation of individual elements, making it better for scalable graphics and accessibility.

3. **How do you create animations in Canvas?**
   - Use `requestAnimationFrame` for smooth looping. Clear the canvas with `clearRect`, update the state (e.g., position), redraw the graphics, and repeat.

4. **What are the limitations of the Canvas API?**
   - Pixel-based, so scaling on high-resolution displays can cause blurriness.
   - Limited accessibility for screen readers (requires additional ARIA attributes).
   - Not ideal for 3D graphics (use WebGL instead).
   - Redrawing the entire canvas for updates can be resource-intensive.

5. **How can you handle high-resolution displays (Retina)?**
   - Set the canvas size to match the device pixel ratio:
     ```javascript
     const dpr = window.devicePixelRatio;
     canvas.width = 500 * dpr;
     canvas.height = 300 * dpr;
     ctx.scale(dpr, dpr);
     canvas.style.width = '500px';
     canvas.style.height = '300px';
     ```

## Project Example: Simple Drawing App
Let’s build a drawing app where users can draw with the mouse, change colors, and clear the canvas.

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

### How It Works
- **Mouse Events**: `mousedown` starts drawing, `mousemove` draws lines, `mouseup` or `mouseout` stops drawing.
- **Color Picker**: Changes the `strokeStyle` for lines.
- **Clear Button**: Resets the canvas using `clearRect`.
- **Styling**: `lineCap` and `lineJoin` set to `round` for smooth lines.

### Extensions
- Add a slider for line thickness (`ctx.lineWidth`).
- Implement shape tools (e.g., rectangles, circles).
- Add an undo feature by storing drawing states in an array.
- Save the drawing as an image using `canvas.toDataURL()`.

## Practice Problems
1. **Bouncing Ball**: Create an animation of a ball bouncing inside the canvas boundaries.
2. **Bar Chart**: Draw a dynamic bar chart from an array of data, with hover effects.
3. **Image Filter**: Load an image and apply a grayscale filter using pixel manipulation (`ctx.getImageData`).
4. **Simple Game**: Build a basic game like Snake or Pong using Canvas.

## Tips for Mastery
- **Practice**: Experiment with different shapes, transformations, and animations.
- **Debugging**: Use `console.log` to check coordinates or state during animations.
- **Performance**: Minimize redraws by clearing only necessary areas.
- **Accessibility**: Add ARIA attributes or fallback content for screen readers.
- **High-Resolution Displays**: Always account for `devicePixelRatio`.

## Additional Resources
- MDN Web Docs: [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- W3Schools: [HTML Canvas Tutorial](https://www.w3schools.com/html/html5_canvas.asp)
- Canvas Cheat Sheet: [HTML5 Canvas Cheat Sheet](https://www.html5canvastutorials.com/)
## SVG (Scalable Vector Graphics)

### Introduction to SVG
SVG (Scalable Vector Graphics) is an XML-based format for rendering 2D vector graphics directly in the browser. Unlike the Canvas API, which is pixel-based (raster), SVG is vector-based, meaning graphics are defined using mathematical coordinates and can scale without losing quality. SVG elements are part of the DOM, allowing you to manipulate them with JavaScript and style them with CSS, similar to other HTML elements.

### Why Use SVG?
- **Scalability**: Graphics remain sharp at any size or resolution, ideal for high-DPI displays (e.g., Retina).
- **DOM Integration**: SVG elements can be accessed and modified using JavaScript and styled with CSS.
- **Interactivity**: Easily add event listeners (e.g., click, hover) to individual elements.
- **Accessibility**: Supports text-based descriptions and ARIA attributes for screen readers.
- **Small File Size**: Efficient for simple graphics like icons or logos.

### Common Use Cases
- **Icons and Logos**: Scalable icons that look crisp on all devices.
- **Charts and Graphs**: Interactive data visualizations with hover effects.
- **Animations**: Smooth CSS or JavaScript-based animations (e.g., animated infographics).
- **UI Elements**: Custom buttons, shapes, or patterns.
- **Maps**: Interactive maps with clickable regions.

### SVG vs. Canvas
- **SVG**:
  - Vector-based, scalable without quality loss.
  - Part of the DOM, so individual elements can be styled or manipulated.
  - Better for static or semi-interactive graphics (e.g., icons, charts).
  - Slower for complex animations or large datasets due to DOM overhead.
- **Canvas**:
  - Pixel-based, requires redrawing for updates.
  - Faster for real-time animations and complex scenes (e.g., games).
  - Less accessible and not scalable without resolution adjustments.
- **When to Use**:
  - Use SVG for scalable, interactive, or DOM-integrated graphics.
  - Use Canvas for performance-critical animations or pixel-level manipulation.

### Basic SVG Setup
SVG graphics are created using the `<svg>` element in HTML. You can define shapes, paths, and other elements inside it.

**Example: Basic SVG Rectangle**
```html
<svg width="200" height="100">
    <rect x="10" y="10" width="100" height="50" fill="blue" stroke="black" stroke-width="2" />
</svg>
```
- `<svg>`: The container for SVG graphics, with `width` and `height` attributes.
- `<rect>`: Draws a rectangle with attributes:
  - `x`, `y`: Top-left corner coordinates.
  - `width`, `height`: Size of the rectangle.
  - `fill`: Fill color.
  - `stroke`, `stroke-width`: Outline color and thickness.

### Common SVG Elements
SVG supports various elements for drawing shapes, text, and paths.

#### Shapes
- `<rect>`: Rectangle (attributes: `x`, `y`, `width`, `height`, `rx`, `ry` for rounded corners).
- `<circle>`: Circle (attributes: `cx`, `cy` for center, `r` for radius).
- `<ellipse>`: Ellipse (attributes: `cx`, `cy`, `rx`, `ry` for radii).
- `<line>`: Line (attributes: `x1`, `y1`, `x2`, `y2` for start and end points).
- `<polyline>`: Series of connected lines (attribute: `points` for coordinates).
- `<polygon>`: Closed shape with multiple points (attribute: `points`).

**Example: Circle**
```html
<svg width="200" height="200">
    <circle cx="100" cy="100" r="50" fill="red" stroke="black" stroke-width="2" />
</svg>
```

#### Paths
- `<path>`: Defines complex shapes using a `d` attribute with commands (e.g., `M` for move, `L` for line, `A` for arc).
- Example:
  ```html
  <svg width="200" height="200">
      <path d="M10 10 L100 100 L10 100 Z" fill="yellow" stroke="black" />
  </svg>
  ```
  - `M10 10`: Move to (10, 10).
  - `L100 100`: Line to (100, 100).
  - `L10 100`: Line to (10, 100).
  - `Z`: Close the path (triangle).

#### Text
- `<text>`: Renders text (attributes: `x`, `y`, `font-size`, `fill`).
- Example:
  ```html
  <svg width="200" height="100">
      <text x="50" y="50" font-size="20" fill="black">Hello, SVG!</text>
  </svg>
  ```

### Styling SVG
SVG elements can be styled using:
- **Attributes**: `fill`, `stroke`, `stroke-width`, etc.
- **CSS**: Inline `<style>` or external stylesheets.
- **Inline Styles**: `style` attribute on elements.

**Example: CSS Styling**
```html
<svg width="200" height="100">
    <style>
        .my-rect { fill: lightblue; stroke: black; stroke-width: 2; }
    </style>
    <rect class="my-rect" x="10" y="10" width="100" height="50" />
</svg>
```

### Interactivity with JavaScript
Since SVG elements are part of the DOM, you can manipulate them using JavaScript.

**Example: Change Circle Color on Click**
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

### Animations in SVG
SVG supports animations using:
- **CSS Animations**: For properties like `transform`, `fill`, or `opacity`.
- **SMIL (S off-white): Built-in SVG animation elements like `<animate>`.
- **JavaScript**: Manipulate attributes dynamically.

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

### Interview Questions and Answers
1. **What is SVG, and how does it differ from Canvas?**
   - SVG is a vector-based graphics format integrated with the DOM, scalable and manipulable. Canvas is pixel-based, requiring redraws, and is better for animations.
2. **When would you use SVG over Canvas?**
   - Use SVG for scalable graphics, interactive elements, or when DOM integration is needed (e.g., charts, icons). Use Canvas for performance-intensive tasks like games or pixel manipulation.
3. **How can you animate SVG elements?**
   - Use CSS animations, SMIL, or JavaScript to modify attributes like `transform`, `fill`, or `opacity`.
4. **What are the accessibility benefits of SVG?**
   - SVG supports text content and ARIA attributes, making it more accessible than Canvas for screen readers.

### Practice Problems
1. Create an interactive SVG chart with hover effects on bars.
2. Build an animated SVG logo that scales and rotates on click.
3. Draw a complex shape (e.g., star) using the `<path>` element.
4. Combine SVG and Canvas in a project (e.g., SVG for UI, Canvas for a game).

### Tips for Mastery
- **Tools**: Use vector graphic editors (e.g., Inkscape, Adobe Illustrator) to create SVGs, then optimize with tools like SVGO.
- **Performance**: Minimize the number of SVG elements to reduce DOM overhead.
- **Accessibility**: Add `<title>` and `aria-label` to SVG elements for screen readers.
- **Testing**: Test SVGs on different browsers, as rendering may vary slightly.

### Additional Resources
- MDN Web Docs: [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)
- W3Schools: [SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp)
- SVGOMG: [SVG Optimization Tool](https://jakearchibald.github.io/svgomg/)