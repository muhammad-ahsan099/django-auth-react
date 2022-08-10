import React, {useState} from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navigation from './navigation/Navigation';
import ScrollToTop from './navigation/ScrollToTop';
import SplashScreen from './common/splash/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true)
  const history = createBrowserHistory({ window });
  setTimeout(function () {
    setLoading(false);
  }, 1000);
  return (
    <div className='App'>
      {
        loading ? 
          <SplashScreen />
          :
          <HistoryRouter history={history}>
            {/* <Router> */}
            <ScrollToTop />
            <Navigation />
            {/* </Router> */}
          </HistoryRouter>
      }

      {/* <SampleDataFetch /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
