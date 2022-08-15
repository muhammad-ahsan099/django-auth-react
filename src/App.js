import React, { useContext, useEffect, useState } from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from './navigation/Navigation';
import ScrollToTop from './navigation/ScrollToTop';
import SplashScreen from './common/splash/SplashScreen';
import { getToken } from './common/localStorage/LocalStorage';
import { endPoint } from './config/Config';
import axios from 'axios';
import { AppContext } from './State';

function App() {
  const [loading, setLoading] = useState(true)
  const history = createBrowserHistory({ window });
  const { dispatch } = useContext(AppContext)
  const fetchProfile = async () => {
    const { access_token } = getToken()
    let request = {
      method: 'get',
      url: `${endPoint}profile/`,
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${access_token}`,
      }
    };
    try {
      let res = await axios(request);
      if (res.data) {
        dispatch({
          type: "USER_PROFILE",
          payload: {
            profile: res.data
          },
        });
      }
    } catch (err) {
      <></>
    }
  }

  useEffect(() => {
    fetchProfile()
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, [])
  return (
    <div className='App'>
      {
        loading ?
          <SplashScreen />
          :
          <HistoryRouter history={history}>
            <ScrollToTop />
            <Navigation />
          </HistoryRouter>
      }
      <ToastContainer />
    </div>
  );
}

export default App;
