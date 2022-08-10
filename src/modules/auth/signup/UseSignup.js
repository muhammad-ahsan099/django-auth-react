import { useState, useEffect, useContext } from 'react';
import { getToken, storeToken } from '../../../common/localStorage/LocalStorage';
import { endPoint } from '../../../config/Config';
import { AppContext } from '../../../State';
import { ToastError, ToastSuccess } from '../../../common/toastMessage/ToastMessage';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UseSignup() {

  const { state, dispatch } = useContext(AppContext)
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [termsCondition, setTermsCondition] = useState(false)
  const [loading, setLoading] = useState(false)
  const [server_error, setServerError] = useState({})
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    nameTyping: false,
    emailTyping: false,
    passwordTyping: false,
    confirmPassTyping: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const nameTyping = () => {
    setValues({ ...values, nameTyping: true });
  };
  const nameTypingRemove = () => {
    setValues({ ...values, nameTyping: false });

  }
  const emailTyping = () => {
    setValues({ ...values, emailTyping: true });
  };
  const emaiTypingRemove = () => {
    setValues({ ...values, emailTyping: false });
  }
  const passwordTyping = () => {
    setValues({ ...values, passwordTyping: true });
  }
  const passwordTypingRemove = () => {
    setValues({ ...values, passwordTyping: false });
  };
  const confirmPassTyping = () => {
    setValues({ ...values, confirmPassTyping: true });
  }
  const confirmPassTypingRemove = () => {
    setValues({ ...values, confirmPassTyping: false });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const signupHandler = async () => {
    const creds = {
      email: email,
      name: userName,
      password: values.password,
      password2: values.confirmPassword,
      tc: termsCondition
    }
    let request = {
      method: 'post',
      url: `${endPoint}register/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: creds
    };
    try {
      setLoading(true)
      let res = await axios(request);
      if (res.data) {
        storeToken(res.data.token)
        let { access_token } = getToken()
        dispatch({
          type: "setAuthState",
          payload: {
            access_token: access_token,
            authState: true
          },
        });
        navigate('/')
        ToastSuccess(`${res.data.msg}`)
      }
      if (res.error) {
        setServerError(res.error.data.errors)
      }
    }
    catch (error) {
      setServerError(error.response.data.errors)
      if (server_error.non_field_errors) {
        ToastError(server_error.non_field_errors[0])
      }
      else {
        ToastError(error.message)
      }
    }finally{
      setLoading(false)
    }
  }
  return [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, confirmPassTypingRemove, showPassword, nameTyping, nameTypingRemove, confirmPassTyping, userName, setUserName, signupHandler, setTermsCondition, server_error }]
}
