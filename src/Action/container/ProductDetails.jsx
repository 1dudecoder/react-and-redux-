import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchproduct } from '../actions';
import "./ProductComponent.css"

function ProductDetails() {
    const dispatch = useDispatch();   
    const {productid} = useParams();
    const { id,title,price,description,category,image } = useSelector((state) => state.allproducts.products);
    console.log(id);

    // const FetchProductData = async () => {
    //     const responsedata = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch(err => console.log("Error",err))
    //     dispatch(singleproduct(responsedata.data));
    // }

    useEffect(()=>{
        dispatch(fetchproduct(productid));
    },[])


    return (
        <div className="mycontainer" key={id}>
            <div className="image"><img src={image} alt={title} /></div>
            <div className="container">
                <h1 className="Title">{title}</h1>
                <h4 className="category">{category}</h4>
                <p className="Description">{description}</p>
                <h6 className="Price">Price /${price}</h6>
            </div>
        </div>
    )
}

export default ProductDetails