# CSS transition
It allows elements to change property values smoothly rather than instantly.

#  Properties:
1. transition-property
- Specifies the CSS property to animate.

>> Values: all, background-color, width, transform, etc.

2. transition-duration
- How long the transition takes.
>> Values: 1s, 500ms, etc.

3. transition-timing-function
- Controls the speed curve of the transition.
>> Values:
a. linear
b. ease (default)
c. ease-in
d. ease-out
e. ease-in-out
f. cubic-bezier(n,n,n,n) (custom)

4. transition-delay
- Sets a delay before the transition starts.
>> Values: 0s, 1s, etc.

# CSS transform
The transform property allows you to visually manipulate an element: move, rotate, scale, or skew it.

# Types
1. translateX(px) / translateY(px) / translate(x, y)
- Moves the element left/right or up/down.
>> Example: transform: translateX(50px);
2. scale(n) / scaleX(n) / scaleY(n)
- Enlarges or shrinks the element.
>> Example: transform: scale(1.5);

3. rotate(deg)
- Rotates the element clockwise or counterclockwise.
>> Example: transform: rotate(45deg);

4. skewX(deg) / skewY(deg)
- Skews the element along X or Y axis.
>> Example: transform: skewX(20deg);

5. matrix(a, b, c, d, e, f)
- Applies all transformations in one function (advanced use).
>> Example: transform: matrix(1, 0, 0, 1, 100, 200);


# Animations Css ->

> What is animation ->
when an element shifts from one animation to another .

# Animation Properties ->
1. animation-name
- Specifies the name of the @keyframes animation to apply.

>> Types

a. from {}-> starting state
b. to {}-> destination state

a. none – no animation
b. slideIn – refers to @keyframes slideIn { ... }

2. animation-duration
- defines how much time the animation will take

>> Example:
1. 2s (2 seconds)
2. 500ms (500 milliseconds)

3. animation-delay
- Sets a delay before the animation starts.

>>Example:
1. 1s – start after 1 second
2. 0ms – start immediately

4. animation-iteration-count
- Controls how many times the animation repeats.

>>Example:
1. 1 – play once (default)
2. 3 – repeat 3 times
3. infinite – loop forever


5. animation-direction
- Specifies the direction of the animation on each cycle.

1. normal – forward direction (default)
2. reverse – backward direction
3. alternate – alternates direction each cycle
4. alternate-reverse – alternates, starting in reverse


6. animation-timing-function
- Determines the pace or acceleration of the animation over time.

1. ease – starts slow, speeds up, slows down (default)
2. linear – constant speed
3. ease-in – starts slow
4. ease-out – ends slow
5. ease-in-out – starts and ends slow
6. cubic-bezier(n,n,n,n) – custom easing function


7. animation-fill-mode
- Defines how styles are applied to the element before the animation starts and after it ends.

1. none – no styles retained before or after (default)
2. forwards – keeps final keyframe styles after animation ends
3. backwards – applies initial keyframe during delay
4. both – applies both forwards and backwards


