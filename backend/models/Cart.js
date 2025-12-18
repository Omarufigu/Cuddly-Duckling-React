import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    cartId: { type: String, required: true, unique: true },
    items: [
      {
        menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
        name: String,
        price: Number,
        qty: { type: Number, min: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
