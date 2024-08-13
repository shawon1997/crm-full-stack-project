const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Company = require('./company.model');

const Admin = sequelize.define('Admin', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

Admin.belongsTo(Company, { foreignKey: 'companyId' });

module.exports = Admin;
