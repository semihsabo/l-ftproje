import express from 'express';
import { body } from 'express-validator';
import {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
} from '../controllers/blogController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Validation rules
const blogValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('excerpt').isLength({ max: 300 }).withMessage('Excerpt must be less than 300 characters'),
  body('featuredImage').notEmpty().withMessage('Featured image is required'),
  body('category').isIn(['business', 'technology', 'investment', 'consulting', 'news']).withMessage('Invalid category')
];

// Public routes
router.get('/', getBlogPosts);
router.get('/:id', getBlogPost);

// Protected routes
router.post('/', protect, blogValidation, createBlogPost);
router.put('/:id', protect, blogValidation, updateBlogPost);
router.delete('/:id', protect, deleteBlogPost);

export default router;
