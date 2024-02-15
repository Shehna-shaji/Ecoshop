import React from 'react'

export default function IconContainer({url,className}) {
  return (
    <div>
      <nav>
        
        <div className="icon-container">
            <img src={url} className={className}/>
            
          </div>
        
      </nav>
    </div>
  )
}
