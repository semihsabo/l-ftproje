import express from 'express';
import { body } from 'express-validator';
import {
  getServices,
  getService,
  createService,
  updateService,
  deleteService
} from '../controllers/serviceController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Validation rules
const serviceValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('shortDescription').isLength({ max: 200 }).withMessage('Short description must be less than 200 characters'),
  body('image').notEmpty().withMessage('Image is required'),
  body('category').isIn(['consulting', 'investment', 'technology', 'trade']).withMessage('Invalid category')
];

// Public routes
router.get('/', getServices);
router.get('/:id', getService);

// Protected routes (Admin only)
router.post('/', protect, admin, serviceValidation, createService);
router.put('/:id', protect, admin, serviceValidation, updateService);
router.delete('/:id', protect, admin, deleteService);

export default router;
