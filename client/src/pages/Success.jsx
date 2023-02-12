import {useLocation} from "react-router-dom";
import {clearCart} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const Success = () => {
    const location = useLocation();
    console.log(location);
    const dispatch = useDispatch();
    useEffect(() => {
        const emptyCart = async() => {
            try {
                return dispatch(
                    clearCart()
                )
            } catch (err) {
                return console.log(err);
            }
        }
        emptyCart();
    })

    return (
        <div>
            Payment successfull
        </div>
    )
}

export default Success;