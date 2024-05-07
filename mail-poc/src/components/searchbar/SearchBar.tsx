// import React from 'react'
import './SearchBar.css'
import searchIcon from '../../assets/search.svg'


function SearchBar() {
  return (
    <div className='search-container'>
        <input type='text' placeholder='Search Mail' className='searchBox'/>
        <img className='search-icon' src={searchIcon} alt='Search Icon'/>     
    </div>
  )
}

export default SearchBar