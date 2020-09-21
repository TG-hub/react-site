import React from 'react'




const ItemTemplate = (props) => {
    
  
  

    return (
        <div className='Item' onClick={props.onClick}>
        <img className='Item-Image' src={props.image} />
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    )
}


export default ItemTemplate