import React from 'react'
import toast from 'react-hot-toast'
import Navbar from './Navbar'

interface LayoutProps {
    children: React.ReactNode
}

const LayoutWrapper: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    const notify = () => toast.success('Here is your toast.')

    return (
        <>
            <div className='min-h-full'>
                <div className='bg-gray-800 pb-32'>
                    <Navbar />
                </div>

                <main className='-mt-28'>
                    <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
                        <div className='rounded-lg bg-white px-5 py-6 shadow sm:px-6'>
                            <button onClick={notify}>Make me a toast</button>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default LayoutWrapper
