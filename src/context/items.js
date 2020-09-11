import React, { createContext, useState } from 'react'



export const ItemContext = createContext({
    item: '',
    updateItem: () => null
})

const ItemProvider = ({children}) => {
    const [item, setItem] = useState ('')

    return(
        <ItemContext.provider value={{item, updateItem :setItem }}>
            {children}
        </ItemContext.provider>
    )
}

export default ItemProvider