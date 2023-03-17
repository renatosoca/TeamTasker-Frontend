import { User } from './';

export interface AuthState {
  status: AuthStatus;
  user?: User;
  successMessage?: string;
  errorMessage?: string;
}

type AuthStatus = 'authenticated' | 'not-authenticated' | 'loading' | 'init';