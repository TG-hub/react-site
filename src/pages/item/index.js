import React, { useContext } from 'react';
import '../../App.css'
import './item.css'
import {ItemContext} from '../../context/items'

 

const Item = (props) => {

  const itemPage = useContext(ItemContext)

  return (
    <div className='Container'>
      <div className='Item-Container'>
        <img src={itemPage.image} width='300' height='300'/>
        <div className='Item-Details'>
          <p>{itemPage.title}</p>
          <p>{itemPage.price}</p>
            <select>
              <option value='Red'>Red</option>
              <option value='Blue'>Blue</option>
            </select>
        </div>
      </div>
    </div>
  );
}

export default Item;
