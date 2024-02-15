import React from 'react'

export default function Products({url,name,price,newprice}) {
  return (
    <div>
        <section>
                
            <div className="product">
              <img src={url} className="product-image"  />
              <h5 className="h5">{name}</h5>
              <h6 className="price">{newprice} </h6>
             <s> <h6 className="price">{price}</h6></s>


            

          </div>
          </section>
    </div>
  )
}
