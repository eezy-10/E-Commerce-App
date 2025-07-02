import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
  },
  description: {
    type: String,
    required: [true, 'Please enter product description'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/150',
  },
  category: {
    type: String,
    required: [true, 'Please specify category'],
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);