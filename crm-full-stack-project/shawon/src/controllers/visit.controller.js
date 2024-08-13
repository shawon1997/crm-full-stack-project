const Visit = require('../models/visit.model');

exports.createVisit = async (req, res) => {
  try {
    const {
      companyId,
      adminId,
      employeeId,
      serviceUserId,
      assignedDate,
      assignedStartTime,
      assignedEndTime,
      status,
      distance,
    } = req.body;

    const visit = await Visit.create({
      companyId,
      adminId,
      employeeId,
      serviceUserId,
      assignedDate,
      assignedStartTime,
      assignedEndTime,
      status,
      distance,
    });

    res.status(201).json(visit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateVisit = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      assignedDate,
      assignedStartTime,
      assignedEndTime,
      status,
      distance,
    } = req.body;

    const visit = await Visit.findByPk(id);

    if (visit) {
      await visit.update({
        assignedDate,
        assignedStartTime,
        assignedEndTime,
        status,
        distance,
      });

      res.status(200).json(visit);
    } else {
      res.status(404).json({ message: 'Visit not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.listVisits = async (req, res) => {
  try {
    const visits = await Visit.findAll();
    res.status(200).json(visits);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
