import React from 'react'
import './index.css'
import MainNavigation from './navigation/MainNavigation'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/UserContext'
import { ShoppingListsProvider } from './context/ShoppingListContext'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <UserProvider>
                <ShoppingListsProvider>
                    <Toaster position='bottom-left' />
                    <MainNavigation />
                </ShoppingListsProvider>
            </UserProvider>
        </I18nextProvider>
    )
}

export default App
