import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableSlice';
import roomReducer from './roomSlice';

export const store = configureStore({
  reducer: {
    tables: tableReducer,
    rooms: roomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
