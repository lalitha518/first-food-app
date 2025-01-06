import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart= ()=>{

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 text-white rounded-lg bg-red-400"
                onClick={handleClearCart}
            >Clear Cart</button>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;