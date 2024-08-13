const express = require('express');
const router = express.Router();
const serviceUserController = require('../controllers/serviceUser.controller');

router.post('/serviceUser', serviceUserController.createServiceUser);
router.put('/serviceUser/:id', serviceUserController.updateServiceUser);
router.get('/serviceUsers/:adminId', serviceUserController.listServiceUsers);

module.exports = router;
