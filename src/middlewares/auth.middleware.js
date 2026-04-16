const jwt = require('jsonwebtoken');
const env = require('../config/env');
const prisma = require('../utils/prisma');

/**
 * Middleware to protect routes with JWT
 */
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      /**
       * Verifies and decodes a JWT token using the application's secret key.
       * @param {string} token - The JWT token to verify and decode
       * @param {string} env.JWT_SECRET - The secret key used to verify the token's signature
       * @returns {Object} decoded - The decoded token payload containing user information and claims
       * @throws {Error} Throws an error if the token is invalid, expired, or the signature doesn't match
       */
      const decoded = jwt.verify(token, env.JWT_SECRET);

      // Get user from the token
      req.user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          name: true,
          email: true,
          isVerified: true,
          createdAt: true,
        },
      });

      if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
