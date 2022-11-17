import { createContext , ReactNode, useEffect, useState} from "react";

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
    const [user, setUser] = useState<UserPorps>({} as UserPorps)


    async function signIn(){
        console.log('teste')
        const user = window.ipc.sendSync('auth') as UserPorps
        if(user){   
            setUser(user)
        }
    }

    async function signOut(){
        window.ipc.sendSync('signOut')
        setUser({avatarUrl:'', name: ''})
    }

    useEffect(()=>{
        const user = window.ipc.sendSync('isAuthenticate')
        if(user){
            setUser(user)
        }
    }, [])

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