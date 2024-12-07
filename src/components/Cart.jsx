import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

function Cart() {
    const dispatch = useDispatch
    const cartItems = useSelector(state => state.cart.items)

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }

    if (cartItems.length === 0) {
        return <h2>Your Cart is Empty!</h2>;
    }
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Cart;