import React from 'react';
import Lottie from 'react-lottie';
import gaugeAnimation from './lottie/gauge-animation_.json';  
const GaugeWithAnimation = ({ percentage }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: gaugeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Lottie options={defaultOptions} height={160} width={190} />
      <h3 style={{ margin: '10px 0' }}>{percentage}%</h3>
    </div>
  );
};

export default GaugeWithAnimation;
