import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  shortDescription: {
    type: String,
    required: [true, 'Please add a short description'],
    maxlength: 200
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['consulting', 'investment', 'technology', 'trade']
  },
  features: [{
    title: String,
    description: String
  }],
  pricing: {
    type: String,
    enum: ['free', 'paid', 'custom'],
    default: 'custom'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  seo: {
    title: String,
    description: String,
    keywords: [String]
  }
}, {
  timestamps: true
});

export default mongoose.model('Service', serviceSchema);
