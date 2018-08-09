const express = require('express');
const router = express.Router();

// Get API
router.get('t1', (req, res) => {
    res.json({msg: "user works"})
});

module.exports = router