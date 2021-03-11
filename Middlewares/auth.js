const jwt = require('jsonwebtoken');

const secret = 'secretPassword';

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'missing auth token' });
    const payload = jwt.verify(token, secret);
    return next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
