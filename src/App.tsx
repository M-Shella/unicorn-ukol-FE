import React from 'react'
import './index.css'
import MainNavigation from './navigation/MainNavigation'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/UserContext'
import { ShoppingListsProvider } from './context/ShoppingListContext'

function App() {
    return (
        <UserProvider>
            <ShoppingListsProvider>
                <Toaster position='bottom-left' />
                <MainNavigation />
            </ShoppingListsProvider>
        </UserProvider>
    )
}

export default App
