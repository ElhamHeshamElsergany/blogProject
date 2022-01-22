const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require('../models/user');



router.get('/', async (req, res, next) => {
    const users = await User.find()
    res.json(users)
})
router.post('/signup', async (req, res, next) => {
    const user = req.body;
    const doc = await User.create(user);
    console.log(doc, "doc", User, "user");
    res.json(doc);
})
router.post("/signin", async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();
    const isValid = bcryptjs.compareSync(password, user.password);
    console.log(isValid);
    if (!isValid) {
        throw new Error('UN_AUTH')
    }
    else {
        const token = jwt.sign({
            username, _id: user.id,
            maxAge: "3d"
        }, "hdgifjhiuhewuihiewdkwejieui778r3$fl")
        console.log(token, "token")
        res.json({ token })
    }
});

module.exports = router;