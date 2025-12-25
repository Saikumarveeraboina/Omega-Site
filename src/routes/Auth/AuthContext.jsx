import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  getRedirectResult,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../Pages/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // 👈 FULL USER DATA
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Handle Google redirect result (mobile)
    getRedirectResult(auth).catch(() => {
      // no issue if no redirect happened
    });

    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const ref = doc(db, "users", currentUser.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          console.log("AUTH CONTEXT LOADED", {
            role: data.role,
            file: "AuthContext.jsx",
          });
          setUserData(data);
          setUsername(data.username);
        }
        else {
          setUserData(null);
          setUsername(currentUser.displayName || "");
        }
      } else {
        setUserData(null);
        setUsername("");
      }

      setLoading(false);
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,   // 👈 contains role
        username,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
