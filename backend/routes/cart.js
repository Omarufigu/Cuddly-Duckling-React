import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// Get cart
router.get("/:cartId", async (req, res) => {
  const cart = await Cart.findOne({ cartId: req.params.cartId });
  res.json(cart || { cartId: req.params.cartId, items: [] });
});

// Update cart (persist changes)
router.put("/:cartId", async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { cartId: req.params.cartId },
    { cartId: req.params.cartId, items: req.body.items || [] },
    { upsert: true, new: true }
  );
  res.json(cart);
});

export default router;
