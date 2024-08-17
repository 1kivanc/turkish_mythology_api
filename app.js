const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use("/public", express.static(__dirname + "/public"));
const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);

const mythologicalFiguresRouter = require("./routes/mythologicalFigures");
app.use("/api/mythologicalFigures", mythologicalFiguresRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

module.exports = app;
