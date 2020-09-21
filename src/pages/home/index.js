import React, { useContext } from 'react';
import '../../App.css'
import './home.css'
import '../../components/item-template/item-template.css'
import ItemTemplate from '../../components/item-template/item-template'
import ItemList from './items-list.js'
import {ItemContext} from '../../context/items'



function Home(props) {

  const item = useContext(ItemContext)
  

  return (
    <div className='Background'>
      <h1 className='Title'>Welcome to the Store!</h1>
      <div className='Item-container'>
        {ItemList.map((items,) => <ItemTemplate image={items.image} title={items.title} price={items.price} onClick={() =>{
        props.history.push(`/item/${items.id}`)
        item.updateItem(items.id)}}  />)}
      </div>
    </div>
  );
}

export default Home;
