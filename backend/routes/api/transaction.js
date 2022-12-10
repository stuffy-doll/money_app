const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Transaction } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const { user_id } = req.body;
  const paid = Transaction.findAll({
    where: {
      user_id: user_id
    }
  });
  const received = Transaction.findAll({
    where: {
      to_id: user_id
    }
  });
  res.json({
    paid,
    received
  });
}));

router.post('/new', asyncHandler(async (req, res) => {
  const { user_id, to_id, to, from, amount, date } = req.body;
  const transaction = Transaction.create(
    user_id,
    to_id,
    to,
    from,
    amount,
    date
  );
  return res.json(transaction);
}));

module.exports = router;
