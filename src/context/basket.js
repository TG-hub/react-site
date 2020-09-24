import React, { createContext, useState } from 'react'



export const BasketContext = createContext({
    basket: [],
    updateBasket: () => null
})


const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState ([])

    return (
        <BasketContext.Provider value={{basket, updateBasket: setBasket }}>
            {children}
        </BasketContext.Provider>

    )
}

export default BasketProvider