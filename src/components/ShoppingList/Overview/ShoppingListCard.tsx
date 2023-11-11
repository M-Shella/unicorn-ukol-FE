import React from 'react'
import { RouteConstants } from '../../../navigation/navigation-types'
import { List } from '../../../types/List'
import Button from '../../common/Button'
import { useNavigate } from 'react-router-dom'

interface ShoppingListCardProps {
    list: List
    onDeleteList: (listId: string) => void
    isOwner: boolean
}

const ShoppingListCard: React.FC<ShoppingListCardProps> = ({ list, onDeleteList, isOwner }) => {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(RouteConstants.list + '/' + list.id)
    }

    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        onDeleteList(list.id)
    }

    return (
        <div
            className={`${
                isOwner ? 'bg-green-50' : 'bg-gray-100'
            } shadow-xl rounded-xl p-4 flex justify-between items-center gap-3 hover:shadow-inner cursor-pointer`}
            onClick={handleCardClick}
        >
            <div className='flex-1 min-w-0'>
                <h3 className='text-lg font-semibold truncate'>{list.name}</h3>
                {isOwner && (
                    <span className='text-xs font-semibold bg-green-500 rounded-full px-2 py-1 text-gray-100'>Owner</span>
                )}
            </div>
            <div className='flex-shrink-0 flex items-center gap-2'>
                <Button onClick={(e) => handleDeleteClick(e)} color='danger'>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default ShoppingListCard
