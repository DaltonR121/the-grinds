const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, UserActivity, Coffee } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const activites = await UserActivity.findAll({
    include: [User, Coffee]
  })

  res.json(activites);
}))

module.exports = router;
