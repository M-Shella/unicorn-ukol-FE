import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RouteConstants } from '../../navigation/navigation-types'
import { useUser } from '../../context/UserContext'
import LanguageSwitcher from '../common/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import DarkModeToggle from '../common/DarkModeToggle'

const menuItems = [
    {
        name: 'home',
        to: RouteConstants.home,
    },
]

const translationPrefix = 'navbar.'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const location = useLocation()
    const { user } = useUser()
    const { t } = useTranslation()

    return (
        <nav className=' dark:bg-gray-800 bg-gray-50'>
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className=''>
                    <div className='flex h-16 items-center justify-between px-4 sm:px-0'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0 text-3xl'>
                                <Link to={RouteConstants.home}>🦄</Link>
                            </div>
                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    {menuItems.map((item) => {
                                        const isActive = location.pathname === item.to
                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className={`text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium ${
                                                    isActive
                                                        ? 'dark:bg-gray-900 bg-gray-300'
                                                        : 'dark:bg-gray-800 dark:hover:bg-gray-700 bg-gray-50 hover:bg-gray-200'
                                                }`}
                                            >
                                                {t(translationPrefix + item.name)}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center md:ml-6 dark:text-gray-100 text-gray-800 gap-3'>
                                <DarkModeToggle />
                                <LanguageSwitcher />
                                {user?.name}
                            </div>
                        </div>
                        <div className='-mr-2 flex md:hidden gap-3 items-center'>
                            <DarkModeToggle />
                            <LanguageSwitcher />
                            <p className='text-gray-100'>{user?.name}</p>
                            <button
                                type='button'
                                className='relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg
                                    className='block h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                    />
                                </svg>
                                <svg
                                    className='hidden h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className='border-b border-gray-700 md:hidden'>
                    <div className='space-y-1 px-2 py-3 sm:px-3 '>
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.to
                            return (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={`${
                                        isActive ? 'bg-gray-900' : 'bg-gray-800 hover:bg-gray-700'
                                    } text-white block px-3 py-2 rounded-md text-base font-medium`}
                                >
                                    {t(translationPrefix + item.name)}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
