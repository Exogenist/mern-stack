const express = require('express');
const router = express.Router();

//Load User model
const User = require('../../models/User');

// @route   Get api/user/t1
// @desc    Test user route
// @access  Public
router.get('/t1', (req, res) => {
    res.json({msg: "user works"})
});

// @route   Get api/user/register
// @desc    Register user
// @access  Public
router.get('/register', (req, res) => {
    User.findOne({email: req.body.email})
});

module.exports = router