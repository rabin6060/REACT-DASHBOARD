import React from 'react'

import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>myadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
         <img src="/notifications.svg" alt=""  />
         <span >1</span>
        </div>
        <div className="user">
         <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
         <span>Rabin</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar