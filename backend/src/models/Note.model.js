/**
 * the models define how the app works with the data
 * Also create a collection called Note
 */

const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    author: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // create the create and update date
    timestamps: true,
  }
);

module.exports = model("Note", noteSchema);
