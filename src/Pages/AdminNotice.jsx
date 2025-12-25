import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const AdminNotice = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const publishNotice = async () => {
    await addDoc(collection(db, "notices"), {
      title,
      message,
      createdAt: Timestamp.now(),
      visible: true,
    });

    setTitle("");
    setMessage("");
    alert("Notice Published");
  };

  return (
    <div>
      <h2>Post Notice</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Notice Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={publishNotice}>Publish</button>
    </div>
  );
};

export default AdminNotice;
