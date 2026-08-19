const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized, no token" });
  }
  try {
    await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default auth;