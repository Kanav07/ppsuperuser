// TreasureChest.js
import React from 'react';
import './TreasureChest.css';

import Lottie from "lottie-react";
import ChestAnimation from "./lottie-chest.json";
import GiftBox from '../../Assets/animations/gift-box.json'


const TreasureChest = () => {
  return (
    <div className="treasure-chest-container">
        {/*<h4>Weekly Chest</h4>*/}

    <Lottie animationData={ChestAnimation} loop={true} />

    {/*<Lottie animationData={GiftBox} loop={true} />*/}
      {/* <div className="treasure-chest">
        <div className="lid"></div>
        <div className="base"></div>
      </div>
      <div className="shine"></div> */}
    </div>
  );
};

export default TreasureChest;
