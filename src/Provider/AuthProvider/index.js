import React, {createContext, useContext} from "react";
import {useHookAuth} from "../../Hooks/AuthHook";

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useHookAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

