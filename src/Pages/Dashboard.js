import { useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SuperUserLogoGray from '../Assets/images/superuser-logo-grayscale.png' 
import SuperUserLogo from '../Assets/images/superuser-logo.png'



function Dashboard() {
  const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({});
    const [animate, setAnimate] = useState(false);


    const fetchUserDetails = () => {
      setUserInfo(JSON.parse(localStorage.getItem('userInfo')))
    }

    useEffect(() => {
        fetchUserDetails();
        if (userInfo.userType === 'normal_user') {
          setAnimate(true);
          setTimeout(() => {
            navigate('/user');
          }, 1000); // Adjust the duration as needed
        } else if (userInfo.userType === 'super_user') {
          setAnimate(true);
          setTimeout(() => {
            navigate('/superUser');
          }, 1000); // Adjust the duration as needed
        }
      }, [userInfo.userType, navigate]);


    return (
      <div className="App">
        {userInfo.userType === 'normal_user' && (<NavLink className="nav-link" to="/user"><img className='superuser-loader' src={SuperUserLogoGray} alt='superuser-logo'/></NavLink>)}
        {userInfo.userType === 'super_user' && (<NavLink className="nav-link" to="/superUser"><img className='superuser-loader' src={SuperUserLogo} alt='superuser-logo'/></NavLink>)}
      </div>
    );
  }
  
  export default Dashboard;