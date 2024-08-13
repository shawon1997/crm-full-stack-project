const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/admin', adminController.createAdmin);
router.put('/admin/:id', adminController.updateAdmin);
router.get('/admins', adminController.listAdmins);

module.exports = router;
