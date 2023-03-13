// import {useLocation} from "react-router-dom";
import {clearAllCart} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const Success = () => {
    // const location = useLocation();
    // console.log(location);
    const dispatch = useDispatch();
    useEffect(() => {
        const emptyCart = async() => {
            try {
                return dispatch(
                    clearAllCart()
                )
            } catch (err) {
                return console.log(err);
            }
        }
        emptyCart();
    }, [dispatch])

    return (
        <div>
            Payment successful!
        </div>
    )
}

export default Success;