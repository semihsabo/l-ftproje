import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api';

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  'contact/submitContactForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    formData: {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    },
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.formData = {
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      };
      state.isSubmitted = false;
      state.error = null;
      state.successMessage = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.isSubmitted = true;
        state.successMessage = action.payload.message || 'Contact form submitted successfully!';
        state.error = null;
        // Reset form after successful submission
        state.formData = {
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        };
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload;
        state.successMessage = null;
      });
  },
});

export const { 
  updateFormData, 
  resetForm, 
  clearError, 
  clearSuccessMessage 
} = contactSlice.actions;

export default contactSlice.reducer;
