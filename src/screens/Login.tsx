import React from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { RouteConstants } from '../navigation/navigation-types'

const Login: React.FC = () => {
    const { setUser } = useUser()
    const navigate = useNavigate()

    const openListAsOwner = () => {
        setUser({ id: '2', name: 'Test user' })
        navigate(RouteConstants.home)
    }

    return (
        <div className='flex w-full justify-evenly p-6'>
            <div
                className='w-64 h-64 shadow-xl text-xl justify-center flex items-center cursor-pointer hover:shadow-inner rounded-lg'
                onClick={openListAsOwner}
            >
                Mock login
            </div>
        </div>
    )
}

export default Login
