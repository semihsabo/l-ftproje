import Contact from '../models/Contact.js';
import { validationResult } from 'express-validator';

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
export const getContactMessages = async (req, res) => {
  try {
    const { status, priority, page = 1, limit = 10 } = req.query;
    
    let query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;

    const skip = (page - 1) * limit;

    const messages = await Contact.find(query)
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      count: messages.length,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single contact message
// @route   GET /api/contact/:id
// @access  Private/Admin
export const getContactMessage = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('notes.addedBy', 'name email');

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
export const createContactMessage = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const message = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Contact message sent successfully',
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update contact message status
// @route   PUT /api/contact/:id
// @access  Private/Admin
export const updateContactMessage = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email');

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Add note to contact message
// @route   POST /api/contact/:id/notes
// @access  Private/Admin
export const addNoteToContact = async (req, res) => {
  try {
    const { note } = req.body;

    if (!note) {
      return res.status(400).json({
        success: false,
        message: 'Note is required'
      });
    }

    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          notes: {
            note,
            addedBy: req.user.id
          }
        }
      },
      { new: true }
    ).populate('assignedTo', 'name email')
     .populate('notes.addedBy', 'name email');

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete contact message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
export const deleteContactMessage = async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
