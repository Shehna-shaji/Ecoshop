import React from 'react'

export default function Menu({menu}) {
  return (
    <div>
      <nav>
      <div className="menu-bar">
          <div className="menu">
          <h5 className='nav-menu'>{menu}</h5>
            </div>
            </div>
      </nav>
    </div>
  )
}
