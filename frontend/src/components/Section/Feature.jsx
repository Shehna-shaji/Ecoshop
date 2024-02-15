import React from 'react'

export default function Feature({url,heading,text,classname}) {
  return (
    <div>
      <div className='feature-card'>
                    <div className='card-image'>
                        <img src={url} className={classname}/>

                    </div>
                    <div className='card-container'>
                        <h3 className='feature-heading'>{heading}</h3>
                        <p className='feature-text'>{text}</p>
                    </div>

                </div>
    </div>
  )
}
