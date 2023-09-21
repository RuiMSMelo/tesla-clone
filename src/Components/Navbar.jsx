import { Link } from 'react-router-dom'
import Logo from '../Images/teslalogo-small.png'
import questionmark from '../Images/questionmark.png'
import language from '../Images/language.png'
import profile from '../Images/profile.png'
/*vehicles*/
import model3icon from '../Images/model3-icon.jpg'
import modelsicon from '../Images/models-icon.jpg'
import modelyicon from '../Images/modely-icon.jpg'
import modelxicon from '../Images/modelx-icon.webp'
/*energy*/
import solarpanelsicon from '../Images/solarpanels-icon.png'
import powerwallicon from '../Images/powerwall-icon.png'
/*charging*/
import chargingicon from '../Images/charging-icon.png'
import homechargingicon from '../Images/homecharging-icon.png'
import superchargericon from '../Images/supercharger-icon.png'
/*discover*/
/*shop*/
import carwheelicon from '../Images/carwheel-icon.png'
import baseballcapicon from '../Images/baseballcap-icon.png'
import backpackicon from '../Images/backpack-icon.png'


export default function Navbar() {

  return (
    <div id='navbar'>
        <Link to="/"><img id='navbar-logo' src={Logo} alt=''/></Link>
        <ul id='navbar-menu'>
            <li>
              <Link className='navbar-links'>Vehicles</Link>
              <ul className='dropdown-menu'>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={model3icon} alt=''/>
                  <h4>Model 3</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images models' src={modelsicon} alt=''/>
                  <h4>Model S</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={modelyicon} alt=''/>
                  <h4>Model Y</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={modelxicon} alt=''/>
                  <h4>Model X</h4>
                </li>
              </ul>
            </li>

            <li>
              <Link className='navbar-links'>Energy</Link>
              <ul className='dropdown-menu'>
                <li>
                  <img className='navbarmenu-images' src={solarpanelsicon} alt=''/>
                  <h4>Solar Panels</h4>
                </li>
                <li>
                  <img className='navbarmenu-images models' src={powerwallicon} alt=''/>
                  <h4>PowerWall</h4>
                </li>
              </ul>
            </li>

            <li>
              <Link className='navbar-links'>Charging</Link>
              <ul className='dropdown-menu'>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={chargingicon} alt=''/>
                  <h4>Charging</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images models' src={homechargingicon} alt=''/>
                  <h4>Home Charging</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={superchargericon} alt=''/>
                  <h4>Supercharger</h4>
                </li>
              </ul>
            </li>

            <li>
              <Link className='navbar-links'>Discover</Link>
              <ul className='dropdown-menu'>
                <li>
                  <ul>
                    <h4>Resources</h4>
                    <li>Demo Drive</li>
                    <li>Insurance</li>
                    <li>Video Guides</li>
                    <li>Customer Stories</li>
                    <li>Events</li>
                  </ul> 
                </li>
                <li>
                  <ul>
                      <h4>Location Services</h4>
                      <li>Find Us</li>
                      <li>Trip Planner</li>
                      <li>Find a Collision Center</li>
                      <li>Find a Certified Installer</li>
                    </ul> 
                </li>
                <li>
                  <ul>
                      <h4>Company</h4>
                      <li>About</li>
                      <li>Careers</li>
                      <li>Investor Relations</li>
                    </ul> 
                </li>
              </ul>
            </li>

            <li>
              <Link className='navbar-links'>Shop</Link>
              <ul className='dropdown-menu'>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={homechargingicon} alt=''/>
                  <h4>Charging</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={carwheelicon} alt=''/>
                  <h4>Vehicle Accessories</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images models' src={baseballcapicon} alt=''/>
                  <h4>Apparel</h4>
                </li>
                <li className='navbar-iconsAndtext'>
                  <img className='navbarmenu-images' src={backpackicon} alt=''/>
                  <h4>Lifestyles</h4>
                </li>
              </ul>
            </li>
        </ul>
        <div id='navbar-rightside-group'>
          <Link to="/"><img className='navbar-rightside-icons' src={questionmark} alt=''/></Link>
          <Link to="/"><img className='navbar-rightside-icons' src={language} alt=''/></Link>
          <Link to="/"><img className='navbar-rightside-icons' src={profile} alt=''/></Link>
        </div>
    </div>
  )
}
