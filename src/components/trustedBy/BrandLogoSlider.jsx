import "./TrustedBy.css";

import Alizaidi from "../../assets/clients/Alizaidi.jpeg";
import Aurum from "../../assets/clients/Aurum.jpeg";
import HiA from "../../assets/clients/HiA.jpeg";
import RH from "../../assets/clients/RH.webp";
import RP from "../../assets/clients/RP.jpg";
import xinglin from "../../assets/clients/xinglin.jpeg";
import yetiply from "../../assets/clients/yetiply.jpeg";

const logos = [
  Alizaidi,
  Aurum,
  HiA,
  RH,
  RP,
  xinglin,
  yetiply
];

export default function BrandLogoSlider() {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt="Client logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
