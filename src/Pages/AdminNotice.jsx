import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import './file.css'

const AdminNotice = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const publishNotice = async () => {
    if (!title || !message) {
      alert("Please fill all fields");
      return;
    }

    await addDoc(collection(db, "notices"), {
      title,
      message,
      link: link || "",
      createdAt: Timestamp.now(),
    });

    setTitle("");
    setMessage("");
    alert("Notice Published");
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

      <button onClick={publishNotice} className="btn">Publish</button>
    </div>
  );
};

export default AdminNotice;
