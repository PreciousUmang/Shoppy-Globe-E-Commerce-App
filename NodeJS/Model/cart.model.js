import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    productID  : 
    {
        type : mongoose.Schema.Type.ObjectId,
    required : true}
})

const Cart = mongoose.model('cart', cartSchema)
export default Cart;