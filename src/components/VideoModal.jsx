import "./VideoModal.css";

export default function VideoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-container" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose}>×</button>

        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dl5dfdwc2&public_id=Sfurti-Sahare_owzj4r&autoplay=true"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          title="Sfurti Sahare Video"
        />
      </div>
    </div>
  );
}
