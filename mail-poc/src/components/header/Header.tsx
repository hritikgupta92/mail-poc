import React from 'react'
import Logo from '../../assets/Logo.svg'
import SearchBar from '../searchbar/SearchBar'
import './Header.css'
function Header() {
  return (
    <div className='header-container'>
        <div>
           <img src={Logo} alt="gmail logo"/>
        </div>
       <div>
         <SearchBar/>
       </div>
       
    </div>
  )
}

export default Header