import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setproducts } from '../actions';
import ProductComponet from './ProductComponet';

function ProductListing() {

    const products = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect( async ()=>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Your error is " , err);
        })
        dispatch(setproducts(response.data));
    }, []);
    
    console.log(products)

    return (

        <>
        <ProductComponet />
        </>
    )
}

export default ProductListing
