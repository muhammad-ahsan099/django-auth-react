import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getToken } from '../../common/localStorage/LocalStorage';
import { ToastError, ToastSuccess, ToastWarning } from '../../common/toastMessage/ToastMessage';
import { endPoint } from '../../config/Config';
import { AppContext } from '../../State';

export const UseUsers = () => {
    const { state, dispatch } = useContext(AppContext)
    let users = state?.users
    const [open, setOpen] = useState(false)
    const [userId, setUserId] = useState('')
    const [updateModal, setUpdateModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const userData = state.userProfile
    const { access_token } = getToken()
    const [values, setValues] = useState({
        name: '',
        email: '',
        isAdmin: userData?.role,
        isActive: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const deleteModalHandler = (id) => {
        setOpen(!open)
        setUserId(id);
    }
    const deleteHandler = async () => {
        setOpen(false)
        const id = userId
        let request = {
            method: 'delete',
            url: `${endPoint}users/${id}/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
        };
        try {
            let res = await axios(request);
            if (res.data) {
                dispatch({
                    type: "DELETE_USER",
                    payload: {
                        delId: userId
                    },
                });
                ToastSuccess(`${res.data.msg}`)
                setUserId('')
            }
        } catch (error) {
            ToastError(error?.response?.data?.errors?.msg)        }
    }
    const showUpdateModal = (row) => {
        if (!updateModal) {
            setUpdateModal(true)
            setUserId(row?.id)
            setValues({
                ...values,
                name: row?.name,
                email: row?.email,
                isAdmin: row?.is_admin,
                isActive: row?.is_active
            });
        }
    }
    const updateHandler = async () => {
        if (values?.name === '') {
            ToastWarning('Name required')
        }
        else if (values?.email === '') {
            ToastWarning('Email required')
        }
        else {
            const creds = {
                email: values.email,
                name: values.name,
                is_active: values.isActive,
                is_admin: values.isAdmin,
                id: userId
            }
            let request = {
                method: 'put',
                url: `${endPoint}users/${creds?.id}/`,
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${access_token}`,
                },
                data: creds
            };
            try {
                let res = await axios(request);
                if (res.data) {
                    dispatch({
                        type: "UPDATE_USER",
                        payload: {
                            user: res.data
                        },
                    });
                    ToastSuccess(`${res.data.msg}`)
                    setUserId('')
                }
            } catch (error) {
                ToastError(error?.response?.data?.errors?.msg) 
            }
            finally {
                setUpdateModal(false)
            }
        }
    }

    const fetchUsers = async () => {
        let request = {
            method: 'get',
            url: `${endPoint}users/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            }
        };
        try {
            let res = await axios(request);
            if (res.data) {
                dispatch({
                    type: "GET_USERS",
                    payload: {
                        users: res.data
                    },
                });
            }
        } catch (err) {
            <></>
        }

    }
    setTimeout(function () {
        setLoading(false);
      }, 1000);
    useEffect(() => {
        fetchUsers()
    }, [])

    return [{ users, userData, values, loading, open, setOpen, deleteHandler, updateModal, setUpdateModal, deleteModalHandler, updateHandler, showUpdateModal, handleChange, updateHandler }]
}
