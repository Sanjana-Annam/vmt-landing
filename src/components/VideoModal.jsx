import { useEffect } from "react";
import "./VideoModal.css";
import videoSrc from "../assets/Sfurti-Sahare.mp4";

export default function VideoModal({ open, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="video-overlay">
      <button className="video-close" onClick={onClose}>✕</button>

      <video
        className="video-player"
        src={videoSrc}
        autoPlay
        controls
      />
    </div>
  );
}
