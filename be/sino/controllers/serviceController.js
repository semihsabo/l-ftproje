import Service from '../models/Service.js';
import { validationResult } from 'express-validator';

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = async (req, res) => {
  try {
    const { category, isActive } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (isActive !== undefined) query.isActive = isActive === 'true';

    const services = await Service.find(query)
      .sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single service
// @route   GET /api/services/:id
// @access  Public
export const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create new service
// @route   POST /api/services
// @access  Private/Admin
export const createService = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update service
// @route   PUT /api/services/:id
// @access  Private/Admin
export const updateService = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private/Admin
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      message: 'Service deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
