import React from 'react';
import './Card.css';

import './ProductDate.css';
import Card from './Card'

const ProductDate = (props) => {
    const month=props.date.toLocalString('en-US',{month:'long'});
    const day=props.date.toLocalString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
  return (
    <div>
        <div class="ProductDate">{month}</div>
        <div class="ProductDate">{year}</div>
        <div class="ProductDate">{day}</div>


    </div>
  );
}

export default ProductDate