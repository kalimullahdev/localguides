import React,{useContext, useEffect, useState} from "react";
import firebaseApp from '../../../firebase/firebase';


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
          });



    },[user])

    const value = {user};

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider >
    );

}


