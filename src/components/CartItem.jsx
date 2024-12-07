import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id)); 
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity || 1}</p> {}
      <button onClick={handleRemove} className="remove-button">Remove</button>
    </div>
  );
}

export default CartItem;