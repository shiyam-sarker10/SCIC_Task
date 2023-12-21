import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext  = createContext(null)

const AuthProvider = ({children}) => {


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


    const AuthInfo = {
      createUser,
      GoogleSignIn,
      GithubSignIn,
      signInUser,
    };

    return (
       
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default AuthProvider;