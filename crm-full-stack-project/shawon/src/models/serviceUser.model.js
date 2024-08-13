const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Admin = require('./admin.model');

const ServiceUser = sequelize.define('ServiceUser', {
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

ServiceUser.belongsTo(Admin, { foreignKey: 'adminId' });

module.exports = ServiceUser;
