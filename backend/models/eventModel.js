const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    situation: {
      type: String,
      required: true,
    },
    thoughts: {
      type: String,
      required: true,
    },
    emotion: {
      type: Number,
      required: true,
    },
    reaction: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Event", eventSchema);
