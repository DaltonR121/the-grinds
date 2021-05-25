const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Coffee, Company } = require ('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const coffees = await Coffee.findAll({
    include: [Company]
  });
  res.json(coffees);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const coffee = await Coffee.findByPk(req.params.id, {
    include: [Company]
  });
  return res.json(coffee);
}));

router.post('/', asyncHandler(async (req, res) => {
  const { flavorName, companyId, description, imgUrl } = req.body;

  const newCoffee = await Coffee.create({
    flavorName, 
    companyId, 
    description, 
    imgUrl
  });

  res.json(newCoffee);
}));

module.exports = router;
