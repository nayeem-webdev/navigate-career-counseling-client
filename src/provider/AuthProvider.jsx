import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

// ! Components
const AuthProvider = ({ children }) => {
  // User
  const [user, setUser] = useState(null);

  // Auth observer State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  //   Loading State
  const [loading, setLoading] = useState(true);

  // Create User With Email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // login User With Email
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Google
  const loginWithPopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // logout
  const Logout = () => {
    return signOut(auth);
  };

  // Password reset
  const [passMail, setPassMail] = useState(null);
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // ! Data - Service Data
  const [data, setData] = useState([]);

  // Get Data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nayeem-webdev/fake-data-json/refs/heads/main/fake-career-service-json/fake-career-service.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Auth Info
  const authInfo = {
    user,
    loading,
    data,
    createUser,
    updateUser,
    Logout,
    setUser,
    setLoading,
    loginWithEmail,
    loginWithPopUp,
    resetPassword,
    passMail,
    setPassMail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
