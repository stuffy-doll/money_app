const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./user.js');
const walletRouter = require('./wallet.js');
const transactionRouter = require('./transaction.js');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/wallet', walletRouter);
router.use('/transactions', transactionRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
