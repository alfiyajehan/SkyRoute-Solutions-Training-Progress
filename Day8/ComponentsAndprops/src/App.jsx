import React from 'react';
import './App.css';
import Products from "./Components/Products";
import Card from './Components/Card';
import NewProduct from "./Components/NewProduct";

const App = () => {
  const product=[
    {
      id:"1",
      title:"Bournville Dark Choclate",
      amount:"120",
      date:new Date(2025,3,1),
    },
    {
      id:"2",
      title:"Amul Cocoa ",
      amount:"200",
      date:new Date(2025,3,4)
    },
    {
      id:"3",
      title:"Galaxy Cocoa Drak Choclate",
      amount:"102",
      date:new Date(2025,3,7)
    },
    {
      id:"4",
      title:"Mordge Dark Compound",
      amount:"158",
      date:new Date(2025,4,3)
    },
  ];
  function printProductData(data){
    conxole.log("I'm inside app.jsx");
    console.log(data);

  }

  return (
    <div className="App">
      <NewProduct printProduct={printProductData}/>
      <Products items={product}/>
      
    </div>
  )
}

export default App;