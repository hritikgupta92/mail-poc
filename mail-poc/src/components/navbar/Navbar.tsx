import React from 'react';
import { useDispatch } from 'react-redux';  
import { displayInbox, displayStarred } from '../../store/mail-Slice'; 

import "./Navbar.css";

function Navbar() {
    const dispatch = useDispatch(); // Initialize dispatch

    // Dispatch action to display inbox
    function handleInbox() {
        dispatch(displayInbox());
    }

    // Dispatch action to display starred
    function handleStarred() {
        dispatch(displayStarred());
    }

    return (
        <div className='navbar-container'>
            <ul className='navbar-list'>
                <li className='navbar-item' onClick={handleInbox}>Inbox</li>
                <li className='navbar-item' onClick={handleStarred}>Starred</li>
            </ul>
        </div>
    );
}

export default Navbar;
