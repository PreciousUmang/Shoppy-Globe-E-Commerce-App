import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
    const dispatch = useDispatch
    const cartItems = useSelector(state => state.cart.items)


    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return <h2 className="font-semibold text-2xl text-center">Your Cart is Empty!</h2>;
    }


    return (
        <div className="flex flex-col justify-center items-center">
            <h2>Your Cart</h2>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <div className="border-gray-300 mt-6 p-4 border-t">
                <h3 className="font-bold text-darkAccent text-xl">Cart Total:</h3>
                <p className="text-lg text-theme">${cartTotal.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cart;