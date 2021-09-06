import {ActionTypes} from "./actiontypes"

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