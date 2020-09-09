import React from 'react'
import BasketProvider from './basket'
import ItemProvider from './items'


const ContextSource = ({children}) => {
    return (
        <>
        <BasketProvider>
            <ItemProvider>
                {children}
            </ItemProvider>
        </BasketProvider>
        </>
    )
}

export default ContextSource