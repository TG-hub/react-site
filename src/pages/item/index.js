import React, { useContext, useState } from 'react';
import '../../App.css'
import './item.css'
import {ItemContext} from '../../context/items'
import ItemList from '../home/items-list'
import _ from 'lodash'
import {useParams} from 'react-router-dom'


 

const Item = () => {


  
  const itemPage = useContext(ItemContext)
  const {id} = useParams()
  const selection = _.find(ItemList, {id: itemPage.item && id} )
  
  const [option, setOption] = useState ('')
  const optionSelect = () => {setOption(option)}




  return (
    <div className='Container'>
      <div className='Item-Container'>
        <img src={selection.image} width='300' height='200'/>
        <div className='Item-Details'>
          <p>{selection.title}</p>
          <p>{selection.price}</p>
            <select  onChange={optionSelect}>
              <option value='One'>One</option>
              <option value='Two'>Two</option>
            </select>
        </div>
      </div>
    </div>
  );
}

export default Item;
