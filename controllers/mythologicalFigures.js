const MythologicalFigure = require("../models/MythologicalFigure");

exports.getAllFigures = async (req, res) => {
  try {
    const figures = await MythologicalFigure.find();
    res.json(figures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFigureById = async (req, res) => {
  try {
    const figure = await MythologicalFigure.findById(req.params.id);
    if (figure == null) {
      return res.status(404).json({ message: "Mitolojik karakter bulunamadı" });
    }
    res.json(figure);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFigure = async (req, res) => {
  const figure = new MythologicalFigure({
    name: req.body.name,
    shortDesc: req.body.shortDesc,
    longDesc: req.body.longDesc,
    attributes: req.body.attributes,
    symbol: req.body.symbol,
    associatedAnimals: req.body.associatedAnimals,
    image: req.body.image,
  });

  try {
    const newFigure = await figure.save();
    res.status(201).json(newFigure);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateFigure = async (req, res) => {
  try {
    const figure = await MythologicalFigure.findById(req.params.id);
    if (figure == null) {
      return res.status(404).json({ message: "Mitolojik karakter bulunamadı" });
    }

    if (req.body.name != null) {
      figure.name = req.body.name;
    }
    if (req.body.shortDesc != null) {
      figure.shortDesc = req.body.shortDesc;
    }
    if (req.body.longDesc != null) {
      figure.longDesc = req.body.longDesc;
    }
    if (req.body.attributes != null) {
      figure.attributes = req.body.attributes;
    }
    if (req.body.symbol != null) {
      figure.symbol = req.body.symbol;
    }
    if (req.body.associatedAnimals != null) {
      figure.associatedAnimals = req.body.associatedAnimals;
    }
    if (req.body.image != null) {
      figure.image = req.body.image;
    }

    const updatedFigure = await figure.save();
    res.json(updatedFigure);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFigure = async (req, res) => {
  try {
    const figure = await MythologicalFigure.findById(req.params.id);
    if (!figure) {
      return res.status(404).json({ message: "Mitolojik karakter bulunamadı" });
    }

    // Silme işlemi
    await MythologicalFigure.deleteOne({ _id: req.params.id });
    res.json({ message: "Mitolojik karakter başarıyla silindi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
