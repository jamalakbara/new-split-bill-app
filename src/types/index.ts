// Global type definitions for the Split Bill App

export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Bill {
  id: string;
  creator_id: string;
  title: string;
  amount: number;
  category: string;
  description?: string;
  receipt_url?: string;
  status: 'active' | 'settled' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface BillParticipant {
  id: string;
  bill_id: string;
  user_id: string;
  amount_owed: number;
  amount_paid: number;
  created_at: string;
  updated_at: string;
}

export interface Friendship {
  id: string;
  user_id: string;
  friend_id: string;
  status: 'pending' | 'accepted';
  created_at: string;
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface GroupMember {
  id: string;
  group_id: string;
  user_id: string;
  role: 'admin' | 'member';
  joined_at: string;
}

export interface Payment {
  id: string;
  bill_id: string;
  payer_id: string;
  payee_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
  completed_at?: string;
}

export interface Notification {
  id: string;
  user_id: string;
  type: 'bill_created' | 'payment_received' | 'payment_requested' | 'friend_request';
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

// Navigation types
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  CreateBill: undefined;
  BillPreview: { billId: string };
  FriendProfile: { userId: string };
  Groups: undefined;
  Profile: undefined;
  Settings: undefined;
  Notifications: undefined;
  Insights: undefined;
  Onboarding: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  Dashboard: undefined;
  Bills: undefined;
  Friends: undefined;
  Profile: undefined;
};

// Form types
export interface CreateBillForm {
  title: string;
  amount: string;
  description: string;
  category: string;
  participants: string[];
  splitType: 'equal' | 'custom';
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  password: string;
  username: string;
  fullName: string;
}

// API response types
export interface ApiResponse<T = any> {
  data?: T;
  error?: {
    message: string;
    code: string;
  };
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}

// Component prop types
export interface BaseButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
}

export interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  multiline?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  margin?: keyof typeof import('../constants').Spacing;
}

// Theme types
export interface Theme {
  colors: typeof import('../constants').Colors;
  typography: typeof import('../constants').Typography;
  spacing: typeof import('../constants').Spacing;
  borderRadius: typeof import('../constants').BorderRadius;
  shadows: typeof import('../constants').Shadows;
}

// Store types
export interface RootState {
  auth: AuthState;
  bills: BillsState;
  friends: FriendsState;
  groups: GroupsState;
  user: UserState;
  notifications: NotificationsState;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface BillsState {
  bills: Bill[];
  currentBill: Bill | null;
  loading: boolean;
  error: string | null;
}

export interface FriendsState {
  friends: User[];
  pendingRequests: User[];
  loading: boolean;
  error: string | null;
}

export interface GroupsState {
  groups: Group[];
  currentGroup: Group | null;
  loading: boolean;
  error: string | null;
}

export interface UserState {
  profile: User | null;
  preferences: UserPreferences;
  loading: boolean;
  error: string | null;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: {
    push: boolean;
    email: boolean;
    bills: boolean;
    payments: boolean;
    friendRequests: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'friends' | 'private';
    showPhone: boolean;
    showEmail: boolean;
  };
}

export interface NotificationsState {
  notifications: Notification[];
  unreadCount: number;
  loading: boolean;
  error: string | null;
}