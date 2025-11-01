export enum UserRole {
  RESIDENT = 'RESIDENT',
  ADMIN = 'ADMIN',
  SECURITY = 'SECURITY',
  STAFF = 'STAFF'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  unitNumber?: string;
  blockName?: string;
  avatarUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
