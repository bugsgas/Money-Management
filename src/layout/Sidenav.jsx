import { NavLink } from 'react-router-dom'
// styles, images
import './Sidenav.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import WalletIcon from '../assets/wallet_icon.svg'
import TransferIcon from '../assets/transfer_icon.svg'
import SettingIcon from '../assets/setting_icon.svg'
import ProfileIcon from '../assets/profile_icon.svg'
import LogoutIcon from '../assets/logout_icon.svg'



export default function Sidenav() {

  return (
    <div className='sidenav'>
      <div className="sidenav-content">
        <div className="user">
          <p>S.</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashboard-icon" />
              </NavLink>
              <NavLink to="/wallet">
                <img src={WalletIcon} alt="wallte-icon" />
              </NavLink>  
              <NavLink to="/create">
                <img src={TransferIcon} alt="transaction-icon" />
              </NavLink>
              <NavLink to="/setting">
                <img src={SettingIcon} alt="setting-icon" />
              </NavLink>
              <NavLink to="/profile">
                <img src={ProfileIcon} alt="profile-icon" />
              </NavLink>       
              <button className="logout-button" >
                  <img src={LogoutIcon} alt="logout-icon" />
              </button>       
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
