import { createContext , ReactNode, useState, useEffect} from "react";

interface UserPorps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserPorps;
    isUserLoading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps){

    const [isUserLoading, setIsUserLoading] = useState(false)
    const [user, setUser] = useState<UserPorps>({avatarUrl:'lll', name: 'Leandro'} as UserPorps)


    async function signIn(){
        console.log('teste')
        setUser({avatarUrl:'lll', name: 'Leandro'})
    }

    async function signOut(){
        setUser({avatarUrl:'', name: ''})
    }

    async function signInWithGoogle(access_token:String){

    } 

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            isUserLoading,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )

}