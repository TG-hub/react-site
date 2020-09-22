import React, { useContext } from 'react';
import '../../App.css'
import './item.css'
import {ItemContext} from '../../context/items'
import ItemList from '../home/items-list'
import _ from 'lodash'


 

const Item = (props) => {

  const itemPage = useContext(ItemContext)
  const selection = _.find(ItemList, {id: itemPage} )

  return (
    <div className='Container'>
      <div className='Item-Container'>
        <img src={itemPage.image} width='300' height='300'/>
        <div className='Item-Details'>
          <p>{selection.title}</p>
          <p>{selection.price}</p>
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
