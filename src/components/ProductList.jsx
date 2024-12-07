import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/productsSlice";
import ProductItem from "./ProductItem";
import './products.css'

function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.list)
    const [searchQuery, setSearchQuery] = useState('')

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json();
            dispatch(setProducts(data.products))
        } catch (error) {
            console.error('Failed to Fetch Products : ', error)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [dispatch])


    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div className="products-container">
            <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />
            <div>
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
export default ProductList;