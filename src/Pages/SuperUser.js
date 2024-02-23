import PpCard from '../Components/PpCard/index';
import Portfolio from '../Components/Portfolio/index';
import TreasureChest from '../Components/TreasureChest';
import PersonalizedOffers from "../Components/PersonalizedOffers/PersonalizedOffers";
import WeeklyChest from "../Components/WeeklyChest/WeeklyChest";
import TaskList from "../Components/WeeklyChest/TaskList";
import BenefitCard from '../Components/BenefitCard'
import BenefitsEarned from '../Components/BenefitsEarned';
import { FaInfo } from 'react-icons/fa';

import SuperUserLogo from '../Assets/images/superuser-logo.png'
import PpAccordion from '../Components/PpAccordion';



function SuperUser() {
  const userData = {
    "balance": 12500,
    "wallet": 9500,
    "giftVouchers": 3,
    "insurance": 2,
    "bank": 10000,
    "securities": 10,
    "creditCards": [{ "name": "PayPay bank", "balance": 2200 }]
  }
  return (
    <div className="appContents">
      <div>
        <span className='supertext-super'>スーパー</span>
        <img className='superuser-logo' src={SuperUserLogo} alt='superuser-logo' />
        <span className='supertext-super'>ユーザー</span>
      </div>
      {/* <PpCard>
        <h1>Super user Loyalty Program</h1>
      </PpCard> */}


      <PpAccordion title={`Your Portfolio`}>
        <Portfolio userData={userData}></Portfolio>
      </PpAccordion>
      <hr/>

      <BenefitsEarned />

      <hr />

      <PpCard> <PersonalizedOffers> </PersonalizedOffers>

      </PpCard>
     
      <hr />

      <PpCard>
      <TaskList> </TaskList>
      </PpCard>

      <hr />

     

      <BenefitCard />
      <hr />

      
      {/* <TreasureChest/> */}

    </div>
  );
}

export default SuperUser;