import React from 'react';
import Lottie from 'react-lottie';
import heartbeatAnimation from './lottie/heartbeat.json';
import stepAnimation from './lottie/footstep.json';

const HeartbeatIndicator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: heartbeatAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={140} width={160} />
      {/* <p style={{marginLeft:"10px"}}>Heart Rate</p> */}
    </div>
  );
}

const StepIndicator = () => {
  const stepOptions = {
    loop: true,
    autoplay: true, 
    animationData: stepAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={stepOptions} height={140} width={160} />
      {/* <p>Steps</p> */}
    </div>
  );
}

export { HeartbeatIndicator, StepIndicator };
