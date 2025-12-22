import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../Pages/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // 🔹 Google login → displayName
        if (currentUser.displayName) {
          setUsername(currentUser.displayName);
        } 
        // 🔹 Email login → Firestore username
        else {
          const ref = doc(db, "users", currentUser.uid);
          const snap = await getDoc(ref);
          setUsername(snap.exists() ? snap.data().username : "");
        }
      } else {
        setUsername("");
      }
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, username, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
