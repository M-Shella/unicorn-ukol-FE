import React from 'react'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = React.useState(() => {
        const existingPreference = window.localStorage.getItem('darkMode')
        return existingPreference ? JSON.parse(existingPreference) : false
    })

    const handleToggle = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.body.classList.add('dark')
            document.documentElement.classList.add('dark')
            window.localStorage.setItem('darkMode', 'true')
        } else {
            document.body.classList.remove('dark')
            document.documentElement.classList.remove('dark')
            window.localStorage.setItem('darkMode', 'false')
        }
    }

    return (
        <button className='text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300' onClick={handleToggle}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}

export default DarkModeToggle
