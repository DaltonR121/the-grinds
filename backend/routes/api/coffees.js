const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Coffee, Company } = require ('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const coffees = await Coffee.findAll({
    include: [Company]
  });
  res.json(coffees)
}))



module.exports = router;
