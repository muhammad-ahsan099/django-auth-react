import axios from 'axios';
import { useState} from 'react';
import { ToastError, ToastSuccess } from '../../../common/toastMessage/ToastMessage';
import { endPoint } from '../../../config/Config';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function UseResetPassword() {
  const { id, token } = useParams()
  const navigate = useNavigate();
  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
    passwordTyping: false,
    confirmPassTyping: false,
    showPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [server_error, setServerError] = useState({})
  const [loading, setLoading]= useState(false)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

  const resetHandler = async () => {
    const creds = {
      password: values.password,
      password2: values.confirmPassword
    }
    let request = {
      method: 'post',
      url: `${endPoint}reset-password/${id}/${token}/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: creds
    };
    try {
      setLoading(true)
      let res = await axios(request);
      if (res.data) {
        setTimeout(() => {
          navigate("/login")
        }, 3000)
        ToastSuccess(`${res.data.msg}`)
      }
    }
    catch (error) {
      if (error.response.data.errors.non_field_errors) {
        ToastError(error.response.data.errors.non_field_errors[0])
      }
      setServerError(error.response.data.errors)
    }finally{
      setLoading(false)
    }
  }
  return [{ values,loading, handleChange, handleClickShowPassword, passwordTyping, passwordTypingRemove,confirmPassTyping, confirmPassTypingRemove, showPassword, resetHandler, server_error }]
}