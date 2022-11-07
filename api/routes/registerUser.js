const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const app = express();
require("../db/connection");
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

router.get('/', (req, res) => {
    res.send("Server is Responding.");
})

router.post('/',

    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Email should be valid').isEmail(),
    body('password', 'Password should be of minimum length 5.').isLength({ min: 5 }),

async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    console.log(req.body);
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "complete the details" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "User already Exist." });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password not matching." });
        }
        else {
            const user = new User({ name, email, password, cpassword });

            await user.save();
            console.log("User Saved")
            console.log(user);
            return res.sendStatus(201).json({ message: "User Registered" });
        }
    } catch (err) {
        console.error(err.message);
    }
});


module.exports = router;
