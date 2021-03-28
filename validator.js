const Joi = require('joi');

const schema = Joi.object({
  num: Joi.number(),
  categoryy: Joi.string().min(2).required(),
  // fname: Joi.string().min(3).required(),
  // lname: Joi.string().min(3).required(),
  // active: Joi.bool().required(),
});

module.exports = {
  schema,
};