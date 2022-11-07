const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator')

const Company = require('../models/Company');


// @route    POST api/company
// @desc     Register Company
// @access   Public
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
        const { companyname, email, password, cpassword } = req.body;

        if (!companyname || !email || !password || !cpassword) {
            return res.status(422).json({ error: "complete the details" });
        }

        try {
            const companyExist = await Company.findOne({ email: email });

            if (companyExist) {
                return res.status(422).json({ error: "User already Exist." });
            }
            else if (password != cpassword) {
                return res.status(422).json({ error: "password not matching." });
            }
            else {

                const company = new Company({ companyname, email, password, cpassword });

                await company.save();
                console.log("Company Saved");
                console.log(company);
                return res.sendStatus(201).json({ message: "Company Registered" });
            }
        } catch (err) {
            console.error(err.message);
        }
    })

module.exports = router;