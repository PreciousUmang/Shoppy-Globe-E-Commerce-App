import { useDispatch } from 'react-redux';
import { adjustQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(adjustQuantity({ id: item.id, amount: 1 }));
  };

  const handleMinus = () => {
    dispatch(adjustQuantity({ id: item.id, amount: -1 }));
  };
  return (
    <div className="bg-primary shadow-lg my-4 p-4 border rounded-lg w-5/6 md:w-2/3 lg:w-1/2 cart-item">
      <h3 className="mb-4 font-semibold text-2xl text-darkAccent">{item.title}</h3>


      <section className="flex justify-between items-center mb-3 text-secondary">
        <p className="font-medium">Price:</p>
        <p className="font-bold text-theme">$ {item.price}</p>
      </section>

      <section className="flex justify-between items-center mb-3 text-secondary">
        <p className="font-medium">Quantity:</p>
        <div className="flex items-center">
          <button onClick={handleMinus} className="bg-darkAccent px-3 py-1 rounded text-primary transition hover:scale-110">
            <i className="fa-minus fa-solid"></i>
          </button>
          <p className="px-4 font-semibold text-lg">{item.quantity ? item.quantity : 1}</p>
          <button onClick={handlePlus} className="bg-accent px-3 py-1 rounded text-primary transition hover:scale-110">
            <i className="fa-plus fa-solid"></i>
          </button>
        </div>
      </section>

      <section className="flex justify-between items-center text-secondary">
        <p className="font-semibold text-lg">Total:</p>
        <p className="font-bold text-theme text-xl">${(item.price * (item.quantity ? item.quantity : 1)).toFixed(2)}</p>
      </section>
    </div>
  );
}

export default CartItem;