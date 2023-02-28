import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div>{greeting}</div>
            <ItemCount
                stock={5}
            />
        </>
    )
}

export default ItemListContainer