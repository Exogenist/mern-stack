const express = require('express');
const router = express.Router();

// Get API
router.get('/t1', (req, res) => {
    res.json({msg: "posts works"})
});

module.exports = router