import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext  = createContext(null)


const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);


     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signInUser = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
   };

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const GithubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

    const UserUpdate = (name, photo) => {
     return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };


    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => {
        return unSubscribe();
      };
    }, [user]);


  const LogOut = () => {
   return signOut(auth);
  };


    const AuthInfo = {
      createUser,
      GoogleSignIn,
      GithubSignIn,
      signInUser,
      LogOut,
      UserUpdate,
      user,
    };

    return (
       
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProvider;