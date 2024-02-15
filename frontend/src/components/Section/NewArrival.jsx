import React from 'react'

export default function NewArrival({url,name,price}) {
  return (
    <div>
        <section>
        
            <div className="product-list">
              <div className="card-product">
                <img src={url} className='arrival-image'/>
                <h5 className='image-title'>{name}</h5>
                <h6 className='product-price'>{price}</h6>
              


            </div>

          </div>
          </section>
      
    </div>
  )
}
