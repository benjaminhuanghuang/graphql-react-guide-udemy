const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String
});

userSchema.pre('save', async function save(next) {
  const user = this;

  // password is updated or user is first created
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next();
});

userSchema.methods.comparePassword  = function comparePassword(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) {
      throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
      throw new Error('Unable to login') 
  }
  return user
}

const User = mongoose.model('User', userSchema);

module.exports = User