import fakeStoreApi from "../apis/fakeStoreApi";
import {ActionTypes} from "./actiontypes"

//if your are using asyc action creator into your actions 
//then you have to use redux thunk
//because first you have to change 
// your action creator from sycnronus action creator to asyncronus action creator

// export const fetchproducts = async () => {        //this function was giving an error plan text not found please use the middleware so we are using thunk instead to this asnyc functions

//     const response = await axios.get('/products');
//     console.log(response);   
//     return {
//         type: ActionTypes.FETCH_PRODUCT,
//         payload: response,
//     }
// }    

//redux thunk code a a curring function which return a async function
export const fetchproducts = () => {
    return async (dispatch) =>{
        const response = await fakeStoreApi.get('/products');
        dispatch({
            type : ActionTypes.FETCH_PRODUCT,
            payload : response.data
        })
    }
}

export const fetchproduct = (id) => {
    return async (dispatch) =>{
        const response = await fakeStoreApi.get(`/products/${id}`);
        dispatch({
            type : ActionTypes.SELECTED_PRODUCT,
            payload : response.data
        })
    }
}

export const setproducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const singleproduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}