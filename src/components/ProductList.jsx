import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/productsSlice";
import ProductItem from "./ProductItem";

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
        <div className="p-6">
             <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block border-gray-300 mx-auto px-4 py-2 border rounded-lg focus:ring-2 focus:ring-theme w-full max-w-xl h-12 transition-all focus:outline-none"
            />
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
export default ProductList;