// Import necessary React components and styles if needed

import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import progress from "./progress.json"
import MyLottieComponent from "./animation";


const WeeklyChest = () => {



    useEffect(() => {

    }, []);

    return (
        <div>
            <div>
                <p>Unlock your weekly chest</p>
            </div>
            <div>
                <Lottie animationData={progress} loop={true} />
            </div>
            <div>
                <ul>
                    <li>
                        Make a transaction using PayPay worth 2000 or more
                    </li>
                    <li>
                        Renew your car insurance
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default WeeklyChest;
