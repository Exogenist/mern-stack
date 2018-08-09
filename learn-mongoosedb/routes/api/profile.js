const express = require('express');
const router = express.Router();

// Get api/profile/test1
// user route
// public access
router.get('/t1', (req, res) => {
    res.json({msg: "profile works"})
});

module.exports = router