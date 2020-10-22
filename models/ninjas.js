const { Schema, model } = require('mongoose');

// cteate schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
});

const Ninja = model('ninja', NinjaSchema);
module.exports = Ninja;
