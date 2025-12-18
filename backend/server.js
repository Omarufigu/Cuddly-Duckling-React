import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import menuRoutes from "./routes/menu.js";
import orderRoutes from "./routes/orders.js";
import cartRoutes from "./routes/cart.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN, "http://localhost:5173"],
    credentials: false,
  })
);

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

const start = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT || 5000, () =>
    console.log(`✅ API running on ${process.env.PORT || 5000}`)
  );
};

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
