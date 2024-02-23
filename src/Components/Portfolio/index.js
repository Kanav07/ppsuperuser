import React from 'react';
import { FaWallet, FaGift, FaShieldAlt, FaUniversity, FaChartLine, FaCreditCard } from 'react-icons/fa';

const UserDashboard = ({ userData }) => {
  const getMotivationalMessage = (dataType) => {
    switch (dataType) {
      case 'insurance':
        return 'Get your 1st insurance!';
      case 'securities':
        return 'start NISA with PPsecurities';
      default:
        return 'Start investing to grow your wealth!';
  }
  };

  return (
    <div className="user-dashboard">
      {/* <div className="balance-section">
        <div className="balance">
          <span>Your Portfolio</span>
        </div>
      </div> */}

      <div className="portfolio-section">
        {userData.wallet > 0 && (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="brown" stroke-width="0" viewBox="0 0 512 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
            <span className="amount">¥{userData.wallet}</span>
            <span className='service-text'>Wallet</span>
          </div>
        )}

        {userData.giftVouchers > 0 && (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="maroon" stroke-width="0" viewBox="0 0 512 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path></svg>
            <span className="amount">{userData.giftVouchers}</span>
            <span className='service-text'>Gift Vouchers</span>
          </div>
        )}

        {userData.insurance > 0 ? (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 512 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg>
            <span className="amount">{userData.insurance}</span>
            <span className='service-text'>Insurances Active</span>
          </div>
        ) : (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg>
            <span className="amount">{userData.insurance}</span>
            <span className='service-text'>{getMotivationalMessage('insurance')}</span>
          </div>
        )}

      </div>
      <div className='portfolio-section'>

        {userData.bank > 0 && (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="dark-gray" stroke-width="0" viewBox="0 0 512 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg>
            <span className="amount">¥{userData.bank}</span>
            <span className='service-text'>Bank Balance</span>
          </div>
        )}

        {userData.securities > 0 ? (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="blue" stroke-width="0" viewBox="0 0 512 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>
            <span className="amount">{userData.securities}%</span>
            <span className='service-text'>Profit</span>
          </div>
        ) : (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>
            <span className='amount'>{userData.securities}%</span>
            <span className='service-text'>{getMotivationalMessage('securities')}</span>
          </div>
        )}

        {userData.creditCards && userData.creditCards.length > 0 && (
          <div className="portfolio-item large">
            <svg stroke="currentColor" fill="gold" stroke-width="0" viewBox="0 0 576 512" class="icon" height="40%" width="40%" xmlns="http://www.w3.org/2000/svg"><path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path></svg>
            
            <div className="credit-card-summary">
              {userData.creditCards.slice(0, 2).map((card, index) => (
                <div key={index} className="credit-card">
                  {/* <span className='card-name'>{card.name}</span> */}
                  <span className="amount">¥{card.balance}</span>
                  
                </div>
              ))}
              {userData.creditCards.length > 2 && (
                <p className="note">Click to view more</p>
              )}
              <span className='service-text'>Credit Card Balance</span>
            </div>
            
          </div>
        )}
      </div>
      <div className='last-refreshed'>Last Refreshed: 2 mins ago</div>
    </div>
  );
};

export default UserDashboard;
