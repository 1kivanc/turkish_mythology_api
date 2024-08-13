const mongoose = require("mongoose");

const mythologicalFigureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    descriptions: {
      short: {
        tr: { type: String, required: true, trim: true },
        en: { type: String, trim: true },
      },
      long: {
        tr: { type: String, required: true, trim: true },
        en: { type: String, trim: true },
      },
    },
    attributes: {
      tr: { type: [String], default: [] },
      en: { type: [String], default: [] },
    },
    symbols: {
      tr: { type: String, trim: true },
      en: { type: String, trim: true },
    },
    associatedAnimals: {
      tr: { type: [String], default: [] },
      en: { type: [String], default: [] },
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MythologicalFigure", mythologicalFigureSchema);
