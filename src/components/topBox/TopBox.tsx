import React from 'react'
import { topDealUsers } from '../../data'
import "./topbox.scss"
const TopBox = () => {
  return (
    <div className='topbox'>
        <h2 className='title'>Top Deals</h2>
        <div className="list">
        {
            topDealUsers.map(users=>(
            <div key={users.id} className="topdetails">
                <div className="top-user">
                    <img src={users.img} alt="" className="icon" />
                    <div className="userInfo">
                        <span className='username'>{users.username}</span>
                        <span className='email'>{users.email}</span>
                    </div>
                </div>
                <span className='amount'>$ {users.amount}</span>
            </div>
            ))
        }
        </div>

        
    </div>
  )
}

export default TopBox