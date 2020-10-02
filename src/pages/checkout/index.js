import React, { useContext, useState } from 'react';
import _, { sum } from 'lodash'
import './checkout.css'
import {BasketContext} from '../../context/basket'
import ItemList from '../home/items-list'
import Input from '../../components/input/input'
import Button from '../../components/button/button'



const Checkout = (props) => {
  
  const basket = useContext(BasketContext)
  
  const [input, setInput] = useState ('')
  const [inputTwo, setInputTwo] = useState ('')
  
  const onClick = () => {
    props.history.push('/confirmation')
  }
  const submitter = () => {
    return (
      <div>
       {input.length === 0, inputTwo.length===0 ? null : onClick()}
      </div>
    )
  }

  

  
  return (
    <div className='Container'>
      <div className='Basket-Contents'>
        <ul>
           {basket.basket.map((selItems) => {
           const item = _.find(ItemList, {id: selItems.id})
          return <li className='List-Item'>Item Name:{item.title} Quantity: {selItems.quantity} Price: {item.price*selItems.quantity}</li>  })}
        </ul>
      </div>
      <div>
        <p>Total Cost:</p>
      </div>
      <div>
          <Input  textSetter={(event) => setInput(event.target.value)} placeholder={'Address Line 1'}   />
          <Input  textSetter={(event) => setInputTwo(event.target.value)} placeholder={'Postcode'}   />
          <Button  buttonName={'Order'} submit={submitter}/>
      </div>
    </div>
  );
}

export default Checkout;
