import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User, UserPreferences } from '@/types';

const defaultPreferences: UserPreferences = {
  theme: 'system',
  notifications: {
    push: true,
    email: true,
    bills: true,
    payments: true,
    friendRequests: true,
  },
  privacy: {
    profileVisibility: 'friends',
    showPhone: false,
    showEmail: false,
  },
};

const initialState: UserState = {
  profile: null,
  preferences: defaultPreferences,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setProfile: (state, action: PayloadAction<User>) => {
      state.profile = action.payload;
      state.error = null;
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    setPreferences: (state, action: PayloadAction<UserPreferences>) => {
      state.preferences = action.payload;
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserPreferences>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
  },
});

export const {
  setLoading,
  setError,
  setProfile,
  updateProfile,
  setPreferences,
  updatePreferences,
} = userSlice.actions;

export default userSlice.reducer;