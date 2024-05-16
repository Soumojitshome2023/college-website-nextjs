"use client"
import { GetAdminFunc } from "@/Helper/GetAdminFunc";
import { createContext, useContext, useState, useEffect } from "react";

const AuthUserContext = createContext({
    authUser: null,
});

export default function AdminAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);


    const GetAdmin = async () => {
        try {
            const res = await GetAdminFunc();
            if (res.success && res?.admin?.isAdmin) {
                setAuthUser(res.admin);
            }
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        GetAdmin();
    }, [])


    // ====================== Return ======================
    return {
        authUser, setAuthUser, setIsLoading, IsLoading
    };
}


// ======================== Auth Provider ========================
export const AuthUserProvider = ({ children }) => {
    const auth = AdminAuth();
    return (
        <AuthUserContext.Provider value={auth}>
            {children}
        </AuthUserContext.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContext);


// ========================================================================