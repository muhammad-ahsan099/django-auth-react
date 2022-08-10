import React from 'react';
import { CircleSpinner } from 'react-spinners-kit';
import { colors } from '../../constants/Color';
import './splash.css';
export default function SplashScreen() {
  return (
    <div className='body'>
      <div className='loading'>
        <div >
          <CircleSpinner size={30} color={colors.lightBlue} />
        </div>
      </div>
    </div>
  );
}
