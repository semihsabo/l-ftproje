import Blog from '../models/Blog.js';
import { validationResult } from 'express-validator';

// @desc    Get all blog posts
// @route   GET /api/blog
// @access  Public
export const getBlogPosts = async (req, res) => {
  try {
    const { category, status, page = 1, limit = 10 } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (status) query.status = status;

    const skip = (page - 1) * limit;

    const posts = await Blog.find(query)
      .populate('author', 'name')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      count: posts.length,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single blog post
// @route   GET /api/blog/:id
// @access  Public
export const getBlogPost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id)
      .populate('author', 'name');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Increment view count
    await Blog.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create new blog post
// @route   POST /api/blog
// @access  Private
export const createBlogPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const postData = {
      ...req.body,
      author: req.user.id
    };

    const post = await Blog.create(postData);

    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update blog post
// @route   PUT /api/blog/:id
// @access  Private
export const updateBlogPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    let post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Check if user owns the post or is admin
    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this post'
      });
    }

    post = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'name');

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete blog post
// @route   DELETE /api/blog/:id
// @access  Private
export const deleteBlogPost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Check if user owns the post or is admin
    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this post'
      });
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
