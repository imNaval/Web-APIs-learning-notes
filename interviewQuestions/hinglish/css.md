# CSS Interview Questions

## CSS Basics

1. **What is CSS?**
   - CSS stands for Cascading Style Sheets
   - It describes how HTML elements should be displayed
   - It controls layout, formatting, and presentation of web pages

2. **What are the different ways to include CSS in a webpage?**
   - Inline CSS (using the style attribute)
   - Internal CSS (using the `<style>` tag in the `<head>` section)
   - External CSS (linking to an external .css file)

## Selectors and Specificity

1. **Explain CSS selectors and their specificity**
   - Element selector: `div`
   - Class selector: `.class-name`
   - ID selector: `#id-name`
   - Attribute selector: `[attribute=value]`
   - Specificity hierarchy: inline > ID > class > element

2. **What is the box model in CSS?**
   - Content: The actual content of the element
   - Padding: Space between content and border
   - Border: The border around the padding
   - Margin: Space outside the border

## Layout and Positioning

1. **Explain the difference between position: relative, absolute, fixed, and sticky**
   - `relative`: Positioned relative to its normal position
   - `absolute`: Positioned relative to its nearest positioned ancestor
   - `fixed`: Positioned relative to the viewport
   - `sticky`: Positioned based on the user's scroll position

2. **What is the difference between Flexbox and Grid?**
   - Flexbox is one-dimensional (row or column)
   - Grid is two-dimensional (rows and columns)
   - Flexbox is content-focused, Grid is layout-focused
   - Flexbox is better for aligning items within a container
   - Grid is better for creating complex layouts 