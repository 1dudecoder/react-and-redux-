import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../actions';
import ProductComponet from './ProductComponet';

function ProductListing() {

    const products = useSelector(state => state);
    const dispatch = useDispatch();

    // const fetchproducts = async () => {
    //     const response = await axios
    //     .get("https://fakestoreapi.com/products")
    //     .catch((err)=>{
    //         console.log("Your error is " , err);
    //     })
    //     dispatch(setproducts(response.data));
    // }

    useEffect( async ()=>{

        dispatch(fetchproducts()); 

        
    }, []);
    
    console.log(products)

    return (

        <>
        <ProductComponet />
        </>
    )
}

export default ProductListing
