import React from 'react'
import Navbar from '../navbar/Navbar'
import MailsList from '../mailslist/MailsList'
import './MainPage.css'
function MainPage() {
  return (
    <div className='main-page-container'>
        <Navbar/>
        <MailsList/>
    </div>
  )
}

export default MainPage