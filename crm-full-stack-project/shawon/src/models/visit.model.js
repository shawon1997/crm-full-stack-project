const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Company = require('./company.model');
const Admin = require('./admin.model');
const Employee = require('./employee.model');
const ServiceUser = require('./serviceUser.model');

const Visit = sequelize.define('Visit', {
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

Visit.belongsTo(Company, { foreignKey: 'companyId' });
Visit.belongsTo(Admin, { foreignKey: 'adminId' });
Visit.belongsTo(Employee, { foreignKey: 'employeeId' });
Visit.belongsTo(ServiceUser, { foreignKey: 'serviceUserId' });

module.exports = Visit;
