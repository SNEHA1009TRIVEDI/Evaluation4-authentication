const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const utils = require("../utils/redis.js");
// require("dotenv").config();
exports.addUser = async (data) => {
  const saltRounds = 10;
  data.password = await bcrypt.hash(data.password, saltRounds);
  const { username, password } = data;

  return await db.User.create({ username, password });
};
exports.loginVerification = async (data) => {
  const { username, password } = data;
  const user = await db.User.findOne({ where: { username } });
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1D",
      });
      const redisToken = await utils.insertIntoRedis(token);
      console.log(redisToken);
      return { token: token, success: true };
    }
  }
  return false;
};
exports.varifyToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await db.User.findOne({ where: { username: decoded.username } });
  if (user) {
    return true;
  }
  return false;
};
