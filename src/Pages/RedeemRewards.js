import PpCard from'../Components/PpCard/index';
import Portfolio from '../Components/Portfolio/index';
import TreasureChest from '../Components/TreasureChest';
import BenefitCard from '../Components/BenefitCard'
import OfferList from '../Components/OfferList';



function RedeemRewards() {
  
  return (
    <div className="appContents">
      <PpCard>
        <h1>Redeem Rewards</h1>
      </PpCard>
     <OfferList/>
      
    </div>
  );
}
  
export default RedeemRewards;