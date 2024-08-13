const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
}, {
  timestamps: true,
});

module.exports = Company;
