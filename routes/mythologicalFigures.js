const express = require("express");
const router = express.Router();
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const {
  getAllFigures,
  getFigureById,
  createFigure,
  updateFigure,
  deleteFigure,
} = require("../controllers/mythologicalFigures");

router.get("/", getAllFigures);

router.get("/:id", getFigureById);

router.post("/", authorizeAdmin, createFigure);

router.patch("/:id", authorizeAdmin, updateFigure);

router.delete("/:id", authorizeAdmin, deleteFigure);

module.exports = router;
