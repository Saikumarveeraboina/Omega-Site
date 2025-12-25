import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "../routes/Auth/AuthContext";
import './file.css';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const { userData, loading } = useAuth();

  useEffect(() => {
    const q = query(
      collection(db, "notices"),
      where("visible", "==", true),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotices(data);
    });

    return () => unsub();
  }, []);

  // 🔹 Admin: Delete notice permanently
  const deleteNotice = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this notice?"
    );
    if (!confirm) return;

    await deleteDoc(doc(db, "notices", id));
  };

  // 🔹 Admin: Hide notice (soft delete)
  const hideNotice = async (id) => {
    await updateDoc(doc(db, "notices", id), {
      visible: false,
    });
  };

  if (loading) return <p>Loading notices...</p>;

  return (
    <div className="notices-container">
      <h2>Notices</h2>

      {notices.length === 0 && (
        <p>No notices available</p>
      )}

      {notices.map((n) => (
        <div key={n.id} className="notice-card">
          <h3>{n.title}</h3>
          <p>{n.message}</p>

          <small>
            {n.createdAt?.seconds
              ? new Date(
                  n.createdAt.seconds * 1000
                ).toDateString()
              : ""}
          </small>

          {/* 🔐 Admin Controls */}
          {userData?.role === "admin" && (
            <div className="admin-actions">
              <button
                className="hide-btn"
                onClick={() => hideNotice(n.id)}
              >
                Hide
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteNotice(n.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notices;
