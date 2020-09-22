import React, { createContext, useState } from 'react'
import ItemList from '../pages/home/items-list'



export const ItemContext = createContext({
    item: {},
    updateItem: () => null
})

const ItemProvider = ({children}) => {
    const [item, setItem] = useState ({ItemList})

    return(
        <ItemContext.Provider value={{item, updateItem :setItem }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider