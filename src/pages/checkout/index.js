import React, { useContext } from 'react';
import _ from 'lodash'
import './checkout.css'
import {BasketContext} from '../../context/basket'
import ItemList from '../home/items-list'



function Checkout() {
  
  const basket = useContext(BasketContext)
  
  
  
  return (
    <div className='Container'>
      <div className='Basket-Contents'>
        <ul>
         {basket.basket.map((selItems) => 
           selItems = _.find(ItemList, {id: basket.id})
           <li>{selItems.title}, Quantity: {selItems.quantity}, Price: {selItems.price*selItems.quantity}</li>  )}
        </ul>
      </div>
    </div>
  );
}

export default Checkout;
