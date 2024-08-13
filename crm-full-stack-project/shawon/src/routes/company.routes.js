const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller');

router.post('/company', companyController.createCompany);
router.put('/company/:id', companyController.updateCompany);
router.get('/companies', companyController.listCompanies);

module.exports = router;
