import React from 'react'
import '../../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,  faUser} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <><nav className="navbar">
          <ul>
            <a className="active" href="/dashboard"><FontAwesomeIcon className='icon' icon={faHome} /> Home</a>
            
           
            <li><input type="search" placeholder="search product" id="search" />
                            <input type="submit" value="search" id="search-btn" /></li>
                
                <li><a className="nav-link" href="/addproduct">Venue</a></li>
                <li><a className="nav-link " href="/profile">Profile</a></li>
               
                <li><a className="active2" href="/login"><FontAwesomeIcon className='icon' icon={faUser} /></a></li>
            </ul>
        </nav></>
    )
}
export default Navbar;