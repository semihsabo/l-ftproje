import { configureStore } from '@reduxjs/toolkit';
import servicesSlice from './slices/servicesSlice';
import blogSlice from './slices/blogSlice';
import contactSlice from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    blog: blogSlice,
    contact: contactSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export default store;
