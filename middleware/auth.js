const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token exists
  if (!authHeader) {
    return res.status(401).json("No token provided");
  }

  let token;

  // Support BOTH formats:
  // 1. "Bearer <token>"
  // 2. "<token>"
  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else {
    token = authHeader;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user to request
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(403).json("Invalid token");
  }
};

module.exports = authenticate;