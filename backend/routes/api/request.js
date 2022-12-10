const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Request } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const { user_id } = req.body;
  const requests = Request.findAll({
    where: {
      user_id: user_id
    }
  });
  return res.json({ requests });
}));
