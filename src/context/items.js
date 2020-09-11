import React, { createContext, useState } from 'react'



export const ItemContext = createContext({
    item: '',
    updateItem: () => null
})

const ItemProvider = ({children}) => {
    const [item, setItem] = useState ('')

    return(
        <ItemContext.Provider value={{item, updateItem :setItem }}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider