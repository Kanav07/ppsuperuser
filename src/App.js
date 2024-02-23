import './styles/app.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';
import SuperUser from './Pages/SuperUser';
import RedeemRewards from './Pages/RedeemRewards';
import BenefitsDetail from './Pages/BenefitsDetail';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import SmartphoneContainer from './Components/SmartphoneContainer';

function App() {

  const setUserDetails = () => {
    localStorage.setItem('userInfo', JSON.stringify({
        userType: 'normal_user',
        loyalty_points: '57'
    }))
    // localStorage.setItem('userInfo', JSON.stringify({
    //   userType: 'super_user',
    //   loyalty_points: '87'
    // }))
  }

  useEffect(() => {
    setUserDetails();
  }, [])
  
  return (
    <SmartphoneContainer>
    <BrowserRouter>
      <div className="appContainer">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/superUser" element={<SuperUser />} />
          <Route path="/rewards/redeem" element={<RedeemRewards />} />
          <Route path="/benefits" element={<BenefitsDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
    </SmartphoneContainer>
  );
}

export default App;
