import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { addItem } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem(product))
    }

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`https://www.dummyjson.com/products/${id}`);
            const data = await response.json()
            setProduct(data)
            console.log(data)
        } catch (error) {
            setError(error);
            console.error('Can not fetch product detail :', error);
        }
    }

    useEffect(() => {
        fetchProductDetails()
    }, [id])


    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!product) {
        return <p className="text-gray-500">Loading...</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center bg-primary p-6">
            <h1 className="mb-4 font-semibold text-3xl text-darkAccent">{product.title}</h1>
            <p className="mb-4 text-accent text-lg">{product.description}</p>
            <p className="mb-4 font-bold text-theme text-xl">Price: ${product.price}</p>
            <img
                src={product.images[0]}
                alt={product.title}
                className="shadow-md mb-4 rounded-lg"
                style={{ maxWidth: "300px" }}
            />
            <p className="mb-4 text-accent">
                Ratings: {product.rating} / 5 <i className="text-yellow-400 fa-solid fa-stars"></i>
            </p>
            <button
                onClick={addToCart}
                className="bg-accent hover:bg-darkAccent px-6 py-2 rounded-lg font-semibold text-primary transition"
            >
                Add Item <i className="fa-plus fa-solid"></i>
            </button>
        </div>
    );
}

export default ProductDetail;