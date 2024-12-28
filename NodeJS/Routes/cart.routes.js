import express from "express"
import Cart from "../Model/cart.model.js";
import Product from "../Model/product.model.js";

const router = express.Router()

//  Add an item to the cart
router.post('/', async (req, res) =>{

    console.log(req.body)
    const {productID, quantity} = req.body;
    if (!productID || quantity === undefined) return res.status(400).json({ message: 'Product ID and quantity are required.' });
    try {
        const product = await Product.findById(productID)
        if(!product) return res.status(404).json({message:'Product Not Found'})

        const newItem = await Cart.create({
            productID,
            quantity
        })
        res.status(201).json({message:'Cart Item Added Successfully', newItem})
    } catch (error) {
    
 }

})

// Fetch cart Items
router.get('/', async (req, res) =>{
    try {
        const cartItems = await Cart.find().populate("productID")
        // if (!cartItems) return res.status(404).json({message:'No items are available in the cart.'})
        res.status(200).json({message: 'Cart Items successfully fetched.', cartItems})
    } catch (error) {
        res.status(500).json({message:'Something Went Wrong!', error : error.message})        
    }
})

// Update quanntity
router.put('/:id', async (req, res)=>{
    const {quantity} = req.body;
    if (quantity === undefined || quantity < 1) return res.status(400).json({message: 'Please add minimum 1 product'})
    try {
        const updatedCartItem = await Cart.findByIdAndUpdate(req.params.id, {quantity}, {
            new:true, 
            runValidators: true})
        if(!updatedCartItem) return res.status(400).json({message : "Cart item not found"})
        res.status(200).json({message: 'Cart Item Updated Successfully', updatedCartItem})
    } catch (error) {
        res.status(500).json({ message: 'Error updating cart item', error: error.message });
    }
    })

// Delete an item
router.delete('/:id', async(req, res) =>{
    try {
        const deletedCartItem = await Cart.findByIdAndDelete(req.params.id)
        if (!deletedCartItem) {
            return res.status(404).json({ message: 'Cart item not found.' });
          }
    
          res.status(200).json({ message: 'Cart item removed successfully', deletedCartItem });
        } catch (error) {
          res.status(500).json({ message: 'Error removing cart item', error: error.message });
        }
})




export default router;