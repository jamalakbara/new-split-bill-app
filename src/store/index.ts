import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import billsSlice from './slices/billsSlice';
import friendsSlice from './slices/friendsSlice';
import groupsSlice from './slices/groupsSlice';
import userSlice from './slices/userSlice';
import notificationsSlice from './slices/notificationsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    bills: billsSlice,
    friends: friendsSlice,
    groups: groupsSlice,
    user: userSlice,
    notifications: notificationsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;