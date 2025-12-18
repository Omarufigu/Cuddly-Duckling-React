import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// Menu Management: fetch from MongoDB
router.get("/", async (req, res) => {
  const items = await MenuItem.find({ isAvailable: true }).sort({ name: 1 });
  res.json(items);
});

// Optional: allow menu changes to persist
router.post("/", async (req, res) => {
  const created = await MenuItem.create(req.body);
  res.status(201).json(created);
});

router.put("/:id", async (req, res) => {
  const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
