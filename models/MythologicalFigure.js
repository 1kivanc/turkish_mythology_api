const mongoose = require("mongoose");

const mythologicalFigureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    shortDesc: {
      type: String,
      required: true,
      trim: true,
    },
    longDesc: {
      type: String,
      required: true,
      trim: true,
    },
    attributes: {
      type: [String],
      default: [],
    },
    symbol: {
      type: String,
      trim: true,
    },
    associatedAnimals: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MythologicalFigure", mythologicalFigureSchema);
