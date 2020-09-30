import React, { createContext, useState } from 'react'
import _ from 'lodash'
import ItemList from '../pages/home/items-list'
import Item from '../pages/item'




export const BasketContext = createContext({
    basket: [],
    updateBasket: () => null
})


  

const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState ([])

 
    const updateBasket = (ItemList) => {
    const incrementer = _.find(basket, {id: ItemList.id})
        {incrementer === undefined ? setBasket((prevState) => [...prevState, {id: ItemList.id, quantity: 1}]) : setBasket(() => [ {id: ItemList.id, quantity: incrementer.quantity +1}])}

      }

    return (
        <BasketContext.Provider value={{basket, updateBasket: updateBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider   