import React, { useContext } from 'react';
import _ from 'lodash'
import './checkout.css'
import {BasketContext} from '../../context/basket'
import ItemList from '../home/items-list'



function Checkout() {
  
  const basket = useContext(BasketContext)
  const selItems = _.find(ItemList, {id: basket.basket.id})
  
  
  return (
    <div className='Container'>
      <div className='Basket-Contents'>
        <ul>
         {selItems.map((items) => <li>{items.title}, Quantity: {items.quantity}, Price: {items.price*items.quantity}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Checkout;
