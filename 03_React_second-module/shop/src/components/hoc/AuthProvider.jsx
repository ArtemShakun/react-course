import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('userName'));

    const signIn = (newUser, cb) => {
        localStorage.setItem('userName', newUser);
        setUser(localStorage.getItem('userName'));
        cb();
    };
    const signOut = (cb) => {
        localStorage.clear();
        setUser(null);
        cb();
    };
    const value = { user, signIn, signOut };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
