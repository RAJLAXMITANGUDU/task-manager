const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["TODO", "DONE"], default: "TODO" },
    deadline: { type: Date, required: true },
    linkedFile: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;