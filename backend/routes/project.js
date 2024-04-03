const express = require('express');
const router = express.Router();

const controller = require('../controller/project_controller');
router.post('/create', controller.create);

module.exports = router;