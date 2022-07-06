import mongoose from "mongoose";

const apparelSchema = mongoose.Schema({
  name: String,
  appareltype: String,
  size: String,
  payment: String,
});

const apparel = mongoose.model("apparel", apparelSchema);

export default apparel;
