import { configureStore } from '@reduxjs/toolkit'
import { agendaSlice } from './agenda';
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    agenda: agendaSlice.reducer,
  },
});