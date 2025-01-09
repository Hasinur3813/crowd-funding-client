/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email } = user;
        axios
          .post(
            "https://crowdcube-server-nu.vercel.app/jwt",
            { displayName, email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            setCurrentUser(user);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Error creating JWT:", err);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://crowdcube-server-nu.vercel.app/clear-cookie",
            {},
            { withCredentials: true }
          )
          .then(() => {
            setCurrentUser(null);
            setLoading(false);
          });
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //     console.log(user?.email);
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // sign in with google

  const signInWithGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // sign up functionality

  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login functionality

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const updateUser = (name, url, email) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
      email: email,
    });
  };

  // update profile

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
    signInWithGoogle,
    resetPassword,
    updateUser,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
