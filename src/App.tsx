import React from 'react'
import './index.css'
import MainNavigation from './navigation/MainNavigation'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <>
            <Toaster position='bottom-left' />
            <MainNavigation />
        </>
    )
}

export default App
