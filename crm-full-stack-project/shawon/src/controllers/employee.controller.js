const Employee = require('../models/employee.model');

exports.createEmployee = async (req, res) => {
  try {
    const { name, email, phoneNumber, adminId } = req.body;
    const employee = await Employee.create({ name, email, phoneNumber, adminId });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phoneNumber } = req.body;
    const employee = await Employee.findByPk(id);

    if (employee) {
      await employee.update({ name, email, phoneNumber });
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.listEmployees = async (req, res) => {
  try {
    const { adminId } = req.params;
    const employees = await Employee.findAll({ where: { adminId } });
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
