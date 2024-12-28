import express from "express"
import connectDB from "./Config/db.mjs";
import productRoutes from "./Routes/product.routes.js"
import cartRoutes from "./Routes/cart.routes.js"

const app = express();
const PORT = 3000;

connectDB();

// For JSON Parsing
app.use(express.json());


// Products Route
app.use('/products', productRoutes)

// Cart Route
app.use("/cart", cartRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

