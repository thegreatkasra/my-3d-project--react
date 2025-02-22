import React from 'react';
import Spline from '@splinetool/react-spline';
import './ThreeModel.css'

const ThreeModel = () => {
  return (
    <div className='spline--container'>
      <Spline className='spline' scene="https://prod.spline.design/cFuXM5cI7uPgLLpL/scene.splinecode" />
    </div>
  );
}
export default ThreeModel;
