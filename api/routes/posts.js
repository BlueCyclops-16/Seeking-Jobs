const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const CompanyPost = require('../models/CompanyPost');
const UserPost = require('../models/UserPost');
const User = require('../models/User');
const Company = require('../models/Company');

// User Post Routes

// @route    POST /posts/createUserPost
// @desc     User Create a post
// @access   Private
router.post('/createUserPost', [auth,
    body('text', 'Text is required').not().isEmpty(),
],
    async (req, res) => {

        // Checking for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {

            const user = await User.findById(req.user.id).select('-password');

            const newPost = new UserPost({
                text: req.body.text,
                name: user.name,
                user: req.user.id
            });

            const post = await newPost.save();

            res.json(post);

        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error.");
        }

    }
)

// @route    GET posts/userPost
// @desc     Get all Users post
// @access   Private
router.get('/userPost', auth, async (req, res) => {

    try {
        // We are getting all the posts and also sorting them in latest order (if we want to get oldest first we can do date: 1)
        const posts = await UserPost.find().sort({ date: -1 });

        res.json(posts);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})



// Company Post Routes

// @route    POST /posts/createCompanyPost
// @desc     Company Create a post
// @access   Private
router.post('/createCompanyPost', [auth,
    body('text', 'Text is required').not().isEmpty(),
],
    async (req, res) => {

        // Checking for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {

            const company = await Company.findById(req.user.id).select('-password');

            const newPost = new CompanyPost({
                text: req.body.text,
                companyname: company.name,
                company: req.user.id
            });

            const post = await newPost.save();

            res.json(post);

        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error.");
        }

    }
)

// @route    GET posts/companyPost
// @desc     Get all Companies post
// @access   Private
router.get('/companyPost', auth, async (req, res) => {

    try {
        // We are getting all the posts and also sorting them in latest order (if we want to get oldest first we can do date: 1)
        const posts = await CompanyPost.find().sort({ date: -1 });

        res.json(posts);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;