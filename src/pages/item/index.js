import React, { useContext, useState } from 'react';
import '../../App.css'
import './item.css'
import {ItemContext} from '../../context/items'
import {BasketContext} from '../../context/basket'
import ItemList from '../home/items-list'
import _ from 'lodash'
import {useParams} from 'react-router-dom'
import ItemTemplate from '../../components/item-template/item-template'



 

const Item = (props) => {

  const basket = useContext(BasketContext)
  const item = useContext(ItemContext)
  
  const itemPage = useContext(ItemContext)
  const {id} = useParams()
  const selection = _.find(ItemList, {id: itemPage.item && id} )
  const OtherProduct = _.sampleSize(ItemList, 6)

  
  
  const [option, setOption] = useState ('One')
  


  return (
    <div className='Container'>
      <div className='Nav-Bar'>
        <button className='Round-Button' onClick={() => props.history.push('/home')}>Back To Homepage</button>
        <button className='Round-Button' onClick={() => props.history.push('/checkout')}>To Checkout</button>
      </div>
      <div className='Item-Display'>
        {option === 'One' ? <img className='product-image' src={selection.image} /> : <img className='product-image' src={selection.imageTwo}/> }
        <div className='Item-Details'>
          <p>{selection.title}</p>
          <p>{selection.price}</p>
            <select onChange={(event) => setOption(event.target.value)}>
              <option value={'One'}>One</option>
              <option value={'Two'}>Two</option>
            </select>
        </div>
        <button className='Button' onClick={() => basket.updateBasket(selection)}>Add to Basket</button> <button onClick={() => console.log({...basket})}>log</button>
      </div>
      <div className='Other-Products'>
      {OtherProduct.map((items) => <ItemTemplate image={items.image} title={items.title} price={items.price} onClick={() =>{
        props.history.push(`/item/${items.id}`)
        item.updateItem(items.id)}}  />)}
      </div>
     
    </div>
  );
}

export default Item;
