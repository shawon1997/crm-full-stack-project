const express = require('express');
const router = express.Router();
const runController = require('../controllers/run.controller');

router.post('/run', runController.createOrUpdateRun);
router.get('/run/:id', runController.showRun);

module.exports = router;
