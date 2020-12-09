const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  brand: String,
  model: String,
  year: String,
  engine: String,
  power: String,
  traction: String,
  fuel: String,
  image: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;