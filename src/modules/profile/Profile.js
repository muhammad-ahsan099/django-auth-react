import { Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '../../common/localStorage/LocalStorage'
import { endPoint } from '../../config/Config'
import { AppContext } from '../../State'

export default function Profile() {
    const { state, dispatch } = useContext(AppContext)
    const navigate = useNavigate()
    const userData = state.userProfile
    const ctaLogoutHandler = () => {
        removeToken()
        dispatch({
            type: "setAuthState",
            payload: {
                authState: false,
                access_token: null,
            }
        })
        navigate('/login')
        window.reload()
    }
    return (
        <Grid container sx={{ paddingTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item sm={10} md={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Dashboard</h1>
                    <Typography variant='h5'>Email: {userData?.email}</Typography>
                    <Typography variant='h6'>Name: {userData?.name}</Typography>
                    <Button variant='contained' size='large' sx={{ mt: 8, backgroundColor: '#1E86FF' }} onClick={() => ctaLogoutHandler()}>Logout</Button>
                </div>
            </Grid>
        </Grid>
    )
}
