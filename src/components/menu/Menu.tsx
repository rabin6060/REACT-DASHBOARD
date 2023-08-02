import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.scss"
import { menu } from '../../data'
const Menu = () => {
  return (
    <div className='menu'>
        {
          menu.map(item=>(
            <div className="items" key={item.id}>
              <span className="title">{item.title}</span>
              {
                item.listItems.map(listItem=>(
                  <Link key={listItem.url} className='itemList' to={listItem.url} >
                    <img src={`/${listItem.icon}`} alt="home" />
                    <span className="listItemTitle">{listItem.title}</span>
                  </Link>
                ))
              }
          </div>
          ))
        }
    </div>
  )
}

export default Menu