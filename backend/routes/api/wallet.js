const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Wallet } = require('../../db/models');

const validateTransaction = (wallet, amount) => {
  const finalTotal = wallet.amount - amount;
  if (finalTotal < 0) {
    return false;
  };
  return true;
};

router.get('/', asyncHandler(async (req, res) => {
  const { user_id } = req.body;
  const wallet = await Wallet.findOne({
    where: {
      user_id: user_id,
    }
  });
  return res.json({ wallet });
}));

router.patch('/deposit', asyncHandler(async (req, res) => {
  const { wallet_id, amount } = req.body;
  const wallet = await Wallet.findByPk(wallet_id);
  wallet.amount += amount;
  return res.json({ wallet });
}));

router.patch('/withdraw', asyncHandler(async (req, res) => {
  const { wallet_id, amount } = req.body;
  const wallet = await Wallet.findByPk(wallet_id);
  const clear = validateTransaction(wallet, amount);
  if (clear) {
    wallet.amount -= amount;
    return res.json({ wallet });
  };
  return {
    message: 'Unsuccessful'
  };
}));

module.exports = router;
