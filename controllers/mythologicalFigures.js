const MythologicalFigure = require("../models/MythologicalFigure");

exports.getAllFigures = async (req, res) => {
  const lang = req.query.lang || "tr";

  try {
    const figures = await MythologicalFigure.find();

    const response = figures.map((figure) => ({
      name: figure.name,
      descriptions: {
        short: figure.descriptions.short[lang],
        long: figure.descriptions.long[lang],
      },
      attributes: figure.attributes[lang],
      symbols: figure.symbols[lang],
      associatedAnimals: figure.associatedAnimals[lang],
      image: figure.image,
    }));

    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFigureById = async (req, res) => {
  const lang = req.query.lang || "tr";

  try {
    const figure = await MythologicalFigure.findById(req.params.id);
    if (!figure) {
      return res.status(404).json({ message: "Mitolojik karakter bulunamadı" });
    }
    const response = {
      name: figure.name,
      descriptions: {
        short: figure.descriptions.short[lang],
        long: figure.descriptions.long[lang],
      },
      attributes: figure.attributes[lang],
      symbols: figure.symbols[lang],
      associatedAnimals: figure.associatedAnimals[lang],
      image: figure.image,
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getRandomFigure = async (req, res) => {
  const lang = req.query.lang || "tr";

  try {
    const figures = await MythologicalFigure.find();
    if (figures.length === 0) {
      return res.status(404).json({ message: "Mitolojik karakter bulunamadı" });
    }

    const randomIndex = Math.floor(Math.random() * figures.length);
    const randomFigure = figures[randomIndex];

    const response = {
      name: randomFigure.name,
      descriptions: {
        short: randomFigure.descriptions.short[lang],
        long: randomFigure.descriptions.long[lang],
      },
      attributes: randomFigure.attributes[lang],
      symbols: randomFigure.symbols[lang],
      associatedAnimals: randomFigure.associatedAnimals[lang],
      image: randomFigure.image,
    };

    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFigure = async (req, res) => {
  const figure = new MythologicalFigure({
    name: req.body.name,
    descriptions: {
      short: {
        tr: req.body.shortDescTr,
        en: req.body.shortDescEn,
      },
      long: {
        tr: req.body.longDescTr,
        en: req.body.longDescEn,
      },
    },
    attributes: {
      tr: req.body.attributesTr || [],
      en: req.body.attributesEn || [],
    },
    symbols: {
      tr: req.body.symbolTr || "",
      en: req.body.symbolEn || "",
    },
    associatedAnimals: {
      tr: req.body.associatedAnimalsTr || [],
      en: req.body.associatedAnimalsEn || [],
    },
    image: req.body.image || "",
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
    if (!figure) {
      return res.status(404).json({ message: "Mitolojik karakter bulunamadı" });
    }

    if (req.body.name != null) {
      figure.name = req.body.name;
    }
    if (req.body.shortDescTr != null) {
      figure.descriptions.short.tr = req.body.shortDescTr;
    }
    if (req.body.shortDescEn != null) {
      figure.descriptions.short.en = req.body.shortDescEn;
    }
    if (req.body.longDescTr != null) {
      figure.descriptions.long.tr = req.body.longDescTr;
    }
    if (req.body.longDescEn != null) {
      figure.descriptions.long.en = req.body.longDescEn;
    }
    if (req.body.attributesTr != null) {
      figure.attributes.tr = req.body.attributesTr;
    }
    if (req.body.attributesEn != null) {
      figure.attributes.en = req.body.attributesEn;
    }
    if (req.body.symbolTr != null) {
      figure.symbols.tr = req.body.symbolTr;
    }
    if (req.body.symbolEn != null) {
      figure.symbols.en = req.body.symbolEn;
    }
    if (req.body.associatedAnimalsTr != null) {
      figure.associatedAnimals.tr = req.body.associatedAnimalsTr;
    }
    if (req.body.associatedAnimalsEn != null) {
      figure.associatedAnimals.en = req.body.associatedAnimalsEn;
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

    await MythologicalFigure.deleteOne({ _id: req.params.id });
    res.json({ message: "Mitolojik karakter başarıyla silindi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
