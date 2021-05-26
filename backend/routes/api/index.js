const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const coffeesRouter = require('./coffees');
const companiesRouter = require('./companies');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/coffees', coffeesRouter);
router.use('/companies', companiesRouter);

module.exports = router;
