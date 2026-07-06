import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../services/Firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

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

  const updateUserProfile = async (
    currentEmail,
    currentPassword,
    newName,
    newPassword,
    newEmail,
  ) => {
    try {
      const verifyUser = EmailAuthProvider.credential(
        currentEmail,
        currentPassword,
      );

      await reauthenticateWithCredential(auth.currentUser, verifyUser);

      if (newName.trim() && newName !== user.displayName) {
        await updateProfile(user, { displayName: newName });
      }
      if (newEmail !== user.email && newEmail.trim().length > 0) {
        await updateEmail(user, newEmail);
      }
      if (newPassword && newPassword.trim()) {
        await updatePassword(user, newPassword);
      }
    } catch (error) {
      console.error("Error updating profile", error);
      throw error;
    }
  };

  useEffect(() => {
    if (!user) return;

    let timer;
    const timeoutLimit = 30 * 60 * 1000;

    const autoLogOut = async () => {
      try {
        await firebaseSignOut(auth);
      } catch (error) {
        console.error("Auto-logout failed:", error);
      }
    };

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(autoLogOut, timeoutLimit);
    };

    const activityEvents = ["mousemove", "keydown", "click", "scroll"];

    resetTimer();

    activityEvents.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      if (timer) clearTimeout(timer);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, loading, logOut, signUp, logIn, updateUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
