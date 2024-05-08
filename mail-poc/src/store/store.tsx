import { configureStore } from '@reduxjs/toolkit';
import mailReducer from './mail-Slice';

const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
