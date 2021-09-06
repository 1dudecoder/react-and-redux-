import { ActionTypes } from "../Action/actiontypes";

const initialstate = {
    products : [],
}

export const productReducer = (state = initialstate, {type , payload}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload}
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, products: payload
            }
        default:
            return state;
    }

}