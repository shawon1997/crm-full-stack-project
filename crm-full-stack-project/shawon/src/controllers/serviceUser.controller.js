const ServiceUser = require('../models/serviceUser.model');

exports.createServiceUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, adminId } = req.body;
    const serviceUser = await ServiceUser.create({ name, email, phoneNumber, adminId });
    res.status(201).json(serviceUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateServiceUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phoneNumber } = req.body;
    const serviceUser = await ServiceUser.findByPk(id);

    if (serviceUser) {
      await serviceUser.update({ name, email, phoneNumber });
      res.status(200).json(serviceUser);
    } else {
      res.status(404).json({ message: 'Service User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.listServiceUsers = async (req, res) => {
  try {
    const { adminId } = req.params;
    const serviceUsers = await ServiceUser.findAll({ where: { adminId } });
    res.status(200).json(serviceUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
