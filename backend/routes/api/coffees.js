const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Coffee, Company, Review, User } = require ('../../db/models');

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
    },
    include: [Coffee, User],
    order: [
      ['createdAt', 'ASC'],
    ],
  })

  return res.json(reviews);
}))

// Delete route to delete a single comment
router.delete(`/:id/delete/`, asyncHandler(async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  review.destroy();
  return res.json();
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

// Edit single review route
router.put('/review/edit', asyncHandler(async (req, res) => {
  const { id, userId, coffeeId, rating, review } = req.body;
  console.log(req.body);

  const grabReview = await Review.findByPk(id, {
    include: [Coffee, User],
  });
  console.log(grabReview);
  grabReview.update({
    userId, coffeeId, rating, review
  });

  return res.json(grabReview);
}));


router.post('/createReview', asyncHandler(async (req, res) => {
  const { rating, review, coffeeId, userId } = req.body;

  const newReview = await Review.create({
    rating, 
    review, 
    coffeeId, 
    userId
  });

  //ORDER QUERY
  const newestReview = await Review.findByPk(newReview.id, {
    include: [Coffee, User]
  })

  res.json(newestReview);
}));

module.exports = router;
