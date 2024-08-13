const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.config');

// Import Routes
const companyRoutes = require('./routes/company.routes');
const adminRoutes = require('./routes/admin.routes');
const employeeRoutes = require('./routes/employee.routes');
const serviceUserRoutes = require('./routes/serviceUser.routes');
const visitRoutes = require('./routes/visit.routes');
const runRoutes = require('./routes/run.routes');
const app = express();



app.use(bodyParser.json());

// Register Routes
app.use('/api', companyRoutes);
app.use('/api', adminRoutes);
app.use('/api', employeeRoutes);
app.use('/api', serviceUserRoutes);
app.use('/api', visitRoutes);
app.use('/api', runRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

module.exports = app;
