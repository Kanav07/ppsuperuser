import React, { useState } from 'react';
import './app.css'; // Import the CSS file for styling
import Lottie from "lottie-react";
import RewardsAnimation from "../../Assets/animations/rewards.json";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const BenefitCard = () => {


    return (
        <div className="benefit-cards-container">
            {/* <Link to="/benefits"> */}
                <div className={`benefit-card know-benefits`}>
                    <h5>Know Your Benefits <FaArrowRight /></h5>
                    {/* <Lottie animationData={YenDance} loop={true} /> */}

                </div>
            {/* </Link> */}
            {/* <Link to="/rewards/redeem"> */}
                <div className={`benefit-card redeem-rewards`}>
                    <h5>Redeem Rewards <FaArrowRight /></h5>
                    <Lottie animationData={RewardsAnimation} loop={true} />

                </div>
            {/* </Link> */}

        </div>
    );
};

export default BenefitCard;
