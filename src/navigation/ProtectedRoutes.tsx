import { Navigate } from 'react-router-dom'
import { RouteConstants } from './navigation-types'
import { useUser } from '../context/UserContext'

export const ProtectedRoutes: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { user } = useUser()

    if (!user) {
        return <Navigate to={{ pathname: RouteConstants.login }} replace={true} />
    }

    return children
}

export default ProtectedRoutes
