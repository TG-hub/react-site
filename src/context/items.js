import React, { createContext } from 'react'

export default ItemProvider

export const itemContext = createContext({
    item: '',
    updateItem: () => null
})

const ItemProvider = ({children}) => {
    const [item, setItem] = useState ('')

    return(
        <itemContext.provider value={{item,updateItem :setItem }}>
            {children}
        </itemContext.provider>
    )
}

