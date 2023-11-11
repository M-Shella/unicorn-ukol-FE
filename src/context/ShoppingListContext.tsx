import React, { ReactNode, createContext, useContext, useState } from 'react'
import { mockLists } from '../mockData/lists'
import { List } from '../types/List'

interface IShoppingListsContext {
    lists: List[]
    setLists: React.Dispatch<React.SetStateAction<List[]>>
    getListsByUserId: (userId: string) => List[]
    getListById: (listId: string) => List | undefined
    updateList: (listId: string, updatedData: Partial<List>) => void
}

const ShoppingListsContext = createContext<IShoppingListsContext>({
    lists: [],
    setLists: () => {},
    getListsByUserId: () => [],
    getListById: () => undefined,
    updateList: () => {},
})

export const useShoppingLists = () => useContext(ShoppingListsContext)

interface ShoppingListsProviderProps {
    children: ReactNode
}

export const ShoppingListsProvider: React.FC<ShoppingListsProviderProps> = ({ children }) => {
    const [lists, setLists] = useState<List[]>(mockLists)

    const getListsByUserId = (userId: string) => {
        return lists.filter((list) => list.owner.id === userId || list.members.some((member) => member.id === userId))
    }

    const getListById = (listId: string) => {
        return lists.find((list) => list.id === listId)
    }

    const updateList = (listId: string, updatedData: Partial<List>) => {
        setLists((currentLists) => currentLists.map((list) => (list.id === listId ? { ...list, ...updatedData } : list)))
    }

    return (
        <ShoppingListsContext.Provider value={{ lists, setLists, getListsByUserId, getListById, updateList }}>
            {children}
        </ShoppingListsContext.Provider>
    )
}
