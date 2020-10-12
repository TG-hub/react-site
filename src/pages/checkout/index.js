import React, { useContext, useState } from 'react';
import _ from 'lodash'
import './checkout.css'
import {BasketContext}  from '../../context/basket'
import ItemList from '../home/items-list'
import StyledInput from '../../components/input/input'
import StyledButton from '../../components/button/button'
import styled, { css } from 'styled-components'









const Checkout = (props) => {
  
  const basket = useContext(BasketContext)
  
  
  const [address, setAddress] = useState ('')
  const [postCode, setPostCode] = useState ('')
  
  const onClick = () => {
    props.history.push('/confirmation')
  }
  const submitter = () => {
    return (
      <div>
       {address.length === 0, postCode.length===0 ? null : onClick()}
      </div>
    )
  }

  
  const priceTotal = () => 
          basket.basket.map((selItems) => {
          const item = _.find(ItemList, {id: selItems.id})
          return item.price*selItems.quantity
        })
  

  return (
    <div className='Container'>
      <div className='Basket-Contents'>
        <ul>
           {basket.basket.map((selItems) => {
           const item = _.find(ItemList, {id: selItems.id})
          return <li className='List-Item'>Item Name: {item.title} Quantity: {selItems.quantity} Price: £{item.price*selItems.quantity}</li>  })}
        </ul>
      </div>
      <div>
        <p>Total Cost: £{_.sum(priceTotal())}</p>
      </div>
      <div>
          <StyledInput    textSetter={(event) => setAddress(event.target.value)} placeholder={'Address Line 1'}   />
          <StyledInput long  textSetter={(event) => setPostCode(event.target.value)} placeholder={'Postcode'}   />
          <StyledButton orange  buttonName={'Order'} submit={submitter}/>
      </div>
    </div>
  );
}

export default Checkout;
