import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import homeReducer from '@/features/home/state/home.slice';
import portfolioReducer from '@/features/portfolio/state/portfolio.slice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    home: homeReducer,
    portfolio: portfolioReducer,
  },
});

// Define types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for use in components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
