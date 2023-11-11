import React, { useEffect, useRef, useState } from 'react'
import { List } from '../../../types/List'
import { User } from '../../../types/User'
import { isUserOwnerOfList } from '../../../utils/list-utils'
import Button from '../../common/Button'

interface ShoppingListHeaderProps {
    list: List
    user: User | null
    showOnlyResolved: boolean
    onAddItem: (name: string) => void
    onRenameList: (name: string) => void
    onRemoveMemberFromList: (id: string) => void
    setShowOnlyResolved: (showOnlyResolved: boolean) => void
}

export const ShoppingListHeader: React.FC<ShoppingListHeaderProps> = ({
    user,
    list,
    showOnlyResolved,
    onAddItem,
    onRenameList,
    onRemoveMemberFromList,
    setShowOnlyResolved,
}: ShoppingListHeaderProps) => {
    const [newListName, setNewListName] = useState(list.name)
    const [isEditingListName, setIsEditingListName] = useState(false)
    const [newItemName, setNewItemName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (isEditingListName) {
            inputRef.current?.focus()
        }
    }, [isEditingListName])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewListName(e.target.value)
    }

    const handleRenameList = () => {
        onRenameList(newListName)
        setIsEditingListName(false)
    }

    const handleAddItem = () => {
        onAddItem(newItemName)
        setNewItemName('')
    }

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex w-full justify-between'>
                <div className='flex'>
                    {isEditingListName && (
                        <input
                            ref={inputRef}
                            type='text'
                            value={newListName}
                            onChange={handleNameChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleRenameList()}
                            size={newListName.length > 0 ? newListName.length : 1}
                            style={{ fontSize: '1.5rem', lineHeight: '2rem' }}
                        />
                    )}

                    <h1 className='text-2xl'>
                        {isEditingListName ? ' ' : list.name}
                        {isUserOwnerOfList(list, user?.id ?? '') && (
                            <Button
                                size='lg'
                                onClick={() => {
                                    if (!isEditingListName) {
                                        setIsEditingListName(true)
                                    } else {
                                        handleRenameList()
                                    }
                                }}
                            >
                                {isEditingListName ? 'Confirm' : 'Edit'}
                            </Button>
                        )}
                    </h1>
                </div>
                <Button color='danger' onClick={() => onRemoveMemberFromList(user?.id ?? '')}>
                    Leave list
                </Button>
            </div>
            <div className='flex gap-3'>
                <input
                    className='
                        border
                        border-gray-300
                        rounded-md
                        shadow-sm
                        py-1
                        px-4
                        sm:text-sm
                    '
                    type='text'
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder='Product name'
                />
                <button onClick={handleAddItem}>Add product</button>
            </div>

            <div className='flex gap-3'>
                Show only unresolved
                <button
                    type='button'
                    className={`${
                        showOnlyResolved ? 'bg-indigo-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
                    role='switch'
                    aria-checked={showOnlyResolved}
                    onClick={() => setShowOnlyResolved(!showOnlyResolved)}
                >
                    <span className='sr-only'>Show only resolved</span>
                    <span
                        aria-hidden='true'
                        className={`${
                            showOnlyResolved ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                    ></span>
                </button>
            </div>
        </div>
    )
}

export default ShoppingListHeader
