import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../services/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut as firebaseSignOut } from "firebase/auth"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unSubscribe;
  }, []);

  const signUp = async (fullName, email, phoneNumber, password) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCred.user;

      await updateProfile(user, { displayName: fullName });

      await setDoc(doc(db, "user", user.uid), {
        uid: user.uid,
        displayName: fullName,
        email: email,
        phoneNumber: phoneNumber,
      });

      return user;
    } catch (error) {
      throw {
        message: "Error creating user",
        originalError: error,
      };
    }
  };

  const logIn = async (email, password) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      return userCred;
    } catch (error) {
      throw {
        message: "Error logging in",
        originalError: error,
      };
    }
  };

  const logOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      throw {
        message: "Error logging out",
        originalError: error,
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logOut, signUp, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
