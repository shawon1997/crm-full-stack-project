const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Admin = require('./admin.model');
const Employee = require('./employee.model');
const ServiceUser = require('./serviceUser.model');

const Run = sequelize.define('Run', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignedDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  assignedStartTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  assignedEndTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

Run.belongsTo(Admin, { foreignKey: 'adminId' });
Run.belongsTo(Employee, { foreignKey: 'employeeId' });
Run.belongsTo(ServiceUser, { foreignKey: 'serviceUserId' });

module.exports = Run;
