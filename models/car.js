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

// createCar = async () =>{ 

//     const brand = "FORD" 
//     const model = "Ka" 
//     const year = "2015"
//     const engine = "900 cc"
//     const power = "50 cv"
//     const traction = "fd"
//     const fuel = "fuel"
    
//     await Car.create({ brand, model, year, engine, power, traction, fuel}) 
//     console.log('carsssssss model', brand, model, year, engine, power, traction, fuel );
// } 
// createCar()

module.exports = Car;