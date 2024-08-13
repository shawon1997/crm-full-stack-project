const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

router.post('/employee', employeeController.createEmployee);
router.put('/employee/:id', employeeController.updateEmployee);
router.get('/employees/:adminId', employeeController.listEmployees);

module.exports = router;
