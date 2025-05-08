# Mission -13 # 
Duration -> 20 min
>> What are Keys?
- Keys are special string attributes used in React to identify elements in a list.
- They help React track which items have changed, been added, or removed.

>> Why Are Keys Important?
- Improve performance by allowing efficient re-rendering.
- Prevents unnecessary re-renders of unchanged components.
- Helps React maintain component identity across re-renders.

Eg – Using Keys in Lists
const items = ['Apple', 'Banana', 'Orange'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

>> React Conditional Rendering
1. Ternary Operator (? :)
Use when you need to render one of two elements based on a condition.

{condition ? <ComponentIfTrue /> : <ComponentIfFalse />}
Eg -> {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
2. Logical AND Operator (&&)
Use when you want to render a component only if a condition is true.

{condition && <Component />}
Example: {isLoggedIn && <p>You are logged in!</p>}

3. Multiple Conditions
You can chain multiple conditions using &&:

Eg -> {isLoggedIn && user.hasAccess && <AdminPanel />}

{isLoggedIn 
  ? (isAdmin 
    ? <AdminPanel /> 
    : <UserPanel />) 
  : <LoginPage />}

# Mission 14: ->Introduction to hooks->
# Hooks->
Duration -> 1 hour
>> What are hooks ->
- Hooks are special functions in React that let you use state and other React features in functional components.


>> Why Use Hooks?
- Make code cleaner and reusable.
- Avoid switching between class and function components.
- Easier to share logic across components using custom hooks.

# USEEFFECT HOOK->
manage side effects(change)->
kisi component pr koi action kiya n us component ko chordh kar kisi ekement mein change ho gaya so usse side effect kehte hain.


# SYNTAX->

useEffect(()=>{

});

when component gets render -> useeffect execution starts

useEffect(()=>{

},[empty array]);-> only one time it will get executed

# 1.USEEFFECT FOR EVERY RENDER->
  useEffect(()=>{
    console.log('UI rendering done')
 })

# 2.USEEFFECT FOR FIRST RENDER->
  useEffect(()=>{
    console.log('UI rendering done')
 },[])

# 3.USEEFFECT FOR FIRST RENDER AND WHEN THE DEPENDENCY CHANGES->
useEffect(()=>{
  console.log('Change observed')
},[text])

# 4.TO HANDLE UNMOUNTING OF COMPONENTS->
useEffect(()=>{

  //add event listener
  console.log('Listener added');

  return()=>{
    console.log('Listener removed')
  }
},[text])

In this first the statement inside return will get executed then the statement outside the return will get executed.

# DIFFERENCE BETWEEN USESTATE AND USEEFFECT->


# USESTATE->
to handle variable's state-> u changed or update the value of the variable ->the updated or changed value should be reflected on th UI 


# USEEFFECT->
agar tum apne component ke render hone ke baad koi bhi task karwaana chahate ho 


# Projects ->
Duration -> 1.5 hours
1. Project -1 ->
Window Size Calculator

2. Project -2 ->
Timer component

3. Project -3 ->
Data Fetcher 

# Revised react -> 
Duration -> 1 hour

# Refactor Class components to functional component 

Duration -> 30 min

// CLASS COMPONENT ->
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

// FUNCTIONAL COMPONENT ->

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;

# useref , usecontext and custom hooks ->

1. useContext – Share Data Without Props

- Access values from a context directly in components without prop drilling.

const ThemeContext = React.createContext();
Eg ->
<!-- function App() {
  return (
    <ThemeContext.Provider value={"dark"}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>The theme is {theme}</div>;
} -->


2. useRef –>
- Get Reference to DOM Elements or Store Mutable Values
- Access DOM elements directly.
- Store values that don’t cause re-renders when changed.

import { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // auto-focus on mount
  }, []);

  return <input ref={inputRef} />;
}

# Custom Hooks – Reusable Logic
- Extract and reuse component logic across multiple components.

Eg ->

<!-- import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}

export default useCounter; -->

// In component
<!-- import useCounter from './useCounter';

function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
} -->
