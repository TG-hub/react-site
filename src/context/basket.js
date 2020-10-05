import React, { createContext, useContext, useState } from 'react'
import _ from 'lodash'
import ItemList from '../pages/home/items-list'
import Item from '../pages/item'




export const BasketContext = createContext({
    basket: [],
    updateBasket: () => null
})




const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState ([])
    
    
 
    const updateBasket = (itemList) => {
    const incrementer = _.find(basket, {id: itemList.id})
        {incrementer ?  setBasket(() => [ {id: itemList.id, quantity: incrementer.quantity +1}]) : setBasket((prevState) => [...prevState, {id: itemList.id, quantity: 1}])}

      }

    return (
        <BasketContext.Provider value={{basket, updateBasket: updateBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider   