import "./Marquee.css";

const TEXT =
  "Viral Marketing Trends: Where Your Brain Stops, Our Marketing Starts";

const Rosette = () => (
  <svg
    className="rosette"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="12"
        y1="2"
        x2="12"
        y2="6"
        stroke="white"
        strokeWidth="1.6"
        transform={`rotate(${i * 30} 12 12)`}
        strokeLinecap="round"
      />
    ))}
    <circle cx="12" cy="12" r="2.4" fill="white" />
  </svg>
);

const MarqueeContent = () => (
  <>
    {[...Array(6)].map((_, i) => (
      <div className="marquee-item" key={i}>
        <Rosette />
        <span className="marquee-text">{TEXT}</span>
      </div>
    ))}
  </>
);

export default function Marquee() {
  return (
    <div className="marquee-outer">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />

      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent /> {/* 👈 duplicate = seamless */}
      </div>
    </div>
  );
}
