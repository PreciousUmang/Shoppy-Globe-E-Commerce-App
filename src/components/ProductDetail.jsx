import { useState, useEffect } from "react"
import { useParams } from "react-router"

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

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
        return <p>{error}</p>
    }

    if(!product){
        return <p>Loading...</p>
    }

    return (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.images[0]} alt={product.title} style={{ maxWidth: '300px' }} />
          <p>Ratings : {product.rating} / 5<i className="fa-solid fa-stars"></i></p>
        </div>
      );
    }
    
    export default ProductDetail;