import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ShoppingList from '../components/ShoppingList/Detail/ShoppingList'
import toast from 'react-hot-toast'
import { useUser } from '../context/UserContext'
import ShoppingListHeader from '../components/ShoppingList/Detail/ShoppingListHeader'
import { User } from '../types/User'
import { isUserMemberOfList, isUserOwnerOfList } from '../utils/list-utils'
import ShoppingListMembers from '../components/ShoppingList/Detail/ShoppingListMembers'
import { useShoppingLists } from '../context/ShoppingListContext'
import { useTranslation } from 'react-i18next'

const translationPrefixLists = 'lists.'
const translationPrefixProducts = 'products.'
const translationPrefixUsers = 'users.'

const ListDetail = () => {
    const { id } = useParams()
    const { user } = useUser()
    const { getListById, updateList } = useShoppingLists()
    const list = getListById(id ?? '')
    const [showOnlyResolved, setShowOnlyResolved] = useState(false)
    const { t } = useTranslation()

    if (!list || !id) {
        return <div>{t(translationPrefixLists + 'notFound')}</div>
    }

    const displayedList = showOnlyResolved
        ? { ...list, products: list?.products.filter((product) => !product.isResolved) ?? [] }
        : list

    if (!user) {
        return <div>{t(translationPrefixLists + 'pleaseLogin')}</div>
    }

    if (!isUserMemberOfList(list, user.id) && !isUserOwnerOfList(list, user.id))
        return <div>{t(translationPrefixLists + 'notMember')}</div>

    const onRemoveItem = (id: string) => {
        const newList = { ...list, products: list.products.filter((product) => product.id !== id) }
        updateList(id, newList)
        toast.success(t(translationPrefixProducts + 'removed'))
    }

    const onMarkItemAsResolved = (productId: string) => {
        const newList = {
            ...list,
            products: list.products.map((product) => {
                if (product.id === productId) {
                    return { ...product, isResolved: !product.isResolved }
                }
                return product
            }),
        }
        updateList(id, newList)
        toast.success(t(translationPrefixProducts + 'statusChanged'))
    }

    const onAddItem = (name: string) => {
        const newList = { ...list, products: [...list.products, { id: Date.now().toString(), name, isResolved: false }] }
        updateList(id, newList)
        toast.success(t(translationPrefixProducts + 'added'))
    }

    const onAddMemberToList = (newMemberName: string) => {
        const newMember: User = {
            id: Date.now().toString(),
            name: newMemberName,
        }
        const newList = { ...list, members: [...list.members, newMember] }
        updateList(id, newList)
        toast.success(t(translationPrefixUsers + 'added'))
    }

    const onRemoveMemberFromList = (id: string) => {
        const newList = { ...list, members: list.members.filter((member) => member.id !== id) }
        updateList(id, newList)
        toast.success(t(translationPrefixUsers + 'removed'))
    }

    const onRenameList = (newListName: string) => {
        if (list && newListName !== '') {
            updateList(id, { ...list, name: newListName })
            toast.success(t(translationPrefixLists + 'renamed'))
        }
    }

    return (
        <div className='dark:text-gray-100'>
            <ShoppingListHeader
                list={list}
                user={user}
                onAddItem={onAddItem}
                onRenameList={onRenameList}
                onRemoveMemberFromList={onRemoveMemberFromList}
                showOnlyResolved={showOnlyResolved}
                setShowOnlyResolved={setShowOnlyResolved}
            />

            <ShoppingList
                items={displayedList.products}
                onRemoveItem={onRemoveItem}
                onMarkItemAsResolved={onMarkItemAsResolved}
            />

            {isUserOwnerOfList(list, user?.id ?? '') && (
                <ShoppingListMembers
                    list={list}
                    onAddMemberToList={onAddMemberToList}
                    onRemoveMemberFromList={onRemoveMemberFromList}
                />
            )}
        </div>
    )
}

export default ListDetail
