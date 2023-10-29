import React from 'react'
import './index.css'
import MainNavigation from './navigation/MainNavigation'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/UserContext'

function App() {
    return (
        <UserProvider>
            <Toaster position='bottom-left' />
            <MainNavigation />
        </UserProvider>
    )
}

export default App
