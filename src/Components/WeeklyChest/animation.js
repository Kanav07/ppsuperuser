import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './progress.json';

const MyLottieComponent = () => {
    const [isStopped, setIsStopped] = useState(true);
    const [isPaused, setIsPaused] = useState(true);

    const playAnimation = () => {
        setIsStopped(false);
        setIsPaused(false);
    };

    const pauseAnimation = () => {
        setIsPaused(true);
    };

    const stopAnimation = () => {
        setIsStopped(true);
    };

    return (
        <div>
            <Lottie
                animationData={animationData}
                isStopped={isStopped}
                isPaused={isPaused}
            />
            <button onClick={playAnimation}>Play</button>
            <button onClick={pauseAnimation}>Pause</button>
            <button onClick={stopAnimation}>Stop</button>
        </div>
    );
};

export default MyLottieComponent;