import { useEffect, useState } from "react";
import "./PageLoader.css";
import logo from "../../assets/vmt-logo.png";

export default function PageLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 6) + 2;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(onFinish, 500); // smooth exit
      }
      setProgress(value);
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="page-loader">
      <div className="loader-content">

        <div className="loader-icon">
          <img src={logo} alt="Viral Marketing Trends" />
          
        </div>

        <h1>Viral Marketing Trends</h1>
        <p>Loading your experience...</p>

        <div className="loader-bar">
          <div
            className="loader-progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="loader-percent">{progress}%</span>

      </div>
    </div>
  );
}
