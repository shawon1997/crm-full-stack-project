const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visit.controller');

router.post('/visit', visitController.createVisit);
router.put('/visit/:id', visitController.updateVisit);
router.get('/visits', visitController.listVisits);

module.exports = router;
