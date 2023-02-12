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
            const id = action.payload._id;
            const doesItemExist = state.products.find((item) => item._id === id);
            if(doesItemExist){
                state.products.map((item) => {
                    state.quantity += 1;
                    state.total += item.price*item.productQuantity;
                    return item;
                })
            } else {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price*action.payload.productQuantity+20;
            }
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
        },
        clearCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const {addProduct, increaseProductQuantity, decreaseProductQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer;