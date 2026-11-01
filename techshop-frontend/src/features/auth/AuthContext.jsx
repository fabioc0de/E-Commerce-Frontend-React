import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);
const Storage_Keys = { token: 'techshop_token', user: 'techshop_user'};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem(Storage_Keys.user);

        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem(Storage_Keys.token) || null;
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (token) {
            localStorage.setItem('techshop_token', token);
        } else {
            localStorage.removeItem('techshop_token');
        }
    }, [token]);

    useEffect(() => {
        if (user) {
            localStorage.setItem('techshop_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('techshop_user');
        }
    }, [user]);

    const login = async (credentials) => {
        setIsLoading(true);

    try {
      // Aquí luego reemplazas por tu API real
      // const response = await fetch('/api/login', { ... });
        const response = {
            token: 'fake-token-123',
            user: {
                id: '1',
                name: 'Juan Pérez',
                email: credentials.email,
                role: 'customer'
                }
        };

        setToken(response.token);
        setUser(response.user);

        return response;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
    };

    const value = useMemo(
        () => ({
            user,
            token,
            isAuthenticated: Boolean(token),
            isLoading,
            login,
            logout
        }),
    [user, token, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}