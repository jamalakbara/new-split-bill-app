import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FriendsState, User } from '@/types';

const initialState: FriendsState = {
  friends: [],
  pendingRequests: [],
  loading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setFriends: (state, action: PayloadAction<User[]>) => {
      state.friends = action.payload;
      state.error = null;
    },
    addFriend: (state, action: PayloadAction<User>) => {
      state.friends.push(action.payload);
    },
    removeFriend: (state, action: PayloadAction<string>) => {
      state.friends = state.friends.filter(friend => friend.id !== action.payload);
    },
    setPendingRequests: (state, action: PayloadAction<User[]>) => {
      state.pendingRequests = action.payload;
    },
    addPendingRequest: (state, action: PayloadAction<User>) => {
      state.pendingRequests.push(action.payload);
    },
    removePendingRequest: (state, action: PayloadAction<string>) => {
      state.pendingRequests = state.pendingRequests.filter(
        request => request.id !== action.payload
      );
    },
  },
});

export const {
  setLoading,
  setError,
  setFriends,
  addFriend,
  removeFriend,
  setPendingRequests,
  addPendingRequest,
  removePendingRequest,
} = friendsSlice.actions;

export default friendsSlice.reducer;