const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Company } = require ('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const companies = await Company.findAll();
  res.json(companies);
}));

module.exports = router;
