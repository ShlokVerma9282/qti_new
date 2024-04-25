const express = require('express');
const router = express.Router();

const controller = require('../controller/uploads_controller');
router.post('/', controller.createFilesMetadata);

module.exports = router;