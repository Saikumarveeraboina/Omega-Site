import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAuth } from "../routes/Auth/AuthContext";
import "./file.css";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const { userData, loading } = useAuth();

  useEffect(() => {
    const q = query(
      collection(db, "notices"),
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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notice?"
    );
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "notices", id));
  };

  if (loading) return <p>Loading notices...</p>;

  return (
    <div className="notices-container">
      <h2 className="notices-title">📢 Notices</h2>

      {notices.length === 0 && (
        <p className="empty-text">No notices available</p>
      )}

      {notices.map((n) => (
        <div key={n.id} className="notice-card">
          <h3>{n.title}</h3>
          <p>{n.message}</p>
          {n.link && (
            <a
              href={n.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Link
            </a>
          )}


          <small className="notice-date">
            {n.createdAt?.seconds
              ? new Date(
                n.createdAt.seconds * 1000
              ).toDateString()
              : ""}
          </small>

          {/* 🔐 Admin Delete Only */}
          {userData?.role === "admin" && (
            <button
              className="delete-btn"
              onClick={() => deleteNotice(n.id)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notices;
