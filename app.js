const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Veritabanı bağlantısını başlatın
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

// Rotalar
const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);

const mythologicalFiguresRouter = require("./routes/mythologicalFigures");
app.use("/api/mythologicalFigures", mythologicalFiguresRouter);

// Vercel'in serverless işlevi olarak çalıştırılacak
module.exports = app;
