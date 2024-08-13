const authorizeAdmin = (req, res, next) => {
  if (req.session.userRole !== "admin") {
    return res
      .status(403)
      .json({ message: "Erişim reddedildi: Yeterli yetkiniz yok." });
  }
  next();
};

module.exports = authorizeAdmin;
