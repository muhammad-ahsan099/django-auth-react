import axios from 'axios';
import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { ToastError, ToastSuccess } from '../../../common/toastMessage/ToastMessage';
import { endPoint } from '../../../config/Config';

export default function UseForgotPassword() {

  const [email, setEmail] = useState('');
  const [emailTyping, setEmailTyping] = useState(false)
  const [loading, setLoading]= useState(false)

  const handleTyping = () => {
    setEmailTyping(true)
  }
  const handleRemoveTyping = () => {
    setEmailTyping(false)
  }

  const submitHandler = async () => {
    const creds = {
      email: email,
    }
    let request = {
      method: 'post',
      url: `${endPoint}send-reset-password-email/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: creds
    };
    try {
      setLoading(true)
      let res = await axios(request);
      if (res.data) {
        ToastSuccess(`${res.data.msg}`)
        setEmail('')
      }

    }
    catch (error) {
      if (error.response.data.errors.email) {
        ToastError(error.response.data.errors.email[0])
      }
      ToastError(error.response.data.errors.non_field_errors[0])
    }
    finally{
      setLoading(false)
    }
  } 
  return (
    [{ email, loading, setEmail, emailTyping, handleTyping, handleRemoveTyping ,submitHandler }]
  )
}
