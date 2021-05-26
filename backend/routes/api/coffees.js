const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Coffee, Company, Review } = require ('../../db/models');

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

// Get route to return all reviews for a single coffee page
router.get('/:id/getReviews/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll({
    where: {
      coffeeId: req.params.id
    }
  })
  return res.json(reviews);
}))

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

router.post('/createReview', asyncHandler(async (req, res) => {
  const { rating, review, coffeeId, userId } = req.body;

  const newReview = await Review.create({
    rating, 
    review, 
    coffeeId, 
    userId
  });

  res.json(newReview);
}));

module.exports = router;
