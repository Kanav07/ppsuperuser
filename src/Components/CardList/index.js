import './style.scss'
import Card from '../Card';
import { useState } from 'react'

const CardList = ({onScoreUpdate}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleDismiss = () => {
    // Increment the current card index
    setCurrentCardIndex((prevIndex) => prevIndex + 1 + 1 == cardData.length ? 0 :  prevIndex + 1);
  };

  const handleComplete = () => {
    // Perform external action for completing the card
    console.log('Card completed!');
    onScoreUpdate();
  };

  const cardData = [{
    "action_name" : "Transfer money to a friend",
    "action_type" : "p2p_transfer",
    "action_reward" : "5",
    "action_domain" : "PayPay",
    "image_path" : "../../Assets/images/p2p_transfer.png",
    "url" : "https://www.paypay-card.co.jp/",
    "action_deeplink" : "paypay://p2p/inputAmount/userInfo?externalUserId=010285a100bf3400"
    },
    {
    "action_name" : "Pay a Bill",
    "action_type" : "bill_payment",
    "action_reward" : "10",
    "action_domain" : "PayPay",
    "image_path" : "../../Assets/images/bill_payment.png",
    "url" : "https://www.paypay-card.co.jp/",
    "action_deeplink" : "paypay://billpayment"
    },
    {
    "action_name" : "Buy car insurance",
    "action_type" : "car_insurance",
    "action_reward" : "25",
    "action_domain" : "PayPay_Insurance",
    "image_path" : "../../Assets/images/p2p_transfer.png",
    "url" : "https://www.paypay-card.co.jp/",
    "action_deeplink" : "paypay://miniapp?appId=a_7ExFVo7tPt"
    
    },
    {
    "action_name" : "Buy ski insurance",
    "action_type" : "ski_insurance",
    "action_reward" : "25",
    "action_domain" : "PayPay_Insurance",
    "image_path" : "../../Assets/images/p2p_transfer.png",
    "action_deeplink" : "paypay://miniapp?appId=a_7ExFVo7tPt"
    },
    {
    "action_name" : "Link PayPay Bank Account to PayPay",
    "action_type" : "link_ppbank_account",
    "action_reward" : "25",
    "action_domain" : "PayPay",
    "image_path" : "../../Assets/images/p2p_transfer.png",
    "url" : "https://www.paypay-card.co.jp/",
    "action_deeplink" : "paypay://user/linkedinstruments#add_bank"
    },
    {
      "action_name" : "Make a bank transfer",
      "action_type" : "fund_transfer",
      "action_reward" : "15",
      "action_domain" : "PayPay_Bank",
      "image_path" : "../../Assets/images/p2p_transfer.png",
      "url" : "https://www.paypay-card.co.jp/",
      "action_deeplink" : "paypay://user/linkedinstruments#add_bank"
    },
    {
    "action_name" : "Open PayPay security account",
    "action_type" : "investment_account",
    "action_reward" : "30",
    "action_domain" : "PayPay_Security",
    "image_path" : "../../Assets/images/p2p_transfer.png",
    "url" : "https://www.paypay-card.co.jp/",
    "action_deeplink" : "paypay://miniapp?appId=m_512cIsRNmu"
    },
    {
    "action_name" : "Signup for PayPay Card",
    "action_type" : "ppcard_sign_up",
    "action_reward" : "25",
    "image_path" : "../../Assets/images/p2p_transfer.png",
    "action_domain" : "PayPay_Card",
    "action_deeplink" : "paypay://miniapp?appId=m_512cIsRNmu"
    }];

  return (
    <div>
      {currentCardIndex < cardData.length ? (
        <Card
          data={cardData[currentCardIndex]}
          onDismiss={handleDismiss}
          onComplete={handleComplete}
        />
      ) : (
        <p>No more cards to load.</p>
      )}
    </div>
  );
};

export default CardList
