const express = require('express');
const router = express.Router();
const UserModel = require('../db/schema/user');

router.get('/list', async (req, res) => {
    try {
        const userFind = await UserModel.find();
        res.json(userFind);
    } catch (err) {
        console.log(err);
    }
});

router.get('/getUser', async (req, res) => {
    console.log(req.query)
    try {
        const userFind = await UserModel.find({ 
            // userEmail: req.body.userEmail,
            username: req.query.username,
            password: req.query.password,
        });
        res.json(userFind);
    } catch (err) {
        console.log(err);
    }
});

router.post('/create', async (req, res) => {
    const newUser = new UserModel({
        userEmail: req.body.userEmail,
        username: req.body.username,
        password: req.body.password,
    })
    try {
        const createdUser = await newUser.save();
        console.log(createdUser);
        res.json(createdUser);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;