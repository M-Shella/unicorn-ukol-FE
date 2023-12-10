import React from 'react'
import Navbar from './Navbar'

interface LayoutProps {
    children: React.ReactNode
}

const LayoutWrapper: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <>
            <div className='min-h-full'>
                <div className='bg-gray-800 pb-32 dark:bg-gray-200'>
                    <Navbar />
                </div>

                <main className='-mt-28'>
                    <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
                        <div className='rounded-lg dark:bg-gray-900 bg-gray-50 px-5 py-6 shadow sm:px-6'>{children}</div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default LayoutWrapper
