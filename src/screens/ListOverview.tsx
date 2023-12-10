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
import ConfirmListDeletion from '../components/ShoppingList/Overview/ConfirmListDeletion'
import { useTranslation } from 'react-i18next'

const translationPrefix = 'lists.'

const ListOverview: React.FC = () => {
    const [showAddModal, setShowAddModal] = useState(false)
    const [showDeleteModalForId, setShowDeleteModalForId] = useState('')
    const { user } = useUser()
    const { getListsByUserId, setLists } = useShoppingLists()
    const lists = getListsByUserId(user?.id ?? '')
    const { t } = useTranslation()

    const handleAddList = (newListData: { listName: string }) => {
        const newId = `list-${new Date().getTime()}`

        if (!user) {
            toast.error(t(translationPrefix + 'unLogged'))
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
        setShowAddModal(false)
        toast.success(t(translationPrefix + 'created'))
    }

    const handleDeleteList = (listId: string) => {
        setLists(lists.filter((list) => list.id !== listId))
        setShowDeleteModalForId('')
        toast.success(t(translationPrefix + 'deleted'))
    }

    return (
        <div className='flex flex-col gap-3 p-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold dark:text-gray-100'>{t(translationPrefix + 'yourLists')}</h2>
                <Button size='lg' color='primary' onClick={() => setShowAddModal(true)}>
                    {t(translationPrefix + 'addList')}
                </Button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
                {lists.map((list) => (
                    <ShoppingListCard
                        key={list.id}
                        list={list}
                        onDeleteList={() => setShowDeleteModalForId(list.id)}
                        isOwner={list.owner.id === user?.id}
                    />
                ))}
            </div>

            {showAddModal && (
                <Modal onClose={() => setShowAddModal(false)}>
                    <AddShoppingListForm onFormSubmit={handleAddList} onClose={() => setShowAddModal(false)} />
                </Modal>
            )}

            {showDeleteModalForId && (
                <Modal onClose={() => setShowDeleteModalForId('')}>
                    <ConfirmListDeletion
                        onConfirmDeletion={() => handleDeleteList(showDeleteModalForId)}
                        onClose={() => setShowDeleteModalForId('')}
                    />
                </Modal>
            )}
        </div>
    )
}

export default ListOverview
