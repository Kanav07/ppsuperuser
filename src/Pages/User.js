import '../styles/common.scss';
import PpCard from '../Components/PpCard/index';
import PpAccordion from '../Components/PpAccordion/index';
import CardList from '../Components/CardList';
import Portfolio from '../Components/Portfolio'
import SuperUserLogoGray from '../Assets/images/superuser-logo-grayscale.png' 
import StepProgressBar from "../Components/StepProgressBar.js"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SuperUserLogo from '../Assets/images/superuser-logo.png'
import SuperUserLogoCopy from '../Assets/images/superuser-logo copy.png'

const PopupImage = ({ imageUrl, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <img src={imageUrl} alt="Popup" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


function User() {
  const navigate = useNavigate();
  const [superuserScore, setSuperuserScore] = useState(75);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the score has reached 100
    if (superuserScore >= 100) {
      // Set showPopup to true to display the popup image
      setTimeout(() => {
        setShowPopup(true);
      }, 100);
      setTimeout(() => {
        navigate('/superuser');
      }, 2000);
    }
  }, [superuserScore]);

  const userData = {
    "balance": 12500,
    "wallet": 9500,
    "giftVouchers": 3,
    "insurance": 0,
    "bank": 10000,
    "securities": 0,
    "creditCards": [{"name": "PayPay bank", "balance": 22000}]
  }

  function handleScoreupdate () {
    setSuperuserScore(superuserScore + 10)
  }

  function handleOnClose (){
    setShowPopup(false)
  }

    return (
      <div className="appContents">
        <div>
        <span className='supertext-normal'>スーパー</span>
        <img  className='superuser-logo' src={showPopup ? SuperUserLogo : SuperUserLogoGray} alt='superuser-logo'/>
        <span className='supertext-normal'>ユーザー</span>
        </div>
        <PpCard>
          <PpCard> <StepProgressBar amount={superuserScore} /></PpCard>
          <br/>
          <h3>Increase your Superscore!</h3>
          <CardList onScoreUpdate={handleScoreupdate} />
          <div className='width-full'>
            <br />
            <PpAccordion title="Super Portfolio">
            <Portfolio userData={userData}></Portfolio>
            </PpAccordion>
          </div>
        </PpCard>
        {showPopup && <PopupImage imageUrl={SuperUserLogoCopy} onClose={handleOnClose} />}
      </div>
    );
  }
  
  export default User;