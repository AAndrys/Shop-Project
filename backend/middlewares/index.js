const jwt = require("jsonwebtoken");
const UserModel = require("../db/schema/user");

const findInDatabaseSimilarResult = async (req, res, next) => {
  const { userEmail, username } = req.body;

  try {
    const userFind = await UserModel.find({
      userEmail,
      username,
    });

    if (!userFind.length) next();
    else
      res
        .status(400)
        .json({ message: "Exist. Change your username or email." });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const isEmptyData = (req, res, next) => {
  if (Object.values(req.body).length) next();
  else res.status(400).json({ message: "Data is empty.", success: false });
};

const authenticate = (req, res, next) => {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1];
  const token = req.cookies.JWT;
  console.log(token);
  if (token === undefined)
    return res.status(401).send({ message: "Token is null." });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send({ message: "Token expired." });

    req.user = user;
    next();
  });
};

module.exports = {
  findInDatabaseSimilarResult,
  isEmptyData,
  authenticate,
};
