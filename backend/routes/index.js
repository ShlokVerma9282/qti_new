const express = require('express');
const router = express.Router();

router.use('/project', require('./project'));
router.use('/uploads', require('./uploads'));
module.exports = router;