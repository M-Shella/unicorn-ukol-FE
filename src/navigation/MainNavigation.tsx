import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteConstants, RouteParameters } from './navigation-types'
import ListDetail from '../screens/ListDetail'
import LayoutWrapper from '../components/Layout/LayoutWrapper'
import ListOverview from '../screens/ListOverview'
import ProtectedRoutes from './ProtectedRoutes'
import Login from '../screens/Login'

const MainNavigation: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Will be used for login */}
                <Route path={RouteConstants.login} element={<Login />} />
                <Route
                    path='*'
                    element={
                        <ProtectedRoutes>
                            <LayoutWrapper>
                                <Routes>
                                    <Route path={RouteConstants.home} element={<ListOverview />} />
                                    <Route path={RouteConstants.list + RouteParameters.id} element={<ListDetail />} />
                                </Routes>
                            </LayoutWrapper>
                        </ProtectedRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation
