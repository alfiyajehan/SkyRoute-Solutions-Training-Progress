# MISSION 5 #

## TASK-1 ##

# FLEX -> 
Duration ->2.5 hours

> What is flex 
- Flex is one a direction CSS layout designed to align and distribute space among divs.

- It automatically adjusts elements to different screen sizes and devices.

# flex ->
Syntax -> display: flex

- It is defined on the parent container.
- It is used to make the parent container as flex.

# Flex properties ->

> Properties of flex ->

# flex-direction ->
1. flex-direction: row
- arrange the divs in horizontal direction

2. flex-direction: column
- arrange the divs in vertical direction

3. flex-direction: row-reverse 
- arrange the divs in horizontal direction in reverse direction 

4. flex-direction: column-reverse
- arrange the divs in vertical direction in reverse order 

> flex-direction: row ->
<------Main axis - justify content---------->    
         
        ---------------    |
       |               |   |
       |               |   |
       |               |   Cross-axis - align items
       |               |   | 
       |               |   |
       |               |   | 
        ---------------    |


> flex-direction: column ->
<------Cross-axis - align items---------->    
         
        ---------------    |
       |               |   |
       |               |   |
       |               |   Main axis - justify content
       |               |   |
       |               |   |
       |               |   |
        ---------------    |       

# flex-wrap ->
1. wrap
- It wrap onto multiple lines from top to bottom if they don’t fit in a single row.

2. no-wrap
- All flex items will stay on one single line, even if they overflow the container.

3. wrap-reverse   
- Similar to wrap, but the items will wrap in the reverse direction — from bottom to top.

# gap ->
- defines the spacing between the 2 divs.

# flex-flow ->
- shorthand for flex-direction and flex-wrap
> shorthand -> flex-wrap flex-direction

# justify-content ->
- use for arranging div in the main axis.

1. start
2. center
3. end
4. space-evenly
5. space between
6. space-around


# align items ->
used for ramanging the elements in the cross axis 

1. center
2. strech
3. flex-start
4. flex-end


# align-content ->
- specify the space between the 3 rows


# Flex Child properties

> Flex child properties ->


1. order
- Items with a smaller number appear first.
- Default value is 0.

2. flex-grow
- It controls how much an item should grow when there is extra space.
- Default value is 0.

3. flex-shrink
- It controls how much an item can shrink when space is tight.
- Default value is 0.

4. flex-basis
- It sets the starting size of an item before growing or shrinking.

5. align-self
- It changes the vertical position of one item inside the flex container.


# flex ->
- shorthand property for flex-grow , flex-shrink and flex-basis

## Task-2 ##

# Grid Css ->
Duration ->1 hour
> Syntax ->
display : grid;

# gap ->
defines the gap between 2 divs
 1. row-gap
 - defines the space betweenthe 2 columns

 2. column-gap
- defines the space between the 2 rows

# grid-template-column ->
 - used for definig the number of columns and the width of the columns.

 if we want to make columns of equal fraction then we can use 1 fr for each

 1fr 1fr 1fr 
 or 
 repeat(3, 1fr)


# grid-template-row ->
 - used for definig the height of of each row

# justify-content ->
1. start
2. center
3. end
4. space-evenly
5. space between
6. space-around

# align-items
1. center
2. strech
3. flex-start
4. flex-end


# Mission6 #
## Task-1 ##

# Media queries ->
 Duration -> 30 min

 - making the element responsive

 > Syntax ->
 @media (properties)

## Task-2 ##

# Mobile first approach -> 
Duration ->1.5 hours

> What is Mobile First Approach?

It is  an approach of designing your website for small screens first (like mobile phones) then, you add styles for larger screens using media queries.This way, your website is responsive and works well on all devices.

# Milestone 2 completed #