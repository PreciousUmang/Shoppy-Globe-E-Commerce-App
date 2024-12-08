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
        <div className='flex flex-col justify-center items-center border-2 bg-primary shadow-inner shadow-theme m-4 p-4 border-theme rounded-lg'>
        <Link to={`/product/${product.id}`}>
            <img 
            src={product.thumbnail} 
            alt={product.title} 
            onLoad={handleImageLoad}
            className='border-2 border-accent rounded-lg'/>
            <h3>{product.title}</h3>
            <h4>Price : ${product.price}</h4>
        </Link>
            <button onClick={addToCart} className='bg-theme my-2 px-6 p-2 rounded-lg font-semibold text-primary'>Add to Cart <i className="fa-cart-plus fa-solid"></i></button>
        </div>
    )
}

export default ProductItem;