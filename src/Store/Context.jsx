import { createContext, useState } from "react";
import {firebase,auth,db} from "../Firebase/config";

// Create both contexts
export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

export default function Context({ children }) {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <FirebaseContext.Provider value={{ auth }}>
                {children}
            </FirebaseContext.Provider>
        </AuthContext.Provider>
    );
}
