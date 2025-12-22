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
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 Handle Google redirect result (mobile)
    getRedirectResult(auth).catch((err) => {
      console.log("Redirect result handled");
    });


    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        if (currentUser.displayName) {
          setUsername(currentUser.displayName);
        } else {
          const ref = doc(db, "users", currentUser.uid);
          const snap = await getDoc(ref);
          setUsername(snap.exists() ? snap.data().username : "");
        }
      } else {
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
      value={{ user, username, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
