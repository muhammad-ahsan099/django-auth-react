import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import ForgotPassword from '../modules/auth/forgotPassword/ForgotPassword';
import { PublicRouting } from './PublicRouting';
import { PrivateRouting } from './PrivateRouting';
import PageNotFound from '../common/PageNotFound';
import { AppContext } from '../State';
import Users from '../modules/users/Users';
import ResetPassword from '../modules/auth/resetPassword/ResetPassword';
import Profile from '../modules/profile/Profile';



export default function Navigation() {
    let location = useLocation();
    let navigate = useNavigate()
    const { state, dispatch } = useContext(AppContext);

    let authState = state.authState

    useEffect(() => {
        if (!authState) {
            navigate(location.pathname)
        }
    }, [])
    return (
        <>
            <Routes>
                <Route
                    path='/login'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <Login />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/signup'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <Signup />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/forgotPassword'
                    element={
                        <PublicRouting isAllowed={authState}>
                            <ForgotPassword />
                        </PublicRouting>
                    }
                />
                <Route
                    path="api/user/reset/:id/:token"
                    element={<ResetPassword />}
                />
                <Route
                    path='/:pageName'
                    element={<PageNotFound />
                    }
                />
                <Route
                    path='/'
                    element={
                        <PrivateRouting isAllowed={authState}>
                            <Users />
                        </PrivateRouting>
                    }
                />
                  <Route
                    path='/profile'
                    element={
                        <PrivateRouting isAllowed={authState}>
                            <Profile />
                        </PrivateRouting>
                    }
                />
            </Routes>
        </>
    );
}
