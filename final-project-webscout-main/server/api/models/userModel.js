import mongoose from 'mongoose';

//user schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
      },
      email: {
        type: String,
        required: 'Email is required',
      },
      password: {
        type: String,
        required: 'Password is required',
      },
      phone: {
          type: String,
          
      },
      favorites: {
          type: [String],
          default: []
      }
}, 
{
    versionKey: false
});

const userModel = mongoose.model('User', userSchema);
export default userModel;