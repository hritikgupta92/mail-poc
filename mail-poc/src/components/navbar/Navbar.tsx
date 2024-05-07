import "./Navbar.css"

function Navbar() 
{
  function handleInbox()
  {
    
  }
  return (
    <div className='navbar-container'>
        <ul className='navbar-list'>
            <li className='navbar-item' onClick={handleInbox}>Inbox</li>
            <li className='navbar-item'>Starred</li>
        </ul>
    </div>
  )
}

export default Navbar