// ShoppingListOverview.tsx
import React, { useState } from 'react'
import { List } from '../types/List'
import Modal from '../components/common/Modal'
import AddShoppingListForm from '../components/ShoppingList/Overview/AddShoppingListForm'
import { useUser } from '../context/UserContext'
import toast from 'react-hot-toast'
import { useShoppingLists } from '../context/ShoppingListContext'
import ShoppingListCard from '../components/ShoppingList/Overview/ShoppingListCard'
import Button from '../components/common/Button'

const ListOverview: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const { user } = useUser()
    const { getListsByUserId, setLists } = useShoppingLists()
    const lists = getListsByUserId(user?.id ?? '')

    const handleAddList = (newListData: { listName: string }) => {
        const newId = `list-${new Date().getTime()}`

        if (!user) {
            toast.error('You need to be logged in to create a new list')
            return
        }

        const newList: List = {
            id: newId,
            name: newListData.listName,
            members: [user],
            owner: user,
            products: [],
        }

        setLists([...lists, newList])
        setShowModal(false)
        toast.success('List created')
    }

    const handleDeleteList = (listId: string) => {
        setLists(lists.filter((list) => list.id !== listId))
        toast.success('List deleted')
    }

    return (
        <div className='flex flex-col gap-3 p-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Your lists</h2>
                <Button size='lg' color='primary' onClick={() => setShowModal(true)}>
                    Add New List
                </Button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
                {lists.map((list) => (
                    <ShoppingListCard
                        key={list.id}
                        list={list}
                        onDeleteList={handleDeleteList}
                        isOwner={list.owner.id === user?.id}
                    />
                ))}
            </div>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddShoppingListForm onFormSubmit={handleAddList} onClose={() => setShowModal(false)} />
                </Modal>
            )}
        </div>
    )
}

export default ListOverview
