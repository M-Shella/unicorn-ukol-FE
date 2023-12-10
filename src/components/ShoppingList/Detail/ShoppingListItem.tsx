import React from 'react'
import { Product } from '../../../types/Product'
import Button from '../../common/Button'
import { useTranslation } from 'react-i18next'

interface ShoppingListItemProps {
    product: Product
    onRemoveItem: (id: string) => void
    onMarkItemAsResolved: (id: string) => void
}

export const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
    product,
    onRemoveItem,
    onMarkItemAsResolved,
}: ShoppingListItemProps) => {
    const { t } = useTranslation()

    return (
        <li
            className={`flex justify-between gap-x-6 p-3 ${
                product.isResolved ? 'bg-indigo-50 dark:bg-gray-800' : 'dark:bg-gray-700'
            }`}
        >
            <div className={`flex min-w-0 gap-x-4 ${product.isResolved && 'line-through text-gray-400'}`}>{product.name}</div>
            <div className='shrink-0 flex items-end'>
                <Button size='sm' color='danger' onClick={() => onRemoveItem(product.id)}>
                    {t('common.delete')}
                </Button>
                <div className='ml-3 flex h-6 items-center'>
                    <input
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer'
                        checked={product.isResolved}
                        onChange={() => onMarkItemAsResolved(product.id)}
                    />
                </div>
            </div>
        </li>
    )
}

export default ShoppingListItem
