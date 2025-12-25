import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./file.css";

const AdminNotice = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState(""); // ✅ ADD THIS

  const publishNotice = async () => {
    if (!title || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "notices"), {
        title,
        message,
        link, // ✅ NOW VALID
        createdAt: Timestamp.now(),
      });

      setTitle("");
      setMessage("");
      setLink("");
      alert("Notice Published");
    } catch (err) {
      console.error(err);
      alert("Failed to publish notice");
    }
  };

  return (
    <div className="admin-notice">
      <h2>Post Notice</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-el"
      />

      <textarea
        placeholder="Notice Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input-el"
      />

      {/* 🔗 NEW LINK INPUT */}
      <input
        placeholder="Optional Link (Google Drive / Website)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="input-el"
      />

      <button onClick={publishNotice} className="btn">
        Publish
      </button>
    </div>
  );
};

export default AdminNotice;
