import { create } from "domain";
import { Session } from "../types";
import { createContext, use, useContext, useEffect } from "react";
import { FunctionComponent } from "react";
import { useState } from "react";
import { fetchCreateToken } from "../libs/external/userFetcher";
import { init } from "next/dist/compiled/@vercel/og/satori";

interface AuthContextProps {
    session?: Session;
    login:(username:string,password:string)=>Promise<void>;
    logout :()=>Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
    session: undefined,
    login:async(username:string, password:string)=>{},
    logout:async()=>{}
});

interface ProviderProps {
    session?: Session;
    children: React.ReactNode;
}


export const AuthProvider: FunctionComponent<ProviderProps> = ({
    children,
}) => {
    const [session, setSession] = useState<Session | undefined>();

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const access = localStorage.getItem('access');
        const refresh = localStorage.getItem('refresh');

        if(!access || !refresh) return;
        // TODO: refresh token
        // TODO: トークンの検証処理
        setSession({access,refresh});
    }

    const login = async (username:string, password:string) => {
        const {access,refresh} = await fetchCreateToken(username,password);
        setSession({access,refresh});
        localStorage.setItem('access',access);
        localStorage.setItem('refresh',refresh);
    }

    const logout = async () => {
        setSession(undefined);
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');

    }

    return (
        <AuthContext.Provider value={{ session ,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);