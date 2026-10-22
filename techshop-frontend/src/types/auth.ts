export type UserRole = 'admin' | 'customer';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}