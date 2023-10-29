import React from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { RouteConstants } from '../navigation/navigation-types'

const Home: React.FC = () => {
    const { setUser } = useUser()
    const navigate = useNavigate()

    const openListAsOwner = () => {
        setUser({ id: '2', name: 'List Owner' })
        navigate(RouteConstants.list + '/1')
    }

    const openListAsMember = () => {
        setUser({ id: '3', name: 'List Member' })
        navigate(RouteConstants.list + '/1')
    }

    return (
        <div className='flex w-full justify-evenly p-6'>
            <div
                className='w-64 h-64 shadow-xl text-xl justify-center flex items-center cursor-pointer hover:shadow-inner rounded-lg'
                onClick={openListAsOwner}
            >
                Open List as Owner
            </div>
            <div
                className='w-64 h-64 shadow-xl text-xl justify-center flex items-center cursor-pointer hover:shadow-inner rounded-lg'
                onClick={openListAsMember}
            >
                Open List as Member
            </div>
        </div>
    )
}

export default Home
