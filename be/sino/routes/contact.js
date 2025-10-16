import express from 'express';
import { body } from 'express-validator';
import {
  getContactMessages,
  getContactMessage,
  createContactMessage,
  updateContactMessage,
  addNoteToContact,
  deleteContactMessage
} from '../controllers/contactController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required')
];

// Public routes
router.post('/', contactValidation, createContactMessage);

// Protected routes (Admin only)
router.get('/', protect, admin, getContactMessages);
router.get('/:id', protect, admin, getContactMessage);
router.put('/:id', protect, admin, updateContactMessage);
router.post('/:id/notes', protect, admin, addNoteToContact);
router.delete('/:id', protect, admin, deleteContactMessage);

export default router;
