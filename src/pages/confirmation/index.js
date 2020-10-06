import React, { useContext } from 'react';
import './confirmation.css'
import { BasketContext } from '../../context/basket';
import ItemList from '../home/items-list'
import _ from 'lodash'


const Confirmation = () => {

  const basket = useContext(BasketContext)

  const priceTotal = () => 
          basket.basket.map((selItems) => {
          const item = _.find(ItemList, {id: selItems.id})
          return item.price*selItems.quantity
        })

  const orderNumber = () => {
    return Math.random()*1000
  }
  const today = new Date()
  const dd = today.getDate()+3
  const mm = today.getMonth()+1
  const yyyy = today.getFullYear()

  
  return (
  <div className='Container'>
    <div className='Summary'>
      <p>Order Number: {Math.round(orderNumber())}</p>
      <div className='SummaryTwo'>
        <p>Estimated Delivery Date: {dd}-{mm}-{yyyy}</p>
        <p>Total Price : £{priceTotal()}</p>
      </div>
      <div className='SummaryTwo'>
        <p>Thank you for ordering with us, we hope you’ll choose us again!</p>
      </div>
    </div>
  </div>
  );
}

export default Confirmation;
