import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    items: [
      {
        menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
        name: String,
        price: Number,
        qty: { type: Number, min: 1 },
      },
    ],
    total: { type: Number, required: true, min: 0 },
    status: { type: String, default: "PLACED" }, // PLACED | PREPARING | COMPLETE | CANCELED
    customer: {
      name: String,
      email: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
