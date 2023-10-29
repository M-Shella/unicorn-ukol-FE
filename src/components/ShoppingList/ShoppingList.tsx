import React from 'react'
import { Product } from '../../types/Product'
import ShoppingListItem from './ShoppingListItem'

interface ShoppingListProps {
    items: Product[]
    onRemoveItem: (id: string) => void
    onMarkItemAsResolved: (id: string) => void
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ items, onRemoveItem, onMarkItemAsResolved }: ShoppingListProps) => {
    return (
        <>
            <ul className='divide-y divide-gray-100 pt-3'>
                {items.map((item) => (
                    <ShoppingListItem
                        key={item.id}
                        product={item}
                        onRemoveItem={onRemoveItem}
                        onMarkItemAsResolved={onMarkItemAsResolved}
                    />
                ))}
            </ul>
        </>
    )
}

export default ShoppingList
