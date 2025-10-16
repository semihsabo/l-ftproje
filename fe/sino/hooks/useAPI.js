'use client';

import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3001/api';

export const useAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      console.error('API Error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading, error };
};

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/services`);
        if (!response.ok) throw new Error('Failed to fetch services');
        const data = await response.json();
        setServices(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Services fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};

export const useBlog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog`);
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        setBlogPosts(data.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Blog fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return { blogPosts, loading, error };
};

export const submitContact = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Failed to submit contact form');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Contact submit error:', err);
    throw err;
  }
};
