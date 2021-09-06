import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "./productDetails.css"


function ProductComponet() {    

    const products = useSelector((state) => state.allproducts.products);
    const renderData = products.map((product)=>{
        const { id , title , image , price , category} = product; 
        console.log(products);
        return(
            <>
            <Link to={`/product/${id}`}>
         <div class="card" style={{width:"18rem"}} >
             <img src={image} class="card-img-top " alt={id} />
             <div class="card-body">
                 <h5 class="card-title">{title}</h5>
                 <p class="card-text">{category}</p>
             </div>
         </div>
         </Link>
            </>
        )
    })
    return <> {
        <div className="products">
        {renderData}
        </div>
        
        } </>
}

export default ProductComponet




