import './style.scss'

import p2p_transfer_image from "../../Assets/images/p2p_transfer.png"
import bill_payment_image from "../../Assets/images/bill_payment.png"
import car_insurance_image from "../../Assets/images/car_insurance.png"
import ski_insurance_image from "../../Assets/images/ski_insurance.png"
import link_ppbank_account_image from "../../Assets/images/link_ppbank_account.png"
import fund_transfer_image from "../../Assets/images/fund_transfer.png"
import investment_account_image from "../../Assets/images/investment_account.png"
import ppcard_sign_up_image from "../../Assets/images/ppcard_sign_up.png"

const Card = ({ data, onDismiss, onComplete }) => {

  const imageMapping = {
    "p2p_transfer" : p2p_transfer_image,
    "bill_payment" : bill_payment_image,
    "car_insurance" : car_insurance_image,
    "ski_insurance" : ski_insurance_image,
    "link_ppbank_account" : link_ppbank_account_image,
    "fund_transfer" : fund_transfer_image,
    "investment_account" : investment_account_image,
    "ppcard_sign_up" : ppcard_sign_up_image
    // Add more mappings as needed
  };

  const handleOnClick = () => {
    (data.action_type == 'p2p_transfer') ? window.location.href = data.url : onComplete()
  }

  const cardStyle = {
    border: '1px solid #ddd',
    margin: '20px',
    padding: '10px',
    position: 'relative',
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
  };


  return (
    <div className="pp-card" style={cardStyle}>
    <div>
    <button class="btn btn-outline-danger"
        style={{ position: 'absolute', left: '10px' }}
        onClick={onDismiss}
      >
        Later
      </button>
      <button class="btn btn-outline-success"
         style={{ position: 'absolute', right: '10px' }}
        onClick={handleOnClick}
      >
        + {data.action_reward} Pts
      </button>
    </div>
      <img className='card-image' src={imageMapping[data.action_type]} alt={data.action_name }></img>
      {/* Additional content for the card */}
      <h3><bold>{data.action_name}</bold></h3>
    </div>
  );
};
export default Card
