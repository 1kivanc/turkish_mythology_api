const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({
      username,
      password,
      role: "user",
    });

    await newUser.save();
    res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Geçersiz kullanıcı adı veya şifre." });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Geçersiz kullanıcı adı veya şifre." });
    }

    req.session.userId = user._id;
    req.session.userRole = user.role;

    res.json({ message: "Giriş başarılı", role: user.role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Çıkış yapılamadı." });
    }
    res.json({ message: "Çıkış başarılı." });
  });
};
