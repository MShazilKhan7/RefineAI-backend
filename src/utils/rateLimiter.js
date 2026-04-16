const { redis } = require("../utils/redis.js");

const rateLimiter = async (key, limit, windowSeconds) => {
  const current = await redis.incr(key);

  if (current === 1) {
    // first request → set expiry
    await redis.expire(key, windowSeconds);
  }

  if (current > limit) {
    return false; // blocked
  }

  return true; // allowed
};

module.exports = rateLimiter;

// rate limiter 
// if the key is not found in the redis, redis creates it and set its initial value to 0
// increments the value to 1 with the incr utility

