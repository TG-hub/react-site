import React, { createContext } from 'react'

export default BasketProvider

export const BasketContext = createContext({
    basket: '',
    updateBasket: () => null
})

const BasketProvider = ({children}) => {
    [basket, setBasket] = useState ('')

    return (
        <BasketContext.Provider value={{basket, setBasket: updateBasket}}>
            {children}
        </BasketContext.Provider>

    )
}