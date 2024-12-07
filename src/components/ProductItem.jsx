import './products.css'
import { Link } from 'react-router';
import { addItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function ProductItem({ product }) {
    const dispatch = useDispatch()
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setIsImageLoaded(true);
    };

    const addToCart = (e) => {
        e.stopPropagation();
        dispatch(addItem(product)) }

    return (
        <div>
        <Link to={`/product/${product.id}`}>
            <img 
            src={product.thumbnail} 
            alt={product.title} 
            onLoad={handleImageLoad}/>
            <h3>{product.title}</h3>
            <h4>Price : ${product.price}</h4>
        </Link>
            <button onClick={addToCart} className='cart-button'>Add to Cart <i className="fa-cart-shopping fa-solid"></i></button>
        </div>
    )
}

export default ProductItem;