import "./VideoTrigger.css";
import poster from "../assets/Sfurti-Sahare-poster.png";

export default function VideoTrigger({ onClick }) {
  return (
    <button className="video-trigger" onClick={onClick}>
      <img src={poster} alt="Video preview" />
      <span className="play-icon">▶</span>
    </button>
  );
}
