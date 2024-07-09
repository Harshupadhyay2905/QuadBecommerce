const express = require('express');
const Cart = require('../models/Cart');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Get user's cart
router.get('/', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add item to cart
router.post('/', authMiddleware, async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new Cart({ userId: req.user.id, products: [] });
    }
    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remove item from cart
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    cart.products = cart.products.filter(p => p.productId.toString() !== req.params.id);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
