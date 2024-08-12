const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);

const mythologicalFiguresRouter = require("./routes/mythologicalFigures");
app.use("/api/mythologicalFigures", mythologicalFiguresRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
