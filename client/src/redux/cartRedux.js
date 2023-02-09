import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        quantity:0,
        total: 0,
    },
    reducers: {
        addProduct: (state,action)=> {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price*action.payload.productQuantity;
        },
        increaseProductQuantity: (state) => {
            state.products.map((item) => {
                state.quantity += 1;
                state.total += item.price*item.productQuantity;
                return item;
            })
        },
        decreaseProductQuantity: (state) => {
            state.products.map((item) => {
                state.quantity -= 1;
                state.total -= item.price*item.productQuantity;
                return item;
            })
        }
    }
})

export const {addProduct, increaseProductQuantity, decreaseProductQuantity} = cartSlice.actions
export default cartSlice.reducer;