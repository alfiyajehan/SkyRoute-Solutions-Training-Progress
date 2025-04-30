# MISSION-3 #

# TASK-1 # ->
## CSS->
> CSS fullform ->
- Cascading style sheets
- Used for formatting, apperance and styling.

## SELECTORS->
It is used for selecting different elements and change their appearence.

### Types of selector->

1. elements selector/type selector/tag selector.
- To apply css property to the tags.

2. Class selector
- To combine group of element and apply css property to them.
- always use (.) while using class selector.

3. Id selector
- each elements have unique id.
- always use (#) while using id selector.
- It is used to style a specific tag.

4. Pseudo selector
- It defines the special state of the element.
- always use (:) while usnig pseudo selector
  
syntax-> selector:pseudo-class{

}  

5. Multiple selector/grouping selector
- always use a comma between the 2 tags

6. Universal selector
- applies style to all the elements on the page.
- always use(*) while using universal selector.

7. Nested selector

a. Descendant Selector
Targets all elements nested within a parent element.

parent child {

}

b. Child Selector (>)
Targets only the direct children of an element.
parent > child {

}


8. Attribute selector

a. Presence Selector [attribute]
element[attribute] {

}

b. 
 Exact Match Selector ([attribute="value"])
Styles elements where the attribute matches an exact value.

element[attribute="value"] {

}

## ADDING STYLING TO HTML
1. inline
syntax->
<element style="property:value">text</element>

2. internal(style tag)
<style>
selector{
    property:value;
}
</style>

3. external(script tag)
<link rel="stylesheet" href="path_of_the_stylesheet">

## CODE->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Selectors</title>
  <link rel="stylesheet" href="style.css">
  

  <!-- 3. External Styling -->
  <!-- This line will only work if you have a 'style.css' file in the same folder -->
  <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>

  <!-- 1. Inline Styling -->
  <h1 style="font-size: 28px;">CSS</h1>

  <!-- Element and Class -->
  <h2 class="highlight">Class selector</h2>

  <!-- ID Selector -->
  <p id="unique-para">ID selector.</p>

  <!-- Pseudo Selector -->
  <a href="Click me">Hover over this link</a>

  <!-- Multiple and Universal Selectors -->
  <p>Universal selector</p>

  <!-- Nested Selectors -->
  <div class="outer-box">
    <h3>I am a direct child</h3>
    <p>I am nested inside outer-box</p>
  </div>

  <!-- Attribute Selectors -->
  <input type="text" placeholder="Enter your name">
  <input type="email" placeholder="Enter your email">

</body>
</html>

# CSS->

# TASK-2 # ->

## BOX MODEL ->
- everything added to the page is in the form of rectangular box.

MARGIN->
space between borders of 2 element.

PADDING->
space between content of the box and border. 


## BOX SIZING
1.border-box
2.content-box

## CODE->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Box Model</title>
  <link rel="stylesheet" href="style2.css">

</head>
<body>

  <h1>Box Model And Box Sizing</h1>

  <div class="container">
    <!--content-box -->
    <div class="box1">
      <p><strong>Box 1</strong></p>
      <p>box-sizing: content-box</p>
    </div>

    <!-- border-box -->
    <div class="box2">
      <p><strong>Box 2</strong></p>
      <p>box-sizing: border-box</p>
    </div>
  </div>

  <div class="info">
    <h2>Explanation:</h2>

    <p><span class="label">Box 1 (content-box):</span> The width and height only apply to the content. Padding and border are added outside the width of the content making the actual box bigger.</p>

    <p><span class="label">Box 2 (border-box):</span> The width and height include content, padding, and border.</p>

    <p><span class="label">Padding:</span> Space inside the box between the content and the border.</p>
    <p><span class="label">Margin:</span> Space outside the box between 2 elements.</p>
    <p><span class="label">Border:</span> Creates a line around the padding and content.</p>
  </div>

</body>
</html>


## CSS->

* {
  box-sizing: border-box;
  font-family: sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: darkblue;
}

.container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.box1 {
  width: 200px;
  height: 150px;
  background-color: lightcoral;
  color: white;
  padding: 20px;
  border: 5px solid black;
  margin: 20px;
  box-sizing: content-box;
}

.box2 {
  width: 200px;
  height: 150px;
  background-color: lightseagreen;
  color: white;
  padding: 20px;
  border: 5px solid black;
  margin: 20px;
  box-sizing: border-box;
}

.info {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
}

.info h2 {
  color: #444;
}

.info p {
  margin: 10px 0;
  line-height: 1.6;
}

.label {
  font-weight: bold;
}


