import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { ToastError, ToastSuccess } from '../../../common/toastMessage/ToastMessage';
import { endPoint } from '../../../config/Config';
import { useNavigate } from 'react-router-dom';
import { getToken, storeToken } from '../../../common/localStorage/LocalStorage';
import { AppContext } from '../../../State';

export default function UseLogin() {
  const { state, dispatch } = useContext(AppContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    emailTyping: false,
    passwordTyping: false,
    showPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [server_error, setServerError] = useState({})

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const loginHandler = async () => {
    const creds = {
      email: email,
      password: values.password,
    }
    let request = {
      method: 'post',
      url: `${endPoint}login/`,
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
    }
    catch (error) {
      if (error?.response.data?.errors?.non_field_errors) {
        ToastError(error.response.data.errors.non_field_errors[0])
      }
      setServerError(error?.response?.data?.errors)
    }
    finally {
      setLoading(false)
    }
  }

  // Get Loged User on Refresh 
  useEffect(() => {
    let { access_token } = getToken()
    if (access_token) {
      dispatch({
        type: "setAuthState",
        payload: {
          access_token: access_token,
          authState: true
        },
      });
      navigate('/')
    }
  }, [])


  return [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, showPassword, loginHandler, server_error }]
}