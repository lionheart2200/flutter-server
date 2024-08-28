const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    require: true,
    type: String,
    trim : true,
  },
  email: {
    require: true,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  value.match(re);
      },
      message: 'Your email is valid !'
    }

  },
  password: {
    require: true,
    type: String,
  },
  address: {
    default: '',
    type: String,
    trim: true,
  },
  type: {
    type: String,
    default: 'user',
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;