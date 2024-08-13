const { body, validationResult } = require('express-validator');

exports.validateCompany = [
  body('name').notEmpty().withMessage('Company name is required'),
  body('website').isURL().withMessage('Invalid URL'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateAdmin = [
  body('name').notEmpty().withMessage('Admin name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
