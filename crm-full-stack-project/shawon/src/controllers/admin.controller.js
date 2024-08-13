const Admin = require('../models/admin.model');

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, phoneNumber, companyId } = req.body;
    const admin = await Admin.create({ name, email, phoneNumber, companyId });
    console.log('mndbvmzvn',admin);
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phoneNumber } = req.body;
    const admin = await Admin.findByPk(id);

    if (admin) {
      await admin.update({ name, email, phoneNumber });
      res.status(200).json(admin);
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.listAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
