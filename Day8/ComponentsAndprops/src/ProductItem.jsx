import React ,{useState} from 'react';
import Card from './Components/Card';
import './ProductItem.css';
import ProductDate from './Components/ProductDate'

const ProductItem = (props) => {
  let title=props.title;
  function clickHandler(){
    console.log("Button clicked.")
  }
  return (
    <Card class="ProductItem">
        <ProductDate date={props.date}/>
        <div class="titleDescription">
            <h2>{title}</h2>
          <button onClick={clickHandler}>Add to cart</button>   
        </div>  
    </Card>
  );
}

export default ProductItem; 