const Run = require('../models/run.model');

exports.createOrUpdateRun = async (req, res) => {
  try {
    const {
      name,
      adminId,
      employeeId,
      serviceUserId,
      assignedDate,
      assignedStartTime,
      assignedEndTime,
      status,
      distance,
    } = req.body;

    const run = await Run.findOne({ where: { name, assignedDate } });

    if (run) {
      await run.update({
        adminId,
        employeeId,
        serviceUserId,
        assignedStartTime,
        assignedEndTime,
        status,
        distance,
      });

      res.status(200).json(run);
    } else {
      const newRun = await Run.create({
        name,
        adminId,
        employeeId,
        serviceUserId,
        assignedDate,
        assignedStartTime,
        assignedEndTime,
        status,
        distance,
      });

      res.status(201).json(newRun);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.showRun = async (req, res) => {
  try {
    const { id } = req.params;
    const run = await Run.findByPk(id);

    if (run) {
      res.status(200).json(run);
    } else {
      res.status(404).json({ message: 'Run not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
