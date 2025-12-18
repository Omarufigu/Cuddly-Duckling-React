import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Order Processing: save to MongoDB
router.post("/", async (req, res) => {
  const { items, customer } = req.body;
  const total = (items || []).reduce((s, i) => s + i.price * i.qty, 0);

  const created = await Order.create({
    items,
    total,
    customer,
    status: "PLACED",
  });

  res.status(201).json(created);
});

router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

export default router;
