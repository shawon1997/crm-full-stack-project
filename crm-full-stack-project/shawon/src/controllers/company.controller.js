const Company = require('../models/company.model');

exports.createCompany = async (req, res) => {
  try {
    const { name, website } = req.body;
    const company = await Company.create({ name, website });
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, website } = req.body;
    const company = await Company.findByPk(id);

    if (company) {
      await company.update({ name, website });
      res.status(200).json(company);
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.listCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
