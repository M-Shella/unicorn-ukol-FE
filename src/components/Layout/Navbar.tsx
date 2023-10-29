import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { RouteConstants } from '../../navigation/navigation-types'

const menuItems = [
    {
        name: 'Home',
        to: RouteConstants.home,
    },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const location = useLocation()

    return (
        <nav className='bg-gray-800'>
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='border-b border-gray-700'>
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
                                                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                                                    isActive ? 'border-b-2 border-white' : ''
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center md:ml-6 text-gray-100'>Matej Sela</div>
                        </div>
                        <div className='-mr-2 flex md:hidden'>
                            <button
                                type='button'
                                className='relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg
                                    className='block h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                    />
                                </svg>
                                <svg
                                    className='hidden h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
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
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
