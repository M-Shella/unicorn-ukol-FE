import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteConstants, RouteParameters } from './navigation-types'
import Home from '../screens/Home'
import ListDetail from '../screens/ListDetail'
import LayoutWrapper from '../components/Layout/LayoutWrapper'

const MainNavigation: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Will be used for login */}
                {/* <Route path={RouteConstants.login} element={<Login />} /> */}
                <Route
                    path='*'
                    element={
                        <>
                            <LayoutWrapper>
                                <Routes>
                                    <Route path={RouteConstants.home} element={<Home />} />
                                    <Route path={RouteConstants.list + RouteParameters.id} element={<ListDetail />} />
                                </Routes>
                            </LayoutWrapper>
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation
