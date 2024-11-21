import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Destination
  const [destination, setDestination] = useState("/");
  const [inputEmail, setInputEmail] = useState("");

  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Providers
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();

  // Sign in methods
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };
  const signinWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGithub);
  };
  const signinWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign up method
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (updateInfo) => {
    return updateProfile(auth.currentUser, updateInfo);
  };

  // Sign out method
  const signoutUser = () => {
    return signOut(auth);
  };

  // Forget password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // Authentication information
  const authInfo = {
    user,
    setUser,
    loading,
    signinWithGoogle,
    signinWithGithub,
    signinWithEmailAndPassword,
    createNewUser,
    updateUserProfile,
    signoutUser,
    destination,
    setDestination,
    inputEmail,
    setInputEmail,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
