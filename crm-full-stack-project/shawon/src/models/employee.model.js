const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Admin = require('./admin.model');

const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Ensures name cannot be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // Ensures email cannot be null
    validate: {
      isEmail: true, // Validates that the email is in the correct format
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false, // Ensures phoneNumber cannot be null
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});


Employee.belongsTo(Admin, { foreignKey: 'adminId' });

module.exports = Employee;
