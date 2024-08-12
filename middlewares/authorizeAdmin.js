const authorizeAdmin = (req, res, next) => {
  if (req.user.username !== "admin") {
    return res
      .status(403)
      .json({ message: "Erişim reddedildi: Yeterli yetkiniz yok." });
  }
  next();
};

module.exports = authorizeAdmin;
