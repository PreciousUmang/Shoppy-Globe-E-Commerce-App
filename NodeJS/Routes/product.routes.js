import express from 'express'
import Product from '../Model/product.model.js'

const router = express.Router()

// Fetching all the products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json({ message: 'Products successfully fetched', products })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error Fetching Products', error: error.message })
  }
})

// Get a Product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Product Not found' })
    res.status(200).json(product)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching product', error: error.message })
  }
})

// Post a Product
router.post('/product', async (req, res) => {
  try {
    const { name, price, description, stock } = req.body
    if (!name || !price || stock === undefined)
      return res
        .status(400)
        .json({ message: 'Name, Price and Stock are required.' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error adding product', error: error.message })
  }
})
