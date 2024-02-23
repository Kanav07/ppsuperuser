import React, { useState } from 'react';
import './app.css'; // Import the CSS file for styling
import Lottie from "lottie-react";
import RewardsAnimation from "../../Assets/animations/rewards.json";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import YenIcon from '../../Assets/icons/yen.png'
import CouponIcon from '../../Assets/icons/coupons.png'
import PiggyBankIcon from '../../Assets/icons/piggy-bank.png'




const BenefitsEarned = () => {


    return (
        <div className="benefit-earned-container">
            <div className="header">
                <h4>
                    Superuser benefits <br /> you enjoyed
                </h4>
                <p>since 13 November 2023</p>
            </div>
            <hr/>
            <div className="benefit">
                {/* <div className="icon-container"> */}
                    {/* <FontAwesomeIcon icon={faTruckFast} size="2x" /> */}
                    <img src={YenIcon} className='benefit-icon' />
                {/* </div> */}
                <div className="content">
                    <h6>You Earned</h6>
                    <p>¥7,258 additional cashback received</p>
                </div>
            </div>
            <div className="benefit">
                {/* <div className="icon-container">
                     <FontAwesomeIcon icon={faGift} size="2x" /> 
                </div> */}
                <img src={CouponIcon} className='benefit-icon' />
                <div className="content">
                    <h6>You Received</h6>
                    <p>25 special coupons from merchants</p>
                </div>
            </div>
            {/* <div className="benefit">
                
                <div className="content">
                    <h3>YOU WATCHED</h3>
                    <p>47 Hours of Movies and Shows</p>
                </div>
            </div> */}
            <div className="benefit">
                
                <img src={PiggyBankIcon} className='benefit-icon' />
                <div className="content">
                    <h6>Fee Saved</h6>
                    <p>¥5674 across services</p>
                </div>
            </div>
            <div className="unused-benefits">
                <h6>You have unused benefits</h6>
                <p><b>Recurring Coupons</b>:  Register for recurring coupons for stores you frequently visit</p>
            </div>
            {/* <div className="your-benefits">
                <h3>Your Benefits</h3>
                <ul>
                    <li>Free 1-day delivery</li>
                    <li>Unlimited one-day delivery on 40 lac+ products</li>
                </ul>
            </div> */}

        </div>
    );
};

export default BenefitsEarned;
