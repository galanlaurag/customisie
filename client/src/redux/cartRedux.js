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
            const thisItem = state.products.find((item) => item.size === action.payload.size && item.headShape === action.payload.headShape &&
                item.earsShape === action.payload.earsShape && item.armsShape === action.payload.armsShape && item.legsShape === action.payload.legsShape &&
                item.headColour === action.payload.headColour && item.eyesColour === action.payload.eyesColour && item.earsColour === action.payload.earsColour &&
                item.innerEarsColour === action.payload.innerEarsColour && item.armsColour === action.payload.armsColour && item.handsColour === action.payload.handsColour &&
                item.legsColour === action.payload.legsColour && item.feetColour === action.payload.feetColour && item.noseColour === action.payload.noseColour);
            if(thisItem){
                console.log("same product")
                thisItem.productQuantity += 1;
                state.quantity += 1;
                state.total += action.payload.price*action.payload.productQuantity;
                console.log(thisItem)
                state.products.map((item) => {
                    return item;
                })
            } else {
                console.log("unique product")
                state.quantity += 1;
                state.products.push(action.payload);
                if (state.quantity > 1) {
                    state.total += action.payload.price*action.payload.productQuantity;
                } else {
                    state.total += action.payload.price*action.payload.productQuantity+20;
                }
            }
        },
        increaseProductQuantity: (state, action) => {
            const thisItem = state.products.find((item) => item.size === action.payload.size && item.headShape === action.payload.headShape &&
                item.earsShape === action.payload.earsShape && item.armsShape === action.payload.armsShape && item.legsShape === action.payload.legsShape &&
                item.headColour === action.payload.headColour && item.eyesColour === action.payload.eyesColour && item.earsColour === action.payload.earsColour &&
                item.innerEarsColour === action.payload.innerEarsColour && item.armsColour === action.payload.armsColour && item.handsColour === action.payload.handsColour &&
                item.legsColour === action.payload.legsColour && item.feetColour === action.payload.feetColour && item.noseColour === action.payload.noseColour);
            thisItem.productQuantity++;
            state.quantity += 1;
            state.total += thisItem.price;
        },
        decreaseProductQuantity: (state, action) => {
            const thisItem = state.products.find((item) => item.size === action.payload.size && item.headShape === action.payload.headShape &&
                item.earsShape === action.payload.earsShape && item.armsShape === action.payload.armsShape && item.legsShape === action.payload.legsShape &&
                item.headColour === action.payload.headColour && item.eyesColour === action.payload.eyesColour && item.earsColour === action.payload.earsColour &&
                item.innerEarsColour === action.payload.innerEarsColour && item.armsColour === action.payload.armsColour && item.handsColour === action.payload.handsColour &&
                item.legsColour === action.payload.legsColour && item.feetColour === action.payload.feetColour && item.noseColour === action.payload.noseColour);
            thisItem.productQuantity--;
            state.quantity -= 1;
            state.total -= thisItem.price;
        },

        clearCart: (state, action) => {
            const thisItem = state.products.find((item) => item.size === action.payload.size && item.headShape === action.payload.headShape &&
                item.earsShape === action.payload.earsShape && item.armsShape === action.payload.armsShape && item.legsShape === action.payload.legsShape &&
                item.headColour === action.payload.headColour && item.eyesColour === action.payload.eyesColour && item.earsColour === action.payload.earsColour &&
                item.innerEarsColour === action.payload.innerEarsColour && item.armsColour === action.payload.armsColour && item.handsColour === action.payload.handsColour &&
                item.legsColour === action.payload.legsColour && item.feetColour === action.payload.feetColour && item.noseColour === action.payload.noseColour);
            state.quantity -= thisItem.productQuantity;
            if (state.quantity > 1) {
                state.total -= thisItem.price*thisItem.productQuantity;
            } else {
                state.total -= thisItem.price*thisItem.productQuantity+20;
            }
            thisItem.productQuantity = 0;
            state.products.splice(state.products.indexOf(thisItem), 1);
        },

        clearAllCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 20;
        }
    }
})

export const {addProduct, increaseProductQuantity, decreaseProductQuantity, clearCart, clearAllCart} = cartSlice.actions
export default cartSlice.reducer;