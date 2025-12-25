import { useEffect, useState } from "react";
import "./index.css";

const VideoPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem("videoSeen");

        if (!seen) {
            setShow(true);
        }
    }, []);

    const closePopup = () => {
        setShow(false);
        localStorage.setItem("videoSeen", "true");
    };

    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={closePopup}>
                    ✖
                </button>

                <iframe
                    width="100%"
                    height="100%"
                    src="https://img.youtube.com/vi/ozuvW76ox3o/maxresdefault.jpg"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

            </div>
        </div>
    );
};

export default VideoPopup;
