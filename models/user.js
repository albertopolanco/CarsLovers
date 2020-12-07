const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  age: String,
  country: String,
  city: String,
  image: String
}, 
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

// createUser = async () => {
//   const username = "Alberto"
//   const password = "1234"
//   const age = "33"
//   const country = "España"
//   const city = "Terrassa"

//   await User.create({ username, password, age, country, city})
//   console.log("userrrrrr", username, password, age, country, city)
// }

//createUser()
module.exports = User;