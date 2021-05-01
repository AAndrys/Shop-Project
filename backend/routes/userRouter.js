const express = require("express");
const router = express.Router();
const UserModel = require("../db/schema/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  findInDatabaseSimilarResult,
  isEmptyData,
  authenticate,
} = require("../middlewares/index");

/////////////////////////////////
router.get("/list", async (req, res) => {
  try {
    const userFind = await UserModel.find();
    res.json(userFind);
  } catch (err) {
    console.log(err);
  }
});

router.get("/list2", authenticate, async (req, res) => {
  try {
    const userFind = await UserModel.find();
    res.json(userFind[0]);
  } catch (err) {
    console.log(err);
  }
});

// router.get("/test", async (req, res) => {
//   console.log(req.query);

//   try {
//     const userFind = await UserModel.find({
//       username: req.query.username,
//     })

//     await UserModel.updateOne(
//       { username: "admin" },
//       [
//         // {
//         //   $addFields: { Token: '' },
//         // },
//         // {
//         //   $unset: [ 'Token' ],
//         // },
//       ],
//       { new: true } // to return updated document
//     );

//     res.json(userFind);
//   } catch (err) {
//     console.log(err);
//   }
// });

///////////////////////////////////////////////

router.post("/auth/login", isEmptyData, async (req, res) => {
  const { userEmail, username, password } = req.body;

  try {
    const userFind = await UserModel.find(
      userEmail
        ? {
            userEmail: userEmail,
          }
        : {
          username: username 
        }
    ).select("_id username userEmail password");

    if (userFind.length) {
      const validPassword = await bcrypt.compare(
        password,
        userFind[0].password
      );

      if (validPassword) {
        const accessToken = jwt.sign(
          { userEmail, username },
          process.env.TOKEN_SECRET,
          { expiresIn: 86400 }
        );
        const refreshToken = jwt.sign(
          { userEmail, username },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: 525600 }
        );

        await UserModel.updateOne(
          { _id: userFind[0]._id },
          {
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
          function (err) {
            if (err) return res.status(400).json({ success: false });

            res.cookie("JWT", accessToken, {
              maxAge: 86400000,
              httpOnly: true,
            });

            res.status(200).send({ accessToken, refreshToken, success: true });
          }
        );
      } else {
        res.status(400).json({ success: false });
      }
    } else
      res.json({
        message: "Cannot find this user in database!",
        success: false,
      });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post(
  "/auth/register",
  isEmptyData,
  findInDatabaseSimilarResult,
  async (req, res) => {
    const { userEmail, username, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new UserModel({
        userEmail,
        username,
        password: hashedPassword,
      });

      const createdUser = await newUser.save();

      console.log(createdUser);
      res.status(201).json({ registered: true, success: true });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  }
);

router.post("/auth/refresh", isEmptyData, async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).send({ message: "No token." });
  }

  try {
    const findToken = await UserModel.find({
      refreshToken,
    }).select("_id username userEmail accessToken refreshToken");

    if (findToken.length) {
      await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

      const accessToken = jwt.sign(
        { userEmail: findToken[0].userEmail, username: findToken[0].username },
        process.env.TOKEN_SECRET,
        { expiresIn: 20 }
      );

      await UserModel.updateOne(
        { _id: findToken[0]._id },
        {
          accessToken: accessToken,
        },
        function (err) {
          if (err) return res.status(400).json({ success: false });

          res.cookie("JWT", accessToken, {
            maxAge: 86400000,
            httpOnly: true,
          });

          res.send({ accessToken });
        }
      );
    } else {
      res.status(400).json({ message: "Token not found." });
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/auth/authenticate", authenticate, async (req, res) => {
  const token = req.cookies.JWT;

  if (token === undefined)
    return res.status(401).send({ message: "Token is null." });

  try {
    const userAccessToken = await UserModel.find({
      accessToken: token,
    }).select("_id username userEmail accessToken refreshToken");

    res.cookie("JWT", userAccessToken[0].accessToken, {
      maxAge: 86400000,
      httpOnly: true,
    });

    res.status(201).json({ user: userAccessToken[0], success: true });
  } catch (err) {
    res.status(400).json({ message: err });
  }

});

module.exports = router;
