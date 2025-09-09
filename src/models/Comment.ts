// models/Comment.ts
import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    slug: { type: String, required: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 60 },
    message: { type: String, required: true, trim: true, maxlength: 1000 },
    email: { type: String, trim: true, maxlength: 120 },
    website: { type: String, default: "" },
    ipHash: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Comment || model("Comment", CommentSchema);
